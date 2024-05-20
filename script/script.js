function kirimData(){
    var nama = document.getElementById("nama").value
    var nim = document.getElementById("NIM").value
    var peminatan = document.querySelector(
        "input[name=peminatan]:checked").value
    var alamat = document.getElementById("alamat").value

    alert(
        "Nama Mahasiswa : " +nama +
        "\nNIM : " +nim+
        "\nPeminatan : " +peminatan+
        "\nAlamat : " + alamat
    )

}