import{f as m,i as y}from"./assets/vendor-651d7991.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const h="/goit-js-hw-10/assets/icon-close-e733eca7.svg",p={datetimePicker:document.querySelector(".timer-input"),btn:document.querySelector("[data-start]"),days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")},{datetimePicker:c,btn:s,days:g,hours:b,minutes:S,seconds:C}=p;let u;s.disabled=!0;s.classList.add("disabled");const M={locale:{firstDayOfWeek:1,weekdays:{shorthand:["Su","Mo","Tu","We","Th","Fr","Sa"],longhand:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]}},dateFormat:"Y-m-d H:i",enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(o){o[0].getTime()<=new Date?(y.error({id:"errorMsg",iconUrl:h,iconColor:"white",message:"Please choose a date in the future",timeout:3e3,position:"topRight",progressBarColor:"#b51b1b"}),s.disabled=!0):(s.disabled=!1,u=o[0].getTime())}};m(c,M);s.addEventListener("click",T);function T(){const o=setInterval(()=>{const r=u-new Date,n=v(r);if(r<=0){clearInterval(o),s.disabled=!1,c.disabled=!1;return}s.disabled=!0,c.disabled=!0,g.textContent=a(n.days),b.textContent=a(n.hours),S.textContent=a(n.minutes),C.textContent=a(n.seconds)},1e3)}function a(o){return o.toString().padStart(2,"0")}function v(o){const t=Math.floor(o/864e5),i=Math.floor(o%864e5/36e5),l=Math.floor(o%864e5%36e5/6e4),f=Math.floor(o%864e5%36e5%6e4/1e3);return{days:t,hours:i,minutes:l,seconds:f}}
//# sourceMappingURL=commonHelpers.js.map