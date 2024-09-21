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
console.log(Vowel("Hello AHMAD"));
//Q4
function isPalindrome(str) {
    if (typeof str !=='string') {
        return;
    }
    const cleanedstr = str.replace(/[^a-z0-9]/gi,'').toLowerCase();
    const reversestr = cleanedstr.split('').join('');
    return cleanedstr === reversestr;
}
console.log(isPalindrome("A man a plan, a canal: Panama"));
console.log(isPalindrome("Hello"));
//Q5
function max(arr) {
    if(!Array.isArray(arr)) {
        return ' Input must be an array';
    }
    if (arr.length === 0) {
        return 'Array is empty';
    }
    var max = arr[0];
    for (var num of arr) {
        if (typeof num !== 'number') {
        }
        return 'Array must contain only numbers';
    }
    if (num > max) {
        max = num
    }
    return max;
}
console.log(max([3, 5, 7, 2, 4, 6 ]));
//Q6
function factorial(n) {
    if (typeof n !== 'number' || n < 0) 
    {
        return 'Input must be a non-negative integer'
    }
    var result = 1;
    var i = n;
    while (i > 1) {
        result *= i;
        i--;
    }
    return result;
}
console.log(factorial(5));
