//Q1
for (var i = 1; i <= 10; i++) {
    document.write(i);
}
//Q2
function isEvenOrOdd(num) {
    if (typeof num !== 'number') {
     return 
    }
    return num % 2 === 0 ?
    'Even' : 'Odd'
}
console.log(isEvenOrOdd(3));