module.exports = () => {
    return async function (ctx, next) {
        let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbiIsImFnZSI6MzAsImlhdCI6MTY3MTE5MTI4MH0.uLT6ak7wNNlSAWnnVphfe89wKNGeGGiBfGwmRlniudI';
        try {
            let decode_token = ctx.app.jwt.verify(token, ctx.app.config.jwt.secret);
            console.log("decode_token",decode_token)
            await next();
        } catch (e) {
            // console.log("ctx.app.router",ctx.app.router)
            ctx.body = {
                code: 401,
                data: [],
                msg: '您没有权限'
            }
        }
        
    };
};