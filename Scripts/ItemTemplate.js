var GroupsItem =
    "<tbody id=\"tbody[[Id]]\" class=\"ListItems\">" +
    "<tr>" +
    "<td>[[Name]]</td>" +
    "<td>[[Description]]</td>" +
    "<td>" +
    "<input type=\"button\" id=\"_btnEdit[[Id]]\" class=\"btn btn-info btn-sm ml-2\" onclick=\'EditPageUrl(\"[[Id]]\")\' value=\"ویرایش\"/>" +
    "<input type=\"button\" class=\"btn btn-danger btn-sm\" onclick=\'DeleteGroup(\"[[Id]]\")\' value=\"حذف\" />" +
    "</td>" +
    "</tr>" +
    "</tbody>";
var BooksItem =
    "<tbody id=\"divListBook\" class=\"table border table-striped mt-5\">" +
    "<tr>" +
    "<td>[[Name]]</td>" +
    "<td>[[Writer]]</td>" +
    "<td>[[PrintYear]]</td>" +
    "<td>[[publisher]]</td>" +
    "<td>[[published]]</td>" +
    "<td>[[Category]]</td>" +
    "<td>[[erae]]</td>" +
    "<td>[[status]]</td>" +
    "<td>" +
    "<input type=\"button\" id=\"_btnEdit[[Id]]\" class=\"btn btn-info btn-sm ml-2\" onclick=\'EditPageUrl(\"[[Id]]\")\' value=\"ویرایش\"/>" +
    "<input type=\"button\" class=\"btn btn-danger btn-sm\" onclick=\'DeleteBook(\"[[Id]]\")\' value=\"حذف\" />" +
    "</td>" +
    "</tr>" +
    "</tbody>";
var UsersItem =
    "<tbody id=\"table[[Id]]\" class=\"ListItems\">" +
    "<tr>" +
    "<td>[[UserName]]</td >" +
    "<td>[[Password]]</td >" +
    "<td>[[FirstName]]</td >" +
    "<td>[[LastName]]</td >" +
    "<td>[[NationalCode]]</td >" +
    "<td>[[FatherName]]</td >" +
    "<td>[[PhoneNumber]]</td >" +
    "<td>[[Email]]</td >" +
    "<td>[[SiteUrl]]</td >" +
    "<td>[[Address]]</td >" +
    "<td>[[SubmitDateTime]]</td >" +
    "<td>" +
    "<input type=\"button\" class=\"btn btn-danger btn-sm\" onclick=\'DeleteUser(\"[[Id]]\")\' value=\"حذف\" />" +
    "</td>" +
    "</tbody>";
var BooksUserItem =
    "<div class=\"col-3 my-2\">" +
    "<div class=\"card \" >" +
    "<div id=\"div[[Id]]\" class=\"ListItems card-body \"  style=\"width: 18rem\">" +
    "<img class=\"card-img-top\" src=\"[[Image]]\"></img>" +
    "<h4 class=\"card-title text-center\">[[Name]]</h4>" +
    "<p class=\"card-text\">[[Writer]]</p>" +
    "<p class=\"card-text\">[[PrintYear]]</p>" +
    "<p class=\"card-text\">[[publisher]]</p>" +
    "<p class=\"card-text\">[[published]]</p>" +
    "<p class=\"card-text\">[[Category]]</p>" +
    "<input type=\"button\" class=\"btn btn-info\" onclick=\"SaveAmanat([[Id]])\"   id=\"amant[[Id]]\" value=\"امانت\" />" +
    "<input type=\"button\" class=\"btn btn-success\" id=\"downloadPDF[[Id]]\"  value=\"دانلود PDF\" />" +
    "<p class=\"card-text\" id=\"textAmant[[Id]]\" style=\"display:none\">کتاب رزرو شده است</p>" +
    "</div>" +
    "</div>" +
    "</div>";
var NewsUserItem =
    "<div class=\"col-3 my-2\">" +
    "<div class=\"card \" >" +
    "<div id=\"div[[Id]]\" class=\"ListItems card-body \"  style=\"width: 18rem\">" +
    "<img class=\"card-img-top\" src=\"[[Image]]\"></img>" +
    "<h4 class=\"card-title text-center\">[[Name]]</h4>" +
    "<p class=\"card-text\">[[Description]]</p>" +
    "</div>" +
    "</div>" +
    "</div>";
var NewsAdminItem =
    "<tbody id=\"tbody[[Id]]\" class=\"ListItems\">" +
    "<tr>" +
    "<td>[[Name]]</td>" +
    "<td>[[Description]]</td>" +
    "<td>" +
    "<input type=\"button\" id=\"_btnEdit[[Id]]\" class=\"btn btn-info btn-sm ml-2\" onclick=\'EditPageUrl(\"[[Id]]\")\' value=\"ویرایش\"/>" +
    "<input type=\"button\" class=\"btn btn-danger btn-sm\" onclick=\'DeleteNews(\"[[Id]]\")\' value=\"حذف\" />" +
    "</td>" +
    "</tr>" +
    "</tbody>";
var LoanItem =
    "<tbody id=\"tbody[[Id]]\" class=\"ListItems\">" +
    "<tr>" +
    "<td>[[Name]]</td>" +
    "<td>[[UserName]]</td>" +
    "<td>[[SubmitDateAmant]]</td>" +
    "<td>" +
    "<input type=\"button\" class=\"btn btn-info btn-sm\" onclick=\'DeleteNews(\"[[Id]]\")\' value=\"لغو رزرو\" />" +
    "</td>" +
    "</tr>" +
    "</tbody>";