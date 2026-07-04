/* ═══════════════════════════════════════════
   II·b — CALL ARCHIVES (data + renderer)
   Lives inside Chapter II · Call Files.
   Reuses .case-file / .case-grid / .stamp exactly,
   so records look native to the existing chapter.
═══════════════════════════════════════════ */

const CALL_SUMMARY = {
  period: '29 July 2025 → 2 July 2026',
  stats: [
    { label: '⏳ Hours Invested in Calls', val: '23 Hours 29 Minutes 46 Seconds' },
    { label: '🌐 Internet Invested', val: '6.60 GB' },
    { label: '📞 Calls Archived', val: '25' },
    { label: '👥 Group Calls', val: '3' },
    { label: '👤 One-to-One Calls', val: '22' },
    { label: '🕒 Longest Call', val: '1 Hour 53 Minutes 31 Seconds' },
    { label: '⚡ Shortest Call', val: '6 Seconds' },
    { label: '📈 Average Call Duration', val: '56 Minutes 23 Seconds' }
  ]
};

const CALL_DISCLAIMER = {
  title: '🔒 Investigation Disclaimer',
  lines: [
    'This archive contains only selected communication records.',
    'Several calls have been intentionally omitted from public release.',
    'Some records remain Classified.',
    'Others were lost to time, device changes, or simply because not every conversation leaves a trace.',
    'The records below are intended to document the story—not every minute of it.'
  ]
};

const CALL_NOTICE = {
  title: '🔒 CLASSIFICATION NOTICE',
  intro: [
    'The following archive does not represent the complete communication history.',
    'Only selected call records have been declassified for public viewing.',
    'Some records remain CLASSIFIED due to:'
  ],
  bullets: [
    'Ongoing investigations.',
    'Missing historical data.',
    'Lost call logs.',
    'Conversations deemed too dangerous for public release.',
    'Excessive levels of chaos.'
  ],
  outro: 'Any missing entries should not be interpreted as missing conversations.'
};

const CALL_RECORDS = [
  {
    caseFile: '001', record: 1, date: '29 Jul 2025', time: '3:46 PM',
    duration: '1h 13m 38s', internet: '21.7 MB', type: 'Incoming WhatsApp Audio'
  },
  {
    caseFile: '002', record: 2, date: '5 Aug 2025', time: '11:11 PM',
    duration: '1h 42m 01s', internet: '24.1 MB', type: 'Incoming WhatsApp Audio'
  },
  {
    caseFile: '003', record: 3, date: '9 Aug 2025', time: '4:17 PM',
    duration: '59m 01s', internet: '84.4 MB', type: 'Outgoing WhatsApp Video'
  },
  {
    caseFile: '004', record: 4, date: '22 Aug 2025', time: '5:40 PM',
    duration: '44m 15s', internet: '95 kB', type: 'Incoming WhatsApp Group Voice',
    group: "Friends Who'd Bury a Body"
  },
  {
    caseFile: '005', record: 5, date: '20 Oct 2025', time: '10:36 PM',
    duration: '1h 20m 51s', internet: '949 MB', type: 'Outgoing WhatsApp Group Video',
    group: 'Lady G & Aadya Jha'
  },
  {
    caseFile: '006', record: 6, date: '24 Oct 2025', time: '3:57 PM',
    duration: '1h 25m 47s', internet: '459.4 MB', type: 'Incoming WhatsApp Group Video',
    group: "Friends Who'd Bury a Body"
  },
  {
    caseFile: '007', record: 7, date: '15 Nov 2025', time: '4:24 PM',
    duration: '40m 38s', internet: '11.1 MB', type: 'Incoming WhatsApp Audio',
    additional: [
      { time: '5:07 PM', duration: '16m 53s', internet: '4.5 MB', type: 'Incoming WhatsApp Audio' }
    ]
  },
  {
    caseFile: '008', record: 8, date: '6 Jan 2026', time: '2:55 PM',
    duration: '1h 01m 37s', internet: '82.4 MB', type: 'Incoming WhatsApp Video',
    additional: [
      { time: '3:59 PM', duration: '1h 53m 31s', internet: '890.7 MB', type: 'Incoming WhatsApp Video' }
    ]
  },
  {
    caseFile: '009', record: 9, date: '26 Feb 2026', time: '10:29 PM',
    duration: '42m 19s', internet: '642.4 MB', type: 'Incoming WhatsApp Video',
    additional: [
      { time: '11:12 PM', duration: '1h 14m 27s', internet: '867.4 MB', type: 'Incoming WhatsApp Video' }
    ]
  },
  {
    caseFile: '010', record: 10, date: '9 Mar 2026', time: '9:53 PM',
    duration: '1h 19m 18s', internet: '282.7 MB', type: 'Incoming WhatsApp Video'
  },
  {
    caseFile: '011', record: 11, date: '9 May 2026', time: '9:43 PM',
    duration: '1h 32m 17s', internet: '20.7 MB', type: 'Incoming WhatsApp Audio'
  },
  {
    caseFile: '012', record: 12, date: '16 May 2026', time: '12:31 PM',
    duration: '38m 22s', internet: '534.8 MB', type: 'Incoming WhatsApp Video',
    additional: [
      { time: '1:10 PM', duration: '39m 50s', internet: '612.8 MB', type: 'Outgoing WhatsApp Video' },
      { time: '1:50 PM', duration: '17m 17s', internet: '197.4 MB', type: 'Incoming WhatsApp Video' }
    ]
  },
  {
    caseFile: '013', record: 13, date: '22 May 2026', time: '9:49 PM',
    duration: '1h 23m 20s', internet: '1.0 GB', type: 'Incoming WhatsApp Video'
  },
  {
    caseFile: '014', record: 14, date: '1 Jul 2026', time: '10:20 PM',
    duration: '1h 36m 48s', internet: '24.4 MB', type: 'Incoming WhatsApp Audio'
  },
  {
    caseFile: '015', record: 15, date: '2 Jul 2026', time: '9:34 PM',
    duration: '56m 22s', internet: '12.7 MB', type: 'Outgoing WhatsApp Video'
  },
  {
    caseFile: '016', record: 16, date: '4 Jul 2026', time: '2:52 PM',
    duration: '3h 36m 07s', internet: '1.3 GB', type: 'Incoming WhatsApp Group Video',
    group: 'Lady G, Paridhi & Aadya Jha'
  },
  {
    caseFile: '017', record: 17, date: '4 Jul 2026', time: '10:03 PM',
    duration: '3h 10m 49s', internet: '385.5 MB', type: 'Incoming WhatsApp Video',
    additional: [
      { time: '1:14 AM', duration: '21m 31s', internet: '4.2 MB', type: 'Incoming WhatsApp Audio' }
    ]
  }
];

/* ---- renderer ---- */
(function () {
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  const PAPERCLIP_SVG = '<svg class="paperclip-svg" viewBox="0 0 24 60" fill="none"><path d="M12 4 C4 4 4 20 12 20 L12 20 C20 20 20 4 12 4 Z M12 16 C8 16 8 8 12 8 L12 8 C16 8 16 16 12 16" stroke="#888" stroke-width="2.5" fill="none"/><line x1="12" y1="20" x2="12" y2="56" stroke="#888" stroke-width="2.5"/></svg>';
  const STAMP_CYCLE = [
    { text: 'Declassified', cls: 'grn' },
    { text: 'On Record', cls: 'blue' },
    { text: 'Archived', cls: 'red' }
  ];

  function renderSummary() {
    const root = document.getElementById('call-summary-root');
    if (!root) return;
    const statsHtml = CALL_SUMMARY.stats.map(s => `
      <div class="call-stat"><label>${escapeHtml(s.label)}</label><div class="val">${escapeHtml(s.val)}</div></div>
    `).join('');
    root.innerHTML = `
      <div class="call-summary-card">
        <p class="call-summary-title">Communication Summary</p>
        <p class="call-summary-period">Observation Period · ${escapeHtml(CALL_SUMMARY.period)}</p>
        <div class="call-summary-grid">${statsHtml}</div>
      </div>
    `;
  }

  function renderDisclaimer() {
    const root = document.getElementById('call-disclaimer-root');
    if (!root) return;
    const linesHtml = CALL_DISCLAIMER.lines.map(line => `<p>${escapeHtml(line)}</p>`).join('');
    root.innerHTML = `
      <div class="call-notice-card">
        <p class="call-notice-title">${escapeHtml(CALL_DISCLAIMER.title)}</p>
        <div class="call-notice-body">${linesHtml}</div>
      </div>
    `;
  }

  function renderNotice() {
    const root = document.getElementById('call-notice-root');
    if (!root) return;
    const introHtml = CALL_NOTICE.intro.map(line => `<p>${escapeHtml(line)}</p>`).join('');
    const bulletsHtml = CALL_NOTICE.bullets.map(b => `<li>${escapeHtml(b)}</li>`).join('');
    root.innerHTML = `
      <div class="call-notice-card">
        <p class="call-notice-title">${escapeHtml(CALL_NOTICE.title)}</p>
        <div class="call-notice-body">
          ${introHtml}
          <ul class="call-notice-list">${bulletsHtml}</ul>
          <p>${escapeHtml(CALL_NOTICE.outro)}</p>
        </div>
      </div>
    `;
  }

  function additionalCallHtml(add) {
    return `
      <div class="additional-call">
        <p class="additional-call-label">Additional Call</p>
        <div class="case-grid">
          <div class="case-field"><label>Time</label><div class="val">${escapeHtml(add.time)}</div></div>
          <div class="case-field"><label>Duration</label><div class="dur">${escapeHtml(add.duration)}</div></div>
          <div class="case-field"><label>Internet Invested</label><div class="val">${escapeHtml(add.internet)}</div></div>
          <div class="case-field"><label>Call Type</label><div class="val">${escapeHtml(add.type)}</div></div>
        </div>
      </div>
    `;
  }

  function recordCardHtml(rec, idx) {
    const stamp = STAMP_CYCLE[idx % STAMP_CYCLE.length];
    const groupField = rec.group
      ? `<div class="case-field"><label>Group</label><div class="val">${escapeHtml(rec.group)}</div></div>`
      : '';
    const additionalHtml = (rec.additional || []).map(additionalCallHtml).join('');
    return `
      <div class="case-file">
        ${PAPERCLIP_SVG}
        <div class="stamp ${stamp.cls}">${stamp.text}</div>
        <p class="case-id">Case File ${escapeHtml(rec.caseFile)}</p>
        <p class="case-name">Record ${rec.record}</p>
        <hr class="case-divider">
        <div class="case-grid">
          <div class="case-field"><label>Date</label><div class="val">${escapeHtml(rec.date)}</div></div>
          <div class="case-field"><label>Time</label><div class="val">${escapeHtml(rec.time)}</div></div>
          <div class="case-field"><label>Duration</label><div class="dur">${escapeHtml(rec.duration)}</div></div>
          <div class="case-field"><label>Internet Invested</label><div class="val">${escapeHtml(rec.internet)}</div></div>
          <div class="case-field"><label>Call Type</label><div class="val">${escapeHtml(rec.type)}</div></div>
          ${groupField}
        </div>
        ${additionalHtml}
      </div>
    `;
  }

  function renderRecords() {
    const root = document.getElementById('call-records-root');
    if (!root) return;
    root.innerHTML = CALL_RECORDS.map(recordCardHtml).join('');

    // Reveal-on-scroll, matching the subtle fade used elsewhere on the site
    if ('IntersectionObserver' in window) {
      root.querySelectorAll('.case-file').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(16px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      });
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
      root.querySelectorAll('.case-file').forEach(el => io.observe(el));
    }
  }

  function render() {
    renderSummary();
    renderDisclaimer();
    renderNotice();
    renderRecords();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();
