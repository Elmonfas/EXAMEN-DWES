const bcrypt = require('bcryptjs')

async function hashing(req, res, next){

    const salt = await bcrypt.genSalt(10)
    
    const hashed_pass = await bcrypt.hash(req.body.password , salt)
    
    req.body.password = hashed_pass
   
    next()
}

module.exports = hashing