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