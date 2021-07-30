const config = require('../config.json')
const express = require('express');
const StudentController = require ('../controllers/studentController.js');

const routes = express.Router();
routes.get('/ver', (req, res) => {
    res.status(200).send({
        version: config.ver
    })
})



module.exports = routes;