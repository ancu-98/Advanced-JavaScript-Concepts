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