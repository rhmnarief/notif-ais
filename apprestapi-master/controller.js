'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("Aplikasi REST API ku berjalan!", res)
};

//menampilkan semua data mahasiswa
exports.tampilmatakuliah = function (req, res) {
    connection.query('SELECT * FROM mata_kuliah', function (error, rows, fileds) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

//menampilkan semua data mahasiwa berdasarkan id
exports.tampilIdMatakuliah = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM mata_kuliah WHERE id = ?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};


//menampilkan form tugas
exports.formtugas = function (req, res) {
    connection.query('SELECT form.id, form.judul, form.deskripsi, form.deadline , mata_kuliah.nama, mata_kuliah.sks, mata_kuliah.kelas FROM form JOIN mata_kuliah WHERE form.id_matakuliah = mata_kuliah.id ORDER BY form.id DESC',
        function (error, rows) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        }
    )

}

//menambahkan data form
exports.tambahForm = function (req, res) {
    var judul = req.body.judul;
    var deskripsi = req.body.deskripsi;
    var id_matakuliah = req.body.id_matakuliah;
    var deadline = req.body.deadline;

    connection.query('INSERT INTO form ( judul, deskripsi, id_matakuliah, deadline) VALUES (?, ?, ?, ?)',
        [judul, deskripsi, id_matakuliah, deadline],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data!", res)
            }
        });
};


//mengubah data form berdasarkan id
exports.ubahDataForm = function (req, res) {
    var judul = req.body.judul;
    var deskripsi = req.body.deskripsi;
    var id_matakuliah = req.body.id_matakuliah;
    var deadline = req.body.deadline;
    var id_form = req.body.id;


    connection.query('UPDATE form SET judul=?, deskripsi=?, id_matakuliah=?,deadline=? WHERE form.id=?',
        [judul, deskripsi, id_matakuliah, deadline, id_form],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Update Data", res)
            }
        });
}

//Menghapus data berdasarkan id
exports.hapusForm = function (req, res) {
    var id = req.body.id;
    connection.query('DELETE FROM form WHERE id=?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Hapus Data", res)
            }
        });
}

