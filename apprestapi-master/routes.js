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
        .post(jsonku.tambahForm);

    app.route('/updateForm')
        .put(jsonku.ubahDataForm);

    app.route('/deleteForm')
        .delete(jsonku.hapusForm);

    // app.route('/hapus')
    //     .delete(jsonku.hapusMahasiswa);


}