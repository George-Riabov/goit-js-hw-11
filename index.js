import{a as f,S as m,i as n}from"./assets/vendor-Cq7ZUixy.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const p="53375249-7d769a3dfab07f88475703207",g="https://pixabay.com/api/";function y(o){const r={key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};return f.get(g,{params:r}).then(s=>s.data)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),h=new m(".gallery a",{captionsData:"alt",captionDelay:250});function b(){l.innerHTML=""}function L(o){const r=o.map(({webformatURL:s,largeImageURL:i,tags:e,likes:t,views:a,comments:u,downloads:d})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${i}">
          <img class="gallery-image" src="${s}" alt="${e}" />
        </a>
        <div class="gallery-info">
          <p><b>Likes:</b> ${t}</p>
          <p><b>Views:</b> ${a}</p>
          <p><b>Comments:</b> ${u}</p>
          <p><b>Downloads:</b> ${d}</p>
        </div>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",r),h.refresh()}function S(){c.classList.remove("is-hidden")}function q(){c.classList.add("is-hidden")}const P=document.querySelector(".form");P.addEventListener("submit",w);function w(o){o.preventDefault();const r=o.currentTarget.elements["search-text"].value.trim();if(!r){n.error({message:"Please enter a search query!",position:"topRight"});return}b(),S(),y(r).then(s=>{const i=s.hits;if(!i||i.length===0){n.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(i)}).catch(()=>{n.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{q()}),o.currentTarget.reset()}
//# sourceMappingURL=index.js.map
