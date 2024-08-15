
const array = [];

// array = [1]; //=> show error.

array.push(1);

console.log(1); // is ok!

/* 
    - When we declare a variable with const,it means that variable is a constanst.
    - But when it constant value is a reference type then the variable save a reference not the value of array.
    - With :  array = [1]; => we re-assign const variable with a new reference so it show error.
    - With :  array.push(1); => we access and change value at where reference point to. so it is ok.
*/