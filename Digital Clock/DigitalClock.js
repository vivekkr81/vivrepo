const displayclock = document.querySelector(".displayClock")
const stopbtn = document.querySelector(".stopbtn")

let count = 0;
const clearInter = setInterval(() => {
   
    const date = new Date();
    let hour;
    if(date.getHours()>12){
        hour = date.getHours()-12;
    }else{
        hour = date.getHours()
    }
    displayclock.textContent = `${hour}: ${date.getMinutes()}: ${date.getSeconds()}`;
    
    
}, 1000);

stopbtn.onclick = ()=>{
    clearInterval(clearInter)
}