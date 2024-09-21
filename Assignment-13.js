//Q1
for (var i = 1; i <= 10; i++) {
    document.write(i);
}
//Q2
function isEvenOrOdd(num) {
    if (typeof num !== 'number') {
     return ;
    }
    return num % 2 === 0 ?
    'Even' : 'Odd'
}
console.log(isEvenOrOdd(3));
//Q3
function Vowel(str) {
    if (typeof str !== 'string') {
       return ;
    }
    const Vowel = 'aeiouAEIOU';
    var count = 0;
    for (var char of str) {
        if
        (Vowel.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log("HELOOAhmad");