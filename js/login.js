function login() {
    let u = document.getElementById("username").value;
    let p = document.getElementById("password").value;
    let xhttp = new XMLHttpRequest();
    /*xhttp.open("POST", "https://clip.unl.pt/utente/eu", true);
    xhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    document.cookie = "JServSessionIdroot1112=2bl036zot1.JS3";
    //xhttp.setRequestHeader("Cookie","JServSessionIdroot1112=2bl036zot1.JS3");
    console.log("identificador="+u+"&senha="+p);
    xhttp.send("identificador="+u+"&senha="+p);*/
    fetch("https://clip.unl.pt/utente/eu", {
        credentials: "include",
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client
        body: "identificador="+u+"&senha="+p
    })
        .then(function (response) {
            console.log(response);
        })}
        