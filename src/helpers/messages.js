module.exports = {
    successMessage: (successCode, successMessage, data = '') => {
        let result = {};


        result.status = 'success';
        result.code = successCode;
        result.message = successMessage;
        result.data = data;

        return result;
    },
    errorMessage: (errorCode, errorMessage, ) => {
        let result = {};

        result.status = 'failed';
        result.error = true;
        result.code = errorCode;
        result.message = errorMessage;

        return result;
    }
}