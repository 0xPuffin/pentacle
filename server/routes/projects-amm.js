const express = require('express');
const router = express.Router();
const amm = require('../services/projects-amm');

router.get('/', async function(req, res, next) {
    try {
        res.json(await amm.getMultiple(req.query.page));
    } catch (err) {
        console.error(`Error while getting amm `, err.message);
        next(err);
    }
});

module.exports = router;