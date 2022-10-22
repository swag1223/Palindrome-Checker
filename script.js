const inputTxt = document.getElementById("userIp");
const checkPalindromeBtn = document.querySelector(".inputs button");
const outputTxt = document.getElementById("output");
let modifiedInput;



inputTxt.addEventListener("keyup", () => {
    
    //removing all special characters and whitespaces from the entered value
    
    modifiedInput = inputTxt.value.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");//regex: /[^A-Z0-9]/ig =>ig means insensitive : not Case Sensitive managescases of [a-z A-Z]
    if (modifiedInput) {
        return checkPalindromeBtn.classList.add("active");
    }

    checkPalindromeBtn.classList.remove("active");
    checkPalindromeBtn.style.background = "#aa57cc";
    outputTxt.style.display = "none";

})


checkPalindromeBtn.addEventListener("click", () => {
    console.log(modifiedInput);

    //spilliting the user input string into array like object , then reversing it and joining them in a single word
    let reversedInput = modifiedInput.split("").reverse().join("");
    
    outputTxt.style.display = "block";
    if (modifiedInput !== reversedInput) {
        outputTxt.innerHTML = `No, <span>'${inputTxt.value}'</span> is not a Palindrome!`;
        outputTxt.childNodes[1].style.color = "#E0144C";
        checkPalindromeBtn.style.background = "#E0144C";
        return;
    }
    outputTxt.innerHTML = `Yes, <span>'${inputTxt.value}'</span> is a Palindrome!`;
    outputTxt.childNodes[1].style.color = "#3ac97d";
    checkPalindromeBtn.style.background = "#3ac97d";
     
})


