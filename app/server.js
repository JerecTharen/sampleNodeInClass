var express = require('express');
var app = express();
var Messageservice = (function () {
    function Messageservice() {
    }
    return Messageservice;
}());
var messages = {
    "messages": ['abc', 'testing', 'information']
};
getMessage(user);
{
    if (user.user == 123) {
        return this.messages;
    }
}
;
app.post('/messages', function (req, res) {
    var user = req.body.user;
    var messages = new Messageservice.getMessage(user);
    if (messages) {
        res.send(messages);
    }
    else {
        res.send('error');
    }
});
app.listen(3000);
