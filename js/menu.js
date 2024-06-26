const hamburger = document.querySelector('.hamburger')
const menu = document.querySelector('.menuNavegacion')

console.log(menu)
console.log(hamburger)

hamburger.addEventListener('click' , ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click' , e=>{
    if(menu.classList.contains('spread') && e.taget != menu && e.target != hamburger   ){

        menu.classList.toggle("spread")
    }
})

