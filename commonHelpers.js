import{initializeApp as X}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";import{getAuth as ee,GoogleAuthProvider as te,signInWithPopup as ne,signInAnonymously as oe,onAuthStateChanged as G,signOut as se}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=o(n);fetch(n.href,a)}})();window.addEventListener("load",()=>{const e=document.querySelector(".preloader"),t=document.getElementById("content"),o=document.querySelector(".progress-ring__circle"),s=o.r.baseVal.value,n=2*Math.PI*s;o.style.strokeDasharray=`${n} ${n}`,o.style.strokeDashoffset=n;let a=0;const c=setInterval(()=>{a+=1;const i=n-a/100*n;o.style.strokeDashoffset=i,a>=100&&(clearInterval(c),e.style.transition="opacity 1s ease",e.style.opacity="0",setTimeout(()=>{e.style.display="none",t.style.display="block",document.body.style.overflow="auto"},1e3))},15)});const ae=document.querySelector(".country");countryInput.addEventListener("click",()=>{countryList.classList.toggle("open"),ae.classList.toggle("open")});const ce={apiKey:"AIzaSyC4NsRRqrPTkrffod7c5jsM1QSRJvpVe0w",authDomain:"events-project-21e9a.firebaseapp.com",projectId:"events-project-21e9a",storageBucket:"events-project-21e9a.appspot.com",messagingSenderId:"480946051710",appId:"1:480946051710:web:76486820763f85d427162f"},ie=X(ce),N=ee(ie),C=document.querySelector(".sign-in-button"),j=document.querySelector(".auth-container");C.addEventListener("click",()=>{j.classList.toggle("open"),j.classList.contains("open")?C.textContent="Close":C.textContent="Sign in"});const le=document.querySelector(".google"),re=document.querySelector(".guest");le.addEventListener("click",()=>{const e=new te;ne(N,e)});re.addEventListener("click",()=>{oe(N)});const de=document.querySelector(".user-name"),S=document.querySelector(".user-info"),me=document.querySelector(".logout");G(N,e=>{e?(S.classList.add("active"),de.textContent=e.displayName||"Guest user"):S.classList.remove("active")});me.addEventListener("click",()=>{se(N)});const U=document.querySelector(".user-photo"),P=document.querySelector(".auth-wrapper"),ue=document.querySelector(".user-display-name");G(N,e=>{if(e){S.classList.add("active"),P.classList.add("logged-in"),j.classList.remove("open");let t="";if(e.isAnonymous?t=`Guest_${e.uid.slice(-4).toUpperCase()}`:e.displayName?t=e.displayName:e.email?t=e.email.split("@")[0]:t="User",ue.textContent=t,e.photoURL)U.src=e.photoURL;else{const o=t.charAt(0).toUpperCase(),s=e.isAnonymous?"7b1fa2":"34495e";U.src=`https://ui-avatars.com/api/?name=${o}&background=${s}&color=fff&size=128`}}else S.classList.remove("active"),P.classList.remove("logged-in")});const pe="Q8bHL81HES4CjxatVZAVSQWYyAffYhbQ",ge="YOUR_GOOGLE_MAPS_API_KEY",z=document.querySelector(".events-list"),h=document.getElementById("pagination"),E=document.querySelector("[data-modal]"),D=document.querySelector(".modal__wrap"),ye=document.querySelector("[data-close]"),Q=document.body,Y=document.querySelector('.header__input[placeholder="Start searching"]'),b=document.querySelector(".country"),K=document.getElementById("countryInput"),f=document.querySelector(".country-list");let R="",Z="US",$=0,M=0,q;const Le=[{name:"United States",code:"US"},{name:"Germany",code:"DE"},{name:"United Kingdom",code:"GB"},{name:"France",code:"FR"},{name:"Spain",code:"ES"},{name:"Italy",code:"IT"},{name:"Australia",code:"AU"},{name:"Canada",code:"CA"},{name:"Argentina",code:"AR"},{name:"Austria",code:"AT"},{name:"Belgium",code:"BE"},{name:"Brazil",code:"BR"},{name:"Netherlands",code:"NL"},{name:"Poland",code:"PL"},{name:"Sweden",code:"SE"},{name:"Switzerland",code:"CH"},{name:"Ukraine",code:"UA"},{name:"Denmark",code:"DK"},{name:"Finland",code:"FI"},{name:"Norway",code:"NO"},{name:"Portugal",code:"PT"},{name:"Ireland",code:"IE"},{name:"Mexico",code:"MX"},{name:"New Zealand",code:"NZ"},{name:"Czech Republic",code:"CZ"},{name:"Hungary",code:"HU"}];function Me(){const e=Le.map(t=>`<li data-code="${t.code}">${t.name}</li>`).join("");f.innerHTML=e}Me();K.addEventListener("click",()=>{b.classList.toggle("open"),f.classList.toggle("open")});f.addEventListener("click",e=>{if(e.target.tagName!=="LI")return;const t=e.target.dataset.code,o=e.target.textContent;K.value=o,Z=t,f.classList.remove("open"),b.classList.remove("open"),A(0)});document.addEventListener("click",e=>{e.target.closest(".country")||(f.classList.remove("open"),b.classList.remove("open"))});Y.addEventListener("input",()=>{clearTimeout(q),q=setTimeout(()=>{R=Y.value.trim(),A(0)},500)});async function A(e=0){var o,s;const t=`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${pe}&countryCode=${Z}&keyword=${R}&size=20&page=${e}`;try{const a=await(await fetch(t)).json(),c=((o=a._embedded)==null?void 0:o.events)||[];if(M=Math.min(((s=a.page)==null?void 0:s.totalPages)||0,29),$=e,c.length===0){ve(),h.innerHTML="";return}he(c),Ne()}catch(n){console.error(n)}}function ve(){z.classList.add("no-events"),z.innerHTML=`
    <div class="zero-matches">
    <img class="zero-matches__img" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9ImEiPgogICA8cGF0aCBkPSJtMTYyIDEzOS4yMWg0Mjh2NDczLjU4aC00Mjh6Ii8+CiAgPC9jbGlwUGF0aD4KIDwvZGVmcz4KIDxnIGNsaXAtcGF0aD0idXJsKCNhKSI+CiAgPHBhdGggZD0ibTM4My42NSAyNDguNzNjLTczLjgxMi0yNC44ODctMTM1LjAyLTY0Ljc0Mi0xNzUtMTA5LjUyLTEyOC40IDM5Mi42MSA1My40MjYgNDcwLjAzIDUzLjQyNiA0NzAuMDNzMTg2Ljg0IDYzIDMyNy4xOC0zNDEuNjdjLTU4LjkzOCAxMS40MS0xMzEuNzkgNi4wNTA4LTIwNS42LTE4Ljg0NHptLTExMC41OSA3NC44ODNjMTkuMjAzIDYuNDcyNyAzMS4xMDIgMjYuNDQ1IDMyLjc5NyA1MC42NDggMCAwLTE4LjM5NS0yNi0zOC43ODUtMzIuODc1LTIwLjM5MS02Ljg3NS01MC43NzcgMi42NzE5LTUwLjc3NyAyLjY3MTkgMTYuMDA0LTE4LjIzOCAzNy41NjYtMjYuOTI2IDU2Ljc2Ni0yMC40NDV6bTM2Ljg3NSAxNDMuNzFjLTQ4LjA1NS0xNi4yMDctMTE1Ljg5LTQuODM1OS0xMTUuODktNC44MzU5IDMzLjIzLTI5LjY5NSA4MS4wMi00MS4xODQgMTI2LjI3LTI1LjkzIDQ1LjI0NiAxNS4yNjIgNzYuMzA5IDUzLjM0OCA4NC43NzcgOTcuMDk4IDAuMDAzOTA3IDAuMDA3ODEyLTQ3LjA5NC01MC4xMjUtOTUuMTQ4LTY2LjMzMnptMTEwLjM4LTc0LjI1NGMtMjAuMzk4LTYuODc1LTUwLjc3NyAyLjY3MTktNTAuNzc3IDIuNjcxOSAxNi4wMDQtMTguMjM4IDM3LjU3LTI2LjkyMiA1Ni43Ny0yMC40NDUgMTkuMjAzIDYuNDcyNyAzMS4xMDIgMjYuNDQ1IDMyLjc4OSA1MC42NDggMC4wMDc4MTIgMC0xOC4zODMtMjYtMzguNzgxLTMyLjg3NXoiIGZpbGw9IiNkYzU1YzUiLz4KIDwvZz4KPC9zdmc+Cg==" alt="Drama Theatre Of Ancient Greece Comedy Mask - Theatre Masks">
      <p class="zero-matches__text">
        Sorry. We couldn't find any matches
      </p>
    </div>
  `}function he(e){z.classList.remove("no-events");const t=e.map(o=>{var m,u,p,g,y,L,O,H;const s=((u=(m=o.images)==null?void 0:m[0])==null?void 0:u.url)||"",n=o.name||"",a=((g=(p=o.dates)==null?void 0:p.start)==null?void 0:g.localDate)||"",c=((L=(y=o._embedded)==null?void 0:y.venues)==null?void 0:L[0])||{},i=c.name||"",l=((O=c.location)==null?void 0:O.latitude)||"",r=((H=c.location)==null?void 0:H.longitude)||"";return`
      <li class="event-card" data-id="${o.id}">
        <img class="event-img" src="${s}" alt="${n}">
        <h3 class="event-title">${n}</h3>
        <p class="event-date">${a}</p>

        <p class="event-place"
           data-lat="${l}"
           data-lng="${r}"
           data-place="${i}">
          ${i}
          

          <svg class="event-svg" width="7" height="10" viewBox="0 0 7 10">
            <path d="M3.5 0C1.57 0 0 1.56 0 3.47C0 5.88 3.5 10 3.5 10C3.5 10 7 5.76 7 3.47C7 1.56 5.43 0 3.5 0Z" fill="white"/>
          </svg>

        </p>
      </li>
    `}).join("");z.innerHTML=t,fe()}function fe(){document.querySelectorAll(".event-place").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.lat,o=e.dataset.lng,s=e.dataset.place;E.classList.remove("is-hidden"),Q.style.overflow="hidden",t&&o?D.innerHTML=`
          <h3 style="color:#fff">${s}</h3>

          <iframe
            width="100%"
            height="400"
            style="border:0"
            loading="lazy"
            allowfullscreen
            src="https://www.google.com/maps/embed/v1/place?key=${ge}&q=${t},${o}">
          </iframe>
        `:D.innerHTML=`
          <h3>${s}</h3>
          <p style="color:#fff;padding:20px">
            No map available for this location
          </p>
        `})})}function Ne(){h.innerHTML="";const e=5;let t=Math.max(0,$-2),o=Math.min(M,t+e);if(o-t<e&&(t=Math.max(0,o-e)),t>0&&(T(0),t>1)){const s=document.createElement("span");s.textContent="...",h.appendChild(s)}for(let s=t;s<o;s++)T(s);if(o<M){if(o<M-1){const s=document.createElement("span");s.textContent="...",h.appendChild(s)}T(M-1)}}function T(e){const t=document.createElement("button");t.className="page-btn",t.textContent=e+1,e===$&&t.classList.add("active"),t.addEventListener("click",()=>A(e)),h.appendChild(t)}ye.addEventListener("click",V);E.addEventListener("click",e=>{e.target===E&&V()});function V(){E.classList.add("is-hidden"),D.innerHTML="",Q.style.overflow=""}A();const B=document.querySelector(".scroll-up");window.addEventListener("scroll",()=>{window.scrollY>200?B.classList.add("scroll-up--active"):B.classList.remove("scroll-up--active")});const W="Q8bHL81HES4CjxatVZAVSQWYyAffYhbQ",F=document.querySelector(".events-list"),I=document.getElementById("pagination"),x=document.querySelector("[data-modal]"),Ie=document.querySelector(".modal__wrap"),Se=document.querySelector("[data-close]"),J=document.body;let _=0,v=0;async function w(e=0){var a,c;const t=`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${W}&countryCode=US&size=20&page=${e}`,s=await(await fetch(t)).json(),n=((a=s._embedded)==null?void 0:a.events)||[];v=Math.min(((c=s.page)==null?void 0:c.totalPages)||0,29),_=e,ze(n),Ee()}function ze(e){const t=e.map(o=>{var s,n,a,c,i,l,r;return`
    <li class="event-card" data-id="${o.id}">
      <img class="event-img" src="${((n=(s=o.images)==null?void 0:s[0])==null?void 0:n.url)||""}" alt="${o.name}">
      <h3 class="event-title">${o.name}</h3>
      <p class="event-date">${((c=(a=o.dates)==null?void 0:a.start)==null?void 0:c.localDate)||""}</p>
      <p class="event-place">${((r=(l=(i=o._embedded)==null?void 0:i.venues)==null?void 0:l[0])==null?void 0:r.name)||""}</p>
    </li>
  `}).join("");F.innerHTML=t}function Ee(){I.innerHTML="";const e=5;let t=Math.max(0,_-2),o=Math.min(v,t+e);o-t<e&&(t=Math.max(0,o-e));for(let s=t;s<o;s++){const n=document.createElement("button");n.className="page-btn",n.textContent=s+1,s===_&&n.classList.add("active"),n.addEventListener("click",()=>w(s)),I.appendChild(n)}if(o<v){const s=document.createElement("span");s.textContent="...",s.className="dots",I.appendChild(s);const n=document.createElement("button");n.className="page-btn",n.textContent=v,n.addEventListener("click",()=>w(v-1)),I.appendChild(n)}}F.addEventListener("click",async e=>{const t=e.target.closest(".event-card");if(!t)return;const o=t.dataset.id,n=await(await fetch(`https://app.ticketmaster.com/discovery/v2/events/${o}.json?apikey=${W}`)).json();Ie.innerHTML=Ae(n),x.classList.remove("backdrop-hidden"),J.classList.add("no-scroll")});Se.addEventListener("click",k);x.addEventListener("click",e=>{e.target.closest(".modal")||k()});document.addEventListener("keydown",e=>{e.code==="Escape"&&k()});function k(){x.classList.add("backdrop-hidden"),J.classList.remove("no-scroll")}function Ae(e){var t,o,s,n,a,c,i,l,r,m,u,p,g,y,L;return`
    <img class="modal__preview" src="${((o=(t=e.images)==null?void 0:t[0])==null?void 0:o.url)||""}" />

    <div class="content">
      <img class="content__image" src="${((n=(s=e.images)==null?void 0:s[0])==null?void 0:n.url)||""}" />

      <ul class="content__list">

        <li>
          <h2 class="modal__title">INFO</h2>
          <p class="modal__text">${e.info||"No information"}</p>
        </li>

        <li>
          <h2 class="modal__title">WHEN</h2>
          <p class="modal__text">${((c=(a=e.dates)==null?void 0:a.start)==null?void 0:c.localDate)||""}</p>
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
  `}w();const Ce=document.querySelector(".footer-open-modal"),d=document.querySelector("#modal"),Te=d.querySelector(".close");Ce.addEventListener("click",e=>{e.preventDefault(),d.classList.add("is-open"),document.body.style.overflow="hidden"});Te.addEventListener("click",()=>{d.classList.remove("is-open"),document.body.style.overflow="visible"});d.addEventListener("click",e=>{e.target===d&&(d.classList.remove("is-open"),document.body.style.overflow="visible")});
//# sourceMappingURL=commonHelpers.js.map
