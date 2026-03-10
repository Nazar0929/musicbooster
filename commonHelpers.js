(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();window.addEventListener("load",()=>{const e=document.querySelector(".preloader"),s=document.getElementById("content"),n=document.querySelector(".progress-ring__circle"),a=n.r.baseVal.value,t=2*Math.PI*a;n.style.strokeDasharray=`${t} ${t}`,n.style.strokeDashoffset=t;let o=0;const c=setInterval(()=>{o+=1;const l=t-o/100*t;n.style.strokeDashoffset=l,o>=100&&(clearInterval(c),e.style.transition="opacity 1s ease",e.style.opacity="0",setTimeout(()=>{e.style.display="none",s.style.display="block",document.body.style.overflow="auto"},1e3))},15)});const V=document.querySelector(".country");countryInput.addEventListener("click",()=>{countryList.classList.toggle("open"),V.classList.toggle("open")});const O="Q8bHL81HES4CjxatVZAVSQWYyAffYhbQ",j=document.querySelector(".events-list"),L=document.getElementById("pagination"),M=document.querySelector("[data-modal]"),Z=document.querySelector(".modal__wrap"),Q=document.querySelector("[data-close]"),D=document.body,A=document.querySelector('.header__input[placeholder="Start searching"]'),b=document.querySelector(".country"),S=document.getElementById("countryInput"),h=document.querySelector(".country-list");let R="",W="US",w=0,g=0,U;const G=[{name:"United States",code:"US"},{name:"Germany",code:"DE"},{name:"United Kingdom",code:"GB"},{name:"France",code:"FR"},{name:"Spain",code:"ES"},{name:"Italy",code:"IT"},{name:"Australia",code:"AU"},{name:"Canada",code:"CA"},{name:"Argentina",code:"AR"},{name:"Austria",code:"AT"},{name:"Belgium",code:"BE"},{name:"Brazil",code:"BR"},{name:"Netherlands",code:"NL"},{name:"Poland",code:"PL"},{name:"Sweden",code:"SE"},{name:"Switzerland",code:"CH"},{name:"Ukraine",code:"UA"},{name:"Denmark",code:"DK"},{name:"Finland",code:"FI"},{name:"Norway",code:"NO"},{name:"Portugal",code:"PT"},{name:"Ireland",code:"IE"},{name:"Mexico",code:"MX"},{name:"New Zealand",code:"NZ"},{name:"Czech Republic",code:"CZ"},{name:"Hungary",code:"HU"}];function X(){const e=G.map(s=>`<li data-code="${s.code}">${s.name}</li>`).join("");h.innerHTML=e}X();S.addEventListener("click",()=>{h.classList.toggle("open"),b.classList.toggle("open")});S.addEventListener("focus",()=>{h.classList.add("open"),b.classList.add("open")});h.addEventListener("click",e=>{if(e.target.tagName!=="LI")return;const s=e.target.dataset.code,n=e.target.textContent;S.value=n,W=s,h.classList.remove("open"),b.classList.remove("open"),E(0)});document.addEventListener("click",e=>{e.target.closest(".country")||(h.classList.remove("open"),b.classList.remove("open"))});A.addEventListener("input",()=>{clearTimeout(U),U=setTimeout(()=>{R=A.value.trim(),E(0)},500)});async function E(e=0){var o,c;const s=`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${O}&countryCode=${W}&keyword=${R}&size=20&page=${e}`,a=await(await fetch(s)).json(),t=((o=a._embedded)==null?void 0:o.events)||[];g=Math.min(((c=a.page)==null?void 0:c.totalPages)||0,29),w=e,J(t),ee()}function J(e){const s=e.map(n=>{var l,d,i,r,m,u,p;const a=((d=(l=n.images)==null?void 0:l[0])==null?void 0:d.url)||"",t=n.name||"",o=((r=(i=n.dates)==null?void 0:i.start)==null?void 0:r.localDate)||"",c=((p=(u=(m=n._embedded)==null?void 0:m.venues)==null?void 0:u[0])==null?void 0:p.name)||"";return`
      <li class="event-card" data-id="${n.id}">
        <img class="event-img" src="${a}" alt="${t}">
        <h3 class="event-title">${t}</h3>
        <p class="event-date">${o}</p>
        <p class="event-place">${c}<svg
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
</svg>
 </p>
      </li>
    `}).join("");j.innerHTML=s}function ee(){L.innerHTML="";const e=5;let s=Math.max(0,w-2),n=Math.min(g,s+e);n-s<e&&(s=Math.max(0,n-e));for(let a=s;a<n;a++){const t=document.createElement("button");t.className="page-btn",t.textContent=a+1,a===w&&t.classList.add("active"),t.addEventListener("click",()=>E(a)),L.appendChild(t)}if(n<g){const a=document.createElement("span");a.textContent="...",a.className="dots",L.appendChild(a);const t=document.createElement("button");t.className="page-btn",t.textContent=g,t.addEventListener("click",()=>E(g-1)),L.appendChild(t)}}j.addEventListener("click",te);async function te(e){const s=e.target.closest(".event-card");if(!s)return;const n=s.dataset.id,t=await(await fetch(`https://app.ticketmaster.com/discovery/v2/events/${n}.json?apikey=${O}`)).json();Z.innerHTML=ne(t),M.classList.remove("backdrop-hidden"),D.classList.add("no-scroll")}function ne(e){var i,r,m,u,p,y,f,T,N,P,z,B,q;const s=((r=(i=e.images)==null?void 0:i[0])==null?void 0:r.url)||"",n=e.name||"",a=e.info||"No information",t=((u=(m=e.dates)==null?void 0:m.start)==null?void 0:u.localDate)||"",o=((y=(p=e.dates)==null?void 0:p.start)==null?void 0:y.localTime)||"",c=((P=(N=(T=(f=e._embedded)==null?void 0:f.venues)==null?void 0:T[0])==null?void 0:N.city)==null?void 0:P.name)||"",l=((q=(B=(z=e._embedded)==null?void 0:z.venues)==null?void 0:B[0])==null?void 0:q.name)||"",d=e.url||"#";return`
    <img class="modal__preview" src="${s}" />
    <div class="content">
      <img class="content__image" src="${s}" />
      <ul>
        <li><b>INFO:</b> ${a}</li>
        <li><b>WHEN:</b> ${t} ${o}</li>
        <li><b>WHERE:</b> ${c} — ${l}</li>
        <li><b>WHO:</b> ${n}</li>
        <li>
          <a class="modal__btn" href="${d}" target="_blank">BUY TICKETS</a>
        </li>
      </ul>
    </div>
  `}Q.addEventListener("click",x);M.addEventListener("click",e=>{e.target.closest(".modal")||x()});document.addEventListener("keydown",e=>{e.code==="Escape"&&x()});function x(){M.classList.add("backdrop-hidden"),D.classList.remove("no-scroll")}E();const Y="Q8bHL81HES4CjxatVZAVSQWYyAffYhbQ",F=document.querySelector(".events-list"),$=document.getElementById("pagination"),H=document.querySelector("[data-modal]"),ae=document.querySelector(".modal__wrap"),se=document.querySelector("[data-close]"),K=document.body;let k=0,_=0;async function C(e=0){var o,c;const s=`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${Y}&countryCode=US&size=20&page=${e}`,a=await(await fetch(s)).json(),t=((o=a._embedded)==null?void 0:o.events)||[];_=Math.min(((c=a.page)==null?void 0:c.totalPages)||0,29),k=e,oe(t),ce()}function oe(e){const s=e.map(n=>{var a,t,o,c,l,d,i;return`
    <li class="event-card" data-id="${n.id}">
      <img class="event-img" src="${((t=(a=n.images)==null?void 0:a[0])==null?void 0:t.url)||""}" alt="${n.name}">
      <h3 class="event-title">${n.name}</h3>
      <p class="event-date">${((c=(o=n.dates)==null?void 0:o.start)==null?void 0:c.localDate)||""}</p>
      <p class="event-place">${((i=(d=(l=n._embedded)==null?void 0:l.venues)==null?void 0:d[0])==null?void 0:i.name)||""}</p>
    </li>
  `}).join("");F.innerHTML=s}function ce(){$.innerHTML="";const e=5;let s=Math.max(0,k-2),n=Math.min(_,s+e);n-s<e&&(s=Math.max(0,n-e));for(let a=s;a<n;a++){const t=document.createElement("button");t.className="page-btn",t.textContent=a+1,a===k&&t.classList.add("active"),t.addEventListener("click",()=>C(a)),$.appendChild(t)}if(n<_){const a=document.createElement("span");a.textContent="...",a.className="dots",$.appendChild(a);const t=document.createElement("button");t.className="page-btn",t.textContent=_,t.addEventListener("click",()=>C(_-1)),$.appendChild(t)}}F.addEventListener("click",async e=>{const s=e.target.closest(".event-card");if(!s)return;const n=s.dataset.id,t=await(await fetch(`https://app.ticketmaster.com/discovery/v2/events/${n}.json?apikey=${Y}`)).json();ae.innerHTML=le(t),H.classList.remove("backdrop-hidden"),K.classList.add("no-scroll")});se.addEventListener("click",I);H.addEventListener("click",e=>{e.target.closest(".modal")||I()});document.addEventListener("keydown",e=>{e.code==="Escape"&&I()});function I(){H.classList.add("backdrop-hidden"),K.classList.remove("no-scroll")}function le(e){var s,n,a,t,o,c,l,d,i,r,m,u,p,y,f;return`
    <img class="modal__preview" src="${((n=(s=e.images)==null?void 0:s[0])==null?void 0:n.url)||""}" />

    <div class="content">
      <img class="content__image" src="${((t=(a=e.images)==null?void 0:a[0])==null?void 0:t.url)||""}" />

      <ul class="content__list">

        <li>
          <h2 class="modal__title">INFO</h2>
          <p class="modal__text">${e.info||"No information"}</p>
        </li>

        <li>
          <h2 class="modal__title">WHEN</h2>
          <p class="modal__text">${((c=(o=e.dates)==null?void 0:o.start)==null?void 0:c.localDate)||""}</p>
          <p class="modal__text">${((d=(l=e.dates)==null?void 0:l.start)==null?void 0:d.localTime)||""}</p>
        </li>

        <li>
          <h2 class="modal__title">WHERE</h2>
          <p class="modal__text">${((u=(m=(r=(i=e._embedded)==null?void 0:i.venues)==null?void 0:r[0])==null?void 0:m.city)==null?void 0:u.name)||""}</p>
          <p class="modal__text">${((f=(y=(p=e._embedded)==null?void 0:p.venues)==null?void 0:y[0])==null?void 0:f.name)||""}</p>
        </li>

        <li>
          <h2 class="modal__title">WHO</h2>
          <p class="modal__text">${e.name||""}</p>
        </li>

        <li class="modal__pric">
          <h2 class="modal__title">PRICES</h2>

          <div class="price__wrap">
          <svg class="price__icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 29 20"><path d="M3.22 0H0v19.33h3.22zm8.11 0H8.1v19.33h3.23zm4.88 0h-3.22v19.33h3.22zM29 0h-4.78v19.33H29zM6.44 0H4.88v19.33h1.56zm12.89 0h-1.56v19.33h1.56zm3.23 0h-1.57v19.33h1.57z" fill="#0E0E0E"/></svg>
            <p class="modal__text">Standart 300-500 UAH</p>
            
          </div>

          <a class="modal__btn" href="${e.url||"#"}" target="_blank">
            BUY TICKETS
          </a>

          <div class="price__wrap">
            <svg class="price__icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 29 20"><path d="M3.22 0H0v19.33h3.22zm8.11 0H8.1v19.33h3.23zm4.88 0h-3.22v19.33h3.22zM29 0h-4.78v19.33H29zM6.44 0H4.88v19.33h1.56zm12.89 0h-1.56v19.33h1.56zm3.23 0h-1.57v19.33h1.57z" fill="#0E0E0E"/></svg>
            <p class="modal__text">VIP 1000-1500 UAH</p>
          </div>

          <a class="modal__btn" href="${e.url||"#"}" target="_blank">
            BUY TICKETS
          </a>

        </li>

      </ul>
    </div>

    <a class="btn-info" href="${e.url||"#"}" target="_blank">
      MORE FROM THIS AUTHOR
    </a>
  `}C();const ie=document.querySelector(".footer-open-modal"),v=document.querySelector("#modal"),de=v.querySelector(".close");ie.addEventListener("click",e=>{e.preventDefault(),v.classList.add("is-open"),document.body.style.overflow="hidden"});de.addEventListener("click",()=>{v.classList.remove("is-open"),document.body.style.overflow="visible"});v.addEventListener("click",e=>{e.target===v&&(v.classList.remove("is-open"),document.body.style.overflow="visible")});
//# sourceMappingURL=commonHelpers.js.map
