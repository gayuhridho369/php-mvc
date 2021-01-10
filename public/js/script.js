$(function () {
    // Mengatur modal untuk tambah data
    $('.tombolTambahData').on('click', function () {
        $('#forModalLabel').html('Tambah Data Mahasiswa');
        $('.modal-footer button[type=submit]').html('Tambah Data');

        $('#formModalLabel').html('Tambah Data Mahasiswa');
        $('.modal-footer button[type=submit]').html('Tambah Data');
        $('#nama').val('');
        $('#nim').val('');
        $('#email').val('');
        $('#jurusan').val('');
        $('#id').val('');

    });

    // Mengatur modal untuk edit data
    $('.tampilModalUbah').on('click', function () {
        $('#forModalLabel').html('Ubah Data Mahasiswa');
        $('.modal-footer button[type=submit]').html('Ubah Data');
        $('.modal-body form').attr('action', 'http://localhost/php-mvc/public/mahasiswa/ubah')

        const id = $(this).data('id');

        $.ajax({
            url: 'http://localhost/php-mvc/public/mahasiswa/getubah',
            data: {
                id: id
            },
            method: 'post',
            dataType: 'json',
            success: function (data) {
                $('#nama').val(data.nama);
                $('#nim').val(data.nim);
                $('#email').val(data.email);
                $('#jurusan').val(data.jurusan);
                $('#id').val(data.id);
            }
        });

    });

});