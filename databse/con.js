const mysql = require('mysql2/promise')
const env = require('dotenv')
env.config({path :'./env/.env'})

try {
    const con = mysql.createPool({
        host : process.env.host,
        user : process.env.user,
        password : process.env.password,
        database : process.env.database
    })

    console.log('CONEXION ESTABELCIDA')

    module.exports = con

} catch (e) {
    
    console.log('Error en la conexion con la base de datos : ', e)

}

