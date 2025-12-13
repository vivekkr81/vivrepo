const hack = document.querySelector(".hack");
const hackDisplay = document.querySelector(".hackDisplay");

async function hackIntilize() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            hack.textContent = "HackerVirus Attack";
            hackDisplay.textContent = "Initilizing Hack ."
            document.body.style.backgroundColor = "darkCyan"
          }, 3000);
          setTimeout(() => {
           hackDisplay.textContent = "Initilizing Hack .."
         }, 4000);
         setTimeout(() => {
           hackDisplay.textContent = "Initilizing Hack ..."
           resolve("Hack Intilize success")
         }, 5000);
    })
}
async function hackusername() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            hack.textContent = "HackerVirus Attack";
            hackDisplay.innerHTML = `<p>Hacking Vivek<sup>15</sup> Username .</p>`
             document.body.style.backgroundColor = "lightBlue"
          }, 1000);
          setTimeout(() => {
            hackDisplay.innerHTML = `<p>Hacking Vivek<sup>15</sup> Username ..</p>`
         }, 3000);
         setTimeout(() => {
            hackDisplay.innerHTML = `<p>Hacking Vivek<sup>15</sup> Username ...</p>`
           resolve("Hacking username done")
         }, 5000);
    })
 }

 async function usernamefound() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            hack.textContent = "HackerVirus Attack";
            hackDisplay.innerHTML = `<p>Username found Vivek<sup>17</sup> .</p>`
             document.body.style.backgroundColor = "darkBlue"
          }, 1000);
          setTimeout(() => {
            hackDisplay.innerHTML = `<p>Username found Vivek<sup>17</sup> ..</p>`
         }, 3000);
         setTimeout(() => {
            hackDisplay.innerHTML = `<p>Username found Vivek<sup>17</sup> ...</p>`
           resolve("username found done")
         }, 5000);
    })
 }

 
 async function connectfb() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            hack.textContent = "HackerVirus Attack";
            hackDisplay.innerHTML = `<p>Connecting Facebook .</p>`
             document.body.style.backgroundColor = "red"
          }, 1000);
          setTimeout(() => {
           hackDisplay.innerHTML = `<p>Connecting Facebook ..</p>`
         }, 4000);
         setTimeout(() => {
            hackDisplay.innerHTML = `<p>Connecting Facebook ...</p>`
           resolve("connect fb done")
         }, 5000);
    })
 }

 (async()=>{
    await hackIntilize();
    await hackusername();
    await usernamefound();
    await connectfb();
 })();