const form = document.getElementById("submit")
const firstlist = document.getElementById("firstlist")
const secondlist = document.getElementById("secondlist")
const result = document.getElementById("result")
const guess = document.getElementById("guess")
const reset = document.getElementById("reset")
const button = document.getElementById("button")
const winSound = document.getElementById("youWin")
const loseSound = document.getElementById("youLose")
const chances = document.getElementById("chanceRange")
const limits = document.getElementById("limits")
const svg = document.getElementById("svg")
const dialog = document.getElementById("dialog")
const aboutUS = document.getElementById("aboutus")


let attempts = 5
let max = 20
let answer = Math.floor(Math.random() * max) + 1
console.log(answer)

chances.addEventListener("click", ()=> {
    if(chances.textContent === "Hard Level"){
    attempts = 8
    max = 100
    limits.textContent = "1 - 100"
    secondlist.textContent = `Guesses left: ${attempts}`
    chances.textContent = "Easy Level"
    answer = Math.floor(Math.random() * max) + 1
    dialog.close()
    svg.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"/></svg>'

    }
    else{
    attempts = 5 
    max = 20
    limits.textContent = "1 - 20"
    secondlist.textContent = `Guesses left: ${attempts}`
    chances.textContent = "Hard Level"
    answer = Math.floor(Math.random() * max) + 1
    dialog.close()
    svg.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"/></svg>'

    }

})




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
    if(guess.value === "" || guess.value > max || guess.value < 1){
        result.classList.add("invalidText")
        result.textContent = "Enter a valid number"
        guess.classList.add("invalidBorder")
    }

    if(attempts < 1){
        guess.disabled = true
        result.classList.add("invalidText")
        guess.classList.add("invalidBorder")
        result.textContent = "You Guessed Wrong 😞"
        button.style.display = "none"
        reset.style.display = "block"
        loseSound.currentTime = 0
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
        guess.classList.remove("invalidBorder")
    }
    else if(guess.value > max || guess.value < 1){
        guess.classList.add("invalidBorder")
    }
    else{
        guess.classList.remove("invalidBorder")
        result.textContent = ""
    }
} )
svg.addEventListener("click", ()=> {
    if(dialog.open){
        dialog.close()
        svg.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"/></svg>'
    }
    else{
        dialog.show()
        svg.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m336-280-56-56 144-144-144-143 56-56 144 144 143-144 56 56-144 143 144 144-56 56-143-144-144 144Z"/></svg>'

    }
})




const switchLang = document.getElementById("switchLang")

const Languages = {
    en:{
        title: "Number Guessing Game",
        header: "Guess a number between 1 - 10",
        guess: "Guess",
        reload: "Reload",
        previous_guess: "Previous Guess: N/A",
        btn_text: "Switch Language"
    },
    amh:{
        title: "ቁጥር የመገመት ጨዋታ",
        header: "በዚህ መካከል ያለ ቁጥር ይገምቱ፦",
        guess: "ገምት",
        reload: "ድገም",
        result: "ዕድልዎን ይሞክሩ 😁",
        btn_text: "ቋንቋ ይቀይሩ"
    }
}
function changeLanguage(current){
    const translator = document.querySelectorAll("[data-key]")
    translator.forEach(item => {
        const key = item.getAttribute("data-key")
        item.textContent = Languages[current][key]
    })
}
switchLang.addEventListener("click",() => {
    const currentLang = switchLang.getAttribute("data-lang")
    if(currentLang === "en"){
        changeLanguage("amh")
        switchLang.setAttribute("data-lang", "amh")
        switchLang.textContent = Languages.amh.btn_text
        
    }
    else if(currentLang === "amh"){
        changeLanguage("en")
        switchLang.setAttribute("data-lang", "en")
        switchLang.textContent = Languages.en.btn_text

    }
    dialog.close()
    svg.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"/></svg>'

} )

aboutUS.addEventListener("click", () => {
    alert("I have nothing to say. Thank you for playing anyway!")
    dialog.close()
    svg.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"/></svg>'

})