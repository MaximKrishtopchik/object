//Создайте ассоциативный массив (объект) заработных плат obj. Выведите на экран зарплату Максима и Егора. 
let salary = {
    Maksim: '999$',
    egor: '999$',
}
console.log(salary) // { Maksim: "999$", egor: "999$" }





//Напишите функцию, которая проверяет, является ли элемент именно простым объектом, а не массивом, null и т.п.
const user = { name: 'MAKSIM', age: 14};

if (typeof user === 'object') {
  console.log('is object');
}

// Я думаю есть еще варинты решение при помощи методаб но думаю это и так достаточно просто.







//Напишите функция deepEqual, которая сможет сравнивать 2 объекта с разными уровнями вложенности(приложение 1). 
    const obj1 = {
    a: 'a',
    b: {
    a: 'a',
    b: 'b',
    c: {
    a: 1,
    },
    },
   };
   const obj2 = {
    b: {
    c: {
    a: 1,
    },
    b: 'b',
    a: 'a',
    },
    a: 'a',
   };
      const obj3 = {
        a: {
        c: {
        a: 'a',
        },
        b: 'b',
        a: 'a',
        },
        b: 'b',
       };

    function deepEqual(obj1, obj2, obj3) {
  if (typeof obj1 !== "object" || typeof obj2 !== "object" ) {
    return 'false11';
  }
  if (obj1 === undefined || obj2 === undefined) {
    return 'false2';
  }
  if (obj1 === null || obj2 === null) {
    return 'false3';
  }
  let obj1Keys = Object.keys(obj1);
  let obj2Keys = Object.keys(obj2);
  if (obj1Keys.length !== obj2Keys.length) {
    return 'false4';
  }
  for (let i = 0; i < obj1Keys.length; i++) {
    if (obj2Keys.includes(obj1Keys[i]) === false) {
      return 'false5';
    }
  }
  for (let i = 0; i < obj1Keys.length; i++) {
    if (typeof obj1[obj1Keys[i]] === "object") {
      return deepEqual(obj1[obj1Keys[i]], obj2[obj1Keys[i]]);
    }
    // if (obj1[obj1Keys[]i] !== obj2[obj2Keys[i]]) { //! Ошибка
    //   return 'false6'; //! Ошибка
    if (obj1[obj1Keys] !== obj2[obj2Keys]) {
      return 'false6';
    }
  }
  return true;
}


    console.log(deepEqual(obj1, obj2)); // true
    console.log(deepEqual(obj1, obj3)); // false11





