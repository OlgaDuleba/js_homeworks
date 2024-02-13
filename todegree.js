function degree (number, quantity) {
    let start = 1;
    for ( let i = 0; i < quantity; i++ ) {
        start *= number
    }
    console.log(start)
}
 degree (2, 3)