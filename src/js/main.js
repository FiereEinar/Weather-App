import '../css/style.css';
import * as test from './test';

console.log('Hello from js');

const one = 20;

function sayHello() {
    console.log(`hello ${one}`);
    console.log('hello second');
}

sayHello();
test.greet();
test.anotherGreet();
