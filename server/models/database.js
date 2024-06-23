const mysql2 = require("mysql2/promise");

let pool = mysql2.createPool({
  connectionLimit: 10000,
  host: "private", // on rentre l'hôte, l'adresse url où se trouve la bdd
  user: "private", // identifiant BDD
  password: "private", // le password
  database: "private", // nom de la base de donnée
});

module.exports = pool;
