const timeInputName = document.querySelector(".timeInputName");
const timeInput = document.querySelector('.timeInput');
const setBtn = document.querySelector('.setBtn');
const myalarmContainer = document.querySelector('.myAlarms');
const form1 = document.querySelector('.form1');
const form12 = document.querySelector('.form2');


let myalarms = [];
function display() {
    myalarms = JSON.parse(localStorage.getItem("myalarms")) || [];
    myalarmContainer.innerHTML = '';
    if (myalarms.length >= 1) {
        const headalarm = document.createElement("h1");
        headalarm.textContent = "My Alarms"
        myalarmContainer.append(headalarm);
    }
    myalarms.forEach((myalarm, index) => {

        const container = document.createElement("div");
        const alarmName = document.createElement("h2");
        const alarmTime = document.createElement("h2");
        const deleteBtn = document.createElement("button");
        const activateAlarm = document.createElement("button");
        alarmName.textContent = myalarm.name;
        let [newTime, oldtime] = myalarm.time.split(":");
        newTime = parseInt(newTime);
        if (newTime > 12) {
            newTime = `${newTime - 12}:${oldtime}`;
        } else {
            newTime = myalarm.time;
        }

        alarmTime.textContent = newTime;
        deleteBtn.textContent = "Delete Alarm";
        if (myalarm.active === true) {
            activateAlarm.textContent = "Alarm Activated";
            activateAlarm.style.backgroundColor = 'darkGreen';
        }else{
            activateAlarm.textContent = "Activate Alarm";
        }
        
        container.classList.add('alarmContainer');
        container.append(alarmName);
        container.append(alarmTime);
        container.append(activateAlarm);
        container.append(deleteBtn);
        myalarmContainer.append(container)
        let clear;
        activateAlarm.onclick = () => {
            activateAlarm.textContent = "Alarm Activated"
            activateAlarm.style.backgroundColor = 'darkGreen';
            myalarms[index].active = true;
            localStorage.setItem("myalarms", JSON.stringify(myalarms));
            clear = setInterval(() => {
                const timee = new Date();
                const newtime = `${timee.getHours()}:${timee.getMinutes()}`

                if (newtime === myalarm.time) {
                    const music = new Audio("./music/uke.mp3")
                    music.play()
                    clearInterval(clear);
                    myalarms.splice(index, 1);
                    localStorage.setItem("myalarms", JSON.stringify(myalarms))
                    display();
                }
            }, 1000);
        }

        deleteBtn.onclick = () => {
            myalarms.splice(index, 1);
            localStorage.setItem("myalarms", JSON.stringify(myalarms));
            clearInterval(clear);
            display();
        }
    });
}

setBtn.onclick = () => {
    const name = timeInputName.value;
    let time = timeInput.value;
    const active = false;
    myalarms.push({ name, time, active })
    localStorage.setItem("myalarms", JSON.stringify(myalarms));
    form1.reset();
    form12.reset();
    display();
}

display()