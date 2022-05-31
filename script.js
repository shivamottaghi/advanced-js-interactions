Array.from(document.querySelectorAll(".letter")).forEach(el => {
    el.innerText = randomLetter();
});

function randomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}

/*-----------dark mode-------------*/
let darkMode = false;
document.querySelector('.mode').addEventListener('click', () => {
    darkMode = !darkMode;
    changeMode(darkMode);
})

const changeMode = (darkMode) => {
    if (darkMode) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}
/*----------carousel parallax-----------*/
let imgUrl = ['images/1.png', 'images/2.jpg', 'images/3.png'];
const carouselInterval = (i, container) => {
    setInterval(() => {
        if (i == imgUrl.length) {
            i = 0;
        }
        container.style.backgroundImage = `url(\'${imgUrl[i]}\')`;
        i++;

    }, 3000)
}
const createCarousel = () => {
    let container = document.querySelector('.carouselContainer')
    container.style.backgroundImage = `url(\'${imgUrl[imgUrl.length - 1]}\')`;
    let i = 0;
    carouselInterval(i, container);

}
createCarousel();
/*----------collage----------*/
let aotArr = [
    {
        'name': 'Eren Yeager',
        'Titan': 'Attack , Founder , War Hammer',
        'Ability': 'The Attack Titan Receive memories from both past and future inheritors of the Titan.(You can search the rest yourself there are a lot of abilities , he has 3 badass titans &#128566;)',
        'imgUrl': 'images/AOT/Eren.jpg'
    },
    {
        'name': 'Armin Arlert',
        'Titan': 'Colossus',
        'Ability': 'The Colossus Titan is enormous and can emit immense amounts of steam from its body like a blast furnace.',
        'imgUrl': 'images/AOT/Armin.jpg'
    },
    {
        'name': 'Mikasa Ackermann',
        'Titan': 'None',
        'Ability': 'Physical strength,she can easily take down Titans, to be specific she\'s awesome &#128528;',
        'imgUrl': 'images/AOT/Mikasa.png'
    },
    {
        'name': 'Zeke Yeager',
        'Titan': 'Beast',
        'Ability': 'The Beast Titan could take on the physical characteristics of different animals that vary between its inheritors.',
        'imgUrl': 'images/AOT/Zeke Yeager.png'
    },
    {
        'name': 'Annie Leonhart',
        'Titan': 'Female Titan',
        'Ability': 'The Female Titan could inherit abilities much more easily than any of the other Titans. It could also harden areas of its skin for extra offensive and defensive capabilities.',
        'imgUrl': 'images/AOT/annie leonhart.jpg'
    },
    {
        'name': 'Reiner Braun',
        'Titan': 'Armor',
        'Ability': 'The Armored Titan was covered by hardened, armor-like skin, except in key areas necessary for movement.',
        'imgUrl': 'images/AOT/Reiner_.jpg'
    },
    {
        'name': 'Pieck Finger',
        'Titan': 'Cart',
        'Ability': 'The Cart Titan was quadrupedal and had great endurance that allowed it to stay transformed for long periods of time, as well as transform in rapid succession without needing to rest, hundreds of times per day even. ',
        'imgUrl': 'images/AOT/pieck.jpg'
    },
    {
        'name': 'Falco Grice',
        'Titan': 'Jaw',
        'Ability': 'The Jaw Titan was the swiftest of the Nine Titans and had sharp, hardened teeth and claws capable of damaging or breaking almost anything.',
        'imgUrl': 'images/AOT/Falco.jpg'
    }
];

const addImageCollage = () => {
    let imgArr = document.querySelectorAll('.image');
    for (let i = 0; i < aotArr.length; i++) {
        let img = createEl('img','collageImg');
        img.src = aotArr[i].imgUrl;
        img.height = 250;
        imgArr[i].appendChild(img);
    }
}
// For modal
const createEl = (el , elClass) => {
    let element = document.createElement(el);
    element.setAttribute('class', elClass);
    return element;
}
const addModalStructure = () => {
    let parents = document.querySelectorAll('.image');
    parents.forEach(parent => {
        let modal = createEl('div','modal');
        let modalContent = createEl('div','modal-content');
        let modalHeader = createEl('div','modal-header');
        let modalBody = createEl('div','modal-body');
        //let modalFooter = createEl('modal-footer');
        modal.appendChild(modalContent);
        modalContent.appendChild(modalHeader);
        modalContent.appendChild(modalBody);
        parent.appendChild(modal);
    })
}
const addSpan = (el , i) => {
    let span = document.createElement('span');
    span.setAttribute('class', 'close');
    span.setAttribute('id' , i);
    let firstparent = el.parentNode;
    let secondparent = firstparent.parentNode;
    span.onclick = function (){
        secondparent.style.display = "none";
    };
    span.innerHTML = '&times;';
    el.appendChild(span);
    return el
}
const addName = (el, i) => {
    let h1 = document.createElement('h1');
    h1.innerHTML = aotArr[i].name;
    el.appendChild(h1);
    return el
}
const addDescription = (el, i) => {
    let picture = createEl('img', 'biggerPicture');
    picture.src = aotArr[i].imgUrl;
    picture.height = 350;
    let titan = createEl('p', 'titan');
    titan.innerHTML = `Titan : ${aotArr[i].Titan}`;
    let powers = createEl('p', 'powers');
    powers.innerHTML = `Ability : ${aotArr[i].Ability}`;
    el.appendChild(picture);
    el.appendChild(titan);
    el.appendChild(powers);
    return el
}
const addModalContent = () => {
    let headers = document.querySelectorAll('.modal-header');
    for (let i = 0; i < 8; i++) {
        headers[i] = addSpan(headers[i] , i);
        headers[i] = addName(headers[i], i);
    }
    let bodies = document.querySelectorAll('.modal-body');
    for (let i = 0; i < 8; i++) {
        bodies[i] = addDescription(bodies[i], i);
    }
}

const collageEventListener = () => {
    let aotImages = document.querySelectorAll('.collageImg');
    let modals = document.querySelectorAll('.modal');
    for (let i = 0; i < aotArr.length; i++) {
        aotImages[i].addEventListener('click', () => {
            modals[i].style.display = 'block';
        })
    }
}

addImageCollage();
addModalStructure();
addModalContent();
collageEventListener();
/*--------------------pokemon hover--------------------*/
const pokeMouseOver = () => {
    let pokeTags = document.querySelectorAll('.poke');
    pokeTags.forEach(el=>{
        el.addEventListener('mouseover', ()=>{
           let tooltip = el.querySelector('img');
            console.log(tooltip)
           tooltip.style.visibility = 'visible';
            tooltip.style. opacity = '1';
        })
    })
}
const pokeMouseOut = () => {
    let pokeTags = document.querySelectorAll('.poke');
    pokeTags.forEach(el=>{
        el.addEventListener('mouseout', ()=>{
            let tooltip = el.querySelector('img');
            console.log(tooltip)
            tooltip.style.visibility = 'hidden';
            tooltip.style. opacity = '0';
        })
    })
}
pokeMouseOver();
pokeMouseOut();