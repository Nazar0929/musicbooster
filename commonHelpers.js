(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();window.addEventListener("load",()=>{const e=document.querySelector(".preloader"),s=document.getElementById("content"),n=document.querySelector(".progress-ring__circle"),a=n.r.baseVal.value,t=2*Math.PI*a;n.style.strokeDasharray=`${t} ${t}`,n.style.strokeDashoffset=t;let o=0;const c=setInterval(()=>{o+=1;const l=t-o/100*t;n.style.strokeDashoffset=l,o>=100&&(clearInterval(c),e.style.transition="opacity 1s ease",e.style.opacity="0",setTimeout(()=>{e.style.display="none",s.style.display="block",document.body.style.overflow="auto"},1e3))},15)});const V=document.querySelector(".country");countryInput.addEventListener("click",()=>{countryList.classList.toggle("open"),V.classList.toggle("open")});const O="Q8bHL81HES4CjxatVZAVSQWYyAffYhbQ",j=document.querySelector(".events-list"),L=document.getElementById("pagination"),M=document.querySelector("[data-modal]"),Q=document.querySelector(".modal__wrap"),Z=document.querySelector("[data-close]"),D=document.body,B=document.querySelector('.header__input[placeholder="Start searching"]'),b=document.querySelector(".country"),H=document.getElementById("countryInput"),y=document.querySelector(".country-list");let R="",W="US",k=0,g=0,U;const G=[{name:"United States",code:"US"},{name:"Germany",code:"DE"},{name:"United Kingdom",code:"GB"},{name:"France",code:"FR"},{name:"Spain",code:"ES"},{name:"Italy",code:"IT"},{name:"Australia",code:"AU"},{name:"Canada",code:"CA"},{name:"Argentina",code:"AR"},{name:"Austria",code:"AT"},{name:"Belgium",code:"BE"},{name:"Brazil",code:"BR"},{name:"Netherlands",code:"NL"},{name:"Poland",code:"PL"},{name:"Sweden",code:"SE"},{name:"Switzerland",code:"CH"},{name:"Ukraine",code:"UA"},{name:"Denmark",code:"DK"},{name:"Finland",code:"FI"},{name:"Norway",code:"NO"},{name:"Portugal",code:"PT"},{name:"Ireland",code:"IE"},{name:"Mexico",code:"MX"},{name:"New Zealand",code:"NZ"},{name:"Czech Republic",code:"CZ"},{name:"Hungary",code:"HU"}];function X(){const e=G.map(s=>`<li data-code="${s.code}">${s.name}</li>`).join("");y.innerHTML=e}X();H.addEventListener("click",()=>{y.classList.toggle("open"),b.classList.toggle("open")});H.addEventListener("focus",()=>{y.classList.add("open"),b.classList.add("open")});y.addEventListener("click",e=>{if(e.target.tagName!=="LI")return;const s=e.target.dataset.code,n=e.target.textContent;H.value=n,W=s,y.classList.remove("open"),b.classList.remove("open"),E(0)});document.addEventListener("click",e=>{e.target.closest(".country")||(y.classList.remove("open"),b.classList.remove("open"))});B.addEventListener("input",()=>{clearTimeout(U),U=setTimeout(()=>{R=B.value.trim(),E(0)},500)});async function E(e=0){var o,c;const s=`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${O}&countryCode=${W}&keyword=${R}&size=20&page=${e}`,a=await(await fetch(s)).json(),t=((o=a._embedded)==null?void 0:o.events)||[];g=Math.min(((c=a.page)==null?void 0:c.totalPages)||0,29),k=e,J(t),ee()}function J(e){const s=e.map(n=>{var l,i,d,r,m,u,p;const a=((i=(l=n.images)==null?void 0:l[0])==null?void 0:i.url)||"",t=n.name||"",o=((r=(d=n.dates)==null?void 0:d.start)==null?void 0:r.localDate)||"",c=((p=(u=(m=n._embedded)==null?void 0:m.venues)==null?void 0:u[0])==null?void 0:p.name)||"";return`
      <li class="event-card" data-id="${n.id}">
        <img class="event-img" src="${a}" alt="${t}">
        <h3 class="event-title">${t}</h3>
        <p class="event-date">${o}</p>
        <p class="event-place">${c}</p>
      </li>
    `}).join("");j.innerHTML=s}function ee(){L.innerHTML="";const e=5;let s=Math.max(0,k-2),n=Math.min(g,s+e);n-s<e&&(s=Math.max(0,n-e));for(let a=s;a<n;a++){const t=document.createElement("button");t.className="page-btn",t.textContent=a+1,a===k&&t.classList.add("active"),t.addEventListener("click",()=>E(a)),L.appendChild(t)}if(n<g){const a=document.createElement("span");a.textContent="...",a.className="dots",L.appendChild(a);const t=document.createElement("button");t.className="page-btn",t.textContent=g,t.addEventListener("click",()=>E(g-1)),L.appendChild(t)}}j.addEventListener("click",te);async function te(e){const s=e.target.closest(".event-card");if(!s)return;const n=s.dataset.id,t=await(await fetch(`https://app.ticketmaster.com/discovery/v2/events/${n}.json?apikey=${O}`)).json();Q.innerHTML=ne(t),M.classList.remove("backdrop-hidden"),D.classList.add("no-scroll")}function ne(e){var d,r,m,u,p,f,h,T,N,P,z,q,A;const s=((r=(d=e.images)==null?void 0:d[0])==null?void 0:r.url)||"",n=e.name||"",a=e.info||"No information",t=((u=(m=e.dates)==null?void 0:m.start)==null?void 0:u.localDate)||"",o=((f=(p=e.dates)==null?void 0:p.start)==null?void 0:f.localTime)||"",c=((P=(N=(T=(h=e._embedded)==null?void 0:h.venues)==null?void 0:T[0])==null?void 0:N.city)==null?void 0:P.name)||"",l=((A=(q=(z=e._embedded)==null?void 0:z.venues)==null?void 0:q[0])==null?void 0:A.name)||"",i=e.url||"#";return`
    <img class="modal__preview" src="${s}" />
    <div class="content">
      <img class="content__image" src="${s}" />
      <ul>
        <li><b>INFO:</b> ${a}</li>
        <li><b>WHEN:</b> ${t} ${o}</li>
        <li><b>WHERE:</b> ${c} — ${l}</li>
        <li><b>WHO:</b> ${n}</li>
        <li>
          <a class="modal__btn" href="${i}" target="_blank">BUY TICKETS</a>
        </li>
      </ul>
    </div>
  `}Z.addEventListener("click",x);M.addEventListener("click",e=>{e.target.closest(".modal")||x()});document.addEventListener("keydown",e=>{e.code==="Escape"&&x()});function x(){M.classList.add("backdrop-hidden"),D.classList.remove("no-scroll")}E();const Y="Q8bHL81HES4CjxatVZAVSQWYyAffYhbQ",F=document.querySelector(".events-list"),$=document.getElementById("pagination"),C=document.querySelector("[data-modal]"),ae=document.querySelector(".modal__wrap"),se=document.querySelector("[data-close]"),K=document.body;let w=0,_=0;async function S(e=0){var o,c;const s=`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${Y}&countryCode=US&size=20&page=${e}`,a=await(await fetch(s)).json(),t=((o=a._embedded)==null?void 0:o.events)||[];_=Math.min(((c=a.page)==null?void 0:c.totalPages)||0,29),w=e,oe(t),ce()}function oe(e){const s=e.map(n=>{var a,t,o,c,l,i,d;return`
    <li class="event-card" data-id="${n.id}">
      <img class="event-img" src="${((t=(a=n.images)==null?void 0:a[0])==null?void 0:t.url)||""}" alt="${n.name}">
      <h3 class="event-title">${n.name}</h3>
      <p class="event-date">${((c=(o=n.dates)==null?void 0:o.start)==null?void 0:c.localDate)||""}</p>
      <p class="event-place">${((d=(i=(l=n._embedded)==null?void 0:l.venues)==null?void 0:i[0])==null?void 0:d.name)||""}</p>
    </li>
  `}).join("");F.innerHTML=s}function ce(){$.innerHTML="";const e=5;let s=Math.max(0,w-2),n=Math.min(_,s+e);n-s<e&&(s=Math.max(0,n-e));for(let a=s;a<n;a++){const t=document.createElement("button");t.className="page-btn",t.textContent=a+1,a===w&&t.classList.add("active"),t.addEventListener("click",()=>S(a)),$.appendChild(t)}if(n<_){const a=document.createElement("span");a.textContent="...",a.className="dots",$.appendChild(a);const t=document.createElement("button");t.className="page-btn",t.textContent=_,t.addEventListener("click",()=>S(_-1)),$.appendChild(t)}}F.addEventListener("click",async e=>{const s=e.target.closest(".event-card");if(!s)return;const n=s.dataset.id,t=await(await fetch(`https://app.ticketmaster.com/discovery/v2/events/${n}.json?apikey=${Y}`)).json();ae.innerHTML=le(t),C.classList.remove("backdrop-hidden"),K.classList.add("no-scroll")});se.addEventListener("click",I);C.addEventListener("click",e=>{e.target.closest(".modal")||I()});document.addEventListener("keydown",e=>{e.code==="Escape"&&I()});function I(){C.classList.add("backdrop-hidden"),K.classList.remove("no-scroll")}function le(e){var s,n,a,t,o,c,l,i,d,r,m,u,p,f,h;return`
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
          <p class="modal__text">${((i=(l=e.dates)==null?void 0:l.start)==null?void 0:i.localTime)||""}</p>
        </li>

        <li>
          <h2 class="modal__title">WHERE</h2>
          <p class="modal__text">${((u=(m=(r=(d=e._embedded)==null?void 0:d.venues)==null?void 0:r[0])==null?void 0:m.city)==null?void 0:u.name)||""}</p>
          <p class="modal__text">${((h=(f=(p=e._embedded)==null?void 0:p.venues)==null?void 0:f[0])==null?void 0:h.name)||""}</p>
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
  `}S();const de=document.querySelector(".footer-open-modal"),v=document.querySelector("#modal"),ie=v.querySelector(".close");de.addEventListener("click",e=>{e.preventDefault(),v.classList.add("is-open"),document.body.style.overflow="hidden"});ie.addEventListener("click",()=>{v.classList.remove("is-open"),document.body.style.overflow="visible"});v.addEventListener("click",e=>{e.target===v&&(v.classList.remove("is-open"),document.body.style.overflow="visible")});
//# sourceMappingURL=commonHelpers.js.map
