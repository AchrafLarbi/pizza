
// instead using className use querySelector to get element lwl ymatchi ism class


let navbar = document.querySelector('.header .flex .navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active')
}


let account = document.querySelector('.user-account');

document.querySelector('#user-btn').onclick = () => {
    account.classList.add('active')
}
document.querySelector('#close-account').onclick = () => {
    account.classList.remove('active')
}


let myOrder = document.querySelector('.my-orders');

document.querySelector('#order-btn').onclick = () => {
    myOrder.classList.add('active')
}
document.querySelector('#close-orders').onclick = () => {
    myOrder.classList.remove('active')
}


let myShop = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () => {
    myShop.classList.add('active')
}
document.querySelector('#close-cart').onclick = () => {
    myShop.classList.remove('active')
}


window.onscroll = () => {
    navbar.classList.remove('active')
    myOrder.classList.remove('active')
    myShop.classList.remove('active')
}



// tjib ga3 les slides w kon mara tbdl class active ily t5lih display =flex
let slides = document.querySelectorAll('.home-bg .home .slide-container .slide')
let index = 0

function next() {
    slides[index].classList.remove('active')
    index = (index+1) % slides.length
    slides[index].classList.add('active')
}

function prev() {
    slides[index].classList.remove('active')
    index = (index - 1 + slides.length ) % slides.length
    slides[index].classList.add('active')
}


let faq = document.querySelectorAll('.faq .accordion-container .accordion')

faq.forEach(acco =>{
    acco.onclick = () =>{
        faq.forEach(remove => remove.classList.remove('active'));
        acco.classList.add('active');
    }
})