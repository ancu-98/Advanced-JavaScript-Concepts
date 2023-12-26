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

function Person (name) {
    //this = {}
    this.name = name
}

const p1 = new Person('ancu98')
const p2 = new Person('Batman')

// console.log(p1.name, p2.name)

// -- Default Binding -> Enlace por defecto

// const name = 'Superman'
globalThis.name = 'Superman'

function sayMyName1() {
    console.log(`My name is ${this.name}`)
}

// sayMyName1()