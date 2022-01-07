// Soal No 1

function range(startNum, finishNum) {
    var num = [];
    for (i=startNum; i<=finishNum; i++) {
        if(!startNum || !finishNum){
            return (-1);
        }
        else if (startNum > finishNum) {
            num.push(i)
            return num.sort(function (value1, value2) { return value2 - value1 } )
        }
        else {
            return num.push(i)
        }
    }
}

console.log(range(1, 10))
console.log(range(1))
console.log(range(11,18))
console.log(range(54, 50))
console.log(range())

// Soal No 2

function rangeWithStep(startNum, finishNum, step) {
    var num = [];
    for (i=startNum; i<=finishNum; i+step) {
        if(!startNum || !finishNum){
            return num.push(-1);
        }
        else if (startNum > finishNum) {
            num.push(i)
            return num.sort(function (value1, value2) { return value2 - value1 } )
        }
        else {
            return num.push(i)
        }
    }
}

console.log(rangeWithStep(1, 10, 2))
console.log(rangeWithStep(11, 23, 3))
console.log(rangeWithStep(5, 2, 1))
console.log(rangeWithStep(29, 2, 4))

// Soal No 3

function sum(startNum, finishNum, step) {
    var num = [];
    var sum = 0
    for (i=startNum; i<=finishNum; i+step) {
        if(!startNum || !finishNum){
            return (-1);
        }
        else if (startNum > finishNum) {
            num.push(i)
            num.sort(function (value1, value2) { return value2 - value1 } )
            sum+=i;
            return sum;
        }
        else {
            num.push(i)
            sum+=i;
            return sum;
        }
    }
}

console.log(sum(1,10))
console.log(sum(5, 50, 2))
console.log(sum(15,10))
console.log(sum(20, 10, 2))
console.log(sum(1))
console.log(sum())

// Soal No 4

var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ] 

// Maaf belum selesai codenya masih bingung,mgkn nanti dipelajari dan diperbaiki lagi

// Soal No 5

//console.log(balikKata("Kasur Rusak"))
//console.log(balikKata("SanberCode")) 
//console.log(balikKata("Haji Ijah")) 
//console.log(balikKata("racecar")) 
//console.log(balikKata("I am Sanbers"))

// Maaf belum selesai codenya masih bingung,mgkn nanti dipelajari dan diperbaiki lagi

// Soal No 6

// Maaf belum selesai codenya masih bingung,mgkn nanti dipelajari dan diperbaiki lagi

