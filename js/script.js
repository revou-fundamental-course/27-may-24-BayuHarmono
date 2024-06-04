let Namamu = prompt("Selamat Datang, Silahkan Isi Nama Anda");
document.getElementById("PENDATANG").innerHTML = Namamu


function cetak() {
    var a = document.getElementById("full-name").value ; 
    document.getElementById("hasil-nama").innerHTML = "<b>" + a + "</b>" ;

    var b= document.getElementById("birt-date").value ; 
    document.getElementById("hasil-ttl").innerHTML = "<b>" + b + "</b>" ;

    var w= document.getElementById("tanggal").value ; 
    document.getElementById("hasil-tgl").innerHTML = "<b>" + w + "</b>" ;

    var c = document.getElementById("kebutuhan").value ; 
    document.getElementById("hasil-kebutuhan").innerHTML = "<b>" + c + "</b>" ;

    var d = document.getElementById("Keterangan").value ; 
    document.getElementById("hasil-keterangan").innerHTML = "<b>" + d + "</b>" ;

    var e = document.getElementById("nomor").value ; 
    document.getElementById("hasil-nomor").innerHTML = "<b>" + e + "</b>" ;

}