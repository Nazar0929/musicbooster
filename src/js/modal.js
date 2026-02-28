// import { getEvent } from './eventsAPI';
// import svg from '../images/sprite.svg';

const body = document.body;

/* ================= TEAM MODAL ================= */

const openModalTeam = document.querySelector('.js-open-team-modal');
const modalTeam = document.querySelector('[data-modal-team]');
const closeTeam = document.querySelector('[data-close-team]');
const developers = document.querySelector('.developers');

if (openModalTeam) {
  openModalTeam.addEventListener('click', toggleTeamModal);
}

if (closeTeam) {
  closeTeam.addEventListener('click', toggleTeamModal);
}

if (modalTeam) {
  modalTeam.addEventListener('click', e => {
    if (!e.target.closest('.developers')) {
      toggleTeamModal();
    }
  });
}

function toggleTeamModal() {
  modalTeam.classList.toggle('backdrop-hidden');
  body.classList.toggle('no-scroll');
}

/* ================= EVENT MODAL ================= */

const modal = document.querySelector('[data-modal]');
const closeModal = document.querySelector('[data-close]');
const galleryCard = document.querySelector('.js-events-gallery');
const modalWrap = document.querySelector('.modal__wrap');

if (galleryCard) {
  galleryCard.addEventListener('click', openEventCardInModal);
}

if (closeModal) {
  closeModal.addEventListener('click', closeEventModal);
}

if (modal) {
  modal.addEventListener('click', e => {
    if (!e.target.closest('.modal')) {
      closeEventModal();
    }
  });
}

async function openEventCardInModal(e) {
  e.preventDefault();

  const card = e.target.closest('[data-id]');
  if (!card) return;

  const id = card.dataset.id;

  try {
    const response = await getEvent(id);
    const data = response.data;

    modalWrap.innerHTML = createMarkupEventCard(data);

    modal.classList.remove('backdrop-hidden');
    body.classList.add('no-scroll');

  } catch (error) {
    console.error('Error loading event:', error);
  }
}

function closeEventModal() {
  modal.classList.add('backdrop-hidden');
  body.classList.remove('no-scroll');
}

/* ================= ESC CLOSE ================= */

document.addEventListener('keydown', e => {
  if (e.code === 'Escape') {
    closeEventModal();
    if (modalTeam) {
      modalTeam.classList.add('backdrop-hidden');
    }
    body.classList.remove('no-scroll');
  }
});

/* ================= MARKUP ================= */

function createMarkupEventCard(cardObject) {
  const {
    name,
    images = [],
    url = '#',
    info,
    priceRanges,
    dates,
    _embedded,
  } = cardObject;

  const localDate = dates?.start?.localDate || '';
  const localTime = dates?.start?.localTime || '';
  const timezone = dates?.timezone || '';

  const venue = _embedded?.venues?.[0] || {};
  const place = venue.name || '';
  const city = venue.city?.name || '';
  const country = venue.country?.name || '';

  const img =
    images.find(img => img.height >= 350) || images[0] || {};

  let standardText = 'See ticket info';
  let vipText = '';

  if (priceRanges && priceRanges.length > 0) {
    const { type, currency, min, max } = priceRanges[0];

    const priceText = `${type}: ${min}-${max} ${currency}`;

    if (type?.toLowerCase() === 'standard') {
      standardText = priceText;
    } else if (type?.toLowerCase() === 'vip') {
      vipText = priceText;
    }
  }

  return `
    <img class="modal__preview" src="${img.url || ''}" alt="preview" />

    <div class="content">
      <img class="content__image" src="${img.url || ''}" alt="poster"/>

      <ul class="content__list">

        <li>
          <h2 class="modal__title">INFO</h2>
          <p class="modal__text">${info || 'No information'}</p>
        </li>

        <li>
          <h2 class="modal__title">WHEN</h2>
          <p class="modal__text">${localDate}</p>
          <p class="modal__text">${localTime} ${timezone}</p>
        </li>

        <li>
          <h2 class="modal__title">WHERE</h2>
          <p class="modal__text">${city}, ${country}</p>
          <p class="modal__text">${place}</p>
        </li>

        <li>
          <h2 class="modal__title">WHO</h2>
          <p class="modal__text">${name}</p>
        </li>

        <li>
          <h2 class="modal__title">PRICES</h2>

          <div class="price__wrap">
            <svg class="price__icon" width="24" height="16">
              <use href="${svg}#icon-ticket"></use>
            </svg>

            <p class="modal__text">${standardText}</p>
          </div>

          ${vipText ? `<p class="modal__text">${vipText}</p>` : ''}

          <a class="modal__btn" target="_blank" href="${url}">
            BUY TICKETS
          </a>
        </li>

      </ul>
    </div>
  `;
}с