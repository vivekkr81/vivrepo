alert("Welcome to our Snake Water Gun Game")
const userinput = prompt("please enter 's' for snake or 'w' for water or 'g' for gun").toLowerCase()
const cnfm = confirm("Are you sure of your option?")
let compinput;
if(userinput==="s" && cnfm===true || userinput==='w' && cnfm===true || userinput==='g' && cnfm===true){
    const random = Math.random()
    if(random>=0.66){
       compinput = "s"
    }else if(random>=0.33){
        compinput = "w"
    }else{
        compinput = 'g'
    }
    if(userinput==='s' && compinput==='w' || userinput==='g' && compinput==='s' || userinput==='w' && compinput==='g'){
        alert("congrats you won the Game")
    }else{
        alert("You have Lost the Game")
        
        const cnfm = confirm(`Do you want to play again?`)
        if(cnfm===true){
            location.reload()
        }else{
            alert("Thnaks for playing our Game")
        }
    }
}else{
    alert("You have entered Invalid option ")
    const cnfm = confirm(`Do you want to play again?`)
        if(cnfm===true){
            location.reload()
        }else{
            alert("Thnaks for playing our Game")
        }
}
