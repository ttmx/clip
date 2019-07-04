function getStudentNum(body) {
    return body.split("/utente/eu/aluno?aluno=")[1].split(">")[1].split("<")[0];

}
function getStudentName(body) {
    return body.split("<td width=\"100%\" align=\"right\"><a href=\"/utente/eu\"><strong><span style=\"color: #205260;\">")[1].split("<")[0];
}
function getCurrentOptions(body) {
    let optarray = [];
    let tables = body.split("<table border=\"0\" cellspacing=\"0\" cellpadding=\"3\">")
    for (let i = 1; i < tables.length; i++) {
        let options = tables[i].split("</table")[0];
        let temparray = [];
        options.split("href=\"").forEach(element => {
            let opts = element.split(/\"><span class=\"h.\">/);
            if (opts.length > 1)
                temparray.push([opts[0], opts[1].split("<")[0]]);
        });
        optarray.push(temparray);
    }
    return optarray;
}