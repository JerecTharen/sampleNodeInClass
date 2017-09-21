import { express } from "express";
const app = express();

class MessageService{
    messages = {
        "messages": ['abc', 'testing', 'information']
};
    getMessage(user){
        if (user.user == 123){
            return this.messages;
        }
    }
};

app.post('/messages', (req, res) => {
    let user = req.body.user;
    let messageService = new MessageService();
    let messages = messageService.getMessage(user);

    if (messages) {
        res.send(messages)
    } else {
        res.send('error')
    }
});

app.listen(3000);