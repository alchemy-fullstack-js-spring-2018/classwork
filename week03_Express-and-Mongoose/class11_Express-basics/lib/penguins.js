const express = require('express');
const Router = express.Router;
const router = Router();

module.exports = router
    .get('/', (req, res) => {
        res.json(['bernice', 'bernard']);
    })

    .get('/:id', (req, res) => {
        res.json({ _id: req.params.id, name: 'bernice' });
    });