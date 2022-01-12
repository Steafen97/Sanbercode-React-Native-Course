
const readBooksPromise = require('./promise.js');
 
const books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
];

var booksQueue = books.length;
var time = 10000;

function execute(time, ind, booksQueue) {
    readBooksPromise(time, books[ind])
        .then(function (remainingTime) {
            time = remainingTime;
            booksQueue = booksQueue - 1;
            if (booksQueue > 0) {
                execute(time, ind+1, booksQueue);
            }
        })
        .catch(function (error) {
            
        })
}

execute(time, 0, booksQueue);