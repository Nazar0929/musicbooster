import{initializeApp as Z}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";import{getAuth as V,GoogleAuthProvider as W,signInWithPopup as F,signInAnonymously as J,onAuthStateChanged as P,signOut as X}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();window.addEventListener("load",()=>{const e=document.querySelector(".preloader"),o=document.getElementById("content"),n=document.querySelector(".progress-ring__circle"),a=n.r.baseVal.value,t=2*Math.PI*a;n.style.strokeDasharray=`${t} ${t}`,n.style.strokeDashoffset=t;let s=0;const c=setInterval(()=>{s+=1;const i=t-s/100*t;n.style.strokeDashoffset=i,s>=100&&(clearInterval(c),e.style.transition="opacity 1s ease",e.style.opacity="0",setTimeout(()=>{e.style.display="none",o.style.display="block",document.body.style.overflow="auto"},1e3))},15)});const ee=document.querySelector(".country");countryInput.addEventListener("click",()=>{countryList.classList.toggle("open"),ee.classList.toggle("open")});const te={apiKey:"AIzaSyC4NsRRqrPTkrffod7c5jsM1QSRJvpVe0w",authDomain:"events-project-21e9a.firebaseapp.com",projectId:"events-project-21e9a",storageBucket:"events-project-21e9a.appspot.com",messagingSenderId:"480946051710",appId:"1:480946051710:web:76486820763f85d427162f"},ne=Z(te),v=V(ne),z=document.querySelector(".sign-in-button"),T=document.querySelector(".auth-container");z.addEventListener("click",()=>{T.classList.toggle("open"),T.classList.contains("open")?z.textContent="Close":z.textContent="Sign in"});const oe=document.querySelector(".google"),ae=document.querySelector(".guest");oe.addEventListener("click",()=>{const e=new W;F(v,e)});ae.addEventListener("click",()=>{J(v)});const se=document.querySelector(".user-name"),N=document.querySelector(".user-info"),ce=document.querySelector(".logout");P(v,e=>{e?(N.classList.add("active"),se.textContent=e.displayName||"Guest user"):N.classList.remove("active")});ce.addEventListener("click",()=>{X(v)});const k=document.querySelector(".user-photo"),O=document.querySelector(".auth-wrapper"),ie=document.querySelector(".user-display-name");P(v,e=>{if(e){N.classList.add("active"),O.classList.add("logged-in"),T.classList.remove("open");let o="";if(e.isAnonymous?o=`Guest_${e.uid.slice(-4).toUpperCase()}`:e.displayName?o=e.displayName:e.email?o=e.email.split("@")[0]:o="User",ie.textContent=o,e.photoURL)k.src=e.photoURL;else{const n=o.charAt(0).toUpperCase(),a=e.isAnonymous?"7b1fa2":"34495e";k.src=`https://ui-avatars.com/api/?name=${n}&background=${a}&color=fff&size=128`}}else N.classList.remove("active"),O.classList.remove("logged-in")});const le="Q8bHL81HES4CjxatVZAVSQWYyAffYhbQ",I=document.querySelector(".events-list"),j=document.getElementById("pagination"),re=document.querySelector("[data-modal]"),A=document.querySelector(".modal__wrap");document.querySelector("[data-close]");const de=document.body,H=document.querySelector('.header__input[placeholder="Start searching"]'),E=document.querySelector(".country"),q=document.getElementById("countryInput"),h=document.querySelector(".country-list");let Y="",B="US",D=0,G=0,U;const me=[{name:"United States",code:"US"},{name:"Germany",code:"DE"},{name:"United Kingdom",code:"GB"},{name:"France",code:"FR"},{name:"Spain",code:"ES"},{name:"Italy",code:"IT"},{name:"Australia",code:"AU"},{name:"Canada",code:"CA"},{name:"Argentina",code:"AR"},{name:"Austria",code:"AT"},{name:"Belgium",code:"BE"},{name:"Brazil",code:"BR"},{name:"Netherlands",code:"NL"},{name:"Poland",code:"PL"},{name:"Sweden",code:"SE"},{name:"Switzerland",code:"CH"},{name:"Ukraine",code:"UA"},{name:"Denmark",code:"DK"},{name:"Finland",code:"FI"},{name:"Norway",code:"NO"},{name:"Portugal",code:"PT"},{name:"Ireland",code:"IE"},{name:"Mexico",code:"MX"},{name:"New Zealand",code:"NZ"},{name:"Czech Republic",code:"CZ"},{name:"Hungary",code:"HU"}];function ue(){const e=me.map(o=>`<li data-code="${o.code}">${o.name}</li>`).join("");h.innerHTML=e}ue();q.addEventListener("click",()=>{E.classList.toggle("open"),h.classList.toggle("open")});h.addEventListener("click",e=>{if(e.target.tagName!=="LI")return;const o=e.target.dataset.code,n=e.target.textContent;q.value=n,B=o,h.classList.remove("open"),E.classList.remove("open"),S(0)});document.addEventListener("click",e=>{e.target.closest(".country")||(h.classList.remove("open"),E.classList.remove("open"))});H.addEventListener("input",()=>{clearTimeout(U),U=setTimeout(()=>{Y=H.value.trim(),S(0)},500)});async function S(e=0){var s,c;const o=`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${le}&countryCode=${B}&keyword=${Y}&size=20&page=${e}`,a=await(await fetch(o)).json(),t=((s=a._embedded)==null?void 0:s.events)||[];if(G=Math.min(((c=a.page)==null?void 0:c.totalPages)||0,29),D=e,t.length===0){pe(),j.innerHTML="";return}ge(t),ye()}function pe(){I.classList.add("no-events"),I.innerHTML=`
    <div class="zero-matches">
      <img class="zero-matches__img" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9ImEiPgogICA8cGF0aCBkPSJtMTYyIDEzOS4yMWg0Mjh2NDczLjU4aC00Mjh6Ii8+CiAgPC9jbGlwUGF0aD4KIDwvZGVmcz4KIDxnIGNsaXAtcGF0aD0idXJsKCNhKSI+CiAgPHBhdGggZD0ibTM4My42NSAyNDguNzNjLTczLjgxMi0yNC44ODctMTM1LjAyLTY0Ljc0Mi0xNzUtMTA5LjUyLTEyOC40IDM5Mi42MSA1My40MjYgNDcwLjAzIDUzLjQyNiA0NzAuMDNzMTg2Ljg0IDYzIDMyNy4xOC0zNDEuNjdjLTU4LjkzOCAxMS40MS0xMzEuNzkgNi4wNTA4LTIwNS42LTE4Ljg0NHptLTExMC41OSA3NC44ODNjMTkuMjAzIDYuNDcyNyAzMS4xMDIgMjYuNDQ1IDMyLjc5NyA1MC42NDggMCAwLTE4LjM5NS0yNi0zOC43ODUtMzIuODc1LTIwLjM5MS02Ljg3NS01MC43NzcgMi42NzE5LTUwLjc3NyAyLjY3MTkgMTYuMDA0LTE4LjIzOCAzNy41NjYtMjYuOTI2IDU2Ljc2Ni0yMC40NDV6bTM2Ljg3NSAxNDMuNzFjLTQ4LjA1NS0xNi4yMDctMTE1Ljg5LTQuODM1OS0xMTUuODktNC44MzU5IDMzLjIzLTI5LjY5NSA4MS4wMi00MS4xODQgMTI2LjI3LTI1LjkzIDQ1LjI0NiAxNS4yNjIgNzYuMzA5IDUzLjM0OCA4NC43NzcgOTcuMDk4IDAuMDAzOTA3IDAuMDA3ODEyLTQ3LjA5NC01MC4xMjUtOTUuMTQ4LTY2LjMzMnptMTEwLjM4LTc0LjI1NGMtMjAuMzk4LTYuODc1LTUwLjc3NyAyLjY3MTktNTAuNzc3IDIuNjcxOSAxNi4wMDQtMTguMjM4IDM3LjU3LTI2LjkyMiA1Ni43Ny0yMC40NDUgMTkuMjAzIDYuNDcyNyAzMS4xMDIgMjYuNDQ1IDMyLjc4OSA1MC42NDggMC4wMDc4MTIgMC0xOC4zODMtMjYtMzguNzgxLTMyLjg3NXoiIGZpbGw9IiNkYzU1YzUiLz4KIDwvZz4KPC9zdmc+Cg==" alt="Drama Theatre Of Ancient Greece Comedy Mask - Theatre Masks">
      <p class="zero-matches__text">Sorry. We couldn't find any matches</p>
    </div>
  `}function ge(e){I.classList.remove("no-events");const o=e.map(n=>{var m,u,p,g,y,L,$,x;const a=((u=(m=n.images)==null?void 0:m[0])==null?void 0:u.url)||"",t=n.name||"",s=((g=(p=n.dates)==null?void 0:p.start)==null?void 0:g.localDate)||"",c=((L=(y=n._embedded)==null?void 0:y.venues)==null?void 0:L[0])||{},i=c.name||"",l=(($=c.location)==null?void 0:$.latitude)||"",r=((x=c.location)==null?void 0:x.longitude)||"";return`
      <li class="event-card" data-id="${n.id}">
        <img class="event-img" src="${a}" alt="${t}">
        <h3 class="event-title">${t}</h3>
        <p class="event-date">${s}</p>
        <p class="event-place"
           data-lat="${l}"
           data-lng="${r}"
           data-place="${i}">
          ${i}
          <svg class="event-svg" width="7" height="10" viewBox="0 0 7 10">
            <path d="M3.5 0C1.57011 0 0 1.55933 0 3.47595C0 5.88495 3.50344 10 3.50344 10C3.50344 10 7 5.76648 7 3.47595C7 1.55933 5.42995 0 3.5 0Z" fill="white"/>
          </svg>
        </p>
      </li>
    `}).join("");I.innerHTML=o,document.querySelectorAll(".event-place").forEach(n=>{n.addEventListener("click",()=>{const a=n.dataset.lat,t=n.dataset.lng,s=n.dataset.place;A.innerHTML="",re.classList.remove("is-hidden"),de.style.overflow="hidden",a&&t?A.innerHTML=`
          <h3>${s}</h3>
          <iframe
            width="100%"
            height="400"
            style="border:0"
            loading="lazy"
            allowfullscreen
            src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${a},${t}">
          </iframe>
        `:A.innerHTML=`
          <h3>${s}</h3>
          <p style="color:#fff; padding:20px;">No map available for this location.</p>
        `})})}function ye(){j.innerHTML="";const e=5;let o=Math.max(0,D-2),n=Math.min(G,o+e);n-o<e&&(o=Math.max(0,n-e));for(let a=o;a<n;a++){const t=document.createElement("button");t.className="page-btn",t.textContent=a+1,a===D&&t.classList.add("active"),t.addEventListener("click",()=>S(a)),j.appendChild(t)}}S();const Q="Q8bHL81HES4CjxatVZAVSQWYyAffYhbQ",R=document.querySelector(".events-list"),f=document.getElementById("pagination"),w=document.querySelector("[data-modal]"),Le=document.querySelector(".modal__wrap"),Me=document.querySelector("[data-close]"),K=document.body;let C=0,M=0;async function _(e=0){var s,c;const o=`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${Q}&countryCode=US&size=20&page=${e}`,a=await(await fetch(o)).json(),t=((s=a._embedded)==null?void 0:s.events)||[];M=Math.min(((c=a.page)==null?void 0:c.totalPages)||0,29),C=e,he(t),ve()}function he(e){const o=e.map(n=>{var a,t,s,c,i,l,r;return`
    <li class="event-card" data-id="${n.id}">
      <img class="event-img" src="${((t=(a=n.images)==null?void 0:a[0])==null?void 0:t.url)||""}" alt="${n.name}">
      <h3 class="event-title">${n.name}</h3>
      <p class="event-date">${((c=(s=n.dates)==null?void 0:s.start)==null?void 0:c.localDate)||""}</p>
      <p class="event-place">${((r=(l=(i=n._embedded)==null?void 0:i.venues)==null?void 0:l[0])==null?void 0:r.name)||""}</p>
    </li>
  `}).join("");R.innerHTML=o}function ve(){f.innerHTML="";const e=5;let o=Math.max(0,C-2),n=Math.min(M,o+e);n-o<e&&(o=Math.max(0,n-e));for(let a=o;a<n;a++){const t=document.createElement("button");t.className="page-btn",t.textContent=a+1,a===C&&t.classList.add("active"),t.addEventListener("click",()=>_(a)),f.appendChild(t)}if(n<M){const a=document.createElement("span");a.textContent="...",a.className="dots",f.appendChild(a);const t=document.createElement("button");t.className="page-btn",t.textContent=M,t.addEventListener("click",()=>_(M-1)),f.appendChild(t)}}R.addEventListener("click",async e=>{const o=e.target.closest(".event-card");if(!o)return;const n=o.dataset.id,t=await(await fetch(`https://app.ticketmaster.com/discovery/v2/events/${n}.json?apikey=${Q}`)).json();Le.innerHTML=fe(t),w.classList.remove("backdrop-hidden"),K.classList.add("no-scroll")});Me.addEventListener("click",b);w.addEventListener("click",e=>{e.target.closest(".modal")||b()});document.addEventListener("keydown",e=>{e.code==="Escape"&&b()});function b(){w.classList.add("backdrop-hidden"),K.classList.remove("no-scroll")}function fe(e){var o,n,a,t,s,c,i,l,r,m,u,p,g,y,L;return`
    <img class="modal__preview" src="${((n=(o=e.images)==null?void 0:o[0])==null?void 0:n.url)||""}" />

    <div class="content">
      <img class="content__image" src="${((t=(a=e.images)==null?void 0:a[0])==null?void 0:t.url)||""}" />

      <ul class="content__list">

        <li>
          <h2 class="modal__title">INFO</h2>
          <p class="modal__text">${e.info||"No information"}</p>
        </li>

        <li>
          <h2 class="modal__title">WHEN</h2>
          <p class="modal__text">${((c=(s=e.dates)==null?void 0:s.start)==null?void 0:c.localDate)||""}</p>
          <p class="modal__text">${((l=(i=e.dates)==null?void 0:i.start)==null?void 0:l.localTime)||""}</p>
        </li>

        <li>
          <h2 class="modal__title">WHERE</h2>
          <p class="modal__text">${((p=(u=(m=(r=e._embedded)==null?void 0:r.venues)==null?void 0:m[0])==null?void 0:u.city)==null?void 0:p.name)||""}</p>
          <p class="modal__text">${((L=(y=(g=e._embedded)==null?void 0:g.venues)==null?void 0:y[0])==null?void 0:L.name)||""}</p>
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
  `}_();const Ne=document.querySelector(".footer-open-modal"),d=document.querySelector("#modal"),Ie=d.querySelector(".close");Ne.addEventListener("click",e=>{e.preventDefault(),d.classList.add("is-open"),document.body.style.overflow="hidden"});Ie.addEventListener("click",()=>{d.classList.remove("is-open"),document.body.style.overflow="visible"});d.addEventListener("click",e=>{e.target===d&&(d.classList.remove("is-open"),document.body.style.overflow="visible")});
//# sourceMappingURL=commonHelpers.js.map
