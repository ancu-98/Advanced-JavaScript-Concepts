//1. SCOPE -------------------------------------------------

// -- Block Scope (alcance de bloque)

// Incorrect
// if (true) {
//     const MyName = 'ancu98'
// }
// console.log(MyName)

//Correct
if (true) {
    const myName = 'ancu98'
    console.log(myName)
}

// -- Function Scope (alcance de función)

// Incorrect
// function testFn() {
//     const myName = 'Batman'
// }
// console.log(myName)

//Correct
function testFn() {
    const myName = 'Batman'
    console.log(myName)
}

testFn()

// -- Global Scope (alcance global)
const myNum = 98
const myName1 = 'Superman'

//Correct
if (true) {
    console.log(myNum)
}

// Correct
function testFn1() {
    const myName1 = 'Robin'
    console.log(myNum)
    console.log(myName1)
}

testFn1()

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