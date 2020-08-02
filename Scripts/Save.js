function SaveDefineGroup() {
    var titleElement = GetElement("title");
    var title = titleElement.value.trim();
    var descriptionElement = GetElement("description");
    var description = descriptionElement.value.trim();
    if (title == null || title == "") {
        titleElement.focus();
        alert(" وارد کردن عنوان دسته الزامی است ")
        return;
    }
    var id = window.location.hash.replace("!#", "").split("-")[2];
    if (id == undefined) {
        id = "";
    }
    var urlOptions = "type=1" +
        "&title=" + title +
        "&id=" + id +
        "&description=" + description;
    var resMessage = AjaxCall(urlOptions, 1);//جوابی که تابع سی شارپی میده
    if (TryParseInt(resMessage, "x") != "x") {
        alert("با موفقیت ثبت شد");
        titleElement.value = "";
        titleElement.focus();
        descriptionElement.value = "";
    }
    else {
        alert(resMessage);
    }
}
function SaveDefineBook() {
    var nameElement = GetElement("name");
    var name = nameElement.value.trim();
    if (name == null || name == "") {
        nameElement.focus();
        alert("وارد کردن نام کتاب الزامی است ");
        return;
    }
    //var imageElement = GetElement("image");
    //var image = imageElement.value.trim();
    //if (image == null || image == "") {
    //    imageElement.focus();
    //    alert("وارد کردن تصویر الزامی است");
    //    return;
    //}
    var writerElement = GetElement("writer");
    var writer = writerElement.value.trim();
    if (writer == null || writer == "") {
        writerElement.focus();
        alert("وارد کردن نام نویسنده الزامی است ");
        return;

    }
    var printYearElement = GetElement("printyear");
    var printYear = printYearElement.value.trim();
    if (printYear == null || printYear == "") {
        printYearElement.focus();
        alert("وارد کردن  سال چاپ الزامی است");
        return;
    }
    var publishedElement = GetElement("published");
    var published = publishedElement.value.trim();
    if (published == null || published == "") {
        publishedElement.focus();
        alert("وارد کردن نوبت چاپ الزامی است ");
        return;
    }
    var statusElement = GetElement("status");
    var status = statusElement.checked;
    if (status == false) {
        status = "0";
    }
    if (status == true) {
        status = "1";
    }

    //var translatorElement = GetElement("translator");
    ////var translator = translatorElement.value.trim();
    //if (translator == null || translator) {
    //    translatorElement.focus();
    //    alert("***************");
    //    return;
    //}
    var publisherElement = GetElement("publisher");
    var publisher = publisherElement.value.trim();
    if (publisher == null || publisher == "") {
        publisherElement.focus();
        alert("وارد کردن ناشر الزامی است");
        return;
    }
    var groupElement = GetElement("type");
    var group = groupElement.value.trim();
    if (group == "0") {
        groupElement.focus();
        alert("انتخاب دسته بندی کتاب الزامی است");
        return;
    }
    var noeEraeKetabElement = GetElement("erae");
    var noeEraeKetab = noeEraeKetabElement.value.trim();
    if (noeEraeKetab == "0") {
        noeEraeKetabElement.focus();
        alert("انتخاب نوع ارائه کتاب الزامی است");
        return;
    }
    var id = window.location.hash.replace("!#", "").split("-")[2];
    if (id == undefined) {
        id = "";
    }
    var urlOptions = "type=2" +
        "&name=" + name +
        "&id=" + id +
        "&group=" + group +
        "&status=" + status +
        "&writer=" + writer +
        "&published=" + published +
        "&publisher=" + publisher +
        "&noeEraeKetab=" + noeEraeKetab +
        "&printyear=" + printYear;
    var resMessage = AjaxCall(urlOptions, 1);//جوابی که تابع سی شارپی میده
    if (TryParseInt(resMessage, "x") != "x") {
        alert("با موفقیت ثبت شد");
        nameElement.value = "";
        nameElement.focus();
        groupElement.value = "0";
        noeEraeKetabElement.value = "0";
        publishedElement.value = "";
        publisherElement.value = "";
        printYearElement.value = "";
        writerElement.value = "";
        statusElement.checked = false;
    }
    else {
        alert(resMessage);
    }
}
function UserSignUp() {
    var userNameElement = GetElement("userName");
    var userName = userNameElement.value.trim();
    if (userName == null || userName == "") {
        userNameElement.focus();
        alert("وارد کردن نام الزامی است");
        return;
    }
    var passwordElement = GetElement("password");
    var password = passwordElement.value.trim();
    if (password == null || password == "") {
        passwordElement.focus();
        alert("وارد کردن گذرواژه الزامی است");
        return;
    }
    var confirmPasswordElement = GetElement("confirm_password");
    var confirmPassword = confirmPasswordElement.value.trim();
    if (confirmPassword == null || confirmPassword == "") {
        confirmPasswordElement.focus();
        alert("وارد کردن مجددگذرواژه الزامی است");
        return;
    }
    var id = window.location.hash.replace("!#", "").split("-")[2];
    if (id == undefined) {
        id = "";
    }
    var urlOptions = "type=3" +
        "&userName=" + userName +
        "&id=" + id +
        "&password=" + password +
        "&confirmPassword=" + confirmPassword;
    var resMessage = AjaxCall(urlOptions, 1);//جوابی که تابع سی شارپی میده
    if (TryParseInt(resMessage, "x") != "x") {
        alert("با موفقیت ثبت شد");
        userName.value = "";
        userName.focus();

    }
    else {
        alert("failed");
    }
}