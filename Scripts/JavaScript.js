function AjaxCallGetPage() {
    var pageName = "";
    var xhttp = new XMLHttpRequest();
    var hash = location.hash.replace("#!", "");
    var type = hash.split("-")[0];
    var module1 = hash.split("-")[1];

    if (pageName !== "") {
        xhttp.open("Get", pageName, false);
    } else {
        xhttp.open("Get","/Modules/" + type + "/" + module1 + ".html", false);
    }
    xhttp.send();
    if (xhttp.status == 200 || xhttp.readyState == 4) {
        document.getElementById('main').innerHTML = xhttp.response;
    }
    return;
}
