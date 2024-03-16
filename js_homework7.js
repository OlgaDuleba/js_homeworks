var arr = [
    
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Santa",
        lastName:"Barbara",
        email:"santa985@gmail.com"
    
    },
];




function check(data) {
    let reg = /^([\w\.-]+)@(?:yahoo|gmail)\.com$/
    let result = []
    for (el of data) {
      
        if(reg.test(el.email)) {
            result.push(el)
        }
    }
    
    return result
}

let res = check(arr)

console.log('Nice emails', res);

