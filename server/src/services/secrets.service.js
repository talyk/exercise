const db = require('../db/database');
const uuid = require('uuid');

exports.ListSecrets = () => {
    return new Promise((res, rej) => {
        const sqlQuery = "SELECT * FROM secrets";
        db.all(sqlQuery, [], (err, secrets) => {
            if (err) return rej (err);
            return res(secrets);
        });
    });
};

exports.GetSecret = (id) => {
    return new Promise((res, rej) => {
        const sqlQuery = `SELECT * FROM secrets WHERE id=?`;
        db.get(sqlQuery, id, (err, secret) => {
            if (err) return rej (err);
            return res(secret);
        });
    });
};

exports.InsertSecret = (secret) => {
    return new Promise((res, rej) => {
        const uuidString = uuid.v4();
        const sqlQuery = `INSERT INTO secrets (id, name, data) VALUES (?,?,?)`;
        db.run(sqlQuery, [uuidString, secret.name, secret.data], (sqlErr) => {
            if (sqlErr) return rej(sqlErr);
            secret.id = uuidString;
            return res(secret);
        });
    });
};

exports.DeleteSecret = (id) => {
    return new Promise((res, rej) => {
        const sqlQuery = `DELETE FROM secrets WHERE id=?`;
        db.run(sqlQuery, id, (err) => {
            if (err) return rej (err);
            return res(true);
        });
    });
};