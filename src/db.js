const mysql = require('mysql');

const connection = mysql.createConnection({

hostname: 'localhost',
user: 'root',
password: '',
database: 'dbAPI',
});

connection.connect((error) => {
    if(error) throw error;
    console.log('Conectado ao banco de dados: dbAPI')
});

module.exports = connection
