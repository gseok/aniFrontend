let rest = require('./rest/rest');
let log = require('./util/util').log;
let config = require('../config');
let express = require('express');
let app = express();

////// routing codes
// routing view
app.get('/', function (req, res) {
    res.send('<html>TEST...</html>');
});

// routing rest api
app.get('/getEpisodeUrl', rest.getEpisodeUrl);
app.get('/getAniSeries', rest.getAniSeries);
app.get('/getAniList', rest.getAniList);
app.get('/test', function (req, res) {
    log('/test is called');
    res.status(200).json({
        'test': 'test success'
    });
});

// server start code
app.set('port', (process.env.PORT || config.port));
let server = app.listen(app.get('port'), function () {
    var port = server.address().port;
    console.log('server start success, port: ' + port);
});

module.exports = () => {
    return server;
}