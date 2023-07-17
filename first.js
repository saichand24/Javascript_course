// let num = 6
// console.log(num)

// let num = 6
// console.log(num, typeof num)       //6 number

// let num = String(6)
// console.log(num, typeof num)        //6 string

// let num = Number("123")
// console.log(num, typeof num)         //123 number

// let x
// console.log(x, typeof x)             //undefined undefined

// let x
// console.log(x, typeof x);       //undefined undefined
// x = 8
// console.log(x, typeof x);       //8 number
// x = x + ""
// console.log(x, typeof x);       //8 string
// x = x - 2                               //type coercion
// console.log(x, typeof x);       //6 number
// x = !x
// console.log(x, typeof x);       //false boolean

// console.log(Boolean(7))         //true
// console.log(Boolean(-7))        //true
// console.log(Boolean(0))         //false      //all the numbers are true only 0 is false 
// console.log(Boolean(null))      //false           
// console.log(Boolean(undefined)) //false               
// console.log(Boolean("saichand"))//true               

// let x
// console.log(x, typeof x);       //undefined undefined
// x = 8
// console.log(x, typeof x);       //8 number
// x = x + ""
// console.log(x, typeof x);       //8 string
// x = x + 2                               
// console.log(x, typeof x);       //82 string 
// x = +x + 2                               
// console.log(x, typeof x);       //84 number

// let x = Number("123 Saichand")  
// console.log(x);                  //NAN (not a number)

let x = parseInt("123 Saichand")
console.log(x);                     //123