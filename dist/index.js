const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

burger.addEventListener('click', ()=>{
    if(menu.classList.contains("hidden")){
        menu.classList.remove("hidden");
        burger.style.transform = "rotate(90deg)";
    } else{
        menu.classList.add('hidden');
        burger.style.transform = "initial";
    }
})