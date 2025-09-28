// State and persistence
const eventForm = document.getElementById("eventForm");
const eventList = document.getElementById("eventList");
const message = document.getElementById("message");
let events = loadEvents();

function loadEvents() {
  const raw = localStorage.getItem("events_v2");
  const parsed = raw ? JSON.parse(raw) : [];
  // revive datetimes
  return parsed.map(e => ({ ...e, dateTime: new Date(e.dateTime) }));
}
function saveEvents() {
  localStorage.setItem("events_v2", JSON.stringify(events));
}

// Utilities
const msMin = 60000, msDay = 86400000;
function addMonths(d, m) {
  const nd = new Date(d);
  nd.setMonth(nd.getMonth() + m);
  return nd;
}
function formatDateTime(dt) {
  return `${dt.toLocaleDateString()} ${dt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
}
function sortEvents() {
  events.sort((a, b) => a.dateTime - b.dateTime);
}
function overlaps(aStart, aEnd, bStart, bEnd) {
  return aStart < bEnd && aEnd > bStart;
}

// Alarm scheduling
function scheduleAlarm(ev) {
  const now = new Date();
  const alarmAt = new Date(ev.dateTime.getTime() - 5 * msMin);
  const delay = alarmAt - now;
  if (delay > 0) {
    setTimeout(() => {
      alert(`⏰ Reminder: "${ev.title}" starts in 5 minutes (${formatDateTime(ev.dateTime)}).`);
    }, delay);
  } else if (ev.dateTime > now && now - alarmAt < 60 * msMin) {
    // If within the window and missed scheduling (page reload), notify once
    alert(`⏰ Reminder: "${ev.title}" starts in less than 5 minutes (${formatDateTime(ev.dateTime)}).`);
  }
}

// Conflict detection
function findConflicts(newEv) {
  const start = newEv.dateTime;
  const end = new Date(start.getTime() + newEv.duration * msMin);
  const hits = [];
  for (const ev of events) {
    const s = ev.dateTime;
    const e = new Date(s.getTime() + ev.duration * msMin);
    if (overlaps(start, end, s, e)) hits.push(ev);
  }
  return hits;
}

// ICS generation
function toICSDate(d) {
  const pad = n => String(n).padStart(2, '0');
  return `${d.getUTCFullYear()}${pad(d.getUTCMonth()+1)}${pad(d.getUTCDate())}T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}${pad(d.getUTCSeconds())}Z`;
}
function downloadICS(ev) {
  const start = ev.dateTime;
  const end = new Date(start.getTime() + ev.duration * msMin);
  const uid = `${start.getTime()}-${Math.random().toString(36).slice(2)}@smartscheduler`;
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Smart Event Scheduler//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `SUMMARY:${ev.title.replace(/\n/g, " ")}`,
    `DTSTART:${toICSDate(start)}`,
    `DTEND:${toICSDate(end)}`,
    "DESCRIPTION:Created with Smart Event Scheduler",
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");
  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `${ev.title.replace(/\s+/g, "_")}_${start.toISOString().slice(0,16).replace(/[:T]/g,"")}.ics`;
  a.click();
  URL.revokeObjectURL(a.href);
}

// Rendering: list
let activeDateFilter = null; // Date string 'YYYY-MM-DD' or null
function renderList() {
  sortEvents();
  eventList.innerHTML = "";
  const items = events.filter(ev => {
    if (!activeDateFilter) return true;
    const y = ev.dateTime.getFullYear();
    const m = String(ev.dateTime.getMonth()+1).padStart(2, "0");
    const d = String(ev.dateTime.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}` === activeDateFilter;
  });

  for (const ev of items) {
    const li = document.createElement("li");
    li.className = "event";
    const end = new Date(ev.dateTime.getTime() + ev.duration * msMin);
    const conflicts = findConflicts(ev).filter(x => x !== ev);
    const conflictBadge = conflicts.length ? `<span class="tag">Conflict</span>` : "";

    li.innerHTML = `
      <div>
        <div><strong>${ev.title}</strong> ${conflictBadge}</div>
        <div class="meta">${formatDateTime(ev.dateTime)} • ${ev.duration} min ${ev.recurrence !== 'none' ? `• ${ev.recurrence}` : ""}</div>
      </div>
      <div class="meta">${formatDateTime(end)}</div>
      <div class="actions">
        <button class="download">.ics</button>
        <button class="delete">Delete</button>
      </div>
    `;

    li.querySelector(".download").addEventListener("click", () => downloadICS(ev));
    li.querySelector(".delete").addEventListener("click", () => {
      events = events.filter(e => e !== ev);
      saveEvents();
      renderAll();
      message.textContent = "Event deleted.";
      setTimeout(() => (message.textContent = ""), 2000);
    });
    eventList.appendChild(li);
  }
}

// Rendering: calendar
const calendarGrid = document.getElementById("calendarGrid");
const monthLabel = document.getElementById("monthLabel");
const prevMonthBtn = document.getElementById("prevMonth");
const nextMonthBtn = document.getElementById("nextMonth");
let currentMonth = new Date(); // first day normalized later

function firstOfMonth(d) { return new Date(d.getFullYear(), d.getMonth(), 1); }
function lastOfMonth(d) { return new Date(d.getFullYear(), d.getMonth()+1, 0); }

function renderCalendar() {
  const first = firstOfMonth(currentMonth);
  const last = lastOfMonth(currentMonth);
  const startWeekday = (first.getDay() + 6) % 7; // Monday=0
  const daysInMonth = last.getDate();

  monthLabel.textContent = `${first.toLocaleString(undefined, { month: 'long' })} ${first.getFullYear()}`;
  calendarGrid.innerHTML = "";

  // headers
  const weekdays = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
  weekdays.forEach(w => {
    const h = document.createElement("div");
    h.textContent = w;
    h.style.fontWeight = "600";
    h.style.textAlign = "center";
    calendarGrid.appendChild(h);
  });

  // grid requires headers included; to keep 7 columns, use CSS grid auto-flow dense
  calendarGrid.style.gridTemplateColumns = "repeat(7, 1fr)";

  // pad previous month days
  for (let i = 0; i < startWeekday; i++) {
    const pad = document.createElement("div");
    pad.className = "day out";
    calendarGrid.appendChild(pad);
  }

  // month days
  for (let day = 1; day <= daysInMonth; day++) {
    const cell = document.createElement("div");
    cell.className = "day";
    const dateObj = new Date(first.getFullYear(), first.getMonth(), day);

    const num = document.createElement("div");
    num.className = "num";
    num.textContent = day;
    cell.appendChild(num);

    const today = new Date();
    if (dateObj.toDateString() === today.toDateString()) {
      cell.classList.add("today");
    }

    // badge for event count
    const count = events.filter(e =>
      e.dateTime.getFullYear() === dateObj.getFullYear() &&
      e.dateTime.getMonth() === dateObj.getMonth() &&
      e.dateTime.getDate() === dateObj.getDate()
    ).length;

    if (count > 0) {
      const badge = document.createElement("div");
      badge.className = "badge";
      badge.textContent = count;
      cell.appendChild(badge);
    }

    cell.addEventListener("click", () => {
      const y = dateObj.getFullYear();
      const m = String(dateObj.getMonth()+1).padStart(2, "0");
      const d = String(dateObj.getDate()).padStart(2, "0");
      activeDateFilter = `${y}-${m}-${d}`;
      renderList();
      message.textContent = `Filtered events for ${dateObj.toDateString()}. Click month navigation or add event to clear.`;
      setTimeout(() => (message.textContent = ""), 3000);
    });

    calendarGrid.appendChild(cell);
  }
}

prevMonthBtn.addEventListener("click", () => {
  currentMonth = addMonths(firstOfMonth(currentMonth), -1);
  activeDateFilter = null;
  renderCalendar();
  renderList();
});
nextMonthBtn.addEventListener("click", () => {
  currentMonth = addMonths(firstOfMonth(currentMonth), 1);
  activeDateFilter = null;
  renderCalendar();
  renderList();
});

// Event creation and recurrence
eventForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value.trim();
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const duration = parseInt(document.getElementById("duration").value, 10);
  const recurrence = document.getElementById("recurrence").value;
  const occurrences = Math.max(1, parseInt(document.getElementById("occurrences").value || "1", 10));

  if (!title || !date || !time || !duration) {
    message.textContent = "Please fill all fields correctly.";
    return;
  }

  const firstDateTime = new Date(`${date}T${time}`);
  if (isNaN(firstDateTime.getTime())) {
    message.textContent = "Invalid date/time.";
    return;
  }

  const newEvents = [];
  for (let i = 0; i < occurrences; i++) {
    let dt = new Date(firstDateTime);
    if (recurrence === "daily") dt = new Date(firstDateTime.getTime() + i * msDay);
    else if (recurrence === "weekly") dt = new Date(firstDateTime.getTime() + i * 7 * msDay);
    else if (recurrence === "monthly") dt = addMonths(firstDateTime, i);

    const ev = { id: cryptoRandomId(), title, dateTime: dt, duration, recurrence };
    const conflicts = findConflicts(ev);
    if (conflicts.length) {
      alert(`⚠️ Conflict: "${title}" on ${formatDateTime(dt)} overlaps with ${conflicts.length} event(s).`);
    }
    newEvents.push(ev);
  }

  // Commit, persist, schedule
  events.push(...newEvents);
  saveEvents();
  for (const ev of newEvents) scheduleAlarm(ev);

  // Reset and re-render
  eventForm.reset();
  document.getElementById("occurrences").value = 1;
  message.textContent = "Event(s) added.";
  setTimeout(() => (message.textContent = ""), 2000);
  renderAll();
});

function cryptoRandomId() {
  try {
    return ([...crypto.getRandomValues(new Uint8Array(8))].map(b => b.toString(16).padStart(2, "0")).join(""));
  } catch {
    return String(Math.random()).slice(2);
  }
}

// Initial render and alarm scheduling
function renderAll() {
  renderCalendar();
  renderList();
}
(function init() {
  currentMonth = firstOfMonth(new Date());
  sortEvents();
  events.forEach(scheduleAlarm);
  renderAll();
})();
