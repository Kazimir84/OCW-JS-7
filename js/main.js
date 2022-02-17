// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
//      максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car (model, manufacture, startYer, maxSpeed, anginV) {
    this.model = model;
    this.manufacture = manufacture;
    this.startYer = startYer;
    this.maxSpeed = maxSpeed;
    this.anginV = anginV;
    this.drive = function drive () {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} кілометрів на годину`);
        document.write(`<p>Їдемо зі швидкістю ${this.maxSpeed} кілометрів на годину</p>`);
        return this.maxSpeed;
    };
    this.info = function info () {
        // console.log(`Модель: ${this.model} Виробник: ${this.manufacture} Рік випуску: ${this.startYer}
        //  Максимальна швидкість: ${this.maxSpeed}км/год Об'єм двигуна: ${this.anginV}л`);
        // document.write(`<p>Модель: ${this.model} Виробник: ${this.manufacture} Рік випуску: ${this.startYer}
        // Максимальна швидкість: ${this.maxSpeed}км/год Об'єм двигуна: ${this.anginV}л</p>`);
        for (let key in this) {
            if (typeof this[key] !== 'function') console.log(`${key} - ${this[key]}`)
        };
    };
    this.increaseMaxSpeed = function increaseMaxSpeed (newSpeed) {
        document.write(`<p>Нова максимальна швидкість ${this.maxSpeed += newSpeed} км/год</p>`)
        return this.maxSpeed += newSpeed;
    };
    this.changeYear = function changeYear (newValue) {
        document.write(`Новий рік випуску: ${this.startYer = newValue}`);
        return this.startYer = newValue;
    };
    this.addDriver = function addDriver (driver) {
        document.write(`<p>Новий водій: ${driver}</p>`);
        return car.drivers = driver;
    }
}
let car = new Car('AUDI', 'VAG', 1997, 200, 2.6);
console.log(car);
console.log(car.drive());
console.log(car.info());
console.log(car.increaseMaxSpeed(50));
console.log(car.changeYear(1998));
console.log((car.addDriver('Kazimir')));
console.log('car: ', car);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
//      максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car2 {
    constructor(model, manufacture, startYer, maxSpeed, anginV) {
        this.model = model;
        this.manufacture = manufacture;
        this.startYer = startYer;
        this.maxSpeed = maxSpeed;
        this.anginV = anginV;
    };
    info () {
        // console.log(`Модель: ${this.model} Виробник: ${this.manufacture} Рік випуску: ${this.startYer}
        //  Максимальна швидкість: ${this.maxSpeed}км/год Об'єм двигуна: ${this.anginV}л`);
        // document.write(`<p>Модель: ${this.model} Виробник: ${this.manufacture} Рік випуску: ${this.startYer}
        // Максимальна швидкість: ${this.maxSpeed}км/год Об'єм двигуна: ${this.anginV}л</p>`);
        // return this.model, this.manufacture, this.startYer, this.maxSpeed, this.anginV;
        for (let car2Element in this) {
          console.log(`${car2Element} - ${this[car2Element]}`)
        };
    };
    drive () {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} кілометрів на годину`);
        document.write(`<p>Їдемо зі швидкістю ${this.maxSpeed} кілометрів на годину</p>`);
        return this.maxSpeed;
    };
    increaseMaxSpeed (newSpeed) {
        document.write(`<p>Нова максимальна швидкість ${this.maxSpeed += newSpeed} км/год</p>`)
        return this.maxSpeed += newSpeed;
    };
    changeYear (newValue) {
        document.write(`Новий рік випуску: ${this.startYer = newValue}`);
        return this.startYer = newValue;
    };
    addDriver (driver) {
        document.write(`<p>Новий водій: ${driver}</p>`);
        return car2.drivers = driver;
    };
};
let car2 = new Car2('BMW', 'VAG', 200, 210, 2.0)
console.log('Car2: ', car2);
console.log(car2.drive());
console.log(car2.info());
console.log(car2.increaseMaxSpeed(25));
console.log(car2.changeYear(2001));
console.log((car2.addDriver('Kazymyr')));
console.log('car: ', car2);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
function Popelyshka (name, age, bootsSize) {
    this.name = name;
    this.age = age;
    this.bootsSize = bootsSize;
};
let popelyshka1 = new Popelyshka('Ira', 45, 39);
let popelyshka2 = new Popelyshka('Katy', 35, 39);
let popelyshka3 = new Popelyshka('Tanya', 38, 38);
let popelyshka4 = new Popelyshka('Lyda', 42, 38);
let popelyshka5 = new Popelyshka('Sveta', 43, 38);
let popelyshka6 = new Popelyshka('Zina', 54, 38);
let popelyshka7 = new Popelyshka('Lida', 29, 38);
let popelyshka8 = new Popelyshka('Olya', 47, 38);
let popelyshka9 = new Popelyshka('Masha', 39, 40);
let popelyshka10 = new Popelyshka('Toma', 19, 37);

let arr = [
    popelyshka1,
    popelyshka2,
    popelyshka3,
    popelyshka4,
    popelyshka5,
    popelyshka6,
    popelyshka7,
    popelyshka8,
    popelyshka9,
    popelyshka10
];

console.log('Array of a popelyshka)): ', arr);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
class Princ {
    constructor(name, age, boots) {
        this.name = name;
        this.age = age;
        this.boots = boots;
    };
    findBoots (bootsF) {
        for (let arrKey in arr) {
            if (arr[arrKey].bootsSize === bootsF) {
                let popelyshkaFined = arr[arrKey];
                return popelyshkaFined;
            }
        }
    }
}
let princ = new Princ('Carl', 35, 37);
console.log('Принц знайшов попелюшку зa розміром взуття, її звуть:', princ.findBoots(37));
console.log('Princ: ', princ);

let princPopelushka = (arr, princ) => {
    for (const item of arr) {
        if (item.bootsSize === princ.boots) {
            return `Попелюшка знайдена: ${item.name}`
        }
    }
};
console.log(princPopelushka(arr, princ))

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let popelyshkaFindet = arr.find((item) => item.bootsSize === princ.boots);
console.log('Попелюшка знайдена:', popelyshkaFindet);