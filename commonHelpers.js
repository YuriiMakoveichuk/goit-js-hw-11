(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function n(r){const s="https://pixabay.com",i="/api/",c=new URLSearchParams({key:"44363608-aeb5e859d1804b8d255aa00c3",g:r,image_type:"photo"}),e=`${s}${i}?${c}`;return fetch(e).then(t=>t.json())}function a(r){return r.map(u).join(`
`)}function u({webformatURL:r,tags:s,likes:i,views:c,comments:e,downloads:t}){return` <li class="album-item">
            <img
              class='${r}'
              alt="${s}"
            />
            <ul class="statistics-list">
              <li class="statistics-item text-marg-1">
                <p class="statistics-text">Likes</p>
                <p>${i}</p>
              </li>
              <li class="statistics-item text-marg-2">
                <p class="statistics-text">Views</p>
                <p>${c}</p>
              </li>
              <li class="statistics-item text-marg-3">
                <p class="statistics-text">Comments</p>
                <p>${e}</p>
              </li>
              <li class="statistics-item">
                <p class="statistics-text">Downloads</p>
                <p>${t}</p>
              </li>
            </ul>
          </li>`}const l=document.querySelector(".js-form"),p=document.querySelector(".album-list");l.addEventListener("submit",r=>{r.preventDefault();const s=r.target.elements.query.value;s!==""&&n(s).then(i=>{console.log(i);const c=a(i);p.innerHTML=c}).catch(i=>{}),l.reset()});
//# sourceMappingURL=commonHelpers.js.map
