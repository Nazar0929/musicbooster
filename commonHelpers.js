import{initializeApp as te}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";import{getAuth as ne,GoogleAuthProvider as se,signInWithPopup as oe,signInAnonymously as ae,onAuthStateChanged as K,signOut as ce}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}})();window.addEventListener("load",()=>{const e=document.querySelector(".preloader"),n=document.getElementById("content"),s=document.querySelector(".progress-ring__circle"),o=s.r.baseVal.value,t=2*Math.PI*o;s.style.strokeDasharray=`${t} ${t}`,s.style.strokeDashoffset=t;let a=0;const c=setInterval(()=>{a+=1;const l=t-a/100*t;s.style.strokeDashoffset=l,a>=100&&(clearInterval(c),e.style.transition="opacity 1s ease",e.style.opacity="0",setTimeout(()=>{e.style.display="none",n.style.display="block",document.body.style.overflow="auto"},1e3))},15)});const le=document.querySelector(".country");countryInput.addEventListener("click",()=>{countryList.classList.toggle("open"),le.classList.toggle("open")});const ie={apiKey:"AIzaSyC4NsRRqrPTkrffod7c5jsM1QSRJvpVe0w",authDomain:"events-project-21e9a.firebaseapp.com",projectId:"events-project-21e9a",storageBucket:"events-project-21e9a.appspot.com",messagingSenderId:"480946051710",appId:"1:480946051710:web:76486820763f85d427162f"},re=te(ie),E=ne(re),k=document.querySelector(".sign-in-button"),w=document.querySelector(".auth-container");k.addEventListener("click",()=>{w.classList.toggle("open"),w.classList.contains("open")?k.textContent="Close":k.textContent="Sign in"});const de=document.querySelector(".google"),me=document.querySelector(".guest");de.addEventListener("click",()=>{const e=new se;oe(E,e)});me.addEventListener("click",()=>{ae(E)});const ue=document.querySelector(".user-name"),S=document.querySelector(".user-info"),pe=document.querySelector(".logout");K(E,e=>{e?(S.classList.add("active"),ue.textContent=e.displayName||"Guest user"):S.classList.remove("active")});pe.addEventListener("click",()=>{ce(E)});const O=document.querySelector(".user-photo"),R=document.querySelector(".auth-wrapper"),ve=document.querySelector(".user-display-name");K(E,e=>{if(e){S.classList.add("active"),R.classList.add("logged-in"),w.classList.remove("open");let n="";if(e.isAnonymous?n=`Guest_${e.uid.slice(-4).toUpperCase()}`:e.displayName?n=e.displayName:e.email?n=e.email.split("@")[0]:n="User",ve.textContent=n,e.photoURL)O.src=e.photoURL;else{const s=n.charAt(0).toUpperCase(),o=e.isAnonymous?"7b1fa2":"34495e";O.src=`https://ui-avatars.com/api/?name=${s}&background=${o}&color=fff&size=128`}}else S.classList.remove("active"),R.classList.remove("logged-in")});const V="Q8bHL81HES4CjxatVZAVSQWYyAffYhbQ",Y=document.querySelector(".events-list"),b=document.getElementById("pagination"),I=document.querySelector("[data-modal]"),ge=document.querySelector(".modal__wrap"),ye=document.querySelector("[data-close]"),F=document.body,D=document.querySelector('.header__input[placeholder="Start searching"]'),H=document.querySelector(".country"),Q=document.getElementById("countryInput"),L=document.querySelector(".country-list");let Z="",G="US",C=0,f=0,W;const fe=[{name:"United States",code:"US"},{name:"Germany",code:"DE"},{name:"United Kingdom",code:"GB"},{name:"France",code:"FR"},{name:"Spain",code:"ES"},{name:"Italy",code:"IT"},{name:"Australia",code:"AU"},{name:"Canada",code:"CA"},{name:"Argentina",code:"AR"},{name:"Austria",code:"AT"},{name:"Belgium",code:"BE"},{name:"Brazil",code:"BR"},{name:"Netherlands",code:"NL"},{name:"Poland",code:"PL"},{name:"Sweden",code:"SE"},{name:"Switzerland",code:"CH"},{name:"Ukraine",code:"UA"},{name:"Denmark",code:"DK"},{name:"Finland",code:"FI"},{name:"Norway",code:"NO"},{name:"Portugal",code:"PT"},{name:"Ireland",code:"IE"},{name:"Mexico",code:"MX"},{name:"New Zealand",code:"NZ"},{name:"Czech Republic",code:"CZ"},{name:"Hungary",code:"HU"}];function he(){const e=fe.map(n=>`<li data-code="${n.code}">${n.name}</li>`).join("");L.innerHTML=e}he();Q.addEventListener("click",()=>{H.classList.toggle("open"),L.classList.toggle("open")});L.addEventListener("click",e=>{if(e.target.tagName!=="LI")return;const n=e.target.dataset.code,s=e.target.textContent;Q.value=s,G=n,L.classList.remove("open"),H.classList.remove("open"),_(0)});document.addEventListener("click",e=>{e.target.closest(".country")||(L.classList.remove("open"),H.classList.remove("open"))});D.addEventListener("input",()=>{clearTimeout(W),W=setTimeout(()=>{Z=D.value.trim(),_(0)},500)});async function _(e=0){var a,c;const n=`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${V}&countryCode=${G}&keyword=${Z}&size=20&page=${e}`,o=await(await fetch(n)).json(),t=((a=o._embedded)==null?void 0:a.events)||[];f=Math.min(((c=o.page)==null?void 0:c.totalPages)||0,29),C=e,Le(t),_e()}function Le(e){const n=e.map(s=>{var l,r,i,d,m,u,p;const o=((r=(l=s.images)==null?void 0:l[0])==null?void 0:r.url)||"",t=s.name||"",a=((d=(i=s.dates)==null?void 0:i.start)==null?void 0:d.localDate)||"",c=((p=(u=(m=s._embedded)==null?void 0:m.venues)==null?void 0:u[0])==null?void 0:p.name)||"";return`
      <li class="event-card" data-id="${s.id}">
        <img class="event-img" src="${o}" alt="${t}">
        <h3 class="event-title">${t}</h3>
        <p class="event-date">${a}</p>
        <p class="event-place">${c} <svg
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
    `}).join("");Y.innerHTML=n}function _e(){b.innerHTML="";const e=5;let n=Math.max(0,C-2),s=Math.min(f,n+e);s-n<e&&(n=Math.max(0,s-e));for(let o=n;o<s;o++){const t=document.createElement("button");t.className="page-btn",t.textContent=o+1,o===C&&t.classList.add("active"),t.addEventListener("click",()=>_(o)),b.appendChild(t)}if(s<f){const o=document.createElement("span");o.textContent="...",o.className="dots",b.appendChild(o);const t=document.createElement("button");t.className="page-btn",t.textContent=f,t.addEventListener("click",()=>_(f-1)),b.appendChild(t)}}Y.addEventListener("click",Ee);async function Ee(e){const n=e.target.closest(".event-card");if(!n)return;const s=n.dataset.id,t=await(await fetch(`https://app.ticketmaster.com/discovery/v2/events/${s}.json?apikey=${V}`)).json();ge.innerHTML=be(t),I.classList.remove("backdrop-hidden"),F.classList.add("no-scroll")}function be(e){var i,d,m,u,p,g,y,T,B,P,z,U,j;const n=((d=(i=e.images)==null?void 0:i[0])==null?void 0:d.url)||"",s=e.name||"",o=e.info||"No information",t=((u=(m=e.dates)==null?void 0:m.start)==null?void 0:u.localDate)||"",a=((g=(p=e.dates)==null?void 0:p.start)==null?void 0:g.localTime)||"",c=((P=(B=(T=(y=e._embedded)==null?void 0:y.venues)==null?void 0:T[0])==null?void 0:B.city)==null?void 0:P.name)||"",l=((j=(U=(z=e._embedded)==null?void 0:z.venues)==null?void 0:U[0])==null?void 0:j.name)||"",r=e.url||"#";return`
    <img class="modal__preview" src="${n}" />
    <div class="content">
      <img class="content__image" src="${n}" />
      <ul>
        <li><b>INFO:</b> ${o}</li>
        <li><b>WHEN:</b> ${t} ${a}</li>
        <li><b>WHERE:</b> ${c} — ${l}</li>
        <li><b>WHO:</b> ${s}</li>
        <li>
          <a class="modal__btn" href="${r}" target="_blank">BUY TICKETS</a>
        </li>
      </ul>
    </div>
  `}ye.addEventListener("click",q);I.addEventListener("click",e=>{e.target.closest(".modal")||q()});document.addEventListener("keydown",e=>{e.code==="Escape"&&q()});function q(){I.classList.add("backdrop-hidden"),F.classList.remove("no-scroll")}_();const J="Q8bHL81HES4CjxatVZAVSQWYyAffYhbQ",X=document.querySelector(".events-list"),$=document.getElementById("pagination"),N=document.querySelector("[data-modal]"),$e=document.querySelector(".modal__wrap"),Se=document.querySelector("[data-close]"),ee=document.body;let M=0,h=0;async function x(e=0){var a,c;const n=`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${J}&countryCode=US&size=20&page=${e}`,o=await(await fetch(n)).json(),t=((a=o._embedded)==null?void 0:a.events)||[];h=Math.min(((c=o.page)==null?void 0:c.totalPages)||0,29),M=e,ke(t),we()}function ke(e){const n=e.map(s=>{var o,t,a,c,l,r,i;return`
    <li class="event-card" data-id="${s.id}">
      <img class="event-img" src="${((t=(o=s.images)==null?void 0:o[0])==null?void 0:t.url)||""}" alt="${s.name}">
      <h3 class="event-title">${s.name}</h3>
      <p class="event-date">${((c=(a=s.dates)==null?void 0:a.start)==null?void 0:c.localDate)||""}</p>
      <p class="event-place">${((i=(r=(l=s._embedded)==null?void 0:l.venues)==null?void 0:r[0])==null?void 0:i.name)||""}</p>
    </li>
  `}).join("");X.innerHTML=n}function we(){$.innerHTML="";const e=5;let n=Math.max(0,M-2),s=Math.min(h,n+e);s-n<e&&(n=Math.max(0,s-e));for(let o=n;o<s;o++){const t=document.createElement("button");t.className="page-btn",t.textContent=o+1,o===M&&t.classList.add("active"),t.addEventListener("click",()=>x(o)),$.appendChild(t)}if(s<h){const o=document.createElement("span");o.textContent="...",o.className="dots",$.appendChild(o);const t=document.createElement("button");t.className="page-btn",t.textContent=h,t.addEventListener("click",()=>x(h-1)),$.appendChild(t)}}X.addEventListener("click",async e=>{const n=e.target.closest(".event-card");if(!n)return;const s=n.dataset.id,t=await(await fetch(`https://app.ticketmaster.com/discovery/v2/events/${s}.json?apikey=${J}`)).json();$e.innerHTML=Ce(t),N.classList.remove("backdrop-hidden"),ee.classList.add("no-scroll")});Se.addEventListener("click",A);N.addEventListener("click",e=>{e.target.closest(".modal")||A()});document.addEventListener("keydown",e=>{e.code==="Escape"&&A()});function A(){N.classList.add("backdrop-hidden"),ee.classList.remove("no-scroll")}function Ce(e){var n,s,o,t,a,c,l,r,i,d,m,u,p,g,y;return`
    <img class="modal__preview" src="${((s=(n=e.images)==null?void 0:n[0])==null?void 0:s.url)||""}" />

    <div class="content">
      <img class="content__image" src="${((t=(o=e.images)==null?void 0:o[0])==null?void 0:t.url)||""}" />

      <ul class="content__list">

        <li>
          <h2 class="modal__title">INFO</h2>
          <p class="modal__text">${e.info||"No information"}</p>
        </li>

        <li>
          <h2 class="modal__title">WHEN</h2>
          <p class="modal__text">${((c=(a=e.dates)==null?void 0:a.start)==null?void 0:c.localDate)||""}</p>
          <p class="modal__text">${((r=(l=e.dates)==null?void 0:l.start)==null?void 0:r.localTime)||""}</p>
        </li>

        <li>
          <h2 class="modal__title">WHERE</h2>
          <p class="modal__text">${((u=(m=(d=(i=e._embedded)==null?void 0:i.venues)==null?void 0:d[0])==null?void 0:m.city)==null?void 0:u.name)||""}</p>
          <p class="modal__text">${((y=(g=(p=e._embedded)==null?void 0:p.venues)==null?void 0:g[0])==null?void 0:y.name)||""}</p>
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
  `}x();const Me=document.querySelector(".footer-open-modal"),v=document.querySelector("#modal"),xe=v.querySelector(".close");Me.addEventListener("click",e=>{e.preventDefault(),v.classList.add("is-open"),document.body.style.overflow="hidden"});xe.addEventListener("click",()=>{v.classList.remove("is-open"),document.body.style.overflow="visible"});v.addEventListener("click",e=>{e.target===v&&(v.classList.remove("is-open"),document.body.style.overflow="visible")});
//# sourceMappingURL=commonHelpers.js.map
