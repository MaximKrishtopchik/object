// //Задание 1
// //При помощи continue вывести нечетные значение от 1 до 10.
for(let i = 0; i< 10; i++){
   if(i % 2 == 0) continue
   console.log(i)
   }




// //Задание 2
// //При помощи continue вывести четные значение от 1 до 10.

for(let i = 0; i< 10; i++){
    if(i % 2 == 1) continue
    console.log(i)
    }





//Задание 3
// Написать цыкл который выводит числа от 1 до 20 включительно.  
for(let f = 1; f<20; f++){
    console.log(f)
}





//Задание 4
//Написать цыкл который будет записывать числа пользователя до тех пор пока он не нажмет кнопку Enterю. После чего сложит все числа 
//тоесть пользователь вводит 1,2,3,4,5 и цыкл подсичтает эти числа после того как будет нвжвта кнопка Enter.
let sum = 0;
while (true) {
let value = +prompt("Введите число", '');
 if (!value) break; // (*)
 sum += value;
 }
console.log( 'Сумма: ' + sum );





//Задание 5
//Выведите с помощью цикла столбец чисел от 1 до 100 включительно
let i = 1;
for(let i = 1; i<=100; i++){
    console.log(i)
}





//Задание 6
//Выведите с помощью цикла столбоц от 100 до 1 вкдючительно
let i = 0;
for(let i = 1; i <=100;i++){
    console.log(i)
}





//Задание 7
//Цыкл который запрашивает польвозателя ввести число больше 100 если число меньше 100 цыкл повторяется заново
let num;
do{
num = prompt("ВВедите число больше 100");
} while (num <=100 && num);




let arr = [2,5,9,15,0,4];
for(i = 0; i <arr.length; i++){
    if (arr[i] > 3 && arr[i] <
    10){

console.log(arr[i])        
    }
}
