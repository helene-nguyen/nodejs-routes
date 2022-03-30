//!import express
const express = require('express');
const req = require('express/lib/request');
//!router
const router = express.Router();
//!cities
const cities = require('./my_modules/capitalCities')

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
});

router.get('/style.css', (req, res) => {
    res.sendFile(__dirname + '/views/style.css');
});

router.get('/city/:name', (req, res) => {

    const city = cities.capitalCities.find((city) => {
        return city.name.toLowerCase() === req.params.name.toLowerCase();
    });

    if (city) {
        let time = req.params.name.toLowerCase();
        res.send(`<h1>Hello ${req.params.name.toUpperCase()}</h1>${cities.timezone()[`${time}`]}`);
    } else {
        res.status(404);
        res.send('<h2>Country not found ! Sorry !</h2>')
    }
})

module.exports = router;