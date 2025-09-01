document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('sliceForm');
  const clearBtn = document.getElementById('clearBtn');
  const resultDiv = document.getElementById('result');

  form.addEventListener('submit', event => {
    event.preventDefault();

    // Gather each group's inputs
    const groups = [1, 2, 3].map(i => ({
      text: document.getElementById(`text${i}`).value.trim(),
      startRaw: document.getElementById(`start${i}`).value.trim(),
      endRaw: document.getElementById(`end${i}`).value.trim()
    }));

    // Process required first string
    if (!groups[0].text || groups[0].startRaw === '' || isNaN(Number(groups[0].startRaw))) {
      resultDiv.textContent = 'Please provide text and a valid start index for String 1.';
      return;
    }

    // For each group, if text exists and start is valid, slice it
    const slices = groups.map((grp, idx) => {
      if (!grp.text || grp.startRaw === '' || isNaN(Number(grp.startRaw))) return '';
      const start = Number(grp.startRaw);
      const end = grp.endRaw === '' ? undefined : Number(grp.endRaw);
      return grp.text.slice(start, end);
    }).filter(str => str !== '');

    // Join all valid slices
    const connected = slices.join('');

    resultDiv.textContent = `Result: "${connected}"`;
  });

  clearBtn.addEventListener('click', () => {
    form.reset();
    resultDiv.textContent = '';
    document.getElementById('text1').focus();
  });
});
