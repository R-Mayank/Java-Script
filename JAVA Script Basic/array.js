// Array

a = [1,2,3,4,5];
console.log(a);

// Array index Start With 0;
console.log(a[0]);

// Push: Add new value At the last of Array
a.push(6);
console.log(a);

// POP: Remove  value At the last of Array
a.pop();
a.pop();
console.log(a);


// unShift: Add new value At the Start of Array
a.unshift(45);
console.log(a);


//  shift :  Remove  value At the Start of Array
a.shift();
console.log(a);


//  splice:   Remove array values form any index.
// array_name.splice(Starting_index, number of values)
//                   (where to start, how many won't to remove)  
console.log(a);
a.splice(2,2);
console.log(a);



// Array is stored  as a object.
//  A = [1, 2, 3, 4]
//it is stored like that:
//   A = {
//     0: 1,
//     1: 2,
//     2: 3,
//     4: 4
//    }
//
// How to check given viable is array or object.
// typeof()   function not work for array.it's give the output  is :  object
//  for array ----
// Array.isArray(a);  true means Array.    False means it is object 











