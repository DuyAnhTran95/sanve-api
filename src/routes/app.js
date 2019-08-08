const Router = require('express-async-router').AsyncRouter;
const router = Router();
const appService = require('../service/appService');

router.post('/register', async (req, res, next) => {
    
    try {
        
        const app = await appService.registerApp(req.body)

        res.send(app)

    } catch (err) {

        next(err);
    }
    

});

router.post('/login', async (req, res, next) => {
    

    try {
        const token = await appService.loginApp(req.body)

        res.send({token})
    } catch (err) {

        next(err);
    }
})




module.exports = router