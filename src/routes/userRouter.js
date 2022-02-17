const router = require("express").Router();
const Hashed = require("password-hash");
const { errorMessage, successMessage } = require("../helpers/messages");
const { generateAccessToken, generateRefreshToken, verifyToken } = require("../helpers/jwt");
const userModel = require("../models/userModel");

router.get('/', async (req, res) => {
    try {
        const user = await userModel.find({  }).select({ password: 0 });

        if(!user) return res.send(errorMessage(400, 'user not exists'));

        const result = successMessage(200, 'ok', user);
        res.send(result);
    } catch (err) {
        res.send(err.message);
    }
});

router.get('/:id', verifyToken, async (req, res) => {
    try {
        const _id = req.params.id &&  req.params.id;
        if(!_id) return res.send(errorMessage(400, 'id not empty'));

        const user = await userModel.findOne({ _id }).select({ password: 0 });

        if(!user) return res.send(errorMessage(400, 'user not exists'));

        const result = successMessage(200, 'ok', user);
        res.send(result);
    } catch (err) {
        res.send(err.message);
    }
});

router.post('/login', async (req, res) => {
    try {
        const {email, password} = req.body;
        const checkUser = await userModel.findOne({ email });

        if(!checkUser) return res.send(errorMessage(400, 'user not exists'));

        const isVerified = Hashed.verify(password, checkUser.password);

        if(!isVerified) return res.send(errorMessage(400, 'password not matched'));

        const token = generateAccessToken({id: checkUser._id});
        const refreshToken = generateRefreshToken({id: checkUser._id});
        const result = successMessage(200, 'ok', {token, refreshToken })
        res.send(result);

    } catch (err) {
        res.send(err.message);
    }
});

router.post('/', (req, res) => {
    try {

    } catch (err) {
        res.send(err.message);
    }
});

router.put('/', (req, res) => {
    try {

    } catch (err) {
        res.send(err.message);
    }
});

router.delete('/', (req, res) => {
    try {

    } catch (err) {
        res.send(err.message);
    }
});


module.exports = router;