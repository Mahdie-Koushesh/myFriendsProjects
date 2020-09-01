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
    var itemId = hash.split('-')[2];
    switch (module) {
        case "Book":
            ConfigDefineBook();
            BindBookList();
            if (itemId != "" && itemId != undefined) {
                EditBook(itemId);
            }
            break;
        case "Group":
            BindGroupList();
            if (itemId != "" && itemId != undefined) {
                EditGroup(itemId);
            }
        case "Users":
            BindUserList();
        case "BookUser":
            BindBookUserList();
        case "main":
            BindNewsList();
        case "News":
           BindNewsAdminList();
            if (itemId != "" && itemId != undefined) {
                EditNews(itemId);
            }
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
    OnkeyPressTxtBox();
    return "خطا در ارتباط با سرور";
}
function GetGroups() {
    var groups = JSON.parse(AjaxCallGet("../Json/variable/ProductType.json"));
    return groups;
}
function GetGroupsById(Id) {
    var groups = GetGroups();
    groups = groups.filter(c => c.Id == Id);
    return groups;
}
function EditPageUrl(id)//EditUrl
{
    var hash = location.hash.replace("#!", "").split('-');
    location.href = "#!" + hash[0] + "-" + hash[1] + "-" + id;
}
function GetBooks() {
    var books = JSON.parse(AjaxCallGet("../Json/variable/Book.json"));
    return books;
}
function GetBooksById(Id) {
    var books = GetBooks();
    books = books.filter(c => c.Id == Id);
    return books;
}
function GetUsers() {
    var users = JSON.parse(AjaxCallGet("../Json/variable/User.json"));
    return users;
}
function GetUsersById(Id) {
    var users = GetUsers();
    users = users.filter(c => c.Id == Id);
    return users;
}
function GetGroupNameById(id) {
    var groups = GetGroupsById(id);
    var groupName = groups.map(c => c.Title);
    return groupName;
}
function GetNews() {
    var news = JSON.parse(AjaxCallGet("../Json/variable/News.json"));
    return news;
}
function GetNewsById(Id) {
    var News = GetNews();
    News = News.filter(c => c.Id == Id);
    return News;
}
function ScrollTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
function OnkeyPressTxtBox() {
    var element = document.getElementsByClassName("form-control");
    for (var i = 0; i < element.length; i++) {
        element[i].onkeypress = function (event) {
            if (event.keyCode == 13) {
                GetElement("_btnSubmit").onclick();
            }
        }
    }
}