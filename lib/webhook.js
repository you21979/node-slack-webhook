var rp = require('request-promise');

var webhook = module.exports = function(url, channel, username, icon_url, text){
    var options = {
        method: 'POST',
        uri: url,
        json: {
            channel: channel,
            username: username,
            icon_url: icon_url,
            text: text,
        }
    }
    return rp(options);
}

