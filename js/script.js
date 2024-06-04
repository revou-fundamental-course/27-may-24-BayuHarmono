let Namamu = prompt("Selamat Datang, Silahkan Isi Nama Anda");
document.getElementById("PENDATANG").innerHTML = Namamu;

function displayResult() {
    // Mengambil nilai dari form
    const hasilNama = document.forms["datapribadi"]["nama"].value;
    const hasilTtl = document.forms["datapribadi"]["tempatLahir"].value;
    const hasilTgl = document.forms["datapribadi"]["tanggal"].value;
    const hasilKebutuhan = document.forms["datapribadi"]["kebutuhan"].value;
    const hasilPesan = document.forms["datapribadi"]["komentar"].value;
    const hasilNomor = document.forms["datapribadi"]["number"].value;
    const hasilJkel = document.forms["datapribadi"]["jeniskelamin"].value;

    setSenderform(hasilNama, hasilTtl, hasilTgl, hasilKebutuhan, hasilPesan, hasilNomor, hasilJkel);

    return false; // Prevent form submission
}

// Menampilkan inputan pengguna
function setSenderform(hasilNama, hasilTtl, hasilTgl, hasilKebutuhan, hasilPesan, hasilNomor, hasilJkel){
    document.getElementById("hasil-nama").innerHTML = hasilNama;
    document.getElementById("hasil-ttl").innerHTML = hasilTtl;
    document.getElementById("hasil-tgl").innerHTML = hasilTgl;
    document.getElementById("hasil-kebutuhan").innerHTML = hasilKebutuhan;
    document.getElementById("hasil-keterangan").innerHTML = hasilPesan;
    document.getElementById("hasil-nomor").innerHTML = hasilNomor;
    document.getElementById("hasil-jenis-kelamin").innerHTML = hasilJkel;
}