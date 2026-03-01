(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const N="Q8bHL81HES4CjxatVZAVSQWYyAffYhbQ",I=document.querySelector(".events-list"),g=document.getElementById("pagination"),M=document.querySelector("[data-modal]"),q=document.querySelector(".modal__wrap"),B=document.querySelector("[data-close]"),O=document.body;let b=0,v=0;async function E(t=0){var o,c;const n=`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${N}&countryCode=US&size=20&page=${t}`,s=await(await fetch(n)).json(),e=((o=s._embedded)==null?void 0:o.events)||[];v=Math.min(((c=s.page)==null?void 0:c.totalPages)||0,29),b=t,Y(e),U()}function Y(t){const n=t.map(a=>{var i,d,l,r,m,p,u;const s=((d=(i=a.images)==null?void 0:i[0])==null?void 0:d.url)||"",e=a.name||"",o=((r=(l=a.dates)==null?void 0:l.start)==null?void 0:r.localDate)||"",c=((u=(p=(m=a._embedded)==null?void 0:m.venues)==null?void 0:p[0])==null?void 0:u.name)||"";return`
      <li class="event-card" data-id="${a.id}">
        <img class="event-img" src="${s}" alt="${e}">
        <h3 class="event-title">${e}</h3>
        <p class="event-date">${o}</p>
        <p class="event-place">${c}</p>
      </li>
    `}).join("");I.innerHTML=n}function U(){g.innerHTML="";const t=5;let n=Math.max(0,b-2),a=Math.min(v,n+t);a-n<t&&(n=Math.max(0,a-t));for(let s=n;s<a;s++){const e=document.createElement("button");e.className="page-btn",e.textContent=s+1,s===b&&e.classList.add("active"),e.addEventListener("click",()=>E(s)),g.appendChild(e)}if(a<v){const s=document.createElement("span");s.textContent="...",s.className="dots",g.appendChild(s);const e=document.createElement("button");e.className="page-btn",e.textContent=v,e.addEventListener("click",()=>E(v-1)),g.appendChild(e)}}I.addEventListener("click",V);async function V(t){const n=t.target.closest(".event-card");if(!n)return;const a=n.dataset.id,e=await(await fetch(`https://app.ticketmaster.com/discovery/v2/events/${a}.json?apikey=${N}`)).json();q.innerHTML=K(e),M.classList.remove("backdrop-hidden"),O.classList.add("no-scroll")}function K(t){var l,r,m,p,u,h,f,x,S,C,z,P,T;const n=((r=(l=t.images)==null?void 0:l[0])==null?void 0:r.url)||"",a=t.name||"",s=t.info||"No information",e=((p=(m=t.dates)==null?void 0:m.start)==null?void 0:p.localDate)||"",o=((h=(u=t.dates)==null?void 0:u.start)==null?void 0:h.localTime)||"",c=((C=(S=(x=(f=t._embedded)==null?void 0:f.venues)==null?void 0:x[0])==null?void 0:S.city)==null?void 0:C.name)||"",i=((T=(P=(z=t._embedded)==null?void 0:z.venues)==null?void 0:P[0])==null?void 0:T.name)||"",d=t.url||"#";return`
    <img class="modal__preview" src="${n}" />

    <div class="content">

      <img class="content__image" src="${n}" />

      <ul>

        <li><b>INFO:</b> ${s}</li>
        <li><b>WHEN:</b> ${e} ${o}</li>
        <li><b>WHERE:</b> ${c} — ${i}</li>
        <li><b>WHO:</b> ${a}</li>

        <li>
          <a class="modal__btn" href="${d}" target="_blank">
            BUY TICKETS
          </a>
        </li>

      </ul>

    </div>
  `}B.addEventListener("click",H);M.addEventListener("click",t=>{t.target.closest(".modal")||H()});document.addEventListener("keydown",t=>{t.code==="Escape"&&H()});function H(){M.classList.add("backdrop-hidden"),O.classList.remove("no-scroll")}E();const j="Q8bHL81HES4CjxatVZAVSQWYyAffYhbQ",A=document.querySelector(".events-list"),$=document.getElementById("pagination"),k=document.querySelector("[data-modal]"),Q=document.querySelector(".modal__wrap"),R=document.querySelector("[data-close]"),W=document.body;let y=0,_=0;async function L(t=0){var o,c;const n=`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${j}&countryCode=US&size=20&page=${t}`,s=await(await fetch(n)).json(),e=((o=s._embedded)==null?void 0:o.events)||[];_=Math.min(((c=s.page)==null?void 0:c.totalPages)||0,29),y=t,D(e),F()}function D(t){const n=t.map(a=>{var s,e,o,c,i,d,l;return`
    <li class="event-card" data-id="${a.id}">
      <img class="event-img" src="${((e=(s=a.images)==null?void 0:s[0])==null?void 0:e.url)||""}" alt="${a.name}">
      <h3 class="event-title">${a.name}</h3>
      <p class="event-date">${((c=(o=a.dates)==null?void 0:o.start)==null?void 0:c.localDate)||""}</p>
      <p class="event-place">${((l=(d=(i=a._embedded)==null?void 0:i.venues)==null?void 0:d[0])==null?void 0:l.name)||""}</p>
    </li>
  `}).join("");A.innerHTML=n}function F(){$.innerHTML="";const t=5;let n=Math.max(0,y-2),a=Math.min(_,n+t);a-n<t&&(n=Math.max(0,a-t));for(let s=n;s<a;s++){const e=document.createElement("button");e.className="page-btn",e.textContent=s+1,s===y&&e.classList.add("active"),e.addEventListener("click",()=>L(s)),$.appendChild(e)}if(a<_){const s=document.createElement("span");s.textContent="...",s.className="dots",$.appendChild(s);const e=document.createElement("button");e.className="page-btn",e.textContent=_,e.addEventListener("click",()=>L(_-1)),$.appendChild(e)}}A.addEventListener("click",async t=>{const n=t.target.closest(".event-card");if(!n)return;const a=n.dataset.id,e=await(await fetch(`https://app.ticketmaster.com/discovery/v2/events/${a}.json?apikey=${j}`)).json();Q.innerHTML=Z(e),k.classList.remove("backdrop-hidden"),W.classList.add("no-scroll")});R.addEventListener("click",w);k.addEventListener("click",t=>{t.target.closest(".modal")||w()});document.addEventListener("keydown",t=>{t.code==="Escape"&&w()});function w(){k.classList.add("backdrop-hidden"),W.classList.remove("no-scroll")}function Z(t){var n,a,s,e,o,c,i,d,l,r,m,p,u,h,f;return`
    <img class="modal__preview" src="${((a=(n=t.images)==null?void 0:n[0])==null?void 0:a.url)||""}" />

    <div class="content">
      <img class="content__image" src="${((e=(s=t.images)==null?void 0:s[0])==null?void 0:e.url)||""}" />

      <ul class="content__list">

        <li>
          <h2 class="modal__title">INFO</h2>
          <p class="modal__text">${t.info||"No information"}</p>
        </li>

        <li>
          <h2 class="modal__title">WHEN</h2>
          <p class="modal__text">${((c=(o=t.dates)==null?void 0:o.start)==null?void 0:c.localDate)||""}</p>
          <p class="modal__text">${((d=(i=t.dates)==null?void 0:i.start)==null?void 0:d.localTime)||""}</p>
        </li>

        <li>
          <h2 class="modal__title">WHERE</h2>
          <p class="modal__text">${((p=(m=(r=(l=t._embedded)==null?void 0:l.venues)==null?void 0:r[0])==null?void 0:m.city)==null?void 0:p.name)||""}</p>
          <p class="modal__text">${((f=(h=(u=t._embedded)==null?void 0:u.venues)==null?void 0:h[0])==null?void 0:f.name)||""}</p>
        </li>

        <li>
          <h2 class="modal__title">WHO</h2>
          <p class="modal__text">${t.name||""}</p>
        </li>

        <li>
          <h2 class="modal__title">PRICES</h2>

          <div class="price__wrap">
          <svg class="price__icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 29 20"><path d="M3.22 0H0v19.33h3.22zm8.11 0H8.1v19.33h3.23zm4.88 0h-3.22v19.33h3.22zM29 0h-4.78v19.33H29zM6.44 0H4.88v19.33h1.56zm12.89 0h-1.56v19.33h1.56zm3.23 0h-1.57v19.33h1.57z" fill="#0E0E0E"/></svg>
            <p class="modal__text">Standart 300-500 UAH</p>
            
          </div>

          <a class="modal__btn" href="${t.url||"#"}" target="_blank">
            BUY TICKETS
          </a>

          <div class="price__wrap">
            <svg class="price__icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 29 20"><path d="M3.22 0H0v19.33h3.22zm8.11 0H8.1v19.33h3.23zm4.88 0h-3.22v19.33h3.22zM29 0h-4.78v19.33H29zM6.44 0H4.88v19.33h1.56zm12.89 0h-1.56v19.33h1.56zm3.23 0h-1.57v19.33h1.57z" fill="#0E0E0E"/></svg>
            <p class="modal__text">VIP 1000-1500 UAH</p>
          </div>

          <a class="modal__btn" href="${t.url||"#"}" target="_blank">
            BUY TICKETS
          </a>

        </li>

      </ul>
    </div>

    <a class="btn-info" href="${t.url||"#"}" target="_blank">
      MORE FROM THIS AUTHOR
    </a>
  `}L();
//# sourceMappingURL=commonHelpers.js.map
