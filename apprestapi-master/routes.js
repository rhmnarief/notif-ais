'use strict';

module.exports = function (app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/matakuliah')
        .get(jsonku.tampilmatakuliah);

    app.route('/matakuliah/:id')
        .get(jsonku.tampilIdMatakuliah);

    app.route('/formtugas')
        .get(jsonku.formtugas);

    app.route('/tambahForm')
        .put(jsonku.tambahForm);

    app.route('/updateForm')
        .post(jsonku.ubahDataForm);

    // app.route('/ubah')
    //     .put(jsonku.ubahMahasiswa);

    // app.route('/hapus')
    //     .delete(jsonku.hapusMahasiswa);


}