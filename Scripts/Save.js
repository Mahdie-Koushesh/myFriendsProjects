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
        GetElement("divListGroup").innerHTML = "";
        BindGroupList();
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
    var bookImageElement = GetElement("_fuImage");
    var bookImage = bookImageElement.files[0];
    if (name == null || name == "") {
        nameElement.focus();
        alert("وارد کردن نام کتاب الزامی است ");
        return;
    }
    
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
    var publisherElement = GetElement("publisher");
    var publisher = publisherElement.value.trim();
    if (publisher == null || publisher == "") {
        publisherElement.focus();
        alert("وارد کردن ناشر الزامی است");
        return;
    }
    var groupElement = GetElement("group");
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
    var fd = new FormData();
    fd.append("type", 2);
    fd.append("name", name);
    fd.append("id", id);
    fd.append("group", group);
    fd.append("status", status);
    fd.append("writer", writer);
    fd.append("published", published);
    fd.append("publisher", publisher);
    fd.append("noeEraeKetab", noeEraeKetab);
    fd.append("printyear", printYear);
    fd.append("image", bookImage);
    fd.append("submitDateAmanat", "222222");
    fd.append("userName", "مهدیه");
    var resMessage = AjaxCall(fd);//جوابی که تابع سی شارپی میده
    if (TryParseInt(resMessage, "x") != "x") {
        alert("با موفقیت ثبت شد");
        GetElement("divListBook").innerHTML = "";
        BindBookList();
        nameElement.value = "";
        nameElement.focus();
        groupElement.value = "0";
        noeEraeKetabElement.value = "0";
        publishedElement.value = "";
        publisherElement.value = "";
        printYearElement.value = "";
        writerElement.value = "";
        statusElement.checked = false;
        bookImageElement.value = null;

    }
    else {
        alert(resMessage);
    }
}
function UserSignUp() {
    
    var userNameElement = GetElement("userName");
    var userName = userNameElement.value.trim();
    var passwordElement = GetElement("password");
    var password = passwordElement.value.trim();
    var confirmPasswordElement = GetElement("confirmPassword");
    var confirmPassword = confirmPasswordElement.value.trim();
    var firstNameElement = GetElement("firstName");
    var firstName = firstNameElement.value.trim();
    var lastNameElement = GetElement("lastName");
    var lastName = lastNameElement.value.trim();
    var nationalCodeElement = GetElement("nationalCode");
    var nationalCode = nationalCodeElement.value.trim();
    var fatherNameElement = GetElement("fatherName");
    var fatherName = fatherNameElement.value.trim();
    var phoneNumberElement = GetElement("phoneNumber");
    var phoneNumber = phoneNumberElement.value.trim();
    var emailElement = GetElement("email");
    var email = emailElement.value.trim();
    var websiteElement = GetElement("website");
    var website = websiteElement.value.trim();
    var addressElement = GetElement("address");
    var address = addressElement.value.trim();
    if (userName == null || userName == "") {
        userNameElement.focus();
        alert("وارد کردن نام الزامی است");
        return;
    }
   
    if (password == null || password == "") {
        passwordElement.focus();
        alert("وارد کردن گذرواژه الزامی است");
        return;
    }
   
    if (confirmPassword == null || confirmPassword == "") {
        confirmPasswordElement.focus();
        alert("وارد کردن مجددگذرواژه الزامی است");
        return;
    }
    if (confirmPassword != password) {
        alert("گذرواژه و تکرار آن با هم همخوانی ندارد");
        return;
    }
    if (firstName == null || firstName == "") {
        firstNameElement.focus();
        alert(" وارد کردن  نام الزامی است ")
        return;
    }
    if (lastName == null || lastName == "") {
        lastNameElement.focus();
        alert(" وارد کردن  نام خانوادگی الزامی است ")
        return;
    }
    if (nationalCode == null || nationalCode == "") {
        nationalCodeElement.focus();
        alert(" وارد کردن کدملی الزامی است ")
        return;
    }
    if (fatherName == null || fatherName == "") {
        fatherNameElement.focus();
        alert(" وارد کردن نام پدر الزامی است ")
        return;
    }

    var id = window.location.hash.replace("!#", "").split("-")[2];
    if (id == undefined) {
        id = "";
    }
    localStorage.setItem("userName", userName);
    localStorage.setItem("password", password);
    var urlOptions = "type=3" +
        "&userName=" + userName +
        "&id=" + id +
        "&password=" + password +
        "&confirmPassword=" + confirmPassword +
        "&firstName=" + firstName +
        "&lastName=" + lastName +
        "&nationalCode=" + nationalCode +
        "&fatherName=" + fatherName +
        "&phoneNumber=" + phoneNumber +
        "&email=" + email +
        "&website=" + website +
        "&address=" + address;
    var resMessage = AjaxCall(urlOptions, 1);//جوابی که تابع سی شارپی میده
    if (TryParseInt(resMessage, "x") != "x") {
        alert("با موفقیت ثبت شد");
        userNameElement.value = "";
        passwordElement.value = "";
        confirmPasswordElement.value = "";
        userNameElement.focus();
        firstNameElement.value = "";
        lastNameElement.value = "";
        nationalCodeElement.value = "";
        fatherNameElement.value = "";
        phoneNumberElement.value = "";
        emailElement.value = "";
        websiteElement.value = "";
        addressElement.value = "";
        localStorage.setItem("id", resMessage);
    }
    else {
        alert("failed");
    }
}
function EditGroup(Id) {
    ScrollTop();
    var groups = GetGroupsById(Id);
    GetElement("title").value = groups[0].Title;
    GetElement("description").value = groups[0].Description;
    GetElement("_btnSubmit").value = "ویرایش";
    GetElement("_btnCancel").style.display = "block";
}
function DeleteGroup(id) {
    var checked = confirm("آیا از حذف اطمینان دارید؟");
    if (checked == false) {
        alert("حذف لغو شد");
    }
    if (checked == true) {
        var urlOptions = "type=4" +
            "&id=" + id;
        var resMessage = AjaxCall(urlOptions, 1);
        if (TryParseInt(resMessage, "x") != "x") {
            alert("با موفقیت حذف شد");
            GetElement("divListGroup").innerHTML = "";
            BindGroupList();
          
        }
        else {
            alert(resMessage);
        }
        BindGroupList();
    }
}
function EditBook(Id) {
    ScrollTop();
    var books = GetBooksById(Id);
    GetElement("name").value = books[0].Name;
    GetElement("writer").value = books[0].Writer;
    GetElement("printyear").value = books[0].PrintYear;
    GetElement("published").value = books[0].published;
    GetElement("publisher").value = books[0].publisher;
    GetElement("group").value = books[0].Category;
    GetElement("erae").value = books[0].erae;
    GetElement("status").value = books[0].status;
    GetElement("_btnSubmit").value = "ویرایش";
    GetElement("_btnCancel").style.display = "block";
}
function DeleteBook(id) {
    var checked = confirm("آیا از حذف اطمینان دارید؟");
    if (checked == false) {
        alert("حذف لغو شد");
    }
    if (checked == true) {
        var urlOptions = "type=5" +
            "&id=" + id;
        var resMessage = AjaxCall(urlOptions, 1);
        if (TryParseInt(resMessage, "x") != "x") {
            alert("با موفقیت حذف شد");
            GetElement("divListBook").innerHTML = "";
            BindBookList();
        }
        else {
            alert(resMessage);
        }
    }
}
function DeleteUser(id) {
    var checked = confirm("آیا از حذف اطمینان دارید؟");
    if (checked == false) {
        alert("حذف لغو شد");
    }
    if (checked == true) {
        var urlOptions = "type=6" +
            "&id=" + id;
        var resMessage = AjaxCall(urlOptions, 1);
        if (TryParseInt(resMessage, "x") != "x") {
            alert("با موفقیت حذف شد");
        }
        else {
            alert(resMessage);
        }
    }
}
function Send_Msg() {
    var nameElement = GetElement("name");
    var name = nameElement.value.trim();
    var lastnameElement = GetElement("lastname");
    var lastname = lastnameElement.value.trim();
    var phonenumberElement = GetElement("phonenumber");
    var phonenumber = phonenumberElement.value.trim();
    var emailElement = GetElement("email");
    var email = emailElement.value.trim();
    var messageElement = GetElement("message");
    var message = messageElement.value.trim();
    if (name == null || name == "") {
        nameElement.focus();
        alert(" وارد کردن نام الزامی است ")
        return;
    }
    if (name == null || name == "") {
        nameElement.focus();
        alert(" وارد کردن نام خانوادگی الزامی است ")
        return;
    }
    if (lastname == null || lastname == "") {
        lastnameElement.focus();
        alert(" وارد کردن نام خانوادگی الزامی است ")
        return;
    }
    if (message == null || message == "") {
        messageElement.focus();
        alert(" وارد کردن متن پیام الزامی است ")
        return;
    }

    var id = window.location.hash.replace("!#", "").split("-")[2];
    if (id == undefined) {
        id = "";
    }
    var urlOptions = "type=7" +
        "&name=" + name +
        "&id=" + id +
        "&lastname=" + lastname +
        "&phonenumber=" + phonenumber +
        "&email=" + email +
        "&message=" + message;
    var resMessage = AjaxCall(urlOptions, 1);//جوابی که تابع سی شارپی میده
    if (TryParseInt(resMessage, "x") != "x") {
        alert("با موفقیت ثبت شد");
        nameElement.value = "";
        nameElement.focus();
        lastnameElement.value = "";
        phonenumberElement.value = "";
        emailElement.value = "";
        messageElement.value = "";
    }
    else {
        alert(resMessage);
    }
}
function Finalize() {
    var firstNameElement = GetElement("firstName");
    var firstName = firstNameElement.value.trim();
    var lastNameElement = GetElement("lastName");
    var lastName = lastNameElement.value.trim();
    var nationalCodeElement = GetElement("nationalCode");
    var nationalCode = nationalCodeElement.value.trim();
    var fatherNameElement = GetElement("fatherName");
    var fatherName = fatherNameElement.value.trim();
    var phoneNumberElement = GetElement("phoneNumber");
    var phoneNumber = phoneNumberElement.value.trim();
    var emailElement = GetElement("email");
    var email = emailElement.value.trim();
    var websiteElement = GetElement("website");
    var website = websiteElement.value.trim();
    var addressElement = GetElement("address");
    var address = addressElement.value.trim();

    if (firstName == null || firstName == "") {
        firstNameElement.focus();
        alert(" وارد کردن  نام الزامی است ")
        return;
    }
    if (lastName == null || lastName == "") {
        lastNameElement.focus();
        alert(" وارد کردن  نام خانوادگی الزامی است ")
        return;
    }
    if (nationalCode == null || nationalCode == "") {
        nationalCodeElement.focus();
        alert(" وارد کردن کدملی الزامی است ")
        return;
    }
    if (fatherName == null || fatherName == "") {
        fatherNameElement.focus();
        alert(" وارد کردن نام پدر الزامی است ")
        return;
    }

    var id = window.location.hash.replace("!#", "").split("-")[2];
    if (id == undefined) {
        id = "";
    }
    var urlOptions = "type=8" +
        "&firstName=" + firstName +
        "&id=" + id +
        "&lastName=" + lastName +
        "&nationalCode=" + nationalCode +
        "&fatherName=" + fatherName +
        "&phoneNumber=" + phoneNumber +
        "&email=" + email +
        "&website=" + website +
        "&address=" + address;
    var resMessage = AjaxCall(urlOptions, 1);//جوابی که تابع سی شارپی میده
    if (TryParseInt(resMessage, "x") != "x") {
        alert("با موفقیت ثبت شد");
        firstNameElement.value = "";
        firstNameElement.focus();
        lastNameElement.value = "";
        nationalCodeElement.value = "";
        fatherNameElement.value = "";
        phoneNumberElement.value = "";
        emailElement.value = "";
        websiteElement.value = "";
        addressElement.value = "";
    }
    else {
        alert(resMessage);
    }
}
function SignIn() {
    var userName = GetElement("userName").value;
    var password = GetElement("password").value;
    if (userName == null || userName == "") {
        alert("وارد کردن نام کاربری الزامی است ");
        return;
    }
    if (password == null || password == "") {
        alert("وارد کردن پسورد الزامی است");
        return;
    }
    var User = JSON.parse(AjaxCallGet("../Json/variable/User.json"));
    var storedName = localStorage.getItem("userName");
    var storedPw = localStorage.getItem("password");
    // check if stored data from register-form
    if (storedName == null && storedPw == null) {
        if ((User.filter(c => c.UserName == userName && c.Password == password)).length <= 0) {
            alert('اطلاعات لاگین اشتباهه');
        } else {
            User = User.filter(c => c.UserName == userName && c.Password == password);
            window.location.hash = "#!main.html";
            localStorage.setItem("id", User[0].Id);
            localStorage.setItem("userName", User[0].username);
            localStorage.setItem("password", User[0].password);
            return;
        }
    }
    if (storedName != null && storedPw != null) {
        if (userName == storedName && password == storedPw) {
            window.location.hash = "#!main.html";
            return;
        }
        if ((User.filter(c => c.UserName == userName && c.Password == password)).length > 0) {
            window.location.hash = "#!main.html";
            return;
        } else {
            alert("اطلاعات لاگین اشتباهه");
            return;
        }
    }
}
function SaveNews() {
    var titleNewsElement = GetElement("titlenews");
    var titleNews = titleNewsElement.value.trim();
    var descnewsElement = GetElement("descnews");
    var descnews = descnewsElement.value.trim();
    var NewsImageElement = GetElement("_fuImage");
    var NewsImage = NewsImageElement.files[0];
    if (titleNews == null || titleNews == "") {
        titleNewsElement.focus();
        alert(" وارد کردن عنوان خبر الزامی است ")
        return;
    }
    if (descnews == null || descnews == "") {
        descnewsElement.focus();
        alert(" وارد کردن شرح خبر الزامی است ")
        return;
    }
    var id = window.location.hash.replace("!#", "").split("-")[2];
    if (id == undefined) {
        id = "";
    }


    var fd = new FormData();
    fd.append("type", 9);
    fd.append("titlenews", titleNews);
    fd.append("id", id);
    fd.append("descnews", descnews);
    fd.append("image", NewsImage);
    var resMessage = AjaxCall(fd);//جوابی که تابع سی شارپی میده
    if (TryParseInt(resMessage, "x") != "x") {
        alert("با موفقیت ثبت شد");
        GetElement("divListNews").innerHTML = "";
        BindNewsAdminList();
        titleNewsElement.value = "";
        titleNewsElement.focus();
        descnewsElement.value = "";
        NewsImageElement.value = null;
        
          }
    else {
        alert(resMessage);
    }
}
function DeleteNews(Id) {
    var checked = confirm("آیا از حذف اطمینان دارید؟");
    if (checked == false) {
        alert("حذف لغو شد");
    }
    if (checked == true) {
        var urlOptions = "type=10" +
            "&id=" + Id;
        var resMessage = AjaxCall(urlOptions, 1);
        if (TryParseInt(resMessage, "x") != "x") {
            alert("با موفقیت حذف شد");
            GetElement("divListNews").innerHTML = "";
            BindNewsAdminList();
        }
        else {
            alert(resMessage);
        }
    }
}
function EditNews(Id) {
    ScrollTop();
    var news = GetNewsById(Id);
    GetElement("titlenews").value = news[0].TitleNews;
    GetElement("descnews").value = news[0].DesNews;
 
    GetElement("_btnSubmit").value = "ویرایش";
    GetElement("_btnCancel").style.display = "block";
}
function SaveAmanat(Id) {
    //alert(
    //    "امانت شما با موفقیت انجام شد. در صورتی که پس از دو روز به محل کتابخانه مراجعه نکیند، امانت شما لغو خواهد شد");
    var storedName = localStorage.getItem("userName");

    var storedPw = localStorage.getItem("password");
    // check if stored data from register-form
    if (storedName == null && storedPw == null || storedName==undefined && storedPw==undefined) {
        alert("لطفا ابتدا لاگین شوید");
        return;
    }
    var id = Id;
    var book = GetBooksById(id);
    var fd = new FormData();
    var submiterUserId = localStorage.getItem("id");
    fd.append("type", 2);
    fd.append("name", book[0].Name);
    fd.append("id", book[0].Id);
    fd.append("group", book[0].Category);
    fd.append("status", "1");
    fd.append("writer", book[0].Writer);
    fd.append("published", book[0].published);
    fd.append("publisher", book[0].publisher);
    fd.append("noeEraeKetab", book[0].erae);
    fd.append("printyear", book[0].PrintYear);
    fd.append("image", book[0].image);
    fd.append("userName", submiterUserId);
    var resMessage = AjaxCall(fd);
    if (TryParseInt(resMessage, "x") != "x") {
        alert("امانت شما با موفقیت انجام شد . لطفا طی ....");
        GetElement("amant" + book[0].Id).style.display ="none";
        GetElement("textAmant" + book[0].Id).style.display ="block";

    } else {
        alert(resMessage);
    }
}
//function CancelAmant(Id) {
//    var id = Id;
//    var book = GetBooksById(id);
//    var fd = new FormData();
//    fd.append("type", 2);
//    fd.append("name", book[0].Name);
//    fd.append("id", book[0].Id);
//    fd.append("group", book[0].Category);
//    fd.append("status", "0");
//    fd.append("writer", book[0].Writer);
//    fd.append("published", book[0].published);
//    fd.append("publisher", book[0].publisher);
//    fd.append("noeEraeKetab", book[0].erae);
//    fd.append("printyear", book[0].PrintYear);
//    fd.append("image", book[0].image);
//    fd.append("submitDateAmanat", "");
//    fd.append("userName", "مهدیه");
//    var resMessage = AjaxCall(fd);
//    if (TryParseInt(resMessage, "x") != "x") {
//        alert("امانت شما لغو شد...");
//        GetElement("amant" + book[0].Id).style.display = "block";

//    } else {
//        alert(resMessage);
//    }
//}