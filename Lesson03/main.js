//1
console.log("Задание №1")
arr = [0, 1];
for (let i = 2; i <= 100; i++) {
    arr[i] = i;
}

function getSimpleNums(arrInput) {
    for (let i = 0; i <= 100; i++) {
        if (arrInput[i] == 0) {
            arrInput[i] = '';
        } else if (arrInput[i] == 1) {
            arrInput[i] = '';
        } else if (arrInput[i] != '') {
            curNum = arrInput[i];
            for (let j = (i + 1); j <= 100; j++) {
                if (arrInput[j] % curNum == 0) {
                    arrInput[j] = '';
                }
            }
        }
    }
    arrResult = []
    for (let i = 0; i <= 100; i++) {
        if (arrInput[i] != '') {
            arrResult.push(arrInput[i]);
        }
    }
    return arrResult;
}

arr = getSimpleNums(arr);
let i = 0;
while (i < arr.length) {
    console.log(arr[i++]);
}
//1

//2
console.log("Задание №2")
//Наименование, количество, цена
let basket = [
    ['Товар1', 17, 34.2],
    ['Товар2', 2.3, 14.34],
    ['Товар3', 1, 1000],
    ['Товар4', 3, 200]
];

function countBasketPrice(curBasket) {
    let sumInBasket = 0;
    for (let basketItem of curBasket) {
        sumInBasket += basketItem[1] * basketItem[2];
    }
    return sumInBasket;
}

console.log("Сумма к оплате: " + countBasketPrice(basket));
//2

//3
console.log("Задание №3")
for (let i = 0; i <= 9; console.log(i++)) { }
//3

//4
console.log("Задание №4")
st = '';
for (let i = 1; i <= 20; i++) {
    st += '*';
    console.log(st);
}
//4