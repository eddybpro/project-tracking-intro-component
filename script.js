const menuBtn = document.querySelector('.menu'),
closeBtn = document.querySelector('.close'),
navLinksBox = document.querySelector('.list'),
links = document.querySelectorAll('.link');

menuBtn.addEventListener('click', showHide);
closeBtn.addEventListener('click', showHide);
links.forEach(link =>{
    link.addEventListener('click', showHide);
})

function showHide(){
    menuBtn.classList.toggle('none');
    closeBtn.classList.toggle('none');
    navLinksBox.classList.toggle('none');
}