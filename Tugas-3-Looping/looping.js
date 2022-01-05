//Soal No 1

//Looping Pertama

var x = 2
while (x<=20) {
    console.log(String(x)+" - I love coding");
    x+=2;   
}

//Looping Kedua

var y = 20
while (y>=2) {
    console.log(String(y)+" - I love coding");
    y-=2;
}

//Soal No 2

for(var angka = 1; angka<=20; angka++) {
    if (angka%3==0 && angka%2!=0){
        console.log(String(angka)+" - I love Coding");
    }
    else if (angka%2==0){
        console.log(String(angka)+" - Berkualitas");
    }
    else {
        console.log(String(angka)+" - Santai");
    }
}

//Soal No 3

var z = 1
while (z<=4) {
    console.log("########");
    z+=1;
}

//Soal No 4

var a = 1
var b = "#"

while (a<=7) {
    console.log(b);
    a+=1;
    b+='#';
}

//Soal No 5

for(var i = 1; i<=8; i++) {
    if (i%2==0) {
        console.log("# # # #");
    }
    else {
        console.log(" # # # #")
    }
}
