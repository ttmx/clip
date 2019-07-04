function login() {
    let u = document.getElementById("username").value;
    let p = document.getElementById("password").value;
    let xhttp = new XMLHttpRequest();
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
        body: "identificador=" + u + "&senha=" + p
    })
        .then(response => response.arrayBuffer())
        .then(buffer => {
            let decoder = new TextDecoder("iso-8859-1");
            let text = decoder.decode(buffer);
            bodyHandler(text);
        });
}
function bodyHandler(text) {
    console.log(getStudentNum(text) + "," + getStudentName(text));
    console.log(getCurrentOptions(text));
    renderPage(getCurrentOptions(text));
}