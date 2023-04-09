const characters =   ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"
];
let password1El = document.getElementById("first-password")
console.log(password1El)
let password2El = document.getElementById("second-password")
console.log(password2El)

console.log("Hello")

function password() {
    let random1string = ""
    let random2string = ""
    for (let i = 0; i < 16; i++) {
        let random1 = Math.floor(Math.random() * characters.length)
        random1string += characters[random1]
    }
    for (let i = 0; i < 16; i++) {
        let random2 = Math.floor(Math.random() * characters.length)
        random2string += characters[random2]
    }
    password1El.textContent = random1string;
    password2El.textContent = random2string;
    console.log(random1string);
    console.log(random2string)
}