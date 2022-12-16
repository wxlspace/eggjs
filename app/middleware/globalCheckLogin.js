module.exports = () => {
    return async function (ctx, next) {
        console.log("globalCheckLogin.js middleware")
        await next();
    };
};