
const body = document.body;

const modal = document.querySelector('[data-modal]');
const closeBtn = document.querySelector('[data-close]');
const gallery = document.querySelector('.js-events-gallery');
const modalWrap = document.querySelector('.modal__wrap');



gallery.addEventListener('click', openModal);

function openModal(e) {
  const card = e.target.closest('[data-id]');
  if (!card) return;

  const eventData = getFakeEvent(); 

  modalWrap.innerHTML = createMarkup(eventData);

  modal.classList.remove('backdrop-hidden');
  body.classList.add('no-scroll');
}



closeBtn.addEventListener('click', closeModal);

modal.addEventListener('click', e => {
  if (!e.target.closest('.modal')) {
    closeModal();
  }
});

document.addEventListener('keydown', e => {
  if (e.code === 'Escape') {
    closeModal();
  }
});

function closeModal() {
  modal.classList.add('backdrop-hidden');
  body.classList.remove('no-scroll');
}



function createModalMarkup(ev){

  const img = ev.images?.[0]?.url || "";
  const name = ev.name || "";
  const info = ev.info || "No information";
  const date = ev.dates?.start?.localDate || "";
  const time = ev.dates?.start?.localTime || "";
  const city = ev._embedded?.venues?.[0]?.city?.name || "";
  const place = ev._embedded?.venues?.[0]?.name || "";
  const url = ev.url || "#";
  
  return `
  <img class="modal__preview" src="${img}" />
  
  <div class="content">
  
  <img class="content__image" src="${img}" />
  
  <ul class="content__list">
  
  <li>
  <h2 class="modal__title">INFO</h2>
  <p class="modal__text">${info}</p>
  </li>
  
  <li>
  <h2 class="modal__title">WHEN</h2>
  <p class="modal__text">${date}</p>
  <p class="modal__text">${time}</p>
  </li>
  
  <li>
  <h2 class="modal__title">WHERE</h2>
  <p class="modal__text">${city}</p>
  <p class="modal__text">${place}</p>
  </li>
  
  <li>
  <h2 class="modal__title">WHO</h2>
  <p class="modal__text">${name}</p>
  </li>
  
  <li>
  <h2 class="modal__title">PRICES</h2>
  
  <div class="price__wrap">
  <p class="modal__text">Standard tickets</p>
  </div>
  
  <a class="modal__btn" href="${url}" target="_blank">
  BUY TICKETS
  </a>
  
  <div class="price__wrap">
  <p class="modal__text">VIP tickets</p>
  </div>
  
  <a class="modal__btn" href="${url}" target="_blank">
  BUY TICKETS
  </a>
  
  </li>
  
  </ul>
  
  </div>
  
  <a class="btn-info" href="${url}" target="_blank">
  MORE FROM THIS AUTHOR
  </a>
  `;
  }



function getFakeEvent() {
  return {
    name: 'Atlas Weekend',
    info: 'Largest music festival in Ukraine.',
    date: '2026-02-28',
    time: '20:00',
    city: 'Jarosław, Poland',
    place: 'Reto Music Club',
    price: 'Standard 40-80€',
    img: 'https://picsum.photos/400/600'
  };
}


