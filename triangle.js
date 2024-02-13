function triangle ( number, symbol) {
    let character = '';
    let a = 0;
    while (a < number) { 
        a++;
        character += symbol;
        console.log (character)
    }
}

triangle(5, '~')

/*function triangle ( number, symbol ) {
    let star = ''
    for ( let i = 0; i < number; i++ ) {
        console.log(star+=symbol)
    }
}
triangle (5, '*')*/

/*function degree (number, quantity) {
    let start = 1;
    for ( let i = 0; i < quantity; i++ ) {
        start *= number
    }
    console.log(start)
}
 degree (2, 3)*/
