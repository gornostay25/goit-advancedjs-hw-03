import{a as f,S as d,i as l}from"./assets/vendor-DfezCyqK.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m="https://pixabay.com/api/";function g(){const r="58027947-74515a1791412e670f2e5f1b7".trim();if(!r)throw new Error("Missing VITE_PIXABAY_API_KEY");return r}async function y(r){return(await f.get(m,{params:{key:g(),q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const c=document.querySelector(".gallery"),a=document.querySelector(".loader-wrapper"),h=new d(".gallery a",{captionsData:"alt",captionDelay:250});function L(r){const i=r.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:s,comments:u,downloads:p})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${n}">
        <img
          class="gallery-image"
          src="${o}"
          alt="${e}"
          loading="lazy"
          width="360"
          height="200"
        />
        <ul class="gallery-text">
          <li>
            <span>Likes</span>
            <p>${t}</p>
          </li>
          <li>
            <span>Views</span>
            <p>${s}</p>
          </li>
          <li>
            <span>Comments</span>
            <p>${u}</p>
          </li>
          <li>
            <span>Downloads</span>
            <p>${p}</p>
          </li>
        </ul>
      </a>
    </li>`).join("");c.insertAdjacentHTML("beforeend",i),h.refresh()}function b(){c.innerHTML=""}function w(){a.classList.remove("is-hidden"),a.setAttribute("aria-hidden","false")}function S(){a.classList.add("is-hidden"),a.setAttribute("aria-hidden","true")}const A=document.querySelector(".form");A.addEventListener("submit",E);function E(r){r.preventDefault();const i=r.currentTarget.elements["search-text"].value.trim();i&&(b(),w(),y(i).then(o=>{if(!o.hits||o.hits.length===0){l.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(o.hits)}).catch(()=>{l.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{S()}))}
//# sourceMappingURL=index.js.map
