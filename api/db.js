import mysql from 'mysql2';

export const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "blog-app"
});