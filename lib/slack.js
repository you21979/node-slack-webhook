var fs = require('fs');
var webhook = require('./webhook');

var Slack = module.exports = function(url, channel, username, icon_url){
    this.url = url
    this.channel = channel
    this.username = username
    this.icon_url = icon_url
}

Slack.prototype.send = function(text){
    return webhook(this.url, this.channel, this.username, this.icon_url, text);
}

Slack.fromConfig = function(config){
    return new Slack(config.url, config.channel, config.username, config.icon_url)
}

Slack.fromConfigFile = function(file){
    var config = JSON.parse(fs.readFileSync(file, 'utf8'));
    return Slack.fromConfig(config)
}

