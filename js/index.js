alert('Hello JavaScript!');

const userName = prompt ('Enter your name');
const greetings = 'Hello';
alert(greetings + userName);

//запитати вік користувача
const userAge = Number(prompt ('Enter your ages'));
// вивести вік на екран
alert(userAge);
//зробити змінну в яку записати вік + 1
const nextAge = add(userAge, 1) ;
//вивести на екран вік, який буде в наступному році
alert('Next year you`ll have:' + nextAge);

//типи даних
//number: 1, 1.1, 1e10, Nan, Infinity
//stru=ing: '', "", ``
//boolean: true, false
//null
//undefined
//object
//symbol

if (userAge >= 18) {// > < >= <= == === != !== ||(or) && (and)
    alert('ви вже повнолітній');
} else {
    alert('ви ще не повнолітні');
}

function add(a, b) {
    const result = a + b;
    return result;
}


