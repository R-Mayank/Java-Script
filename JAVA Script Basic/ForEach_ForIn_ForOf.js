// ForEach: Only use in array.Change in array.but real array will not change.
//  Syntax:

array = [1, 2, 3, 4, 5, 6]

array.forEach(element => {
    console.log(element*10);
    
});
//   Output: 10 20 30 40 50 60
// not change in array. it will be same
console.log(array);
// output:  [1, 2, 3, 4, 5, 6]



// ForIn:  Use in object.
var Raj ={
    age:20,
    hight:"5.8feet",
    collage: "xyz University"
    //Property: value
}

// syntax:

for(var key in Raj){
    console.log(Raj[key]);
}
for(var key in Raj){
    console.log(key);
}
