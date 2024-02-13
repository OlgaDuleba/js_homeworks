function triangle ( number, symbol ) {
    let star = ''
    for ( let i = 0; i < number; i++ ) {
        console.log(star+=symbol)
    }
}
triangle (5, '*')