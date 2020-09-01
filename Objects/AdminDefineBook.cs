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
        public string publisher { get; set; }
        public string published { get; set; }
        public string erae { get; set; }
        public string status { get; set; }
        public string SubmitDateAmant { get; set; }
        public string UserName { get; set; }
        public string SubmitDateTime { get; set; }
        public List<string> image { get; set; }
    }
    public class Message
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Text { get; set; }
        public string SubmitDateTime { get; set; }
    }
    public class DefineUser
    {
        public string Id { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string NationalCode { get; set; }
        public string FatherName { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string SiteUrl { get; set; }
        public string Address { get; set; }
        public string SubmitDateTime { get; set; }

    }

    public class DefineNews
    {
        public string Id { get; set; }
        public string TitleNews { get; set; }

        public string DesNews { get; set; }
        public string SubmitDateTime { get; set; }
        public List<string> ImageNews { get; set; }

    }
}