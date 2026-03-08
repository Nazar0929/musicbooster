window.addEventListener('load', () => {
  const preloader = document.querySelector('.preloader');
  const content = document.getElementById('content');
  const circle = document.querySelector('.progress-ring__circle');
  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;

  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  circle.style.strokeDashoffset = circumference;

  // Анімація заповнення кола
  let progress = 0;
  const interval = setInterval(() => {
    progress += 1;
    const offset = circumference - (progress / 100) * circumference;
    circle.style.strokeDashoffset = offset;
    if (progress >= 100) {
      clearInterval(interval);
      // Плавне зникнення preloader
      preloader.style.transition = 'opacity 1s ease';
      preloader.style.opacity = '0';
      setTimeout(() => {
        preloader.style.display = 'none';
        content.style.display = 'block';
        document.body.style.overflow = 'auto';
      }, 1000);
    }
  }, 15);
});


// import { debounce } from 'debounce';

// const API_KEY = 'Q8bHL81HES4CjxatVZAVSQWYyAffYhbQ';
// const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events.json';

// const countries = [
//   { value: 'AD', label: 'Andorra' },
//   { value: 'AR', label: 'Argentina' },
//   { value: 'AU', label: 'Australia' },
//   { value: 'AT', label: 'Austria' },
//   { value: 'BE', label: 'Belgium' },
//   { value: 'BR', label: 'Brazil' },
//   { value: 'BG', label: 'Bulgaria' },
//   { value: 'CA', label: 'Canada' },
//   { value: 'CN', label: 'China' },
//   { value: 'CZ', label: 'Czech Republic' },
//   { value: 'DK', label: 'Denmark' },
//   { value: 'FI', label: 'Finland' },
//   { value: 'FR', label: 'France' },
//   { value: 'DE', label: 'Germany' },
//   { value: 'GR', label: 'Greece' },
//   { value: 'HU', label: 'Hungary' },
//   { value: 'IN', label: 'India' },
//   { value: 'IE', label: 'Ireland' },
//   { value: 'IT', label: 'Italy' },
//   { value: 'JP', label: 'Japan' },
//   { value: 'LV', label: 'Latvia' },
//   { value: 'LT', label: 'Lithuania' },
//   { value: 'LU', label: 'Luxembourg' },
//   { value: 'MX', label: 'Mexico' },
//   { value: 'NL', label: 'Netherlands' },
//   { value: 'NO', label: 'Norway' },
//   { value: 'PL', label: 'Poland' },
//   { value: 'PT', label: 'Portugal' },
//   { value: 'RO', label: 'Romania' },
//   { value: 'ES', label: 'Spain' },
//   { value: 'SE', label: 'Sweden' },
//   { value: 'CH', label: 'Switzerland' },
//   { value: 'TR', label: 'Turkey' },
//   { value: 'UA', label: 'Ukraine' },
//   { value: 'GB', label: 'Great Britain' },
//   { value: 'US', label: 'United States' },
// ];

// const refs = {
//   keyword: document.querySelector('.keyword'),
//   selectCountryField: document.querySelector('.select-country'),
//   galleryList: document.querySelector('.gallery__list'),
//   countrylistThumb: document.querySelector('.country_list-thumb'),
//   countrylist: document.querySelector('.country_list'),
//   pagination: document.querySelector('.pagination'),
// };

// let keyword = '';
// let countryCode = '';
// let page = 0;

// refs.keyword.addEventListener('input', debounce(onKeyword, 500));
// refs.selectCountryField.addEventListener('input', debounce(onCountryInput, 300));
// refs.selectCountryField.addEventListener('focus', showCountries);
// refs.selectCountryField.addEventListener('blur', hideCountries);
// refs.countrylist.addEventListener('click', selectCountry);
// refs.pagination.addEventListener('click', onPagination);

// function onKeyword(e) {
//   keyword = e.target.value;
//   page = 0;
//   fetchEvents();
// }

// function onCountryInput(e) {
//   const filtered = countries.filter(c =>
//     c.label.toLowerCase().includes(e.target.value.toLowerCase())
//   );

//   refs.countrylist.innerHTML = filtered
//     .map(c => `<li data-id="${c.value}">${c.label}</li>`)
//     .join('');

//   refs.countrylistThumb.classList.remove('is-hidden');
// }

// function showCountries() {
//   refs.countrylist.innerHTML = countries
//     .map(c => `<li data-id="${c.value}">${c.label}</li>`)
//     .join('');

//   refs.countrylistThumb.classList.remove('is-hidden');
// }

// function hideCountries() {
//   setTimeout(() => {
//     refs.countrylistThumb.classList.add('is-hidden');
//   }, 200);
// }

// function selectCountry(e) {
//   if (e.target.nodeName !== 'LI') return;

//   countryCode = e.target.dataset.id;
//   refs.selectCountryField.value = e.target.textContent;

//   refs.countrylistThumb.classList.add('is-hidden');

//   page = 0;

//   fetchEvents();
// }

// function onPagination(e) {
//   if (!e.target.dataset.page) return;

//   page = Number(e.target.dataset.page) - 1;

//   fetchEvents();
// }

// async function fetchEvents() {
//   try {
//     const params = new URLSearchParams({
//       apikey: API_KEY,
//       keyword,
//       countryCode,
//       page,
//       size: 20,
//     });

//     const response = await fetch(`${BASE_URL}?${params}`);
//     const data = await response.json();

//     const events = data._embedded?.events || [];

//     renderGallery(events);

//     renderPagination(data.page.totalPages);
//   } catch (error) {
//     refs.galleryList.innerHTML = `<p>No events found</p>`;
//   }
// }

// function renderGallery(events) {
//   const markup = events
//     .map(event => {
//       const img = event.images[0].url;
//       const name = event.name;
//       const date = event.dates.start.localDate;
//       const place = event._embedded?.venues[0]?.name || '';

//       return `
// <li class="gallery__item">
// <a class="gallery__link">
// <img src="${img}" class="gallery__img"/>

// <div class="event-info">
// <h3 class="event-heading">${name}</h3>
// <p class="event-data">${date}</p>
// <p class="event-place">${place}</p>
// </div>

// </a>
// </li>
// `;
//     })
//     .join('');

//   refs.galleryList.innerHTML = markup;
// }

// function renderPagination(totalPages) {
//   let markup = '';

//   for (let i = 1; i <= totalPages; i++) {
//     markup += `<li class="pagination-item" data-page="${i}">${i}</li>`;
//   }

//   refs.pagination.innerHTML = markup;
// }