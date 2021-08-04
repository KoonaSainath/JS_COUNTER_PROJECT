let count = document.querySelector("#counter-text");
let btn_decrease = document.querySelector("#btn-decrease");
let btn_increase = document.querySelector("#btn-increase");
let btn_reset = document.querySelector("#btn-reset");

btn_increase.addEventListener("click", ()=>{
 count.textContent = parseInt(count.textContent) + 1;
 setColor();
});

btn_decrease.addEventListener("click", ()=>{
 count.textContent = parseInt(count.textContent) - 1;
 setColor();
})

btn_reset.addEventListener("click", ()=>{
 count.textContent = 0;
 setColor();
})

function setColor(){
 let currentCount = parseInt(count.textContent);
 if(currentCount > 0){
  count.style.color = "#47a025";
 }else if(currentCount < 0){
  count.style.color = "#d00000"
 }else{
  count.style.color = "#000000"
 }
}

