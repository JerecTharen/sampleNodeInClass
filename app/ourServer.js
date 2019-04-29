const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

class MessageService{
    constructor(){
        this.messages = [
            {
                message: 'abc',
                user: 'default',
            },
            {
                message: 'testing',
                user: 'default',
            },
            {
                message: 'information',
                user: 'default',
            }
        ];
    }
    getMessage(user){
        let messageSend = [];
        this.messages.forEach((message)=>{
            if(user.user === message.user){
                messageSend.push(message);
            }
        });
        return messageSend;
    }
    addMessage(user){
        this.messages.push(user);
    }
};

let messageService = new MessageService();

app.post('/messages', (req, res) => {
    let user = req.body.user;
    console.log("body is",req.body);
    console.log("user is",req.body.user);
    messageService.addMessage(user);
    let messages = messageService.getMessage(user);

    if (messages.length > 0) {
        res.send(messages)
    } else {
        res.send('error')
    }
});

app.listen(3000);
