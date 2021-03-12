const express = require('express');
const router = express.Router();
const validators = require('../../validators/secret-validator');
const secretsService = require('../../services/secrets.service');
const crypto = require('crypto-js');
const config = require('../../../config.json');
const Secret = require('../../models/secret');

router.post('/', validators.insertSecretValidator, async (req, res, next) => {
    try {
        const {name, data} = req.body;
        let secret = new Secret(name, data);
        secret.data = crypto.AES.encrypt(secret.data, config.secret).toString();
        secret = await secretsService.InsertSecret(secret);
        return res.json({
            success: true,
            secret: {
                name,
                id: secret.id
            }
        });
    }
    catch (err) {
        return next(err);
    }
});

router.get('/', async (req, res, next) => {
    try {
        const secrets = await secretsService.ListSecrets();
        secrets.map(secret => {
            secret.data = '';
            return secret;
        })
        return res.json({
            success: true,
            secrets
        });
    }
    catch (err) {
        return next(err);
    }
});

router.get('/:id', validators.getSecretValidator, async (req, res, next) => {
    try {
        const secret = await secretsService.GetSecret(req.params.id);
        secret.data = crypto.AES.decrypt(secret.data, config.secret).toString(crypto.enc.Utf8);
        return res.json({
            success: true,
            secret
        });
    }
    catch (err) {
        return next(err);
    }
});

router.delete('/:id', validators.getSecretValidator, async (req, res, next) => {
    try {
        const success = await secretsService.DeleteSecret(req.params.id);
        return res.json({
            success
        });
    }
    catch (err) {
        return next(err);
    }
});

module.exports = router;