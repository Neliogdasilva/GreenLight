require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path')

//Conexion con la BD

//(async()=>{
    try{
        mongoose.connect(process.env.TOKEN)
        console.log('Connected to the database')
    } catch (error) {
        console.log(error)
    }

    //Rutas de frontend
    app.use('/',express.static(path.resolve('views','home')))
    app.use('/registro',express.static(path.resolve('views','registro')))
    app.use('/login',express.static(path.resolve('views','login')))
    app.use('/components',express.static(path.resolve('views','components')))




    module.exports = app