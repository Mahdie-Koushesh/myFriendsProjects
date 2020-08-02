function BindGroupList() {
    GetElement("divListGroup").innerHTML += "";
    var groups = GetGroups();
    for (var i = 0; i < groups.length; i++) {
        GetElement("divListGroup").innerHTML +=
            GroupsItem
            .replace("[[Name]]", groups[i].Title)
            .replace("[[Description]]", groups[i].Description)
            .replace(/\[\[Id\]\]/g, groups[i].Id);
    }
}