function checkEnvironment() {
    let valid = true;
    if (typeof process.env.SERVER_PORT !== 'string') {
        console.error('Missing environment variable SERVER_PORT.\n');
        valid = false;
    }

    if (!valid) {
        throw new Error('Missing environment variables.');
    }
}

module.exports = () => {
    checkEnvironment();

    const httpResponses = Object.freeze({
        ok: 200,
        internalServerError: 500
    });

    const errorMessages = Object.freeze({
        internalServerError: 'Internal server error!'
    });

    const viewTypes = Object.freeze({
        home: 'index-home',
        webShop: 'index-web-shop'
    });

    const contentTypes = Object.freeze({
        text: 'text/plain',
        json: 'application/json'
    });

    const templateEngine = Object.freeze({
        name: 'hbs',
        engine: 'handlebars'
    });

    const routes = Object.freeze({
        home: '/',
        webShop: '/web-shop',
        favicon: '/favicon.ico'
    });

    return Object.freeze({
        httpResponses,
        errorMessages,
        viewTypes,
        contentTypes,
        templateEngine,
        routes
    });
};