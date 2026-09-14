const menu=document.querySelector('.menu');
const nav=document.querySelector('#navegacion');
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&nav.classList.contains('open')){menu.setAttribute('aria-expanded','false');nav.classList.remove('open');menu.focus();}});
const playerButton=document.querySelector('.load-player');
if(playerButton)playerButton.addEventListener('click',()=>{const frame=document.createElement('iframe');frame.src='https://open.spotify.com/embed/show/2LAdhaTCQYo4unEwVoZ6aO';frame.title='Ciencia Viral en Spotify';frame.allow='encrypted-media; fullscreen; picture-in-picture';frame.loading='lazy';playerButton.replaceWith(frame);});

// Archives remain fully readable when JavaScript is disabled.
for (const field of document.querySelectorAll('[data-search]')) {
  const id = field.dataset.search;
  const year = document.querySelector('[data-year="'+id+'"]');
  const list = document.getElementById(id);
  const count = document.querySelector('[data-count="'+id+'"]');
  const normalize = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  const filter = () => {
    const query = normalize(field.value.trim());
    let visible = 0;
    for (const row of list.children) {
      const match = (!year.value || row.dataset.year === year.value) && normalize(row.textContent).includes(query);
      row.hidden = !match;
      if (match) visible++;
    }
    count.textContent = visible ? visible + ' registros' : 'No se encontraron registros con estos filtros.';
  };
  field.addEventListener('input',filter);
  year.addEventListener('change',filter);
}

const designViewer = document.getElementById('visor-diseno');
if (designViewer && typeof designViewer.showModal === 'function') {
  const links = [...document.querySelectorAll('a.zoom-piece')];
  const photo = document.getElementById('visor-imagen');
  const title = document.getElementById('visor-titulo');
  const full = document.getElementById('visor-original');
  const counter = document.getElementById('visor-contador');
  let group = [], position = 0;
  const show = () => {
    const link = group[position];
    photo.src = link.href;
    photo.alt = link.dataset.title;
    title.textContent = link.dataset.title;
    full.href = link.href;
    counter.textContent = (position + 1) + ' / ' + group.length;
  };
  const step = offset => { position = (position + offset + group.length) % group.length; show(); };
  links.forEach(link => link.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    const isPoster = !!link.closest('.poster-grid');
    group = links.filter(item => !item.closest('[hidden]') && !!item.closest('.poster-grid') === isPoster);
    position = group.indexOf(link);
    show(); designViewer.showModal(); document.body.classList.add('viewer-open');
  }));
  designViewer.querySelector('.viewer-close').addEventListener('click', () => designViewer.close());
  document.getElementById('visor-anterior').addEventListener('click', () => step(-1));
  document.getElementById('visor-siguiente').addEventListener('click', () => step(1));
  designViewer.addEventListener('close', () => document.body.classList.remove('viewer-open'));
  designViewer.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight') { event.preventDefault(); step(1); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); step(-1); }
  });
}

// Progressive enhancement: photos remain visible without JS or with reduced motion.
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
 const photoObserver = new IntersectionObserver(entries => { entries.forEach(entry => { if(entry.isIntersecting){entry.target.classList.add('is-visible');} else {entry.target.classList.remove('is-visible');} }); }, {threshold:0.12, rootMargin:'0px 0px -25px 0px'});
 document.querySelectorAll('main section:not(.hero) img').forEach(img=>{img.classList.add('reveal-photo');photoObserver.observe(img);});
}

// Gentle scroll-linked movement for photographs, preserving book/logo colors.
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
 const movingPhotos = [...document.querySelectorAll('main img')].filter(img => !/libro-|logo|ipho|dynasun|diseno\//i.test(img.getAttribute('src')) && !img.closest('.hero'));
 movingPhotos.forEach(img=>img.classList.add('motion-photo'));
 let photoFrame=false;
 function movePhotos(){movingPhotos.forEach(img=>{if(!img.classList.contains('is-visible'))return;const r=img.getBoundingClientRect();if(r.bottom>0 && r.top<innerHeight){const drift=Math.max(-12,Math.min(12,(innerHeight/2-r.top-r.height/2)*.035));img.style.setProperty('--photo-drift',drift+'px');}});photoFrame=false;}
 window.addEventListener('scroll',()=>{if(!photoFrame){photoFrame=true;requestAnimationFrame(movePhotos);}},{passive:true});
 movePhotos();
}
