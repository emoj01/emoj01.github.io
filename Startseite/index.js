const listSymbol = document.querySelector(".list-symbol")
const sideMenu = document.querySelector(".side-menu")
const menu = document.querySelector(".menu")
const options = document.querySelectorAll(".menu li")

listSymbol.addEventListener("click", ()=>{
    sideMenu.classList.toggle("side-menu-open")
    listSymbol.classList.toggle("list-symbol-rotate")
})

options.forEach(site =>{
    site.addEventListener("click",()=>{
        options.forEach(site =>{
            console.log("working")
            site.classList.remove("active")
        })
        site.classList.add("active")
    })
})