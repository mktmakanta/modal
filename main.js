const btn = document.querySelector('.btn');
const massage = document.querySelector('.massage');
const close = document.querySelector('span');
const bodyBg = document.querySelector('.container');

function displayNow (){
  massage.classList.add('now') ;
}
// EVENT LISTENERS
btn.addEventListener('click', displayNow
);
close.addEventListener('click', () => massage.classList.remove('now'));

