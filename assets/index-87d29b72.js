(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const u=document.querySelector(".location"),l=document.querySelector(".temp"),d=document.querySelector(".wind"),a=document.querySelector(".feels"),m=document.querySelector(".country"),y=document.querySelector(".humidity"),f=document.querySelector(".condition"),p=document.querySelector(".condition-symbol");async function s(r){try{const o=await(await fetch(`http://api.weatherapi.com/v1/current.json?key=db7a213f0b714cebb18125709231905&q=${r}&aqi=yes`)).json();u.textContent=`${o.location.name},`,l.textContent=`${o.current.temp_c} C`,d.textContent=`${o.current.wind_kph} kph`,a.textContent=`${o.current.feelslike_c} C`,m.textContent=o.location.country,y.textContent=o.current.humidity,f.textContent=o.current.condition.text,p.src=o.current.condition.icon}catch(n){console.log(n)}}let h="london";s(h);const q=document.querySelector("#search-button");q.addEventListener("click",()=>{const r=document.querySelector("#location-input");r.value&&s(r.value)});
