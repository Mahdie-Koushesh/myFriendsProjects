function ConfigDefineBook()
{
    var groups = JSON.parse(AjaxCallGet("../Json/variable/ProductType.json"));
    BindDropDownLists("type", groups.map(a => a.Title), groups.map(a => a.Id));
}
