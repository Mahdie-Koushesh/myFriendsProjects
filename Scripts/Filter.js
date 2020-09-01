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
