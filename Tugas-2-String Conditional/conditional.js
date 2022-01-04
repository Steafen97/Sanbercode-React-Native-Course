// Soal No 1

var nama = readLine()
var peran = readLine()

if (nama == '' && peran == '') {
    console.log("Nama harus diisi!")
}
else if (nama != '' && peran == '') {
    console.log("Halo "+ nama + ", Pilih peranmu untuk memulai game!")
}
else if (nama != '' && peran == 'Penyihir') {
    console.log("Selamat datang di Dunia Werewolf, " + nama)
    console.log("Halo Penyihir " + nama + ", kamu dapat melihat siapa yang menjadi werewolf!")
}
else if (nama != '' && peran == 'Guard') {
    console.log("Selamat datang di Dunia Werewolf, " + nama)
    console.log("Halo Guard " + nama + ", kamu akan membantu melindungi temanmu dari serangan werewolf.")
}
else if (nama != '' && peran == 'Werewolf') {
    console.log("Selamat datang di Dunia Werewolf, " + nama)
    console.log("Halo Werewolf " + nama + ", Kamu akan memakan mangsa setiap malam!")
}
else {
    console.log("")
}

// Soal No 2

var tanggal = parseInt(readLine(),10) // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = parseInt(readLine(),10) // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = parseInt(readLine(),10)// assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

switch (bulan) {
    case 1:
        console.log(String(tanggal)+" Januari "+String(tahun))
        break;
    case 2:
        console.log(String(tanggal)+" Februari "+String(tahun))
        break;
    case 3:
        console.log(String(tanggal)+" Maret "+String(tahun))
        break;
    case 4:
        console.log(String(tanggal)+" April "+String(tahun))
        break;
    case 5:
        console.log(String(tanggal)+" Mei "+String(tahun))
        break;
    case 6:
        console.log(String(tanggal)+" Juni "+String(tahun))
        break;
    case 7:
        console.log(String(tanggal)+" Juli "+String(tahun))
        break;
    case 8:
        console.log(String(tanggal)+" Agustus "+String(tahun))
        break;
    case 9:
        console.log(String(tanggal)+" September "+String(tahun))
        break;
    case 10:
        console.log(String(tanggal)+" Oktober "+String(tahun))
        break;
    case 11:
        console.log(String(tanggal)+" November "+String(tahun))
        break;
    case 12:
        console.log(String(tanggal)+" Desember "+String(tahun))
        break;

    default:
        break;
}