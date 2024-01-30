import mysql from 'mysql2';

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"12345",
    database:"blog-app"
});

export default db;