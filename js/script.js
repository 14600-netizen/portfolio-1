// ===========================

// Fade In Animation

// ===========================

const fadeElements = document.querySelectorAll(

".card,.timeline-item,.profile-box,.hero,.skill"

);

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

fadeElements.forEach(el=>{

el.classList.add("fade");

observer.observe(el);

});

// ===========================

// Popup Image

// ===========================

const popup=document.getElementById("popup");

const popupImg=document.getElementById("popup-img");

const images=document.querySelectorAll(".card img");

if(images.length>0){

images.forEach(img=>{

img.addEventListener("click",()=>{

popup.style.display="flex";

popupImg.src=img.src;

});

});

}

function closePopup(){

popup.style.display="none";

}

// ===========================

// Back To Top

// ===========================

const topBtn=document.createElement("button");

topBtn.id="topBtn";

topBtn.innerHTML="↑";

document.body.appendChild(topBtn);

window.onscroll=function(){

if(document.documentElement.scrollTop>250){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

}

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}
