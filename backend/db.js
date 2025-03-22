import mysql from "mysql2";

const db = mysql.createConnection({
   host: "localhost",
   user: "felipe",
   password: "root",
   database: "web",
});

export default db;
