/* ═══════════════════════════════════════════
   DUST PARTICLES
═══════════════════════════════════════════ */
const canvas = document.getElementById('dust-canvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function createParticle() {
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.2 + 0.3,
    vx: (Math.random() - 0.5) * 0.18,
    vy: -Math.random() * 0.12 - 0.04,
    opacity: Math.random() * 0.4 + 0.1,
    life: Math.random() * 400 + 200
  };
}

for (let i = 0; i < 55; i++) particles.push(createParticle());

function animDust() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p, i) => {
    p.x += p.vx;
    p.y += p.vy;
    p.life--;
    if (p.life <= 0 || p.y < -10) {
      particles[i] = createParticle();
      particles[i].y = canvas.height + 5;
    }
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(90,70,40,${p.opacity})`;
    ctx.fill();
  });
  requestAnimationFrame(animDust);
}
animDust();

/* ═══════════════════════════════════════════
   QR PLACEHOLDER GRID
═══════════════════════════════════════════ */
const qrGrid = document.getElementById('qr-grid');
if (qrGrid) {
  const pattern = [1,1,1,0,1,1,1, 1,0,1,0,1,0,1, 1,0,1,1,1,0,1, 0,1,0,1,0,1,0, 1,0,1,1,1,0,1, 1,0,1,0,1,0,1, 1,1,1,0,1,1,1];
  pattern.forEach(v => {
    const c = document.createElement('div');
    c.className = 'qr-cell' + (v ? '' : ' w');
    qrGrid.appendChild(c);
  });
}

/* ═══════════════════════════════════════════
   COVER OPEN
═══════════════════════════════════════════ */
function openJournal() {
  document.getElementById('cover-screen').classList.add('hidden');
  setTimeout(() => {
    const inside = document.getElementById('inside-cover');
    inside.classList.add('visible');
  }, 700);
}

function enterJournal() {
  document.getElementById('inside-cover').classList.remove('visible');
  setTimeout(() => {
    document.body.classList.add('journal-open');
    const jb = document.getElementById('journal-body');
    jb.classList.add('visible');
    showPage('toc');
  }, 300);
}

/* ═══════════════════════════════════════════
   PAGE SYSTEM
═══════════════════════════════════════════ */
const CHAPTER_NAMES = {
  toc:    'Table of Contents',
  p1:     'I · Polaroids & Pictures',
  p2:     'II · Call Files',
  p3:     'III · Message Fragments',
  p4:     'IV · Business Ideas',
  p5:     'V · Evidence',
  p6:     'VI · Pending Operations',
  p7:     'VII · Little Things',
  p8:     'VIII · Letter',
  ending: 'IX · End of Archive'
};

function showPage(id) {
  document.querySelectorAll('.journal-page').forEach(p => p.classList.remove('active'));
  const el = document.getElementById('page-' + id);
  if (el) {
    el.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  document.querySelectorAll('.tab-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.page === id);
  });
  const ind = document.getElementById('chapter-indicator');
  if (ind) ind.textContent = CHAPTER_NAMES[id] || '';

  if (id === 'p6')     initBucketList();
  if (id === 'ending') startEnding();
}

/* build tabs */
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => showPage(btn.dataset.page));
});

/* ═══════════════════════════════════════════
   PENDING OPERATIONS SCROLL-IN ANIMATION
═══════════════════════════════════════════ */
function initBucketList() {
  const items = document.querySelectorAll('.op-card');
  items.forEach((item, i) => {
    item.style.transitionDelay = (i * 0.09) + 's';
    setTimeout(() => item.classList.add('visible'), 80 + i * 90);
  });
}

/* ═══════════════════════════════════════════
   TYPEWRITER ENDING
═══════════════════════════════════════════ */
let endingStarted = false;
function startEnding() {
  if (endingStarted) return;
  endingStarted = true;
  const line = document.getElementById('typewriter-line');
  const text = 'Thank you for becoming one of my favourite memories.';
  line.innerHTML = '';

  setTimeout(() => {
    line.style.opacity = 1;
    line.classList.add('visible');
    let i = 0;
    const cursor = document.createElement('span');
    cursor.className = 'tw-cursor';
    line.appendChild(cursor);

    const iv = setInterval(() => {
      line.insertBefore(document.createTextNode(text[i]), cursor);
      i++;
      if (i >= text.length) {
        clearInterval(iv);
        setTimeout(() => cursor.remove(), 2000);
      }
    }, 55);
  }, 2200);
}

/* ═══════════════════════════════════════════
   EVIDENCE ARCHIVE — navigation system
═══════════════════════════════════════════ */
(function() {
  var evScrollY = 0;
  var evOverlay = null;

  function evGetOverlay() {
    if (!evOverlay) evOverlay = document.getElementById('ev-overlay');
    return evOverlay;
  }

  function evTransition(fn) {
    var ov = evGetOverlay();
    if (!ov) { fn(); return; }
    ov.classList.add('ev-on');
    setTimeout(function() {
      fn();
      setTimeout(function() { ov.classList.remove('ev-on'); }, 360);
    }, 300);
  }

  window.evOpen = function(id) {
    evScrollY = window.scrollY;
    evTransition(function() {
      document.querySelectorAll('.ev-view').forEach(function(v) { v.classList.remove('ev-active'); });
      var target = document.getElementById('ev-' + id);
      if (target) { target.classList.add('ev-active'); window.scrollTo(0, 0); }
    });
  };

  window.evClose = function() {
    evTransition(function() {
      document.querySelectorAll('.ev-view').forEach(function(v) { v.classList.remove('ev-active'); });
      var arch = document.getElementById('ev-arch');
      if (arch) { arch.classList.add('ev-active'); }
      requestAnimationFrame(function() { window.scrollTo(0, evScrollY); });
    });
  };

  // Escape key closes open evidence file
  document.addEventListener('keydown', function(e) {
    if (e.key !== 'Escape') return;
    var arch = document.getElementById('ev-arch');
    if (arch && !arch.classList.contains('ev-active')) window.evClose();
  });
})();
