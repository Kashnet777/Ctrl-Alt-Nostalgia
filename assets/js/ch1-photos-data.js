/* ═══════════════════════════════════════════
   I·b — VISUAL ARCHIVE (data + renderer)
   20 photos split into scrapbook pages, 11 reels
   split into film-strip sections. Reuses the
   exact .polaroid / .film-strip markup already
   defined in ch1-photos.css — no new visual system.
═══════════════════════════════════════════ */

const PHOTOS = [
  { file: 'Photo (1).png',  caption: "Rangoli making competition" },
  { file: 'Photo (2).jpg',  caption: "Teacher's day ke din Café uncover" },
  { file: 'Photo (3).jpg',  caption: "A normal pic (otherwise you would kill me)" },
  { file: 'Photo (4).jpg',  caption: "Wow even that teddy is taller than you" },
  { file: 'Photo (5).jpg',  caption: "Ready to for a photosession" },
  { file: 'Photo (6).jpg',  caption: "that iconic pic clicked by me" },
  { file: 'Photo (7).jpg',  caption: "Our Only pic we had" },
  { file: 'Photo (8).jpg',  caption: "Bhukkad spotted" },
  { file: 'Photo (9).jpg',  caption: "Some didn't like the taste of the coffee" },
  { file: 'Photo (10).jpg', caption: "Kaun hai yaar phone pe, hume bhi bata na or are you tryna be cool" },
  { file: 'Photo (11).jpg', caption: "Secret call ke baad innocent pic click karana - check" },
  { file: 'Photo (12).jpg', caption: "Khate hue instaan ki pic almost clicked" },
  { file: 'Photo (13).jpg', caption: "Our most dangerous and capable spy  aquiring important evidences" },
  { file: 'Photo (14).jpg', caption: "Itna time nahi lgta group founder and member ki first and only pic together" },
  { file: 'Photo (15).jpg', caption: "Image that I begged for" },
  { file: 'Photo (16).jpg', caption: "Image that I asked for" },
  { file: 'Photo (17).jpg', caption: "Oye Hoye!! Driving Shriving!!! Driving Capability Unlocked!!!!!" },
  { file: 'Photo (18).jpg', caption: "A pic that was stolen" },
  { file: 'Photo (19).jpg', caption: "A pic that was willingly shared" },
  { file: 'Photo (20).jpg', caption: "I pic that was taken from insta" }
];

const REELS = [
  { file: 'film (1).jpg' },
  { file: 'film (2).jpg' },
  { file: 'film (3).jpg' },
  { file: 'film (4).jpg' },
  { file: 'film (5).jpg' },
  { file: 'film (6).jpg' },
  { file: 'film (7).jpg' },
  { file: 'film (8).jpg' },
  { file: 'film (9).jpg' },
  { file: 'film (10).jpg' },
  { file: 'film (11).jpg' }
];

const REELS_PER_STRIP = [4, 4, 3]; // 11 reels -> 3 balanced film-strip sections
const STRIP_LABELS = ['Film Strip I', 'Film Strip II', 'Film Strip III', 'Film Strip IV', 'Film Strip V'];

/* ---- renderer ---- */
(function () {
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }
  function encodePath(name) {
    return name.replace(/ /g, '%20');
  }

  const WASHI_CYCLE = ['washi-1', 'washi-2', 'washi-3'];

  function polaroidHtml(photo, index) {
    const washi = WASHI_CYCLE[index % WASHI_CYCLE.length];
    // sprinkle a pressed flower every few cards, like the original design did
    const flower = index % 5 === 0
      ? '<div class="pressed-flower" style="--rot:15deg;bottom:-10px;right:-8px;">🌿</div>'
      : (index % 5 === 2
        ? '<div class="pressed-flower" style="--rot:-10deg;top:-8px;left:-6px;">🌼</div>'
        : '');
    const src = 'images/photos/' + encodePath(photo.file);
    return `
      <div class="polaroid-wrap">
        <div class="washi washi-h ${washi}" style="top:-9px;left:50%;transform:translateX(-50%);"></div>
        <div class="polaroid">
          <div class="polaroid-front">
            <div class="polaroid-img">
              <img src="${src}" alt="${escapeHtml(photo.caption)}" loading="lazy">
            </div>
            <div class="polaroid-caption"><p>${escapeHtml(photo.caption)}</p></div>
          </div>
        </div>
        ${flower}
      </div>
    `;
  }

  function renderPhotos() {
    const root = document.getElementById('photos-root');
    if (!root) return;
    root.innerHTML = `
      <div class="polaroid-grid">
        ${PHOTOS.map((p, i) => polaroidHtml(p, i)).join('')}
      </div>
    `;
  }

  function filmFrameHtml(reel) {
    const src = 'images/film/' + encodePath(reel.file);
    return `
      <div class="film-frame">
        <div class="film-inner"><img src="${src}" alt="" loading="lazy"></div>
      </div>
    `;
  }

  function renderReels() {
    const root = document.getElementById('reels-root');
    if (!root) return;

    const strips = [];
    let cursor = 0;
    REELS_PER_STRIP.forEach(count => {
      strips.push(REELS.slice(cursor, cursor + count));
      cursor += count;
    });
    // safety net: if REELS_PER_STRIP doesn't add up to REELS.length, tack the remainder onto one more strip
    if (cursor < REELS.length) strips.push(REELS.slice(cursor));

    root.innerHTML = strips.filter(s => s.length).map((stripReels, stripIdx) => `
      <div class="film-strip-section">
        <p class="film-strip-label">${escapeHtml(STRIP_LABELS[stripIdx] || 'Film Strip ' + (stripIdx + 1))}</p>
        <div class="film-strip">
          ${stripReels.map(filmFrameHtml).join('')}
        </div>
      </div>
    `).join('');
  }

  function render() {
    renderPhotos();
    renderReels();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();
