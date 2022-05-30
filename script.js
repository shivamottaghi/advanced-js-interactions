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
let aotArr= [
    {
        'name': 'Eren Yeager',
        'Titan' : 'Attack , Founder , War Hammer',
        'Ability': 'The Attack Titan Receive memories from both past and future inheritors of the Titan.(You can search the rest yourself I don\'t have time! &#128527;)',
        'imgUrl': 'images/AOT/Eren.jpg',
        'clicked': false
    },
    {
        'name': 'Armin Arlert',
        'Titan' : 'Colossus',
        'Ability': 'The Colossus Titan is enormous and can emit immense amounts of steam from its body like a blast furnace.',
        'imgUrl': 'images/AOT/Armin.jpg',
        'clicked': false
    },
    {
        'name': 'Mikasa Ackermann',
        'Titan' : 'None',
        'Ability': 'Physical strength,she can easily take down Titans, to be specific she\'s awesome &#128528;',
        'imgUrl': 'images/AOT/Mikasa.png',
        'clicked': false
    },
    {
        'name': 'Zeke Yeager',
        'Titan' : 'Beast',
        'Ability': 'The Beast Titan could take on the physical characteristics of different animals that vary between its inheritors. It\'s very creepy believe me',
        'imgUrl': 'images/AOT/Zeke Yeager.png',
        'clicked': false
    },
    {
        'name': 'Annie Leonhart',
        'Titan' : 'Female Titan',
        'Ability': 'The Female Titan could inherit abilities much more easily than any of the other Titans. It could also harden areas of its skin for extra offensive and defensive capabilities.',
        'imgUrl': 'images/AOT/annie leonhart.jpg',
        'clicked': false
    },
    {
        'name': 'Reiner Braun',
        'Titan' : 'Armor',
        'Ability': 'The Armored Titan was covered by hardened, armor-like skin, except in key areas necessary for movement.',
        'imgUrl': 'images/AOT/Reiner_.jpg',
        'clicked': false
    },
    {
        'name': 'Pieck Finger',
        'Titan' : 'Cart',
        'Ability': 'The Cart Titan was quadrupedal and had great endurance that allowed it to stay transformed for long periods of time, as well as transform in rapid succession without needing to rest, hundreds of times per day even. ',
        'imgUrl': 'images/AOT/pieck.jpg',
        'clicked': false
    },
    {
        'name': 'Falco Grice',
        'Titan' : 'Jaw',
        'Ability': 'The Jaw Titan was the swiftest of the Nine Titans and had sharp, hardened teeth and claws capable of damaging or breaking almost anything.',
        'imgUrl': 'images/AOT/Falco.jpg',
        'clicked': false
    }
    ];
const createImgTag = (theClass) => {
    let img = document.createElement('img');
    img.setAttribute('class', theClass);
    return img;
}
const addImageCollage = () =>{
    let imgArr = document.querySelectorAll('.image');
    for (let i = 0; i< aotArr.length; i++){
        let img = createImgTag('collageImg');
        img.src = aotArr[i].imgUrl;
        img.height = 250;
        imgArr[i].appendChild(img);
    }
    /*return imgArr;*/
}
const collageEventListener = () => {
    let aotImages = document.querySelectorAll('.collageImg')
    let divImage = document.querySelectorAll('.image')
    for (let i= 0 ; i < aotArr.length; i++){
        aotImages[i].addEventListener('click', ()=>{
            aotArr[i].clicked = ! aotArr[i].clicked;
            changeCollage(i, aotImages[i] , divImage[i]);
        })
    }
}
const changeCollage = (i , img , parrent) => {
    if (aotArr[i].clicked){
        parrent.style.minHeight = 300;
        img.height = 300;
    }else {
        img.height = 250;
    }
}
addImageCollage();
collageEventListener();