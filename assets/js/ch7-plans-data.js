/* ═══════════════════════════════════════════
   VII·b — PENDING OPERATIONS (data + renderer)
   Not a bucket list — an archive of future
   operations, promises, and unfinished business.
═══════════════════════════════════════════ */

const OPERATIONS = [
  {
    id: '001', title: 'The Road Trip', status: 'Awaiting Deployment', statusColor: 'neutral',
    brief: "A proper road trip. No destination is final, no playlist is agreed upon, and every unnecessary stop is mandatory."
  },
  {
    id: '002', title: 'Operation: Big Screen', status: 'Pending', statusColor: 'neutral',
    brief: "Watch a movie together without turning the experience into an ongoing commentary track."
  },
  {
    id: '003', title: 'Animal Café Expedition', status: 'High Priority', statusColor: 'red',
    brief: "Visit an animal café after spending far more time talking about it than actually planning it."
  },
  {
    id: '004', title: 'POV Exchange', status: 'Always Active', statusColor: 'grn',
    brief: "Continue the tradition of turning the simplest questions into hour-long debates.",
    alias: 'Known Alias', aliasText: '"Random debate."'
  },
  {
    id: '005', title: 'Future Destinations', status: 'Classified', statusColor: 'blue',
    brief: "Visit the places that somehow keep getting added to the ever-growing list of \"we should definitely go there someday.\""
  },
  {
    id: '006', title: 'Dog Delivery Initiative', status: 'Promise Logged', statusColor: 'grn',
    brief: "Fulfil the long-standing promise of gifting you a doggo.",
    note: 'Archive Note', noteText: 'This promise has been officially recorded. There is no statute of limitations.'
  },
  {
    id: '007', title: 'Project: Voice Unlocked', status: 'Proposal Archived', statusColor: 'blue',
    brief: "Convince you to finally start your singing channel.",
    note: 'Archive Note', noteText: "This wasn't part of one specific conversation, but I've suggested it before and I genuinely think you should do it. The mission has been filed in advance."
  },
  {
    id: '008', title: 'The CultClassics™️', status: 'Perpetually Under Development', statusColor: 'neutral',
    brief: "Continue building what may eventually become our most ambitious and confusing business idea."
  },
  {
    id: '009', title: 'Venture Division', status: 'Research Ongoing', statusColor: 'neutral',
    brief: "Keep creating business ideas that somehow alternate between being surprisingly practical and completely absurd."
  },
  {
    id: '010', title: "Duck's Sake Expedition", status: 'Awaiting Field Deployment', statusColor: 'red',
    brief: 'Actually go hiking instead of repeatedly saying, "We should go hiking someday."',
    note: 'Field Note', noteText: "For duck's sake... let's actually do this one."
  },
  {
    id: '011', title: 'Future Debrief', status: 'Conversation Interrupted', statusColor: 'red',
    brief: "Resume the discussion about the future that somehow never reached a proper conclusion.",
    note: 'Archive Note', noteText: 'This file remains intentionally incomplete until that conversation finally happens.'
  }
];

const OPS_SUMMARY = {
  title: 'Pending Operations',
  stats: [
    { label: 'Total Operations', val: '11' },
    { label: 'Completed', val: '0' },
    { label: 'Cancelled', val: '0' },
    { label: 'Promises Logged', val: '1' },
    { label: 'Ideas Under Development', val: 'Several' },
    { label: 'Conversation Status', val: 'To Be Continued' }
  ],
  closing: 'The archive remains open.'
};

/* ---- renderer ---- */
(function () {
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function opCardHtml(op) {
    const aliasHtml = op.alias
      ? `<div class="op-field"><label>${escapeHtml(op.alias)}</label><div class="op-alias">${escapeHtml(op.aliasText)}</div></div>`
      : '';
    const noteHtml = op.note
      ? `<div class="op-field"><label>${escapeHtml(op.note)}</label><div class="op-text">${escapeHtml(op.noteText)}</div></div>`
      : '';
    return `
      <div class="op-card">
        <div class="op-header">
          <span class="op-id">Operation ${escapeHtml(op.id)}</span>
          <span class="op-status ${op.statusColor}">${escapeHtml(op.status)}</span>
        </div>
        <p class="op-title">${escapeHtml(op.title)}</p>
        <hr class="op-divider">
        <div class="op-field"><label>Mission Brief</label><div class="op-text">${escapeHtml(op.brief)}</div></div>
        ${aliasHtml}
        ${noteHtml}
      </div>
    `;
  }

  function renderOps() {
    const root = document.getElementById('ops-root');
    if (!root) return;
    root.innerHTML = OPERATIONS.map(opCardHtml).join('');
  }

  function renderSummary() {
    const root = document.getElementById('ops-summary-root');
    if (!root) return;
    const statsHtml = OPS_SUMMARY.stats.map(s => `
      <div class="call-stat"><label>${escapeHtml(s.label)}</label><div class="val">${escapeHtml(s.val)}</div></div>
    `).join('');
    root.innerHTML = `
      <div class="call-summary-card">
        <p class="call-summary-title">📋 Archive Summary</p>
        <p class="call-summary-period">${escapeHtml(OPS_SUMMARY.title)}</p>
        <div class="call-summary-grid">${statsHtml}</div>
        <p class="op-alias" style="margin-top:20px;display:block;">"${escapeHtml(OPS_SUMMARY.closing)}"</p>
      </div>
    `;
  }

  function render() {
    renderOps();
    renderSummary();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();
