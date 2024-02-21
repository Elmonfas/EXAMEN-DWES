const e = require('express')
const con = require('../databse/con')

async function add_user(nombre,email,password){
    try {

        await con.query('use marvel')

        const existente = await con.query(`SELECT * from marvel.users where email = "${email}"`)

        console.log(existente[0][0])

        if(existente[0][0] != undefined){
            
            return false
        
        }else{

            await con.query('insert into users (nombre, email, password) values (?, ?, ?)', [nombre, email, password])

            return true

        }

    } catch (e) {
        
        console.log('Error en el registro :', e)

    }
}

module.exports = add_user