let services = {
    "b_ticket": "100 грн",
    "b_appartment": "300 грн",
    "b_tour": "400 грн",
    "consultation": "50 грн",
};


const toNumber = str => parseInt(str.replace(/[^\d.]/g, ''))

services.sum = function() {
    let total = 0;
    for (let service in this) {
        if (typeof this[service] === "string") {
            total += toNumber(this[service]); 
        }
    }
    return total
}


services.minPrice = function() {
    let prices = [];
    for (let service in this) { 
        if (typeof this[service] === "string") {
            prices.push(toNumber(this[service]))
        }
    }
    return Math.min(...prices);
}


services.maxPrice = function() {
    let prices = [];
    for (let service in this) { 
        if (typeof this[service] === "string") {
            prices.push(toNumber(this[service]))
        }
    }
    return Math.max(...prices);
}
  
console.log(services)
console.log('All inclusive', services.sum());
console.log('most expensive service', services.maxPrice());
console.log('the cheapest service', services.minPrice());