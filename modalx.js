'use strict'
// Storing the calssses in a variable
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
// We loop through the buttons with the class('.show-modal)
for(let i = 0; i < btnsOpenModal.length; i++){
    btnsOpenModal[i].addEventListener('click', openModal);
   } 
   
    const closeModal = function(){
            modal.classList.add('hidden');
            overlay.classList.add('hidden');
        }
    
 btnCloseModal.addEventListener('click', closeModal);
 overlay.addEventListener('click', closeModal);