function ConfigDefineBook()
{
    var groups = JSON.parse(AjaxCallGet("../Json/variable/ProductType.json"));
    BindDropDownLists("group", groups.map(a => a.Title), groups.map(a => a.Id));
}
