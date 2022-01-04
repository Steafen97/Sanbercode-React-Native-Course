//Soal No 1

var word = 'JavaScript'; 
var second = 'is'; 
var third = 'awesome'; 
var fourth = 'and'; 
var fifth = 'I'; 
var sixth = 'love'; 
var seventh = 'it!';

console.log(word+" "+third+" "+fourth+" "+fifth+" "+sixth+" "+seventh);

//Soal No 2

var sentence = "I am going to be React Native Developer";

var first = sentence[0];
var second = sentence[2] + sentence[3];
var third = sentence[5] + sentence[6] + sentence[7] + sentence[8] + sentence[9];
var fourth = sentence[11] + sentence[12];
var fifth = sentence[14] + sentence[15];
var sixth = sentence[17] + sentence[18] + sentence[19] + sentence[20] + sentence[21];
var seventh = sentence[23] + sentence[24] + sentence[25] + sentence[26] + sentence[27] + sentence[28];
var eighth = sentence[30] + sentence[31] + sentence[32] + sentence[33] + sentence[34] + sentence[35] + sentence[36] + sentence[37] + sentence[38];

console.log('First Word: ' + first);
console.log('Second Word: ' + second);
console.log('Third Word: ' + third);
console.log('Fourth Word: ' + fourth);
console.log('Fifth Word: ' + fifth);
console.log('Sixth Word: ' + sixth);
console.log('Seventh Word: ' + seventh);
console.log('Eighth Word: ' + eighth);

//Soal No 3

var sentence2 = 'wow JavaScript is so cool';

var first2 = sentence2.substring(0,3);
var second2 = sentence2.substring(4,14);
var third2 = sentence2.substring(15,17);
var fourth2 = sentence2.substring(18,20);
var fifth2 = sentence2.substring(21);

console.log('First Word: ' + first2);
console.log('Second Word: ' + second2);
console.log('Third Word: ' + third2);
console.log('Fourth Word: ' + fourth2);
console.log('Fifth Word: ' + fifth2);

//Soal No 4
var sentence3 = 'wow JavaScript is so cool';

var first3 = sentence3.substring(0,3);
var second3 = sentence3.substring(4,14);
var third3 = sentence3.substring(15,17);
var fourth3 = sentence3.substring(18,20);
var fifth3 = sentence3.substring(21);

var firstlength = first3.length;
var secondlength = second3.length;
var thirdlength = third3.length;
var fourthlength = fourth3.length;
var fifthlength = fifth3.length;

console.log('First Word: ' + first3 + ', with length: ' + String(firstlength)); 
console.log('Second Word: ' + second3 + ', with length: ' + String(secondlength)); 
console.log('Third Word: ' + third3 + ', with length: ' + String(thirdlength)); 
console.log('Fourth Word: ' + fourth3 + ', with length: ' + String(fourthlength)); 
console.log('Fifth Word: ' + fifth3 + ', with length: ' + String(fifthlength)); 