let age = Number(prompt("Скільки вам років?"))

if (Math.sign(age)== -1) { 
    alert ("Значення не може бути від\'\ємним")
}

if (isNaN(age)) {
    alert ("Ведіть ваш вік")
} 

if (age >= 110) {
    alert ("Не обманюйте, так довго не живуть")
}

let lastDigit = age % 10;

let lastTwoDigits = age % 100;

if (lastTwoDigits > 10 && lastTwoDigits < 20) {
    console.log(age + " років");
} else if (lastDigit === 1) {
    console.log(age + " рік");
} else if (lastDigit > 1 && lastDigit < 5) {
    console.log(age + " роки");
} else {
    console.log(age + " років");
}  