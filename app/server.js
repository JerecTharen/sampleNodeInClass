"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1();
var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = {
            "messages": [
                {
                    message: 'abc',
                    user: 'default'
                },
                {
                    message: 'testing',
                    user: 'default'
                },
                {
                    message: 'information',
                    user: 'default'
                }
            ]
        };
    }
    MessageService.prototype.getMessage = function (user) {
        var messageSend = [];
        this.messages.messages.forEach(function (message) {
            if (user.user === message.user) {
                messageSend.push(message);
            }
        });
        return messageSend;
    };
    MessageService.prototype.addMessage = function (user) {
        this.messages.messages.push(user);
    };
    return MessageService;
}());
;
var messageService = new MessageService();
app.post('/messages', function (req, res) {
    var user = req.body.user;
    console.log(req.body);
    messageService.addMessage(user);
    var messages = messageService.getMessage(user);
    if (messages.length > 0) {
        res.send(messages);
    }
    else {
        res.send('error');
    }
});
app.listen(3000);
