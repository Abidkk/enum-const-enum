console.log('Enum types')

/// enum 


// assigining methods
enum colorBox1 {red, green, blue, orange};  // method-1

enum colorBox2 {red = 1, green, blue, orange}; // method-2

enum colorBox3 {red=1, green=2, blue=3, orange=4} //  method-3


// value getting methods

console.log(colorBox1.green);  // method-1   (return index)

console.log(colorBox2[2]); // method-2   (return vlaue)

console.log(colorBox3["blue"]) // method-3 (return index)



/// const enum ( not allowed to get value by targeting index like in method-3)


// lets see an example

const enum colors {red, green , pink, skyblue}
// getting values of const enum 
// console.log(colors[2]) // error
console.log(colors.pink); // no error 
console.log(colors['pink']);  // no error


// suggestion : do not get value by index and use always const enum
