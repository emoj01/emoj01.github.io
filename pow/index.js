const btnEL = document.getElementById("btn-el")
const divEl = document.getElementById("div-el")
const divEl2 = document.getElementById("div-el2")
const bodEl = document.body
const audioEl = new Audio("explosion.mp3")

btnEL.addEventListener("click", function(){
    setCSS()
    setTimeout(deleteCSS, 5000)
    audioEl.play()
})

function setCSS(){
    divEl.setAttribute("style",`
        height: 150%;
        width: 150%;
        border-radius:50%;
        border-width: 100px;
        opacity: 0;
        transition: 5s;
        transition-delay: 1s;
    `)

    divEl2.setAttribute("style",`
        height: 150%;
        width: 150%;
        border-radius:50%;
        transition: 0.5s;
        opacity: 0;
    `)

    bodEl.setAttribute("style",`
        animation-name: shake;
        animation-duration: 0.01s;
        animation-direction: alternate;
        animation-iteration-count: 500;
        animation-timing-function: linear;
    `)

    btnEL.setAttribute("style", "background-color: #ff00ff")
}

function deleteCSS(){
    divEl.removeAttribute("style",`
        height: 105%;
        width:150%;
    `)

    bodEl.removeAttribute("style",`
        animation-name: shake;
        animation-duration: 0.01s;
        animation-direction: alternate;
        animation-iteration-count: 200;
        animation-timing-function: linear;
    `)

    divEl2.removeAttribute("style",`
        height: 150%;
        width: 150%;
        border-radius:50%;
        transition: 1s;
        opacity: 0;
    `)

    btnEL.removeAttribute("style", "background-color: #9d00ff")
}