var orderButton=document.querySelector(".featured__btn"),modalPopup=document.querySelector(".modal-content"),modalOverlay=document.querySelector(".modal-overlay"),modalForm=modalPopup.querySelector(".size-form"),checkboxFormArr=modalForm.querySelectorAll("input"),checkbox=modalForm.querySelector(".size-form__checkbox");function unCheckAll(o){for(var e=o.length,l=0;l<e;l++)o[l].checked=!1}function checkOne(o,e){for(var l=o.length,t=0;t<l;t++)console.log(o[t].checked),console.log(t),e!==o[t].id&&(o[t].checked=!1)}orderButton.addEventListener("click",function(o){o.preventDefault(),modalPopup.classList.add("modal-content--show"),modalOverlay.classList.add("modal-overlay--show"),unCheckAll(checkboxFormArr)}),modalForm.addEventListener("click",function(o){if("INPUT"==o.target.nodeName){console.log(o.target.id);var e=o.target.id;checkOne(checkboxFormArr,e)}}),modalForm.addEventListener("submit",function(o){o.preventDefault(),modalPopup.classList.remove("modal-content--show"),modalOverlay.classList.remove("modal-overlay--show")}),window.addEventListener("keydown",function(o){27===o.keyCode&&modalPopup.classList.contains("modal-content--show")&&(modalPopup.classList.remove("modal-content--show"),modalOverlay.classList.remove("modal-overlay--show"))});