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

// let x = parseInt("123 Saichand")
// console.log(x);                     //123

//arithmetic operators

// let num1 = 4
// let num2 = 2
// let result = num1 + num2
// console.log(result);                    //6

// let num1 = 5
// let num2 = 2
// let result = num1 % num2
// console.log(result);                        //1


// let num1 = true
// let num2 = true
// let result = num1 + num2
// console.log(result);                         //2 


// let num = 4
// num = num + 2
// console.log(num);                               //6       

// let num = 4
// num += 2
// console.log(num);                       //6

// let num = 4
// num++ 
// console.log(num);                       //5

// let num = 4
// num++ //post increment
// ++num  //pre increment

// let num = 4
// let x = num++   //post increment
// console.log(x, num);                    //4 5
 
// let num = 4
// let result = num * num * num
// console.log(result)                         //64

// let num = 4
// let result = Math.pow(4,3)
// console.log(result) 

//Relational operators

// console.log(5 > 6);                     //false

// console.log(7 > 6);                     //true
//-----------------------------------------------------------
// let data = 7 > 6
// console.log(data);                         //true
//--------------------------------------------------------------
// let x = 6
// let y = 6

// let data = x >= y
// console.log(data);                          //true
//---------------------------------------------------------------
// let x = "pen"
// let y = "book"

// let data = x > y
// console.log(data);                              //true
//-----------------------------------------------------------
// let x = "pen"
// let y = "pencil"

// let data = x > y
// console.log(data);                          //false
//-------------------------------------------------------------
// let x = 3
// let y = 3

// let data = x == y
// console.log(data);                          //true
//-------------------------------------------------------------
// let x = "3"
// let y = 3

// let data = x === y
// console.log(data);                              //false
//---------------------------------------------------------------
// let x = " "
// let y = false

// let data = x === y
// console.log(data);                              //false
//--------------------------------------------------------------
// Logical Operators in JavaScript

// let x =7, y = 8, z = 9

// let result = x < y
// console.log(result);                            //true
//-------------------------------------------------------------
// let x =7, y = 8, z = 9

// let result = x < y x < z 
// console.log(result);

// And &&
// OR  |
// Not ~
//---------------------------------------------------------
// let x =7, y = 8, z = 9

// let result = x < y && x < z 
// console.log(result);                        //true
//------------------------------------------------------------
// let x =7, y = 8, z = 5

// let result = x < y && x < z 
// console.log(result);                            //false    
//--------------------------------------------------------------
// let x =7, y = 8, z = 5

// let result = x < y || x < z 
// console.log(result);                        //true
//-----------------------------------------------------------
// let x =7, y = 2, z = 5

// let result = x < y || x < z 
// console.log(result);                        //false 
//----------------------------------------------------------
// let x =7, y = 2, z = 5
// let result = x < y || x < z 
// let n = !result
// console.log(result, n);                     //false true

// Conditional Statements If Else in JavaScript

// let num1 = 6;
// let num2 = 4;

// let result = num1 > num2;

// if(result)
//     console.log("num1 is greater");              //num1 is greater /n Bye.....

// console.log("Bye.....");
//---------------------------------------------------------------

// let num1 = 3;
// let num2 = 4;

// let result = num1 > num2;

// if(result)
//     console.log("num1 is greater");              // Bye....    

// console.log("Bye.....");                            
//------------------------------------------------------------------------
// let num1 = 3;
// let num2 = 4;

// let result = num1 > num2;

// if(result)
//     console.log("num1 is greater");              // num2 is greater  /n Bye....
// else
//     console.log("num2 is greater");

// console.log("Bye.....");      
//---------------------------------------------------------------------------
// let num1 = 3;
// let num2 = 4;

// if(num1 > num2)
//     console.log("num1 is greater");              // num2 is greater  /n yeee /n Bye....
// else
//     console.log("num2 is greater");
//     console.log("yeee");

// console.log("Bye.....");      
//-----------------------------------------------------------------------------

// let num1 = 6;
// let num2 = 4;

// if(num1 > num2){
//     console.log("num1 is greater");   
// }                                                  // num1 is greater /n Bye....
// else{
//     console.log("num2 is greater");
//     console.log("yeee");
// }

// console.log("Bye....."); 
//-----------------------------------------------------------------------------------------

// let num1 = 6;
// let num2 = 4;
// let num3 = 7;

// if(num1 > num2 && num1 > num3){
//     console.log("num1 is greatest");   
// }                                                  // num3 is greatest /n Bye....
// else if(num2 > num1 && num2 > num3){
//     console.log("num2 is greatest");
// }
// else{
//     console.log("num3 is greatest")
// }

// console.log("Bye....."); 

//--------------------------------------------------------------------------------------------------

// let num1 = 10;
// let num2 = 4;
// let num3 = 7;

// if(num1 > num2 && num1 > num3){
//     console.log("num1 is greatest");   
// }                                                  // num1 is greatest /n Bye....
// else if(num2 > num1 && num2 > num3){
//     console.log("num2 is greatest");
// }
// else{
//     console.log("num3 is greatest")
// }

// console.log("Bye....."); 
//----------------------------------------------------------------------------------------

// Ternary Operator in JavaScript

// let num = 5
// let result

// if(num%2===0)
//     result = "Even"
// else
//     result = "Odd"

// console.log(result);                            // Odd

//-----------------------------------------------------------------------------------------------

// let num = 8
// let result

// if(num%2===0)
//     result = "Even"
// else
//     result = "Odd"

// console.log(result);                            // Even
//----------------------------------------------------------------------------
// let num = 8
// let result

// // if(num%2===0)
// //     result = "Even"
// // else
// //     result = "Odd"

// // ?: Ternary Operator

// result = num%2===0 ? "Even" : "Odd"

// console.log(result);                                //Even

//---------------------------------------------------------------------------------------------

// let num = 7
// let result

// result = num%2===0 ? "Even" : "Odd"

// console.log(result);                                //Odd

//--------------------------------------------------------------------------------------

// Switch Statement in JavaScript

//Moday - 7am
//Tue - Thurs - 4am
//Fri - 9am
//Sat -Sun - 8am

// let day = "Sunday"

// switch(day){
//     case 'Monday':
//         console.log("7am");
//     case 'Tuesday':
//         console.log("4am")
//     case 'Wednesday':
//         console.log("4am");
//     case 'Thursday':
//         console.log("4am")
//     case 'Friday':
//         console.log("9am");
//     case 'Saturday':
//         console.log("8am")
//     case 'Sunday':
//         console.log("8am")                          // 8am
// }
//----------------------------------------------------------------------
// let day = "Sunday"

// switch(day){
//     case 'Monday':
//         console.log("7am");
//         break;
//     case 'Tuesday':
//         console.log("4am")
//     case 'Wednesday':
//         console.log("4am");
//     case 'Thursday':
//         console.log("4am")
//     case 'Friday':
//         console.log("9am");
//     case 'Saturday':
//         console.log("8am")
//     case 'Sunday':
//         console.log("8am")                          // 7am
// }
//----------------------------------------------------------------------------------
// let day = "Wednesday"

// switch(day){
//     case 'Monday':
//         console.log("7am");
//         break;
//     case 'Tuesday':
//     case 'Wednesday':
//     case 'Thursday':
//         console.log("4am")
//         break;
//     case 'Friday':
//         console.log("9am");
//         break;
//     case 'Saturday':
//     case 'Sunday':
//         console.log("8am") 
//         break;                         // 4am
// }

//----------------------------------------------------------------------------------------------
// let day = "Holiday"

// switch(day){
//     case 'Monday':
//         console.log("7am");
//         break;
//     case 'Tuesday':
//     case 'Wednesday':
//     case 'Thursday':
//         console.log("4am")
//         break;
//     case 'Friday':
//         console.log("9am");
//         break;
//     case 'Saturday':
//     case 'Sunday':
//         console.log("8am") 
//         break;  
//     default:
//         console.log("7am")                       // 7am
// }
