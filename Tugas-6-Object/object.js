// Soal No 1

function arrayToObject(arr) {
    if (arr.length > 1){
        var now = new Date();
        var thisYear = now.getFullYear();
        for (var i = 0; i < arr.length; i++){
            obj = {
                firstname: arr[i][0],
                lastname : arr[i][1],
                gender: arr[i][2],
                age: thisYear - arr[i][3]
            };
            if (arr[i][3] > thisYear || arr[i][3]==undefined) {
                obj.age = "Invalid Birth Year";
            }
            console.log(i+1 + "." + obj.firstname + " " + obj.lastname)
            console.log(obj);
            console.log();
        }
    }
    else {
        console.log("\"{}\"")
    }
}
 
var people = [ ["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"] ]
arrayToObject(people) 
 
var people2 = [ ["Tony", "Stark", "male", 1980], ["Pepper", "Pots", "female", 2023] ]
arrayToObject(people2) 

arrayToObject([])

// Soal No 2

function shoppingTime(memberId, money) {
    var barang = [['Sepatu Stacattu','Baju Zoro','Baju H&N','Sweater Uniklooh','Casing Handphone'],
    [1500000,500000,250000,175000,50000]];
    var belanja = [];
    if (memberId != '') {
        if (money >= 50000) {
            var changemoney = money;
            for (var i = 0; i<barang[0].length; i++){
                if(changemoney >= barang[1][i]) {
                    changemoney = changemoney - barang[1][i];
                    belanja.push(barang[0][i])
                }
            }
            objBelanja = {
                memberId : memberId,
                money : money,
                listPurchased : belanja,
                changemoney : changemoney
            }
            return objBelanja;
        }
        else {
            return 'Mohon maaf, uang tidak cukup'
        }
    }
    else {
            return 'Mohon maaf, toko x hanya berlaku untuk member'
        }
    
}
 
// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));

console.log(shoppingTime('82Ku8Ma742', 170000));

console.log(shoppingTime('', 2475000)); 
console.log(shoppingTime('234JdhweRxa53', 15000)); 
console.log(shoppingTime()); 

// Soal No 3

function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  var hasil = [];
  for (var i = 0; i<arrPenumpang.length; i++) {
      var ObjPenumpang = {
          penumpang : arrPenumpang[i][0],
          naikDari : arrPenumpang[i][1],
          tujuan : arrPenumpang[i][2]
      }
      var tarif = 0;
      for(var j = rute.indexOf(arrPenumpang[i][1])+1; j <= rute.indexOf(arrPenumpang[i][2]); j++){
          tarif = tarif + 2000
      }
      ObjPenumpang.bayar = tarif;
      hasil.push(ObjPenumpang);
  }
  return hasil;
}
 
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
 
console.log(naikAngkot([]));



