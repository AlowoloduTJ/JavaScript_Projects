let message = "Hello, Taiwo! Let your Light Shine.";
window.alert(message);
document.write("<h2>Genesis 1</h2>");

document.write("<p><strong>Gen 1:1</strong> God created the sky and the earth. At first,</p>");

document.write("<p><strong>Gen 1:2</strong> the earth was completely empty. There was nothing on the earth. Darkness covered the ocean, and God&apos;s Spirit moved over the water.</p>");

document.write("<p><strong>Gen 1:3</strong> Then God said, &quot;Let there be light!&quot; And light began to shine.</p>");
var B = "Taiwo" + "  Alowolodu";
document.write(B);
var family = "The Alowolodus", Dad = "Taiwo", Mom = "Odunayo", Son = "Emmanuel", Daughter = "EriOluwa";
document.write("<p>Daughter</p>")
// This whole line is an arithemetic expression:
//   (5 + 3) * 2  evaluates to 16  
let result = (5.4 + 3) * 2.55;
document.write(result); 
(function() {
  const target = document.getElementById('tapTarget');
  let startX, startY, startTime;

  // Record where & when touch starts
  target.addEventListener(
    'touchstart',
    e => {
      const t = e.changedTouches[0];
      startX = t.pageX;
      startY = t.pageY;
      startTime = Date.now();
    },
    { passive: true }
  );

  // On touch end, check duration and movement
  target.addEventListener('touchend', e => {
    const t = e.changedTouches[0];
    const dx = Math.abs(t.pageX - startX);
    const dy = Math.abs(t.pageY - startY);
    const dt = Date.now() - startTime;

    // If quick tap (<300ms) with minimal move (<10px), fire tap handler
    if (dt < 300 && dx < 10 && dy < 10) {
      onTap();
    }
  });

  // Fallback for desktop clicks
  target.addEventListener('click', onTap);

  function onTap() {
    window.alert('Blessed Be The Name of the Lord');
  }
})();