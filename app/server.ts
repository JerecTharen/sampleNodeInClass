import { express } from "express";
import {BodyParser} from "body-parser";
const app = express();

class MessageService{
    messages = {
        "messages": [
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
        ]
};
    getMessage(user){
        let messageSend = [];
        this.messages.messages.forEach((message)=>{
            if(user.user === message.user){
                messageSend.push(message);
            }
        });
        return messageSend;
    }
    addMessage(user){
        this.messages.messages.push(user);
    }
};

let messageService = new MessageService();

app.post('/messages', (req, res) => {
    let user = req.body.user;
    console.log(req.body);
    messageService.addMessage(user);
    let messages = messageService.getMessage(user);

    if (messages.length > 0) {
        res.send(messages)
    } else {
        res.send('error')
    }
});

app.listen(3000);
