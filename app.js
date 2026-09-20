const data = JSON.parse(document.getElementById('site-data').textContent);
const base = document.body.dataset.base;
const $ = (selector) => document.querySelector(selector);
const siteHeader = $('.site-header');
const menuToggle = $('.menu-toggle');
const mainNavigation = $('#main-navigation');
const mobileNavigation = window.matchMedia('(max-width: 650px)');
function setMenuOpen(open, restoreFocus = false) {
  siteHeader.classList.toggle('menu-is-open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  if (restoreFocus) menuToggle.focus();
}
siteHeader.classList.add('navigation-ready');
menuToggle.hidden = false;
menuToggle.addEventListener('click', () => setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true'));
mainNavigation.addEventListener('click', event => {
  if (event.target.closest('a')) setMenuOpen(false);
});
document.addEventListener('click', event => {
  if (!siteHeader.contains(event.target)) setMenuOpen(false);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
    event.preventDefault();
    setMenuOpen(false, true);
  }
});
siteHeader.addEventListener('focusout', event => {
  if (!siteHeader.contains(event.relatedTarget)) setMenuOpen(false);
});
mobileNavigation.addEventListener('change', () => {
  const focusWillHide = mobileNavigation.matches && mainNavigation.contains(document.activeElement);
  setMenuOpen(false, focusWillHide);
  if (!mobileNavigation.matches && document.activeElement === menuToggle) {
    (mainNavigation.querySelector('[aria-current]') || mainNavigation.querySelector('a')).focus();
  }
});
document.querySelectorAll('.coauthor-avatar img').forEach(img => {
  const fallback = () => { img.hidden = true; };
  img.addEventListener('error', fallback);
  if (img.complete && !img.naturalWidth) fallback();
});
const themeButton = $('.theme-toggle');
function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeButton.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
  themeButton.title = theme === 'dark' ? 'Light mode' : 'Dark mode';
}
try { setTheme(localStorage.getItem('portfolio-v2-theme') === 'dark' ? 'dark' : 'light'); } catch { setTheme('light'); }
themeButton.addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(next);
  try { localStorage.setItem('portfolio-v2-theme', next); } catch { /* Private mode can block storage. */ }
});

function roomStateForHour(hour) {
  return hour >= 8 && hour < 18 ? 'work' : hour >= 18 && hour < 23 ? 'play' : 'sleep';
}

const roomMap = $('.room-map');
if (roomMap) {
  const scenes = {
    work: {label: 'Working', alt: 'Yeo-Gyeong working at her computer in a sunny pixel-art room'},
    play: {label: 'Gaming', alt: 'Yeo-Gyeong lying on her bed playing a handheld game in the evening'},
    sleep: {label: 'Sleeping', alt: 'Yeo-Gyeong sleeping under a blanket in her moonlit pixel-art room'},
  };
  const sceneImage = $('.room-scene');
  const activity = $('#room-activity');
  const clock = $('#room-clock');
  const modeButtons = document.querySelectorAll('[data-room-mode]');
  const koreaTime = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Seoul', hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
  });
  let mode = 'auto';
  let requestedState = null;
  let requestVersion = 0;

  function showRoom(state) {
    if (state === requestedState) return;
    requestedState = state;
    const version = ++requestVersion;
    const incoming = new Image();
    const source = `${base}assets/landing/room-${state}.png`;
    const applyScene = () => {
      // A slower earlier download must not undo a newer selection.
      if (version !== requestVersion) return;
      sceneImage.src = source;
      sceneImage.alt = scenes[state].alt;
      roomMap.dataset.roomState = state;
      activity.textContent = scenes[state].label;
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        $('.room-art').animate?.([{opacity: .65}, {opacity: 1}], {duration: 220});
      }
    };
    incoming.onload = applyScene;
    incoming.onerror = () => {
      if (version !== requestVersion) return;
      requestedState = null;
      activity.textContent = 'Try again';
    };
    incoming.src = source;
  }

  function refreshRoom() {
    const now = new Date();
    clock.dateTime = now.toISOString();
    const parts = koreaTime.formatToParts(now);
    const hour = parts.find(part => part.type === 'hour').value;
    const minute = parts.find(part => part.type === 'minute').value;
    clock.textContent = `${hour}:${minute}`;
    clock.title = 'Korean Standard Time (KST, UTC+9)';
    showRoom(mode === 'auto' ? roomStateForHour(Number(hour)) : mode);
  }

  modeButtons.forEach(button => button.addEventListener('click', () => {
    mode = button.dataset.roomMode;
    modeButtons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    refreshRoom();
  }));
  $('.room-toolbar').hidden = false;
  refreshRoom();
  setInterval(refreshRoom, 60000);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) refreshRoom(); });
}

const personalTabs = [...document.querySelectorAll('.personal-tabs [role="tab"]')];
if (personalTabs.length) {
  function selectPersonalTab(id, { focus = false, updateUrl = false } = {}) {
    const selected = personalTabs.find(tab => tab.getAttribute('aria-controls') === id) || personalTabs[0];
    const panelId = selected.getAttribute('aria-controls');
    personalTabs.forEach(tab => {
      const active = tab === selected;
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
      document.getElementById(tab.getAttribute('aria-controls')).hidden = !active;
    });
    if (focus) selected.focus();
    if (updateUrl && location.hash !== `#${panelId}`) history.pushState(null, '', `#${panelId}`);
  }
  const syncPersonalTab = () => selectPersonalTab(location.hash.slice(1));
  personalTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectPersonalTab(tab.getAttribute('aria-controls'), { updateUrl: true }));
    tab.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % personalTabs.length;
      else if (event.key === 'ArrowLeft') next = (index - 1 + personalTabs.length) % personalTabs.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = personalTabs.length - 1;
      else return;
      event.preventDefault();
      selectPersonalTab(personalTabs[next].getAttribute('aria-controls'), { focus: true, updateUrl: true });
    });
  });
  window.addEventListener('hashchange', syncPersonalTab);
  window.addEventListener('popstate', syncPersonalTab);
  syncPersonalTab();
}

function updateProjects() {
  const search = $('#project-search');
  const categories = [...document.querySelectorAll('[name="project-category"]:checked')].map(input => input.value);
  const status = $('.filters [aria-pressed="true"]').dataset.filter;
  const normalize = value => value.normalize('NFKC').toLocaleLowerCase();
  const words = normalize(search.value).trim().split(/\s+/).filter(Boolean);
  let visible = 0;
  document.querySelectorAll('.project-card').forEach(card => {
    const project = data.projects[Number(card.dataset.projectIndex)];
    const searchable = normalize([project.title, project.description, ...project.tags, ...project.categories].join(' '));
    const matches = (status === 'All projects' || card.dataset.category === status)
      && (!categories.length || categories.some(category => project.categories.includes(category)))
      && words.every(word => searchable.includes(word));
    card.hidden = !matches;
    if (matches) visible++;
  });
  $('.result-count').textContent = `${visible} ${visible === 1 ? 'project' : 'projects'}`;
  $('.project-empty').hidden = visible !== 0;
  $('#project-category-count').textContent = categories.length ? `${categories.length} selected` : 'All';
  $('#project-reset').disabled = !search.value && !categories.length && status === 'All projects';
}
if (document.body.dataset.page === 'projects') {
  $('#project-search').addEventListener('input', updateProjects);
  document.querySelectorAll('[name="project-category"]').forEach(input => input.addEventListener('change', updateProjects));
  $('#project-reset').addEventListener('click', () => {
    $('#project-search').value = '';
    document.querySelectorAll('[name="project-category"]').forEach(input => { input.checked = false; });
    document.querySelectorAll('[data-filter]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === 'All projects')));
    updateProjects();
    $('#project-search').focus();
  });
  updateProjects();
}

document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  const group = button.closest('.filters');
  const value = button.dataset.filter;
  group.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  if (document.body.dataset.page === 'projects') { updateProjects(); return; }
  let visible = 0;
  document.querySelectorAll('[data-filter-item]').forEach(item => {
    const categories = item.dataset.categories ? JSON.parse(item.dataset.categories) : [item.dataset.category];
    item.hidden = !value.startsWith('All') && !categories.includes(value);
    if (!item.hidden) visible++;
  });
  document.querySelectorAll('.publication-year').forEach(year => { year.hidden = !year.querySelector('[data-filter-item]:not([hidden])'); });
  const unit = document.body.dataset.page === 'projects' ? 'projects' : document.body.dataset.page === 'publications' ? 'entries' : 'places';
  $('.result-count').textContent = `${visible} ${unit}`;
}));

const publicationItems = [...document.querySelectorAll('.publication')];
if (publicationItems.length && 'IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    entries.filter(entry => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top).forEach((entry, index) => {
      entry.target.style.setProperty('--reveal-delay', `${Math.min(index * 75, 225)}ms`);
      entry.target.classList.add('is-revealed');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.05 });
  publicationItems.forEach(item => {
    item.classList.add('publication-reveal');
    observer.observe(item);
  });
}

const carousel = $('.selected-carousel');
if (carousel) {
  const slides = [...carousel.querySelectorAll('.selected-slide')];
  const dots = [...carousel.querySelectorAll('[data-slide]')];
  const toggle = carousel.querySelector('.carousel-toggle');
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let current = 0;
  let paused = motion.matches;
  let hovered = false;
  let focused = false;
  let visible = false;
  let timer;

  function schedule() {
    clearTimeout(timer);
    if (paused || hovered || focused || !visible || document.hidden || $('#detail-dialog').open) return;
    timer = setTimeout(() => showSlide(current + 1), 6000);
  }
  function showSlide(index, manual = false) {
    const next = (index + slides.length) % slides.length;
    if (next !== current) {
      slides[current].hidden = true;
      slides[next].hidden = false;
      if (!motion.matches) slides[next].animate?.([{ opacity: .3, transform: 'translateX(12px)' }, { opacity: 1, transform: 'translateX(0)' }], { duration: 280, easing: 'ease-out' });
      current = next;
    }
    dots.forEach((dot, i) => {
      if (i === current) dot.setAttribute('aria-current', 'true');
      else dot.removeAttribute('aria-current');
    });
    carousel.querySelector('.carousel-count').textContent = `${String(current + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
    if (manual) carousel.querySelector('.carousel-status').textContent = slides[current].getAttribute('aria-label');
    schedule();
  }
  function updatePlayback() {
    const label = paused ? 'Play slideshow' : 'Pause slideshow';
    toggle.dataset.paused = String(paused);
    toggle.setAttribute('aria-label', label);
    toggle.title = label;
    schedule();
  }
  toggle.addEventListener('click', () => { paused = !paused; updatePlayback(); });
  dots.forEach((dot, i) => dot.addEventListener('click', () => showSlide(i, true)));
  carousel.querySelectorAll('[data-slide-step]').forEach(button => button.addEventListener('click', () => showSlide(current + Number(button.dataset.slideStep), true)));
  carousel.addEventListener('pointerenter', event => { if (event.pointerType !== 'touch') { hovered = true; schedule(); } });
  carousel.addEventListener('pointerleave', () => { hovered = false; schedule(); });
  carousel.addEventListener('focusin', () => { focused = true; schedule(); });
  carousel.addEventListener('focusout', event => { focused = carousel.contains(event.relatedTarget); schedule(); });
  document.addEventListener('visibilitychange', schedule);
  $('#detail-dialog').addEventListener('close', schedule);
  motion.addEventListener('change', () => { if (motion.matches) paused = true; updatePlayback(); });
  new IntersectionObserver(entries => { visible = entries[0].isIntersecting && entries[0].intersectionRatio >= .2; schedule(); }, { threshold: .2 }).observe(carousel);
  carousel.querySelector('.carousel-controls').hidden = false;
  updatePlayback();
}

const dialog = $('#detail-dialog');
let selectedPhoto = null;
function fillDialog({title, image, kicker, description = '', links = []}) {
  $('#detail-title').textContent = title;
  $('#detail-kicker').textContent = kicker;
  $('#detail-image').src = base + image.replace(/^\//, '');
  $('#detail-image').alt = title;
  $('#detail-content').textContent = description;
  $('#detail-links').replaceChildren();
  for (const [label, url] of links) {
    if (!url || !/^https?:\/\//.test(url)) continue;
    const link = document.createElement('a');
    link.href = url; link.textContent = `${label} ↗`; link.target = '_blank'; link.rel = 'noopener noreferrer';
    $('#detail-links').append(link);
  }
}
document.querySelectorAll('[data-detail]').forEach(button => button.addEventListener('click', () => {
  const [type, index] = button.dataset.detail.split('-');
  const item = type === 'selected' ? data.selected[index] : data.projects[index];
  selectedPhoto = null;
  dialog.classList.remove('photo-dialog');
  $('.photo-controls').hidden = true;
  fillDialog({title: (type === 'selected' ? item.paper : item.title).trim(), image: item.image,
    kicker: item.conference || item.year, description: item.abstract || item.description,
    links: type === 'selected' ? [['Paper', item.link]] : [['Paper', item.paper], ['Dataset', item.figshare], ['GitHub', item.github], ['Video', item.demo]]});
  dialog.showModal();
  dialog.scrollTop = 0;
}));
function showPhoto(index) {
  selectedPhoto = (index + data.travels.length) % data.travels.length;
  const item = data.travels[selectedPhoto];
  dialog.classList.add('photo-dialog');
  const place = item.country !== item.city ? `${item.city} · ${item.country}` : item.city;
  fillDialog({title: place, image: `assets/experience_img/${item.image}.webp`, kicker: `${item.region} / ${item.date}`});
  $('.photo-controls').hidden = false;
  $('#photo-count').textContent = `${selectedPhoto + 1} / ${data.travels.length}`;
  if (!dialog.open) dialog.showModal();
  dialog.scrollTop = 0;
}
document.querySelectorAll('[data-photo]').forEach(button => button.addEventListener('click', () => showPhoto(Number(button.dataset.photo))));
document.querySelectorAll('[data-photo-step]').forEach(button => button.addEventListener('click', () => showPhoto(selectedPhoto + Number(button.dataset.photoStep))));
$('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  const bounds = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
});
dialog.addEventListener('keydown', (event) => {
  if (selectedPhoto === null) return;
  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); showPhoto(selectedPhoto + (event.key === 'ArrowRight' ? 1 : -1)); }
});
dialog.addEventListener('close', () => { selectedPhoto = null; });

$('#pronounce')?.addEventListener('click', async () => {
  const audio = $('#name-audio');
  $('#audio-status').textContent = '';
  try { audio.currentTime = 0; await audio.play(); } catch { $('#audio-status').textContent = 'Audio is unavailable. Please try again.'; }
});

if (document.body.dataset.page === 'publications') {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 10000);
  fetch(`${base}scholar-metrics.json`, {cache: 'no-store', signal: controller.signal})
    .then(response => { if (!response.ok) throw Error('Metrics unavailable'); return response.json(); })
    .then(incoming => {
      const keys = ['citations', 'hIndex', 'i10Index'];
      if (incoming.profileId !== data.metrics.profileId || !Number.isFinite(Date.parse(incoming.updatedAt)) || Date.parse(incoming.updatedAt) < Date.parse(data.metrics.updatedAt) || !keys.every(key => Number.isSafeInteger(incoming.metrics?.[key]?.all) && incoming.metrics[key].all >= 0)) return;
      for (const key of keys) document.querySelector(`[data-metric="${key}"]`).textContent = incoming.metrics[key].all.toLocaleString('en-US');
    }).catch(() => { /* The checked snapshot stays visible if the request fails. */ }).finally(() => clearTimeout(timer));
}
