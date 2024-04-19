let inputSlider = document.getElementById("inputSlider");
let SliderValue = document.getElementById("SliderValue");
let PassBox = document.getElementById("PassBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let Generatebutton = document.getElementById("Generatebutton");
let copyicon = document.getElementById("copyicon");

SliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', () => {
    SliderValue.textContent = inputSlider.value;
})

Generatebutton.addEventListener('click', () => {
    PassBox.value = generatepassword();
})

let Lowerchars = "abcdefghijklmnopqrstuvwxyz";
let Upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let Allnumbers = "0123456789";
let Allsymbols = "!@#$%^&*-_";

function generatepassword() {
    let gpassword = "";
    let allChars = "";

    allChars += lowercase.checked ? Lowerchars : "";
    allChars += uppercase.checked ? Upperchars : "";
    allChars += numbers.checked ? Allnumbers : "";
    allChars += symbols.checked ? Allsymbols : "";

    if (allChars == "" || allChars.length == 0) {
        return gpassword;
    }

    let i = 1;
    while (i <= inputSlider.value) {
        gpassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }
    return gpassword;
}

copyicon.addEventListener('click', () => {
    if (PassBox.value != "" && PassBox.value.length >= 1) {
        navigator.clipboard.writeText(PassBox.value);
        copyicon.innerText = "✔"; // Unicode checkmark character
        copyicon.title = "Password Copied";

        setTimeout(() => {
            copyicon.innerHTML = "content_copy"
            copyicon.title = "";
        }, 3000);
    }
});
