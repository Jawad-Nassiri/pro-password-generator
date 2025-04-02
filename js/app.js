const generatedPasswordElem = document.querySelector('.generated-password')
const charactersCountElem = document.querySelector('.characters-count')
const rangeInputElem = document.querySelector('input[type="range"]')
const checkboxesElements = document.querySelectorAll('input[type="checkbox"]')
const strengthStatusElem  = document.querySelector('.strength-status')
const generatePassBtn  = document.querySelector('.generate-button')



let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let symbols = "!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?`~";


let selectedChars = ""
let randomPass = ""
let selectedCharsCount = +rangeInputElem.value;
let selectedCheckboxCount = 0;




charactersCountElem.textContent = rangeInputElem.value


function updateCharsCount() {
  charactersCountElem.textContent = rangeInputElem.value
  selectedCharsCount = +rangeInputElem.value
}


function generatePassword() {
  selectedChars = ""
  randomPass = ""
  generatedPasswordElem.textContent = ""

  checkboxesElements.forEach((checkboxElem) => {
    if(checkboxElem.checked) {

      let selectedCharsValue = checkboxElem.dataset.value

      if(selectedCharsValue === "uppercase") selectedChars += uppercase;
      if(selectedCharsValue === "lowercases") selectedChars += lowercase;
      if(selectedCharsValue === "numbers") selectedChars += numbers;
      if(selectedCharsValue === "symbols") selectedChars += symbols; 
    }
  })


  if(selectedChars === "") {
    generatedPasswordElem.textContent = "LWAEIi349"
    return
  }


  for(let i=0; i<selectedCharsCount; i++) {
    randomPass += selectedChars[Math.floor(Math.random() * selectedChars.length)]
  }

  generatedPasswordElem.textContent = randomPass

}


checkboxesElements.forEach((checkboxesElem) => {
  checkboxesElem.addEventListener('input', () => {
    if(checkboxesElem.checked) {
      selectedCheckboxCount++
    } else {
      selectedCheckboxCount--
    }


    if(selectedCheckboxCount === 2) {
      strengthStatusElem.className = 'strength-status bad'
    } else if(selectedCheckboxCount === 3) {
      strengthStatusElem.className = 'strength-status good'
    } else if(selectedCheckboxCount === 4) {
      strengthStatusElem.className = 'strength-status strong'
    } else {
      strengthStatusElem.className = 'strength-status very-bad'
    }
  })
})




rangeInputElem.addEventListener('input', updateCharsCount)
generatePassBtn.addEventListener('click', generatePassword)
