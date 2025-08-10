export const errorHandler = (statusCOde, message) => {
    const error = new Error();
    error.statusCOde = statusCOde;
    error.message = message;
    return error;
}