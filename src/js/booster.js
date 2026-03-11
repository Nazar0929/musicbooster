const API_KEY = "Q8bHL81HES4CjxatVZAVSQWYyAffYhbQ";

const list = document.querySelector(".events-list");
const pagination = document.getElementById("pagination");

const modal = document.querySelector("[data-modal]");
const modalWrap = document.querySelector(".modal__wrap");
const closeBtn = document.querySelector("[data-close]");
const body = document.body;

const searchInput = document.querySelector('.header__input[placeholder="Start searching"]');

const countryBox = document.querySelector(".country");
const countryInput = document.getElementById("countryInput");
const countryList = document.querySelector(".country-list");

let keyword = "";
let countryCode = "US";

let currentPage = 0;
let totalPages = 0;

let timer;

/* ======================
Список КРАЇН
====================== */

const countries = [
  { name: "United States", code: "US" },
  { name: "Germany", code: "DE" },
  { name: "United Kingdom", code: "GB" },
  { name: "France", code: "FR" },
  { name: "Spain", code: "ES" },
  { name: "Italy", code: "IT" },
  { name: "Australia", code: "AU" },
  { name: "Canada", code: "CA" },
  { name: "Argentina", code: "AR" },
  { name: "Austria", code: "AT" },
  { name: "Belgium", code: "BE" },
  { name: "Brazil", code: "BR" },
  { name: "Netherlands", code: "NL" },
  { name: "Poland", code: "PL" },
  { name: "Sweden", code: "SE" },
  { name: "Switzerland", code: "CH" },
  { name: "Ukraine", code: "UA" },
  { name: "Denmark", code: "DK" },
  { name: "Finland", code: "FI" },
  { name: "Norway", code: "NO" },
  { name: "Portugal", code: "PT" },
  { name: "Ireland", code: "IE" },
  { name: "Mexico", code: "MX" },
  { name: "New Zealand", code: "NZ" },
  { name: "Czech Republic", code: "CZ" },
  { name: "Hungary", code: "HU" }
];

function renderCountries() {
  const markup = countries.map(c =>
    `<li data-code="${c.code}">${c.name}</li>`
  ).join("");

  countryList.innerHTML = markup;
}


renderCountries();

/* ======================
Dropdown країни
====================== */

countryInput.addEventListener("click", () => {
  countryBox.classList.toggle("open");
  countryList.classList.toggle("open");
});


countryList.addEventListener("click", e => {
  if (e.target.tagName !== "LI") return;

  const code = e.target.dataset.code;
  const name = e.target.textContent;

  countryInput.value = name;
  countryCode = code;

  countryList.classList.remove("open");
  countryBox.classList.remove("open");

  loadEvents(0);
});

document.addEventListener("click", e => {
  if (!e.target.closest(".country")) {
    countryList.classList.remove("open");
    countryBox.classList.remove("open");
  }
});

/* ======================
Пошук
====================== */

searchInput.addEventListener("input", () => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    keyword = searchInput.value.trim();
    loadEvents(0);
  }, 500);
});

/* ======================
Завантаження подій
====================== */

async function loadEvents(page = 0) {
  const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${API_KEY}&countryCode=${countryCode}&keyword=${keyword}&size=20&page=${page}`;

  const response = await fetch(url);
  const data = await response.json();

  const events = data._embedded?.events || [];

  totalPages = Math.min(data.page?.totalPages || 0, 29);
  currentPage = page;

  renderEvents(events);
  renderPagination();
}

/* ======================
Відтворення подій
====================== */

function renderEvents(events) {
  const markup = events.map(ev => {
    const img = ev.images?.[0]?.url || "";
    const name = ev.name || "";
    const date = ev.dates?.start?.localDate || "";
    const place = ev._embedded?.venues?.[0]?.name || "";

    return `
      <li class="event-card" data-id="${ev.id}">
        <img class="event-img" src="${img}" alt="${name}">
        <h3 class="event-title">${name}</h3>
        <p class="event-date">${date}</p>
        <p class="event-place">${place} <svg
        class="event-svg"
  width="7"
  height="10"
  viewBox="0 0 7 10"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M3.5 0C1.57011 0 0 1.55933 0 3.47595C0 5.88495 3.50344 10 3.50344 10C3.50344 10 7 5.76648 7 3.47595C7 1.55933 5.42995 0 3.5 0ZM4.55602 4.49371C4.26484 4.78284 3.88245 4.92743 3.5 4.92743C3.11761 4.92743 2.7351 4.78284 2.44404 4.49371C1.86173 3.91547 1.86173 2.97455 2.44404 2.39624C2.72601 2.11609 3.10108 1.96179 3.5 1.96179C3.89892 1.96179 4.27393 2.11615 4.55602 2.39624C5.13833 2.97455 5.13833 3.91547 4.55602 4.49371Z"
    fill="white"
  />
</svg></p>
      </li>
    `;
  }).join("");

  list.innerHTML = markup;
}

/* ======================
Пагінація
====================== */

function renderPagination() {
  pagination.innerHTML = "";
  const maxVisible = 5;

  let start = Math.max(0, currentPage - 2);
  let end = Math.min(totalPages, start + maxVisible);

  if (end - start < maxVisible) {
    start = Math.max(0, end - maxVisible);
  }

  for (let i = start; i < end; i++) {
    const btn = document.createElement("button");
    btn.className = "page-btn";
    btn.textContent = i + 1;
    if (i === currentPage) btn.classList.add("active");
    btn.addEventListener("click", () => loadEvents(i));
    pagination.appendChild(btn);
  }

  if (end < totalPages) {
    const dots = document.createElement("span");
    dots.textContent = "...";
    dots.className = "dots";
    pagination.appendChild(dots);

    const last = document.createElement("button");
    last.className = "page-btn";
    last.textContent = totalPages;
    last.addEventListener("click", () => loadEvents(totalPages - 1));
    pagination.appendChild(last);
  }
}

/* ======================
Модалка
====================== */

list.addEventListener("click", openEventModal);

async function openEventModal(e) {
  const card = e.target.closest(".event-card");
  if (!card) return;

  const id = card.dataset.id;

  const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events/${id}.json?apikey=${API_KEY}`);
  const ev = await response.json();

  modalWrap.innerHTML = createModalMarkup(ev);
  modal.classList.remove("backdrop-hidden");
  body.classList.add("no-scroll");
}

function createModalMarkup(ev) {
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
      <ul>
        <li><b>INFO:</b> ${info}</li>
        <li><b>WHEN:</b> ${date} ${time}</li>
        <li><b>WHERE:</b> ${city} — ${place}</li>
        <li><b>WHO:</b> ${name}</li>
        <li>
          <a class="modal__btn" href="${url}" target="_blank">BUY TICKETS</a>
        </li>
      </ul>
    </div>
  `;
}

closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", e => {
  if (!e.target.closest(".modal")) closeModal();
});

document.addEventListener("keydown", e => {
  if (e.code === "Escape") closeModal();
});

function closeModal() {
  modal.classList.add("backdrop-hidden");
  body.classList.remove("no-scroll");
}


loadEvents();