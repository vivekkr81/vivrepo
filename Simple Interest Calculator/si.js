alert("Welcome to our Simple Interest Calculator")

const principal = parseInt(prompt("Please enter your principal Amount: "));
const interestRate = parseInt(prompt("Please enter your Interest Rate").replace("%", "")) / 100;
const time = parseInt(prompt("Please enter the time duration in years"));
const check = confirm("Are your sure all your details are correct");


if (check === true) {
    const si = principal * interestRate * time;
    alert("The Simple Interest for your principal amount " + principal + " is: " + si)
    alert("Thanks for visiting our Simple Interest Calculator")
} else {
    const cnfm = confirm("Do you want to try again?")
    if (cnfm === true) {
        location.reload()
    } else {
        alert("Thanks for visiting our Simple Interest Calculator")
    }
}


