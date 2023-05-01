const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {

    const target = 'http://localhost:8080';

    app.use(
        '/api',
        createProxyMiddleware({
            target: target,
            changeOrigin: true,
            pathRewrite: {'/api': ''}
        })
    );
};