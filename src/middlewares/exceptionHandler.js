const {CustomError} = require('../helper/customException');

function handleException(err, req, res, next) 
{   
    console.log(err)

    errResp = {
        status: 500,
        code: err.code,
        data: err.data
    }

    if (err instanceof CustomError) {
        errResp.status = err.status
    } else {
        errResp.code = 1000;
        errResp.data = { message: 'Internal server error' };
    }

    res.status(errResp.status).send(errResp);
}

module.exports = {
    handleException
}