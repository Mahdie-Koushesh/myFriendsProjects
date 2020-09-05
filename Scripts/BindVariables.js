function BindGroupList() {
    GetElement("divListGroup").innerHTML = "";
    var txtSearch = GetElement("_txtGroupSearch").value;
    if (txtSearch != "") {
        var groups = GroupFilter(txtSearch);
    }
    if (txtSearch == "") {
        var groups = GetGroups();
    }
    if (groups == "" || groups == false) {
        return false;
    }
    for (var i = 0; i < groups.length; i++) {
        GetElement("divListGroup").innerHTML +=
            GroupsItem
                .replace("[[Name]]", groups[i].Title)
                .replace("[[Description]]", groups[i].Description)
                .replace(/\[\[Id\]\]/g, groups[i].Id);
    }
}
function BindBookList() {
    GetElement("divListBook").innerHTML = "";
    var txtSearch = GetElement("_txtBookSearch").value;
    if (txtSearch != "") {
        var books = BookFilter(txtSearch);
    }
    else if (txtSearch == "") {
        var books = GetBooks();
    }
    if (books == "" || books == false) {
        return false;
    }
    for (var i = 0; i < books.length; i++) {
        if (books[i].erae == "1") {
            books[i].erae = "دانلود پی دی اف";
        }
        if (books[i].erae == "2") {
            books[i].erae = "امانت";
        }
        if (books[i].status == "0") {
            books[i].status = " امانت نیست";
        }
        if (books[i].status == "1") {
            books[i].status = " امانت است";
        }
        GetElement("divListBook").innerHTML +=
            BooksItem
                .replace("[[Name]]", books[i].Name)
                .replace("[[Writer]]", books[i].Writer)
                .replace("[[PrintYear]]", books[i].PrintYear)
                .replace("[[publisher]]", books[i].publisher)
                .replace("[[published]]", books[i].published)
                .replace("[[Category]]", GetGroupNameById(books[i].Category))
                .replace("[[erae]]", books[i].erae)
                .replace("[[status]]", books[i].status)
                .replace(/\[\[Id\]\]/g, books[i].Id);
    }
}
function BindUserList() {
    GetElement("divListUser").innerHTML = "";
    var txtSearch = GetElement("_txtUserSearch").value;
    if (txtSearch != "") {
        var users = UserFilter(txtSearch);
    }
    if (txtSearch == "") {
        var users = GetUsers();
    }
    if (users == "" || users == false) {
        return false;
    }
    for (var i = 0; i < users.length; i++) {

        GetElement("divListUser").innerHTML +=
            UsersItem
                .replace("[[UserName]]", users[i].UserName)
                .replace("[[Password]]", users[i].Password)
                .replace("[[FirstName]]", users[i].FirstName)
                .replace("[[LastName]]", users[i].LastName)
                .replace("[[NationalCode]]", users[i].NationalCode)
                .replace("[[FatherName]]", users[i].FatherName)
                .replace("[[PhoneNumber]]", users[i].PhoneNumber)
                .replace("[[Email]]", users[i].Email)
                .replace("[[SiteUrl]]", users[i].SiteUrl)
                .replace("[[Address]]", users[i].Address)
                .replace("[[SubmitDateTime]]", users[i].SubmitDateTime)
                .replace(/\[\[Id\]\]/g, users[i].Id);
    }
}
function BindNewsList() {
    GetElement("divListNews").innerHTML += "";
    var news = GetNews();
    for (var i = (news.length) - 1; i >= (news.length) - 3; i--) {
        GetElement("divListNews").innerHTML +=
            NewsUserItem
                .replace("[[Image]]", news[i].ImageNews)
                .replace("[[Name]]", news[i].TitleNews)
                .replace("[[Description]]", news[i].DesNews)
                .replace(/\[\[Id\]\]/g, news[i].Id);
    }
}
function BindNewsAdminList() {
    GetElement("divListNews").innerHTML = "";
    var txtSearch = GetElement("_txtNewsSearch").value;
    if (txtSearch != "") {
        var news = NewsFilter(txtSearch);
    }
    if (txtSearch == "") {
        var news = GetNews();
    }
    if (news == "" || news == false) {
        return false;
    }

    for (var i = 0; i < news.length; i++) {
        GetElement("divListNews").innerHTML +=
            NewsAdminItem
                .replace("[[Name]]", news[i].TitleNews)
                .replace("[[Description]]", news[i].DesNews)
                .replace(/\[\[Id\]\]/g, news[i].Id);
    }
}
function BindBookUserList() {
    GetElement("divListBookUser").innerHTML = "";
    var txtSearch = GetElement("_txtBookSearch").value;
    if (txtSearch != "") {
        var books = BookUserFilter(txtSearch);
    }
    if (txtSearch == "") {
        var books = GetBooks();
    }
    if (books == "" || books == false) {
        return false;
    }
    for (var i = 0; i < books.length; i++) {
        GetElement("divListBookUser").innerHTML +=
            BooksUserItem
                .replace("[[Image]]", books[i].image)
                .replace("[[Name]]", books[i].Name)
                .replace("[[Writer]]", books[i].Writer)
                .replace("[[PrintYear]]", books[i].PrintYear)
                .replace("[[publisher]]", books[i].publisher)
                .replace("[[published]]", books[i].published)
                .replace("[[Category]]", GetGroupNameById(books[i].Category))
                .replace(/\[\[Id\]\]/g, books[i].Id);
        if (books[i].erae == "1") {
            GetElement("amant" + books[i].Id).style.display = "none";
        }
        if (books[i].erae == "2") {
            GetElement("downloadPDF" + books[i].Id).style.display = "none";
        }
        if (books[i].status == "1") {
            GetElement("amant" + books[i].Id).style.display = "none";
            GetElement("textAmant" + books[i].Id).style.display = "block";
        }
        if (books[i].status == "0") {
            GetElement("amant" + books[i].Id).style.display = "block";
            GetElement("textAmant" + books[i].Id).style.display = "none";
        }
    }
}
function BindLoanList() {
    GetElement("divListLoan").innerHTML = "";
    var txtSearch = GetElement("_txtLoanSearch").value;
    if (txtSearch != "") {
        var loans = LoanFilter(txtSearch);
    }
    if (txtSearch == "") {
        var loans = GetLoan();
    }
    if (loans == "" || loans == false) {
        return false;
    }
    for (var i = 0; i < loans.length; i++) {
        GetElement("divListLoan").innerHTML +=
            LoanItem
                .replace("[[Name]]", loans[i].Name)
                .replace("[[UserName]]", loans[i].UserName)
                .replace("[[SubmitDateAmant]]", loans[i].SubmitDateAmant)
                .replace(/\[\[Id\]\]/g, loans[i].Id);
    }
}



