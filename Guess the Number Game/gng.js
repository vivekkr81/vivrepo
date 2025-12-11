alert("Welcome to our Guess the number Game")
const randnum = Math.ceil(Math.random() * 100);
let guesses = 0;
while (true) {
    const usernum = parseInt(prompt("Guess any number between 1 and 100"))
    
    const cnfm = confirm("Are you sure of your Guess?")
    if(isNaN(usernum) || usernum>100 || cnfm===false){
        alert("You have entered Invalid Number, Refresh the page to try again")
        break;
    }

    let typerand;
    if (usernum > randnum) {
        typerand = "greater than computer num"
    } else if (usernum < randnum) {
        typerand = "lower than computer num"
    }

    if (randnum === usernum) {
        alert("You have guesses the correct number and your Score is: " + (100 - guesses))
        alert("Thanks for playing our Game")
        break;
    } else {
        guesses++;
        alert("You have Guessed Incorrect Number, Your number is " + typerand)
      
        
        const cnfm = confirm("Do You want to continue playing game?")
        if (cnfm === false) {
            alert("Thanks for playing our Game")
            break;
        }

    }
}
