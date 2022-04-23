const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// const hex = ["blue", "red", "black", "green"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    let randomNumber = "#";
    for(let i = 0; i<6; i++) {
        randomNumber += hex[getRandomNumber()];
    }


    document.body.style.backgroundColor = randomNumber;
    color.innerHTML = randomNumber;

});

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length)
};
