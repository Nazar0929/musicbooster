(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(e){if(e.ep)return;e.ep=!0;const n=c(e);fetch(e.href,n)}})();const Y="Q8bHL81HES4CjxatVZAVSQWYyAffYhbQ",z=document.querySelector(".events-list"),_=document.getElementById("pagination");let E=0,d=0;async function $(s=0){var n,o;const a=`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${Y}&countryCode=US&size=20&page=${s}`,t=await(await fetch(a)).json(),e=((n=t._embedded)==null?void 0:n.events)||[];d=Math.min(((o=t.page)==null?void 0:o.totalPages)||0,29),E=s,K(e),Q()}function K(s){const a=s.map(c=>{var i,p,u,f,r,v,g;const t=((p=(i=c.images)==null?void 0:i[0])==null?void 0:p.url)||"",e=c.name||"",n=((f=(u=c.dates)==null?void 0:u.start)==null?void 0:f.localDate)||"",o=((g=(v=(r=c._embedded)==null?void 0:r.venues)==null?void 0:v[0])==null?void 0:g.name)||"";return`
      <li class="event-card">
        <img class="event-img" src="${t}" alt="${e}">
        <h3 class="event-title" >${e}</h3>
        <p class="event-date">${n}</p>
        <p class="event-place">${o}</p>
      </li>
    `}).join("");z.innerHTML=a}function Q(){_.innerHTML="";const s=5;let a=Math.max(0,E-2),c=Math.min(d,a+s);c-a<s&&(a=Math.max(0,c-s));for(let t=a;t<c;t++){const e=document.createElement("div");e.classList.add("page-btn"),t===E&&e.classList.add("active"),e.textContent=t+1,e.addEventListener("click",()=>{$(t)}),_.appendChild(e)}if(c<d){const t=document.createElement("div");t.textContent="...",t.style.padding="6px",t.style.color="#fff",_.appendChild(t);const e=document.createElement("div");e.classList.add("page-btn"),e.textContent=d,e.addEventListener("click",()=>{$(d-1)}),_.appendChild(e)}}$();const y=document.body,H=document.querySelector(".js-open-team-modal"),m=document.querySelector("[data-modal-team]"),O=document.querySelector("[data-close-team]");document.querySelector(".developers");H&&H.addEventListener("click",x);O&&O.addEventListener("click",x);m&&m.addEventListener("click",s=>{s.target.closest(".developers")||x()});function x(){m.classList.toggle("backdrop-hidden"),y.classList.toggle("no-scroll")}const h=document.querySelector("[data-modal]"),I=document.querySelector("[data-close]"),j=document.querySelector(".js-events-gallery"),R=document.querySelector(".modal__wrap");j&&j.addEventListener("click",V);I&&I.addEventListener("click",b);h&&h.addEventListener("click",s=>{s.target.closest(".modal")||b()});async function V(s){s.preventDefault();const a=s.target.closest("[data-id]");if(!a)return;const c=a.dataset.id;try{const e=(await getEvent(c)).data;R.innerHTML=B(e),h.classList.remove("backdrop-hidden"),y.classList.add("no-scroll")}catch(t){console.error("Error loading event:",t)}}function b(){h.classList.add("backdrop-hidden"),y.classList.remove("no-scroll")}document.addEventListener("keydown",s=>{s.code==="Escape"&&(b(),m&&m.classList.add("backdrop-hidden"),y.classList.remove("no-scroll"))});function B(s){var C,M,T,w,q;const{name:a,images:c=[],url:t="#",info:e,priceRanges:n,dates:o,_embedded:i}=s,p=((C=o==null?void 0:o.start)==null?void 0:C.localDate)||"",u=((M=o==null?void 0:o.start)==null?void 0:M.localTime)||"",f=(o==null?void 0:o.timezone)||"",r=((T=i==null?void 0:i.venues)==null?void 0:T[0])||{},v=r.name||"",g=((w=r.city)==null?void 0:w.name)||"",N=((q=r.country)==null?void 0:q.name)||"",S=c.find(l=>l.height>=350)||c[0]||{};let k="See ticket info",L="";if(n&&n.length>0){const{type:l,currency:W,min:A,max:D}=n[0],P=`${l}: ${A}-${D} ${W}`;(l==null?void 0:l.toLowerCase())==="standard"?k=P:(l==null?void 0:l.toLowerCase())==="vip"&&(L=P)}return`
    <img class="modal__preview" src="${S.url||""}" alt="preview" />

    <div class="content">
      <img class="content__image" src="${S.url||""}" alt="poster"/>

      <ul class="content__list">

        <li>
          <h2 class="modal__title">INFO</h2>
          <p class="modal__text">${e||"No information"}</p>
        </li>

        <li>
          <h2 class="modal__title">WHEN</h2>
          <p class="modal__text">${p}</p>
          <p class="modal__text">${u} ${f}</p>
        </li>

        <li>
          <h2 class="modal__title">WHERE</h2>
          <p class="modal__text">${g}, ${N}</p>
          <p class="modal__text">${v}</p>
        </li>

        <li>
          <h2 class="modal__title">WHO</h2>
          <p class="modal__text">${a}</p>
        </li>

        <li>
          <h2 class="modal__title">PRICES</h2>

          <div class="price__wrap">
            <svg class="price__icon" width="24" height="16">
              <use href="${svg}#icon-ticket"></use>
            </svg>

            <p class="modal__text">${k}</p>
          </div>

          ${L?`<p class="modal__text">${L}</p>`:""}

          <a class="modal__btn" target="_blank" href="${t}">
            BUY TICKETS
          </a>
        </li>

      </ul>
    </div>
  `}с;
//# sourceMappingURL=commonHelpers.js.map
