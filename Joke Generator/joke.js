const jokeDisplay = document.querySelector(".JokeDisplay");
const newJokeBtn = document.querySelector(".NewJokeBtn");

(async()=>{
    const jokefetch = await fetch("https://official-joke-api.appspot.com/jokes/random/10");
    const jokes = await jokefetch.json();
    console.log(jokes);
    
    const randomnum = Math.ceil(Math.random()*10);
    jokeDisplay.innerHTML = `<p>${jokes[randomnum].setup}</p>
    <p>${jokes[randomnum].punchline}</p>`

    newJokeBtn.onclick = ()=>{location.reload()};
})();
