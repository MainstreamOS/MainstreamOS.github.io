// Mainstream docs app — routing + sidebar render

const NAV_ORDER = [
  { group: 'Start here', ids: ['home'] },
  { group: 'Installation', ids: ['install-iso', 'install-script'] },
  { group: 'Desktop', ids: ['desktop','overview-launcher','shortcuts','sidebars','sharing','desktop-apps'] },
  { group: 'Settings', ids: ['quick','wifi','bluetooth','bar','interface','background','themes','display','layouts','keybinds','mouse','power','accounts','services','update','recovery','about'] },
  { group: 'Creative & Gaming', ids: ['davinci','obs','gaming'] },
  { group: 'Security', ids: ['security'] },
];

function renderSidebar(activeId){
  const sb = document.getElementById('sidebar');
  sb.innerHTML = NAV_ORDER.map(g => `
    <div class="nav-group">
      <div class="nav-group-title">${g.group}</div>
      ${g.ids.map(id => {
        const p = PAGES[id];
        if (!p) return '';
        const label = p.navTitle || p.title;
        return `<a class="nav-item" data-id="${id}" href="#${id}" data-active="${id===activeId}">${icon(p.icon || 'book')}<span>${label}</span></a>`;
      }).join('')}
    </div>
  `).join('');
}

function flatOrder(){
  return NAV_ORDER.flatMap(g => g.ids).filter(id => PAGES[id]);
}

function pager(activeId){
  const order = flatOrder();
  const i = order.indexOf(activeId);
  if (i < 0) return '';
  const prev = i > 0 ? order[i-1] : null;
  const next = i < order.length - 1 ? order[i+1] : null;
  return `
    <div class="pager">
      ${prev ? `<a href="#${prev}"><div class="lbl">← Previous</div><div class="ttl">${PAGES[prev].title}</div></a>` : '<span></span>'}
      ${next ? `<a class="next" href="#${next}"><div class="lbl">Next →</div><div class="ttl">${PAGES[next].title}</div></a>` : '<span></span>'}
    </div>
  `;
}

function findGroup(id){
  for (const g of NAV_ORDER) if (g.ids.includes(id)) return g.group;
  return '';
}

function renderPage(id){
  const page = PAGES[id] || PAGES.home;
  const main = document.getElementById('main');
  const group = findGroup(id);

  let head = '';
  if (id !== 'home'){
    const crumb = group
      ? `<a href="#home">Docs</a><span class="sep">/</span><span>${group}</span><span class="sep">/</span><span style="color:var(--ink)">${page.title}</span>`
      : `<a href="#home">Home</a><span class="sep">/</span><span style="color:var(--ink)">${page.title}</span>`;
    head = `
      <div class="breadcrumbs">${crumb}</div>
      <h1 class="page-title">${page.title}</h1>
      ${page.lede ? `<p class="page-lede">${page.lede}</p>` : ''}
      <div class="ribbon"></div>
    `;
  }

  main.innerHTML = head + page.render() + (id !== 'home' ? pager(id) : '');
  window.scrollTo({top:0,behavior:'instant'});
}

function route(){
  const id = (location.hash || '#home').replace(/^#/, '');
  const activeId = PAGES[id] ? id : 'home';
  renderSidebar(activeId);
  renderPage(activeId);
}

// ===== Search =====
let SEARCH_INDEX = null;
function buildSearchIndex(){
  if (SEARCH_INDEX) return SEARCH_INDEX;
  const tmp = document.createElement('div');
  SEARCH_INDEX = flatOrder().map(id => {
    const p = PAGES[id];
    let body = '', headings = [];
    try {
      tmp.innerHTML = p.render();
      body = (tmp.textContent || '').replace(/\s+/g, ' ').trim();
      headings = [...tmp.querySelectorAll('h2,h3')].map(h => h.textContent.trim());
    } catch(e){}
    const group = findGroup(id);
    return {
      id, title: p.title, group,
      lede: p.lede || '', headings, body,
      hay: (p.title + ' ' + group + ' ' + (p.lede || '') + ' ' + headings.join(' ') + ' ' + body).toLowerCase()
    };
  });
  tmp.innerHTML = '';
  return SEARCH_INDEX;
}

function searchDocs(q){
  const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
  if (!terms.length) return [];
  const scored = [];
  for (const e of buildSearchIndex()){
    if (!terms.every(t => e.hay.includes(t))) continue;
    let score = 0;
    const tl = e.title.toLowerCase();
    for (const t of terms){
      if (tl === t) score += 200;
      if (tl.includes(t)) score += 100;
      if (e.headings.some(h => h.toLowerCase().includes(t))) score += 30;
      if (e.lede.toLowerCase().includes(t)) score += 15;
      if (e.body.toLowerCase().includes(t)) score += 5;
    }
    scored.push({ e, score });
  }
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, 12).map(x => x.e);
}

function escHtml(s){ return String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }
function highlightTerms(s, terms){
  let h = escHtml(s);
  for (const t of terms){
    const re = new RegExp('(' + t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig');
    h = h.replace(re, '<mark>$1</mark>');
  }
  return h;
}
function snippetFor(entry, terms){
  const src = entry.body || entry.lede || '';
  let i = -1;
  for (const t of terms){ const j = src.toLowerCase().indexOf(t); if (j >= 0 && (i < 0 || j < i)) i = j; }
  if (i < 0) return highlightTerms((entry.lede || '').slice(0, 150), terms);
  const start = Math.max(0, i - 55);
  const s = (start > 0 ? '…' : '') + src.slice(start, start + 150) + (start + 150 < src.length ? '…' : '');
  return highlightTerms(s, terms);
}

function initSearch(){
  const trigger = document.getElementById('searchTrigger');
  const modal   = document.getElementById('searchModal');
  const overlay = document.getElementById('searchOverlay');
  const input   = document.getElementById('searchInput');
  const results = document.getElementById('searchResults');
  if (!trigger || !modal || !input || !results) return;

  let current = [], activeIdx = -1;

  function renderResults(){
    const terms = input.value.toLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.length){ results.innerHTML = '<div class="search-empty">Type to search across every page.</div>'; return; }
    current = searchDocs(input.value);
    activeIdx = current.length ? 0 : -1;
    if (!current.length){ results.innerHTML = '<div class="search-empty">No matches for “' + escHtml(input.value) + '”.</div>'; return; }
    results.innerHTML = current.map((e, i) => `
      <a class="search-result" data-id="${e.id}" href="#${e.id}" data-active="${i === activeIdx}">
        <div class="sr-grp">${escHtml(e.group)}</div>
        <div class="sr-ttl">${highlightTerms(e.title, terms)}</div>
        <div class="sr-snip">${snippetFor(e, terms)}</div>
      </a>`).join('');
  }
  function setActive(n){
    if (!current.length) return;
    activeIdx = (n + current.length) % current.length;
    [...results.querySelectorAll('.search-result')].forEach((el, i) => {
      el.dataset.active = (i === activeIdx);
      if (i === activeIdx) el.scrollIntoView({ block: 'nearest' });
    });
  }
  function open(){ modal.hidden = false; input.value = ''; renderResults(); requestAnimationFrame(() => input.focus()); }
  function close(){ modal.hidden = true; }
  function go(id){ close(); if (location.hash === '#' + id) route(); else location.hash = '#' + id; }

  trigger.addEventListener('click', open);
  trigger.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' '){ e.preventDefault(); open(); } });
  overlay.addEventListener('click', close);
  input.addEventListener('input', renderResults);
  input.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown'){ e.preventDefault(); setActive(activeIdx + 1); }
    else if (e.key === 'ArrowUp'){ e.preventDefault(); setActive(activeIdx - 1); }
    else if (e.key === 'Enter'){ e.preventDefault(); if (current[activeIdx]) go(current[activeIdx].id); }
    else if (e.key === 'Escape'){ close(); }
  });
  results.addEventListener('click', e => {
    const a = e.target.closest('.search-result');
    if (a){ e.preventDefault(); go(a.dataset.id); }
  });
  document.addEventListener('keydown', e => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k'){ e.preventDefault(); modal.hidden ? open() : close(); }
    else if (e.key === 'Escape' && !modal.hidden){ close(); }
  });
}

function initLightbox(){
  const lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.hidden = true;
  const im = document.createElement('img');
  lb.appendChild(im);
  document.body.appendChild(lb);
  let openedAt = 0;
  const close = () => {
    lb.classList.remove('show');
    setTimeout(() => { lb.hidden = true; im.src = ''; }, 180);
  };
  document.addEventListener('click', e => {
    const img = e.target.closest('.shot img');
    if (img){
      im.src = img.src;
      im.alt = img.alt || '';
      lb.hidden = false;
      void lb.offsetHeight;
      lb.classList.add('show');
      openedAt = Date.now();
      return;
    }
    if (!lb.hidden && Date.now() - openedAt > 250 && e.target.closest('.lightbox')) close();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !lb.hidden) close();
  });
}

function boot(){ route(); initSearch(); initLightbox(); }
window.addEventListener('hashchange', route);
document.addEventListener('DOMContentLoaded', boot);
if (document.readyState !== 'loading') boot();
