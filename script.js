const url1 = 'https://images.wallpaperscraft.ru/image/single/mashina_seryj_mokryj_147750_3840x2160.jpg';
const url2 = 'https://images.wallpaperscraft.ru/image/single/bmw_avtomobil_bamper_191131_3840x2160.jpg';
const url3 = 'https://images.wallpaperscraft.ru/image/single/mitsubishi_lancer_evo_x_tiuning_96277_3840x2400.jpg';

// Промис - специальный объект содержащий своё состояние, которое может принимать одно из 3 возможных значенй
// 1. pending - ожидание
// 2. fulfilled - выполнено успешно
// 3. rejected - выполнено неудачно

/*const promise = {
    state: ['pending', 'fulfilled', 'rejected']
    resolveQueren 
}*/

// ***************Создание промиса****************

console.log('До promise');
const promise = new Promise((resolve, reject) => {
    console.log('Внутри promise');
});
console.log('После promise');

// Изменение состояние промиса
// При создание промис получает состояние pending
/* Функция передаваемая в конструктор промиса, может иметь два параметра (обычно их называют resolve и reject),
Эти параметры являются функциями, вызывая первую из них (resolve) мы переводим промис в fulfilled,
а при переводе второй функции (reject) промис перейдет в состоянии rejected
*/

const promise2 = new Promise((resolve, reject) => {
    resolve();
});

function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
            console.log('resolved')
        }, ms)
    })
}

let promis3 = delay(3000);

// Метод then()

console.log('До then');

promis3.then(() => {
    console.log(1);
})

promis3.then(() => {
    console.log(2);
})

promis3.then(() => {
    console.log(3);
})

console.log('После then');

// ****************** Чейнинг промисов ****************

/* Метод then - помешает переданную ему функцию в очередь промиса и возвращает новый промис
у нового промиса итакже можно вызвать метод then , который в свою очередь вернут новый промис и так далее.
Таким образом, мы можем объеденить вызовы then в цепочки( такой подход называется чейнинг промисов)
*/



promis3
    .then(() => { console.log(1) })
    .then(() => { console.log(2) })
    .then(() => { console.log(3) })



// ************** Последовательная загрузка картинок при помощи промисов ***************

function loadImage(url) {
    return new Promise((resolve) => {
        const img = document.createElement('img');
        img.height = 200;
        img.src = url;
        document.body.append(img);
        img.addEventListener('load', () => {
            resolve();
        })
    })
}

loadImage(url1)









