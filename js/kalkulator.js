function tambah() {
    var frm = document.getElementById('kalkulator');
    var a1 = parseFloat(frm.angka.value);
    var a2 = parseFloat(frm.angka2.value);
    var total = a1 + a2;

    let no_input = "Maaf angka belum terisi";
    let hasil = (a1 && a2 != '') ? total : no_input;

    document.getElementById('hasil').innerHTML = hasil;
}

function kurang() {
    var frm = document.getElementById('kalkulator');
    var a1 = parseFloat(frm.angka.value);
    var a2 = parseFloat(frm.angka2.value);
    var total = a1 - a2;

    let no_input = "Maaf angka belum terisi";
    let hasil = (a1 && a2 != '') ? total : no_input;

    document.getElementById('hasil').innerHTML = hasil;
}

function kali() {
    var frm = document.getElementById('kalkulator');
    var a1 = parseFloat(frm.angka.value);
    var a2 = parseFloat(frm.angka2.value);
    var total = a1 * a2;

    let no_input = "Maaf angka belum terisi";
    let hasil = (a1 && a2 != '') ? total : no_input;

    document.getElementById('hasil').innerHTML = hasil;
}

function bagi() {
    var frm = document.getElementById('kalkulator');
    var a1 = parseFloat(frm.angka.value);
    var a2 = parseFloat(frm.angka2.value);
    var total = a1 / a2;

    let no_input = "Maaf angka belum terisi";
    let hasil = (a1 && a2 != '') ? total : no_input;

    document.getElementById('hasil').innerHTML = hasil;
}

function pangkat() {
    var frm = document.getElementById('kalkulator');
    var a1 = parseFloat(frm.angka.value);
    var a2 = parseFloat(frm.angka2.value);
    var total = a1 ** a2;

    let no_input = "Maaf angka belum terisi";
    let hasil = (a1 && a2 != '') ? total : no_input;

    document.getElementById('hasil').innerHTML = hasil;
}


/*tugas ke 4 Javascript
1. Lengkapilah form dari latihan 15js menggunakan CSS dan table 
2. Perbagus tampilannya 
3. Lengkapi perhitungannya dengan:
- pembagian
- perkalian
- pangkat
4. jika form input dari angka 1 dan 2 kosong dan user klik button, 
maka tampilkan "Maaf angka belum terisi"
*/