"use strict";

const carts = document.querySelectorAll('.carts__cart')
const button_right = document.querySelector('.button_right')
const button_left = document.querySelector('.button_left')

let currentIndex = 0

carts[currentIndex].classList.add('active')

button_right.addEventListener('click', () => {
if(currentIndex < carts.length - 1){
    carts[currentIndex].classList.remove('active')
    currentIndex++
    carts[currentIndex].classList.add('active')
}
})

button_left.addEventListener('click', () => {
    if(currentIndex > 0) {
        carts[currentIndex].classList.remove('active')
        currentIndex--;
        carts[currentIndex].classList.add('active')
    }
})