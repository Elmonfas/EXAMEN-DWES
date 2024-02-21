const con = require('../databse/con')
const bcrypt = require('bcryptjs')
async function login(email,password){
    try {

        await con.query('use marvel')

        const db_email = await con.query(`SELECT email from marvel.users where email = "${email}"`)

        const db_pass = await con.query(`SELECT password from marvel.users where email = "${email}"`)

        console.log(db_email[0][0].email)
        console.log(db_pass[0][0].password)

        console.log(await bcrypt.compare(password, db_pass[0][0].password))

        if(db_email[0][0].email == email && await bcrypt.compare(password, db_pass[0][0].password) == true){
            console.log('Inicio de sesion correcto')

            return true
        }else{

            console.log('Rellena bien el formulario')

            return false

        }

    } catch (e) {
        
        console.log('Error en el login :', e)

    }
}

module.exports = login