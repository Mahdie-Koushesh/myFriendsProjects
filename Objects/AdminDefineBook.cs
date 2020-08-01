using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace aspa.Objects
{
    public class AdminDefineBook
    {
    }
    public class Group
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string SubmitDateTime { get; set; }
    }
    public class DefineBook
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Category { get; set; }
        public string Writer { get; set; }
        public string PrintYear { get; set; }
        //public string trnaslator { get; set; }
        public string publisher { get; set; }
        public string published { get; set; }
        //public string group { get; set; }
        public int Type { get; set; }
        public string erae { get; set; }
        public string status { get; set; }
        public string SubmitDateTime { get; set; }
        //public int SubmitterUserId { get; set; }
    }
    public class DefineUser
    {
        public string Id { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }
        public string SubmitDateTime { get; set; }

    }
}