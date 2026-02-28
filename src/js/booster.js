const API_KEY = "Q8bHL81HES4CjxatVZAVSQWYyAffYhbQ";
const list = document.querySelector(".events-list");
const pagination = document.getElementById("pagination");

let currentPage = 0;
let totalPages = 0;

async function loadEvents(page = 0) {
const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${API_KEY}&countryCode=US&size=20&page=${page}`;

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
      <li class="event-card">
        <img class="event-img" src="${img}" alt="${name}">
        <h3 class="event-title" >${name}</h3>
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
    const btn = document.createElement("div");
    btn.classList.add("page-btn");
    if (i === currentPage) btn.classList.add("active");
    btn.textContent = i + 1;

    btn.addEventListener("click", () => {
      loadEvents(i);
    });

    pagination.appendChild(btn);
  }

  if (end < totalPages) {
    const dots = document.createElement("div");
    dots.textContent = "...";
    dots.style.padding = "6px";
    dots.style.color = "#fff"; 
    pagination.appendChild(dots);

    const last = document.createElement("div");
    last.classList.add("page-btn");
    last.textContent = totalPages;
    last.addEventListener("click", () => {
      loadEvents(totalPages - 1);
    });

    pagination.appendChild(last);
  }
}

loadEvents();