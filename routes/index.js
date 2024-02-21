const router = require('express').Router()

const add_user = require('../services/adduser')

const hashing = require('../services/hash')

const log_user = require('../services/loguser')

const login = require('../services/login')

const con = require('../databse/con')

router.get('/', (req, res) => {
    res.render('home')
})

router.get('/login', (req, res) => {
    res.render('login')
})

router.get('/register', async (req, res) => {
    res.render('register')

})

router.post('/register',hashing, async (req, res) => {
    
    const {nombre, email, password} = req.body
    
    if(await add_user(nombre, email, password)){

        console.log('Bienvenido')

        res.redirect('/peliculas')

    }else{
        
        console.log('Tienes cuenta, incia tu sesion')

        res.redirect('/login')

    }
})

router.post('/login', async (req, res) => {
    const {email, password} = req.body

    if(await log_user(email, password)){

        if(await login(email, password)){

            res.redirect('/peliculas')
        
        }else{

            res.redirect('/login')

        }


    }else{

        console.log('El usuario no esta registrado')

        res.redirect('/register')

    }
    
})

router.get('/peliculas', async (req ,res) => {

    const peliculas = await con.query('Select * from marvel.peliculas')

    console.log(peliculas[0])

    res.render('peliculas', {
        peliculas
    })
})


module.exports = router