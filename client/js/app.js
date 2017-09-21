//import $ from 'jquery';
var user = {
    "user": 123
};
getUserMessages(user).then(displayMessages);
function displayMessages(messages) {
    messages.messages.forEach(function (message) {
        $('#messagesList').append("<li>" + message + "</li>");
    });
}
function getUserMessages(user) {
    return new Promise(execute);
    function execute(resolve, reject) {
        var httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState == XMLHttpRequest.DONE && httpRequest.status == 200) {
                var data = JSON.parse(httpRequest.responseText);
                resolve(data);
            }
        };
        httpRequest.open("POST", "http://localhost:3000/messages", true);
        httpRequest.setRequestHeader("Content-Type", "application/json");
        var body = user;
        httpRequest.send(JSON.stringify(body));
    }
}
