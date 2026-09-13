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
