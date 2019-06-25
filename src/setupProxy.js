
const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy(
        '/yts.am', 
        {
            target: 'https://yts.am/api/v2/list_movies.json?sort_by=download_count',
            changeOrigin: true
        })
    );
};
