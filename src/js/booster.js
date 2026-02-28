
const API_KEY = "Q8bHL81HES4CjxatVZAVSQWYyAffYhbQ";

const list = document.querySelector(".events-list");
const pagination = document.getElementById("pagination");

const modal = document.querySelector("[data-modal]");
const modalWrap = document.querySelector(".modal__wrap");
const closeBtn = document.querySelector("[data-close]");
const body = document.body;

let currentPage = 0;
let totalPages = 0;



async function loadEvents(page = 0) {

  const url =
    `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${API_KEY}&countryCode=US&size=20&page=${page}`;

  const response = await fetch(url);
  const data = await response.json();

  const events = data._embedded?.events || [];

  totalPages = Math.min(data.page?.totalPages || 0, 29);
  currentPage = page;

  renderEvents(events);
  renderPagination();
}



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
        <p class="event-place">${place}</p>
      </li>
    `;
  }).join("");

  list.innerHTML = markup;
}



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

    if (i === currentPage) {
      btn.classList.add("active");
    }

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

    last.addEventListener("click", () =>
      loadEvents(totalPages - 1)
    );

    pagination.appendChild(last);
  }
}


list.addEventListener("click", openEventModal);

async function openEventModal(e) {

  const card = e.target.closest(".event-card");
  if (!card) return;

  const id = card.dataset.id;

  const response = await fetch(
    `https://app.ticketmaster.com/discovery/v2/events/${id}.json?apikey=${API_KEY}`
  );

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
          <a class="modal__btn" href="${url}" target="_blank">
            BUY TICKETS
          </a>
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