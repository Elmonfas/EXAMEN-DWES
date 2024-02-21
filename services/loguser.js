const con = require('../databse/con')

async function log_user(email){
    try {

        await con.query('use marvel')

        const existente = await con.query(`SELECT * from marvel.users where email = "${email}"`)

        console.log(existente[0][0])

        if(existente[0][0] != undefined){
            
            return true
        
        }else{

            return false

        }

    } catch (e) {
        
        console.log('Error en el log :', e)

    }
}

module.exports = log_user