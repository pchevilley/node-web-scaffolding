const config = {
    network: {
        server_port: 8080,
        enableCORS: false,
        enableGZIP: false
    },

    mysql: {
        host: 'localhost',
        user: 'nodeapi',
        password: 'MyAPI',
        database: 'nodeapi'
    },

    client_web_path: "../client"
};

module.exports = config;