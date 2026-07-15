const form = document.getElementById("submit")
const firstlist = document.getElementById("firstlist")
const secondlist = document.getElementById("secondlist")
const result = document.getElementById("result")
const guess = document.getElementById("guess")
const reset = document.getElementById("reset")
const button = document.getElementById("button")
const answer = Math.floor(Math.random() * 20) + 1

console.log(answer)

let left = ['1', '2', '3']
form.addEventListener("submit",(event) => {
    event.preventDefault()

    if(guess.value === "" || !guess.checkValidity()){
        result.style.color = "#ff0000"
        result.textContent = "Enter a valid number"
        guess.classList.add("invalid")
        guess.classList.add("animation")
    }
    if(guess.value > answer){
        firstlist.textContent = `Previous Guess: ${guess.value}`
        left.pop()
        secondlist.textContent = `Guesses left: ${left.length} `
        result.textContent = "Guess is too high 😅"
    }
    if(guess.value < answer){
        firstlist.textContent = `Previous Guesses: ${guess.value}`
        left.pop()
        secondlist.textContent = `Guesses left: ${left.length} `
        result.textContent = "Guess is too low 😉"
    }
    if(guess.value == answer){
        firstlist.textContent = `Previous Guess: ${guess.value}`
        result.style.color = "#00ff00"
        result.textContent = "Guess is correct 🤩"
        guess.disabled = true
        guess.style.borderColor = "#00ff00"
        button.style.display = "none"
        reset.style.display = "block"

        
    }
    if(left.length < 1){
        guess.disabled = true
        guess.style.borderColor = "transparent"
        result.textContent = "You Guessed Wrong 😞"
        result.style.color = "#ff0000"
        button.style.display = "none"
        reset.style.display = "block"
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
