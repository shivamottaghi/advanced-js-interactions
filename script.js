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