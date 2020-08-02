function GetElement(id) {
    return document.getElementById(id);
}
function GetValue(elementId) {
    var element = GetElement(elementId);
    return element.value;
}
function AjaxCall(urlOptions, headerType) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "../Functions/AjRequests.aspx", false);
    if (headerType == 1) {
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    }
    xhttp.send(urlOptions);
    if (xhttp.status == 200 || xhttp.readyState == 4) {
        return xhttp.response;
    }
    else {
        alert("خطا در ارتباط با سرور");
        return false;
    }
}
function TryParseInt(str, defaultValue) {
    var retValue = defaultValue;
    if (str !== null) {
        if (str.length > 0) {
            if (!isNaN(str)) {
                retValue = parseInt(str);
            }
        }
    }
    return retValue;
}
function AjaxCallGet(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("Get", url, false);
    xhttp.send();
    return xhttp.response;
}
function BindDropDownLists(elementId, titles, values) {
    var defaultOption = "<option value=\"0\">انتخاب کنید</option>";
    var body = defaultOption;
    for (var i = 0; i < titles.length; i++) {
        body += "<option value=\"" + values[i] + "\">" + titles[i] + "</option>";
    }
    GetElement(elementId).innerHTML = body;
}
function ChangeContent() {
    var hash = location.hash.replace("#!", "");
    var module = hash.split('-')[1];
    switch (module) {
        case "Book":
            ConfigDefineBook();
            break;
        default:
    }
}
function AjaxCallGetPage() {
    var xhttp = new XMLHttpRequest();
    var hash = location.hash.replace("#!", "");
    var pageName = "";
    var type = hash.split('-')[0];
    var module = hash.split('-')[1];
    if (pageName !== "") {
        xhttp.open("Get", pageName, false);
    } else {
        xhttp.open("Get", "../Modules/" + type + "/" + module + ".html", false);
    }
    xhttp.send();
    if (xhttp.status == 200 || xhttp.readyState == 4) {
        GetElement('MainContent').innerHTML = xhttp.response;
    }
    return "خطا در ارتباط با سرور";
}