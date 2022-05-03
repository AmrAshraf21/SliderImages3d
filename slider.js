const imageContainerEl = document.querySelector('.image-container');
const btnPrev = document.getElementById('prev');
const btnNext=  document.getElementById('next');
let x = 0;
let timer;
btnPrev.addEventListener('click',()=>{
    clearInterval(timer);
    x+=45;
    updateGallery()
});
btnNext.addEventListener('click',()=>{
    clearInterval(timer);
    x -=45;
    updateGallery()
});

function updateGallery(){

imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`
timer = setTimeout(()=>{
x -=45;
updateGallery()

},2000)
}
updateGallery()
