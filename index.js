let randomnumber = Math.round(Math.random() * 100);
const submitform = document.querySelector(".submitbtn");
let inputnumber = document.querySelector(".inputnumber");
let output = document.querySelector(".output");
let allguesses = document.querySelector(".all-guesses");
let submitbtn = document.querySelector(".submitbtn");
let startbtn = document.querySelector(".startbtn");
let arr = [];
submitform.addEventListener('click', (e) => {
    e.preventDefault();

    const inputvalue = parseInt(inputnumber.value);
    if (inputvalue === randomnumber) {
        output.innerText = 'congrats !!';
        allguesses.innerText = '';
        submitbtn.disabled = true;
        startbtn.disabled = false;


    } else if (inputvalue > randomnumber) {
        output.innerText = " Too high !";
    } else {
        output.innerText = "Too low !";

    }
    arr.push(inputvalue);
    allguesses.innerText = "Your guesses:" + arr.join(',');
    Form.reset();
});
startbtn.addEventListener('click', () => {
    output.innerText = '';
    allguesses.innerText = ''
    submitbtn.disabled = false;
    startbtn.disabled = true;
    randomnumber = Math.round(Math.random() * 100);
    arr = [];
})