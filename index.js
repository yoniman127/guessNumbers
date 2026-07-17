const form = document.getElementById("submit")
const firstlist = document.getElementById("firstlist")
const secondlist = document.getElementById("secondlist")
const result = document.getElementById("result")
const guess = document.getElementById("guess")
const reset = document.getElementById("reset")
const button = document.getElementById("button")
const winSound = document.getElementById("youWin")
const loseSound = document.getElementById("youLose")
const answer = Math.floor(Math.random() * 10) + 1


let attempts = 3
form.addEventListener("submit",(event) => {
    event.preventDefault()
    if(guess.value > answer){
        firstlist.textContent = `Previous Guess: ${guess.value}`
        attempts--
        secondlist.textContent = `Guesses left: ${attempts} `
        result.textContent = "Guess is too high 😅"
    }

    if(guess.value < answer){
        firstlist.textContent = `Previous Guesses: ${guess.value}`
        attempts--
        secondlist.textContent = `Guesses left: ${attempts} `
        result.textContent = "Guess is too low 😉"
    }
    if(guess.value === "" || !guess.checkValidity()){
        result.style.color = "#ff0000"
        result.textContent = "Enter a valid number"
        guess.classList.add("invalid")
    }

    if(attempts < 1){
        guess.disabled = true
        result.style.color = "#ff0000"
        guess.style.borderColor = "#ff0000"
        result.textContent = "You Guessed Wrong 😞"
        button.style.display = "none"
        reset.style.display = "block"
        loseSound.currentTime = 0.08
        loseSound.play()
    }
    if(guess.value == answer){
        guess.disabled = true
        result.style.color = "#00ff00"
        guess.style.borderColor = "#00ff00"
        result.textContent = "Guess is correct 🤩"
        button.style.display = "none"
        reset.style.display = "block"
        winSound.currentTime = 0
        winSound.play()
        
    }
    reset.addEventListener("click" ,() =>{
        form.submit()
    })
})







guess.addEventListener("input" ,()=>{
    if(guess.value === ""){
        guess.classList.remove("invalid")
    }
    else if(!guess.checkValidity()){
        guess.classList.add("invalid")
    }

    else{
        guess.classList.remove("invalid")
        guess.classList.remove("animation")
        result.textContent = ""
    }
} )
