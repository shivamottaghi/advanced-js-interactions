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
/*----------carousel-----------*/
let imgUrl = ['images/1.png','images/2.jpg','images/3.png'];
//let carouselImgAdded = false;
const carouselInterval = (i)=>{
    setInterval(()=>{
        if (i == imgUrl.length){
            i = 0;
        }
        let myImg = document.querySelector('.carouselImg');
        myImg.src = imgUrl[i];
        i++;

    },2000)
}
const createImgTag = (theClass) => {
    let img = document.createElement('img');
    img.setAttribute('class', theClass);
    return img;
}
const createCarousel = () => {
    let parent = document.querySelector('.carouselContainer')
    let img = createImgTag('carouselImg');
    //img.height = 400;
    img.setAttribute('width', '100%');
    img.src = imgUrl[imgUrl.length-1];
    parent.appendChild(img);
    let i = 0;
    carouselInterval(i);

}
createCarousel();
