// Advanced JavaScript Concepts

//1. SCOPE -------------------------------------------------

// -- Block Scope

// -- Function Scope

// -- Global Scope

// -- Nested function´s scope (alcance de funciones anidadas)
let a = 10;
function outer () {
    let b = 20;
    function inner() {
        let c = 30;
        console.log(a,b,c)
    }
    // inner()
}
// outer()

//2. Clousures ---------------------------------------------

function outer() {
    let counter = 0;
    function inner() {
        counter++
        console.log(counter)
    }
    return inner
}
const fn = outer();
// fn()
// fn()

//3. Function Currying -------------------------------------

function sum(a,b,c){
    return a + b + c
}

// console.log(sum(2,3,5))

// sum(2,3,5) --> sum(2)(3)(5)

function curry(fn){
    return function(a) {
        return function(b) {
            return function(c){
                return fn(a,b,c)
            }
        }
    }
}

const curriedSum = curry(sum)

// console.log(curriedSum(2)(3)(5))

const add2 = curriedSum(2)
const add3 = add2(3)
const add5 = add3(5)
// console.log(add5)

// 4. 'This' Keyboard --------------------------------------

function sayMyName(name) {
    console.log(`My name is ${name}`)
}

// sayMyName('Walter White')
// sayMyName('Heisenberg')

// -- Implicit Binding -> Enlace implicito

const person = {
    name: 'ancu98',
    sayMyName: function () {
        console.log(`My name is ${this.name}`)
    },
}

// person.sayMyName()

// -- Explicit Binding -> Enlace explicito

function sayMyName() {
    console.log(`My name is ${this.name}`)
}

// sayMyName.call(person)

// -- New Binding -> Nuevo enlace

// function Person (name) {
//     //this = {}
//     this.name = name
// }

// const p1 = new Person('ancu98')
// const p2 = new Person('Batman')

// console.log(p1.name, p2.name)

// -- Default Binding -> Enlace por defecto

// const name = 'Superman'
globalThis.name = 'Superman'

function sayMyName1() {
    console.log(`My name is ${this.name}`)
}

// sayMyName1()

// 5 - 6. Prototype & Prototypal inheritance ---------------

// function Person(fName, lName) {
//     this.firstName = fName
//     this.lastName = lName
// }

// Person.prototype.getFullName = function () {
//     return this.firstName + ' ' + this.lastName
// }

// function SuperHero(fName, lName) {
//     // this = {}
//     Person.call(this, fName, lName)
//     this.isSuperHero = true
// }

// SuperHero.prototype.figthCrime = function() {
//     console.log('Fighting crime')
// }

// SuperHero.prototype = Object.create(Person.prototype)
// SuperHero.prototype.constructor = SuperHero

// const batman = new SuperHero('Bruce', 'Wayne')
// console.log(batman.getFullName())

// const person1 = new Person('Bruce', 'Wayne')
// const person2 = new Person('Clark', 'Kent')

// console.log(person1.getFullName())
// console.log(person2.getFullName())

// 7 - Class -----------------------------------------------

class Person {
    constructor(fName, lName) {
        this.firstName = fName
        this.lastName = lName
    }

    sayMyName() {
        return this.firstName + ' ' + this.lastName
    }
}

const classP1 = new Person('Bruce', 'Wayne')
// console.log(classP1.sayMyName())

class SuperHero extends Person {
    constructor(fName, lName) {
        super(fName, lName)
        this.isSuperHero = true
    }
    figthCrime() {
        console.log('Figthing crime')
    }
}

const batman = new SuperHero('Bruce', 'Wayne')
// console.log(batman.sayMyName())

// 8 - Iterables and Iterators

const obj = {
    [Symbol.iterator]: function() {
        let step = 0;
        const iterator = {
            next: function() {
                step++
                if(step === 1){
                    return {value:'Hello', done:false}
                } else if (step === 2) {
                    return {value:'World', done:false}
                }
                return {value:undefined , done:true}
            },
        }
        return iterator
    }
}

// for (const word of obj) {
//     console.log(word)
// }

// 9 - Generators

function normalFunction() {
    console.log('Hello')
    console.log('World')
}

// normalFunction()
// normalFunction()

function* generatorFunction() {
    yield 'Hello'
    yield 'World'
}

const generatorObject = generatorFunction()

for (const word of generatorObject) {
    console.log(word)
}

