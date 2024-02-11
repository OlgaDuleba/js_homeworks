let unit = 'kg';
let numb = 5;

switch(unit) {
	case 'kg':
	console.log(numb + " кілограмів це " + (numb *= 1000) + " грамів")
	break;
		
	case 'km':
	console.log(numb + " кілометрів це " + (numb *= 1000) + " метрів")
	break;

	case 'hour':
	console.log(numb + " годин це " + (numb*= 60) + " хвилин")
	break;

	default:
        console.log('Я такого не знаю :(');
}
