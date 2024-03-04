const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

function findValueByKey(obj, companyName) {
    // Перевіряємо, чи назва об'єкта співпадає з шуканою компанією
    if (obj.name === companyName) return obj;
    
    // Знаходимо массив 
    for (key in obj) {
        if (Array.isArray(obj[key])) {
            for (el of obj[key]) {
                const result = findValueByKey(el, companyName);
                if (result) return result
            }
        }
    }
    
    // Якщо не знайдено (без нула не хоче працювати, не маю пояснень чому)
    return null;
}

console.log(findValueByKey(company, 'Велика Компанія'));