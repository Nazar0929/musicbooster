(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}})();const q="Q8bHL81HES4CjxatVZAVSQWYyAffYhbQ",H=document.querySelector(".events-list"),y=document.getElementById("pagination"),b=document.querySelector("[data-modal]"),j=document.querySelector(".modal__wrap"),x=document.querySelector("[data-close]"),N=document.body;let g=0,u=0;async function v(t=0){var a,c;const s=`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${q}&countryCode=US&size=20&page=${t}`,n=await(await fetch(s)).json(),e=((a=n._embedded)==null?void 0:a.events)||[];u=Math.min(((c=n.page)==null?void 0:c.totalPages)||0,29),g=t,T(e),W()}function T(t){const s=t.map(o=>{var p,f,i,r,d,l,m;const n=((f=(p=o.images)==null?void 0:p[0])==null?void 0:f.url)||"",e=o.name||"",a=((r=(i=o.dates)==null?void 0:i.start)==null?void 0:r.localDate)||"",c=((m=(l=(d=o._embedded)==null?void 0:d.venues)==null?void 0:l[0])==null?void 0:m.name)||"";return`
      <li class="event-card" data-id="${o.id}">
        <img class="event-img" src="${n}" alt="${e}">
        <h3 class="event-title">${e}</h3>
        <p class="event-date">${a}</p>
        <p class="event-place">${c}</p>
      </li>
    `}).join("");H.innerHTML=s}function W(){y.innerHTML="";const t=5;let s=Math.max(0,g-2),o=Math.min(u,s+t);o-s<t&&(s=Math.max(0,o-t));for(let n=s;n<o;n++){const e=document.createElement("button");e.className="page-btn",e.textContent=n+1,n===g&&e.classList.add("active"),e.addEventListener("click",()=>v(n)),y.appendChild(e)}if(o<u){const n=document.createElement("span");n.textContent="...",n.className="dots",y.appendChild(n);const e=document.createElement("button");e.className="page-btn",e.textContent=u,e.addEventListener("click",()=>v(u-1)),y.appendChild(e)}}H.addEventListener("click",A);async function A(t){const s=t.target.closest(".event-card");if(!s)return;const o=s.dataset.id,e=await(await fetch(`https://app.ticketmaster.com/discovery/v2/events/${o}.json?apikey=${q}`)).json();j.innerHTML=I(e),b.classList.remove("backdrop-hidden"),N.classList.add("no-scroll")}function I(t){var i,r,d,l,m,$,k,M,_,S,w,C,P;const s=((r=(i=t.images)==null?void 0:i[0])==null?void 0:r.url)||"",o=t.name||"",n=t.info||"No information",e=((l=(d=t.dates)==null?void 0:d.start)==null?void 0:l.localDate)||"",a=(($=(m=t.dates)==null?void 0:m.start)==null?void 0:$.localTime)||"",c=((S=(_=(M=(k=t._embedded)==null?void 0:k.venues)==null?void 0:M[0])==null?void 0:_.city)==null?void 0:S.name)||"",p=((P=(C=(w=t._embedded)==null?void 0:w.venues)==null?void 0:C[0])==null?void 0:P.name)||"",f=t.url||"#";return`
    <img class="modal__preview" src="${s}" />

    <div class="content">

      <img class="content__image" src="${s}" />

      <ul>

        <li><b>INFO:</b> ${n}</li>
        <li><b>WHEN:</b> ${e} ${a}</li>
        <li><b>WHERE:</b> ${c} — ${p}</li>
        <li><b>WHO:</b> ${o}</li>

        <li>
          <a class="modal__btn" href="${f}" target="_blank">
            BUY TICKETS
          </a>
        </li>

      </ul>

    </div>
  `}x.addEventListener("click",L);b.addEventListener("click",t=>{t.target.closest(".modal")||L()});document.addEventListener("keydown",t=>{t.code==="Escape"&&L()});function L(){b.classList.add("backdrop-hidden"),N.classList.remove("no-scroll")}v();const O=document.body,h=document.querySelector("[data-modal]"),B=document.querySelector("[data-close]"),Y=document.querySelector(".js-events-gallery"),D=document.querySelector(".modal__wrap");Y.addEventListener("click",F);function F(t){if(!t.target.closest("[data-id]"))return;const o=K();D.innerHTML=createMarkup(o),h.classList.remove("backdrop-hidden"),O.classList.add("no-scroll")}B.addEventListener("click",E);h.addEventListener("click",t=>{t.target.closest(".modal")||E()});document.addEventListener("keydown",t=>{t.code==="Escape"&&E()});function E(){h.classList.add("backdrop-hidden"),O.classList.remove("no-scroll")}function K(){return{name:"Atlas Weekend",info:"Largest music festival in Ukraine.",date:"2026-02-28",time:"20:00",city:"Jarosław, Poland",place:"Reto Music Club",price:"Standard 40-80€",img:"https://picsum.photos/400/600"}}
//# sourceMappingURL=commonHelpers.js.map
