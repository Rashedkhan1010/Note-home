function salam() {
    return salam="Hello Rashed";
}
var x = salam();
document.write(x);

var dog = {name:"hoski", breed:"male"};
console.log(dog);

var fruits = ["Apple", "Orange", "Strawberry"];
document.write( fruits[0]);

document.getElementById("power").innerHTML = Math.pow(5,2);
var student = {name:"ahmad", grade:"A"};
console.log(student);

var colors = ["Black", "Orange", "Red", "Yellow", "White"];
 document.write(colors.length);

function ispositive(number) {
    if (number > 0) {
        return 'number is positive';
    } else {
        return 'The number is negative';
    }
}
document.write(ispositive(-3));

var phone = {Brand: "Glaxy", Model: "S28"}
console.log(phone.Brand);

function squarenumber(a) {
    var p = a ** 2;
    return p ;
}
console.log(squarenumber(4));

var number = [1, 2, 3, 4, 5]
var a = number[0];
var b = number[1];
var c = number[2];
var d = number[3];
var e = number[4];
console.log(number(a+b+c+d+e));