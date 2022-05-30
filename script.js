Array.from(document.querySelectorAll(".letter")).forEach(el => {
   el.innerText = randomLetter();
});

function randomLetter(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}
/*-----------dark mode-------------*/
let darkMode = false;
document.querySelector('.mode').addEventListener('click', ()=>{
    darkMode = !darkMode;
    changeMode(darkMode);
})

const changeMode = (darkMode) => {
    if (darkMode){
        document.body.classList.add('dark-mode');
    }else {
        document.body.classList.remove('dark-mode');
    }
}
/*----------carousel parallax-----------*/
let imgUrl = ['images/1.png','images/2.jpg','images/3.png'];
const carouselInterval = (i , container)=>{
    setInterval(()=>{
        if (i == imgUrl.length){
            i = 0;
        }
        container.style.backgroundImage =`url(\'${imgUrl[i]}\')`;
        i++;

    },3000)
}
const createCarousel = () => {
    let container = document.querySelector('.carouselContainer')
    container.style.backgroundImage =  `url(\'${imgUrl[imgUrl.length-1]}\')`;
    let i = 0;
    carouselInterval(i , container);

}
createCarousel();
/*----------collage----------*/
const createImgTag = (theClass) => {
    let img = document.createElement('img');
    img.setAttribute('class', theClass);
    return img;
}