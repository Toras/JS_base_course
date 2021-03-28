'use strict'
//task1
document.getElementsByName("task1")[0].value = "";
document.getElementsByName("task1")[0].value += "var a = 1, b = 1, c, d; \n";
document.getElementsByName("task1")[0].value += "c = ++a; alert(c); // 2 ++a - сначала выполняется операция а+1, затем с присваивается теккущее значение а(=2) \n";
document.getElementsByName("task1")[0].value += "d = b++; alert(d); // 1 b++ - сначала происходит присваивание с=b, затем выполняется операция b+1 \n";
document.getElementsByName("task1")[0].value += "c = (2+ ++a); alert(c); // 5 к 2 прибавляется значение операции a+1, так в a теперь хранится a+1 \n";
document.getElementsByName("task1")[0].value += "d = (2+ b++); alert(d); // 4 к 2 прибавляется b, затем b увеличивается на 1 \n";
document.getElementsByName("task1")[0].value += "alert(a); // 3 a=3 после двух операций ++a \n";
document.getElementsByName("task1")[0].value += "alert(b); // 3 b=3 после двух операций b++ \n";
//end task1

//task2
document.getElementsByName("task2")[0].value = "";
document.getElementsByName("task2")[0].value += "var a = 2; \n"
document.getElementsByName("task2")[0].value += "var x = 1 + (a *= 2); \n";
document.getElementsByName("task2")[0].value += "x = 1 + (a *= 2) = 1 + (a * 2) = 1 + 4 = 5";
//end task2

//task3
function checkNumbers(a, b) {
    if (a >= 0 && b >= 0) {
        document.getElementsByName("task3")[0].value = a - b;
    } else if (a < 0 && b < 0) {
        document.getElementsByName("task3")[0].value = a * b;
    } else if ((a * b) <= 0) {
        document.getElementsByName("task3")[0].value = +a + +b;
    }
}

function checkOnChange() {
    let a = document.getElementsByName("var_a3")[0].value;
    let b = document.getElementsByName("var_b3")[0].value;
    checkNumbers(a, b);
}
document.getElementsByName("var_a3")[0].value = 0;
document.getElementsByName("var_b3")[0].value = 0;
checkNumbers(document.getElementsByName("var_a3")[0].value, document.getElementsByName("var_b3")[0].value);
//end task3

//task4
function outputNumbers() {
    document.getElementsByName("task4")[0].value = "";
    let a = document.getElementsByName("var_a4")[0].value;
    switch (+a) {
        case 0:
            document.getElementsByName("task4")[0].value += 0 + '\n';
        case 1:
            document.getElementsByName("task4")[0].value += 1 + '\n';
        case 2:
            document.getElementsByName("task4")[0].value += 2 + '\n';
        case 3:
            document.getElementsByName("task4")[0].value += 3 + '\n';
        case 4:
            document.getElementsByName("task4")[0].value += 4 + '\n';
        case 5:
            document.getElementsByName("task4")[0].value += 5 + '\n';
        case 6:
            document.getElementsByName("task4")[0].value += 6 + '\n';
        case 7:
            document.getElementsByName("task4")[0].value += 7 + '\n';
        case 8:
            document.getElementsByName("task4")[0].value += 8 + '\n';
        case 9:
            document.getElementsByName("task4")[0].value += 9 + '\n';
        case 10:
            document.getElementsByName("task4")[0].value += 10 + '\n';
        case 11:
            document.getElementsByName("task4")[0].value += 11 + '\n';
        case 12:
            document.getElementsByName("task4")[0].value += 12 + '\n';
        case 13:
            document.getElementsByName("task4")[0].value += 13 + '\n';
        case 14:
            document.getElementsByName("task4")[0].value += 14 + '\n';
        case 15:
            document.getElementsByName("task4")[0].value += 15 + '\n';
            break;
        default:
            document.getElementsByName("task4")[0].value = "";
    }
}
document.getElementsByName("var_a4")[0].value = 0;
outputNumbers();
//end task4

//task5
let my_sum = function (a, b) {
    return a + b;
}
let my_sub = function (a, b) {
    return a - b;
}
let my_mul = function (a, b) {
    return a * b;
}
let my_div = function (a, b) {
    return b != 0 ? a / b : "division by zero";
}
function calcSum() {
    let a = +document.getElementsByName("var_a5")[0].value;
    let b = +document.getElementsByName("var_b5")[0].value;
    document.getElementsByName("task5")[0].value = a + " + " + b + " = " + my_sum(a, b);
}
function calcSub() {
    let a = +document.getElementsByName("var_a5")[0].value;
    let b = +document.getElementsByName("var_b5")[0].value;
    document.getElementsByName("task5")[0].value = a + " - " + b + " = " + my_sub(a, b);
}
function calcMul() {
    let a = +document.getElementsByName("var_a5")[0].value;
    let b = +document.getElementsByName("var_b5")[0].value;
    document.getElementsByName("task5")[0].value = a + " * " + b + " = " + my_mul(a, b);
}
function calcDiv() {
    let a = +document.getElementsByName("var_a5")[0].value;
    let b = +document.getElementsByName("var_b5")[0].value;
    document.getElementsByName("task5")[0].value = a + " / " + b + " = " + my_div(a, b);
}
//end task5

//task6
function mathOperation(a, b, oper) {
    switch (oper) {
        case 'сложение': {
            let result = my_sum(a, b);
            return result;
        }
        case 'вычитание': {
            let result = my_sub(a, b);
            return result;
        }
        case 'умножение': {
            let result = my_mul(a, b);
            return result;
        }
        case 'деление': {
            let result = my_div(a, b);
            return result;
        }
    }
}
//end task6

//task7
let textField = document.getElementsByName("task7")[0];
textField.value = "";
textField.value += "1. null == 0 - " + (null == 0) + "\n";
textField.value += "2. null === 0 - " + (null === 0) + "\n";
textField.value += "3. null < 0 - " + (null < 0) + "\n";
textField.value += "4. null > 0 - " + (null > 0) + "\n";
textField.value += "5. null <= 0 - " + (null <= 0) + "\n";
textField.value += "6. null >= 0 - " + (null >= 0) + "\n";
textField.value += "Для операции == js использует абстрактный алгоритм сравнения для равенств.\n"
textField.value += "Согласно этому алгоритму в случае сравнения с null true возвращается если второй операнд null или undefined.\n"
textField.value += "Для операций < и > js использует абстрактный алгоритм сравнения для отношений.\n";
textField.value += "В ходе выполнения алгоритма происходит преобразование null к значению +0.\n";
textField.value += "+0 = 0 поэтому операции null < 0 и null > 0 выдают false.\n";
textField.value += "По той же причине операции null <= 0 и null >= 0 выдают true.";
//end task7

//task8
function my_pow(val, pow) {
    if (pow > 1) {
        return val * my_pow(val, pow - 1);
    } else if (pow == 0) {
        return 1;
    }
    else {
        return val;
    }
}
function calcPow() {
    let val = +document.getElementsByName("var_val8")[0].value;
    let pow = +document.getElementsByName("var_pow8")[0].value;
    textField = document.getElementsByName("task8")[0];
    textField.value = "" + val + "^" + pow + " = " + my_pow(val, pow);
}
document.getElementsByName("var_val8")[0].value = 0;
document.getElementsByName("var_pow8")[0].value = 0;
document.getElementsByName("task8")[0].value = "0^0 = " + my_pow(0, 0);
//end task8