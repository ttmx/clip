function renderPage(optArray){
    let v = document.getElementById("viewer");
    v.innerHTML="";
    optArray.forEach(elem => {
        v.innerHTML += "<p>------------------------------</p>";
        elem.forEach(element => {
            v.innerHTML+="<button onclick=\"nextPage('"+element[0]+"')\" value='"+element[1]+"'>"+element[1]+"</button>\n";
        }) 
    });
    
}

function nextPage(rellink){
    fetch("https://clip.unl.pt"+rellink, {
        credentials: "include",
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=iso-8859-1',
        },
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client
    })
    .then(response => response.arrayBuffer())
    .then(buffer => {
        let decoder = new TextDecoder("iso-8859-1");
        let text = decoder.decode(buffer);
        renderPage(getCurrentOptions(text));
    });


}