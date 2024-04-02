// Execution Cortex:   When Function  call or run Function create a imaginary container which has three part:

//    variable , parent function  and lexical environment

// lexical environment  :  means function which variable can access or not.
// ex. in below function function x() can't use variable b.
//    lexical environment shows which variable function can access and which not.

function x(){
    let a = 5;
    function v(){
        let b = 8;
    }
    console.log(a);
    console.log(b);
}
x();

// Output:
//       5
//       undefined