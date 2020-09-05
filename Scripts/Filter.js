function BookFilter(string) {
    var books = GetBooks();
    books = books.filter(c => c.Name.indexOf(string) > -1);
    if (books == "") {
        GetElement("divListBook").innerHTML = "نتیجه ای یافت نشد";
        return false;
    }
    return books;
}
function BookUserFilter(string) {
    var books = GetBooks();
    books = books.filter(c => c.Name.indexOf(string) > -1);
    if (books == "") {
        GetElement("divListBookUser").innerHTML = "نتیجه ای یافت نشد";
        return false;
    }
    return books;
}
function GroupFilter(string) {
    var groups = GetGroups();
    groups = groups.filter(c => c.Title.indexOf(string) > -1);
    if (groups == "") {
        GetElement("divListGroup").innerHTML = "نتیجه ای یافت نشد";
        return false;
    }
    return groups;
}
function UserFilter(string) {
    var users = GetUsers();
    users = users.filter(c => c.UserName.indexOf(string) > -1);
    if (users == "") {
        GetElement("divListUser").innerHTML = "نتیجه ای یافت نشد";
        return false;
    }
    return users;
}
function LoanFilter(string) {
    var loans = GetLoan();
    loans = loans.filter(c => c.Name.indexOf(string) > -1);
    if (loans == "") {
        GetElement("divListLoan").innerHTML = "نتیجه ای یافت نشد";
        return false;
    }
    return loans;
}
function NewsFilter(string) {
    var news = GetNews();
    news = news.filter(c => c.TitleNews.indexOf(string) > -1);
    if (news == "") {
        GetElement("divListNews").innerHTML = "نتیجه ای یافت نشد";
        return false;
    }
    return news;
}