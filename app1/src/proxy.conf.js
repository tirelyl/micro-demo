const PROXY_CONFIG = {};

PROXY_CONFIG['/sockjs-node'] = {
    target: 'http://localhost:4201',
    secure: false,
    changeOrigin: false
};

// PROXY_CONFIG['/static/app2'] = {
//     target: 'http://localhost:3002',
//     secure: false,
//     changeOrigin: true
// };

module.exports = PROXY_CONFIG;
