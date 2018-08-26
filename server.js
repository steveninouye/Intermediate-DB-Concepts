const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    database: "chirpr",
    user: 'chirprapp',
    password: 'password'
})

connection.connect();

connection.query('SELECT * from users', (err, result, res) => {
    if (err) {
        connection.end();
        return console.log(err);
    }

    console.log(result);
    connection.end();
})