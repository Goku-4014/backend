
// import express from 'express'

require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('hello world!')
})

app.get('/login', (req, res) =>{
    res.send('enter login credentials')
})

app.listen(process.env.PORT, ()=> {
    console.log(`example app lsitening on port ${port}`)
})
