const mysql2 = require('mysql2/promise')

let pool = mysql2.createPool({
    connectionLimit: 10000,
    host: "db.3wa.io",// on rentre l'hôte, l'adresse url où se trouve la bdd
    user: "drisssaikak", // identifiant BDD
    password: "b12893928871bafe6bf8a571db2c440e", // le password
    database: "drisssaikak_projet", // nom de la base de donnée
}) 

module.exports = pool