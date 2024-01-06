

const b1 = document.getElementById('b1')
const b2 = document.getElementById('b2')
const b3 = document.getElementById('b3')
const b4 = document.getElementById('b4')
const b5 = document.getElementById('b5')
const b6 = document.getElementById('b6')
const info = document.querySelector('.project__info');
const buildings = [b1,b2,b3,b4,b5,b6];


/*
b1.addEventListener('click',function(){
    
    info.classList.toggle('active')
})

*/
buildings.forEach(building => building.addEventListener('click',function(){
    info.classList.toggle('active')
}))