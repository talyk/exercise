const sqlite3 = require('sqlite3').verbose();
const DBSOURCE = "./src/db/db.sqlite";

module.exports = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        console.error(err.message)
        throw err;
    }
    console.log('Connected to the SQLite database.');
});