const passwordElement = document.createElement("h2");
const generateBtn = document.querySelector(".generateBtn");

class Password {
    constructor() {
        const random = Math.random()

        if (random > 0.66) {
            this.specialchar = '@'
        } else if (random > 0.33) {
            this.specialchar = '#'
        } else {
            this.specialchar = '$'
        }
    }

    async generatePassword() {
        const fetchword = await fetch("https://random-words-api.kushcreates.com/api?words=1");
        const word = await fetchword.json();
        const fetchword1 = await fetch("https://random-words-api.kushcreates.com/api?words=1");
        const word1 = await fetchword1.json();
        const freshword = word[0].word;
        const freshword1 = word1[0].word;
        const lowerword = freshword.toLowerCase();
        const lowerword1 = freshword1.toLowerCase();
        const upperword = freshword.charAt(0).toUpperCase()
        let Password = lowerword.slice(1);
        return Password = upperword + Password + this.specialchar + lowerword1

    }

}






generateBtn.onclick = async () => {
    generateBtn.textContent = "Generate New Password"
    const password = new Password()
    passwordElement.textContent = await password.generatePassword();
    generateBtn.before(passwordElement);

}