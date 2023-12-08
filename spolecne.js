const btn = document.querySelector("#menu-tlacitko")
const polozky = document.querySelector("#menu-polozky")
const menu = document.querySelector(".fas fa-bars")
btn.addEventListener("click", ()=>{
    polozky.classList.toggle("show")
    btn.innerHTML = `<i class="fas fa-bars"></i>`

    if (polozky.classList.contains("show")){

    
    btn.innerHTML = `<i class="fas fa-xmark"></i>`}
})