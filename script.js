const modal = document.querySelector("#modal");
const wrapper = document.querySelector("#wrapper");

function openModal() {
  modal.style.cssText = "scale: 1; transition: all 0.8s ease-in 0.1s;";
  wrapper.style.cssText = "opacity: 0.5; transition: opacity 0.8s ease-in 0.1s;";
}

function closeModal() {
  modal.style.scale = 0;
  wrapper.style.opacity = 1;
}

// we can also use event listener 
/*
const btn = document.querySelector("#shareBtn");
const cls = document.querySelector("#close");

btn.addEventListener("click", openModal);
cls.addEventListener("click", closeModal);

function openModal() {  
  modal.style.cssText = "scale: 1; transition: all 0.8s ease-in 0.1s;";
  wrapper.style.cssText = "opacity: 0.5; transition: opacity 0.8s ease-in 0.1s;";
}

function closeModal() {
  modal.style.scale = 0;
  wrapper.style.opacity = 1;
}
*/

