using System.Collections.Generic;
using Newtonsoft.Json;
using System;
using System.Linq;
using System.Web;
using System.Globalization;
using aspa.Objects;
using System.IO;
using aspa.functions;

//using System.Globalization;
namespace aspa.Functions
{
    public class DbVariablesFunctions
    {


        public string Add_Group()
        {
            try
            {
                var typeStr = new Utility().GetPostedValue("type");
                var titleStr = new Utility().GetPostedValue("title");
                var descriptionStr = new Utility().GetPostedValue("description");
                var id = new Utility().GetPostedValue("id");
                if (!int.TryParse(typeStr, out int type)) // تبدیل استرینگ به اینت 
                {
                    //GetAttack();
                    return "خطا در پردازش اطلاعات";
                }
                if (string.IsNullOrEmpty(titleStr))
                {
                    return "وارد کردن عنوان اجباری است";
                }
                var GroupAddress = HttpContext.Current.Server.MapPath("~/Json/variable/ProductType.json");//برای آدرس دادن جیسون 
                var GroupList = new Utility().ReadJsonFile<Group>(GroupAddress);
                Group item = new Group();
                if (id != "")//edit
                {
                    item = GroupList.SingleOrDefault(c => c.Id == id);//linq
                }
                item.Title = titleStr;
                item.Description = descriptionStr;
                item.SubmitDateTime = DateTime.Now.ToString();
                if (id == "")
                {
                    item.Id = DateTime.Now.Ticks.ToString();
                    GroupList.Add(item);
                }
                new Utility().WriteJsonFile(GroupList, GroupAddress);

                //if (ok)
                //{
                //    return "1";
                //}
                return item.Id;
            }
            catch(Exception EX)
            {
                var msg = EX.Message;
                return "خطا در برقراری ارتباط با سرور";
            }
        }
        public string Delete_Group()
        {
            try
            {
                var id = new Utility().GetPostedValue("id");
                var GroupAddress = HttpContext.Current.Server.MapPath("~/Json/variable/ProductType.json");
                var GroupList = new Utility().ReadJsonFile<Group>(GroupAddress);
                Group item = new Group();
                item = GroupList.SingleOrDefault(c => c.Id == id);
                GroupList.Remove(item);
                new Utility().WriteJsonFile(GroupList, GroupAddress);
                return "1";
            }
            catch
            {
                return "مشکل داره";
            }
        }
        public string Add_Book()
        {
            try
            {
                var typeStr = new Utility().GetPostedValue("type");
                var Title = new Utility().GetPostedValue("name");
                var writer = new Utility().GetPostedValue("writer");
                var printyear = new Utility().GetPostedValue("printyear");
                var published = new Utility().GetPostedValue("published");
                var translator = new Utility().GetPostedValue("translator");
                var publisher = new Utility().GetPostedValue("publisher");
                var Category = new Utility().GetPostedValue("group");
                var status = new Utility().GetPostedValue("status");
                var erae = new Utility().GetPostedValue("noeEraeKetab");
                var id = new Utility().GetPostedValue("id");
                var userName = new Utility().GetPostedValue("userName");
                //var submitDateAmanat = new Utility().GetPostedValue("submitDateAmanat");
                var image = HttpContext.Current.Request.Files["image"];

                if (!int.TryParse(typeStr, out int type)) // تبدیل استرینگ به اینت 
                {
                    //GetAttack();
                    return "خطا در پردازش اطلاعات";
                }
                if (string.IsNullOrEmpty(Title))
                {
                    return "وارد کردن نام کتاب اجباری است";
                }
                if (Category == "0")
                {
                    return "لطفا دسته بندی را انتخاب کنید";
                }
                if (string.IsNullOrEmpty(writer))
                {
                    return "وارد کردن نام نویسنده اجباری است";
                }
                if (string.IsNullOrEmpty(printyear))
                {
                    return "وارد کردن سال چاپ اجباری است";
                }
                if (string.IsNullOrEmpty(published))
                {
                    return "وارد کردن نوبت چاپ اجباری است";
                }
                if (string.IsNullOrEmpty(publisher))
                {
                    return "وارد کردن ناشر اجباری است";
                }
                if (string.IsNullOrEmpty(publisher))
                {
                    return "وارد کردن ناشر اجباری است";
                }
                if (string.IsNullOrEmpty(erae))
                {
                    return "انتخاب نوع ارائه کتاب اجباری است";
                }
                List<string> imageAddressList = new List<string>();
                if (image != null)
                {
                    var imagesAddress = "/Json/variable/images/Book/" + image.FileName.Replace(" ", "-");
                    image.SaveAs(HttpContext.Current.Server.MapPath("~/" + imagesAddress));
                    imageAddressList.Add(imagesAddress);
                }
                var BookAddress = HttpContext.Current.Server.MapPath("~/Json/variable/Book.json");//برای آدرس دادن جیسون 
                var BookList = new Utility().ReadJsonFile<DefineBook>(BookAddress);
                DefineBook item = new DefineBook();
                if (id != "")//edit
                {
                    item = BookList.SingleOrDefault(c => c.Id == id);//linq
                    item.SubmitDateAmant = DateTime.Now.ToString();
                }
                item.Name = Title;
                item.Writer = writer;
                item.Category = Category;
                item.publisher = publisher;
                item.published = published;
                item.erae = erae;
                item.status = status;
                item.image = imageAddressList;
                item.UserName = userName;
                //item.trnaslator = translator;
                item.PrintYear = printyear;
                item.SubmitDateTime = DateTime.Now.ToString();
                if (id == "")
                {
                    item.Id = DateTime.Now.Ticks.ToString();
                    BookList.Add(item);
                }
                new Utility().WriteJsonFile(BookList, BookAddress);

                //if (ok)
                //{
                //    return "1";
                //}
                return item.Id;
            }
            catch (Exception err)
            {
                return err.Message;
            }
        }
        public string Delete_Book()
        {
            try
            {
                var id = new Utility().GetPostedValue("id");
                var BookAddress = HttpContext.Current.Server.MapPath("~/Json/variable/Book.json");
                var BookList = new Utility().ReadJsonFile<DefineBook>(BookAddress);
                DefineBook item = new DefineBook();
                item = BookList.SingleOrDefault(c => c.Id == id);
                BookList.Remove(item);
                new Utility().WriteJsonFile(BookList, BookAddress);
                return "1";
            }
            catch
            {
                return "مشکل داره";
            }
        }
        public string Delete_User()
        {
            try
            {
                var id = new Utility().GetPostedValue("id");
                var UserAddress = HttpContext.Current.Server.MapPath("~/Json/variable/User.json");
                var UserList = new Utility().ReadJsonFile<DefineUser>(UserAddress);
                DefineUser item = new DefineUser();
                item = UserList.SingleOrDefault(c => c.Id == id);
                UserList.Remove(item);
                new Utility().WriteJsonFile(UserList, UserAddress);
                return "1";
            }
            catch
            {
                return "مشکل داره";
            }
        }
        public string Sign_Up()
        {
            try
            {
                var typeStr = new Utility().GetPostedValue("type");
                var userName = new Utility().GetPostedValue("userName");
                var password = new Utility().GetPostedValue("password");
                var confirmPassword = new Utility().GetPostedValue("confirmPassword");
                var firstName = new Utility().GetPostedValue("firstName");
                var lastName = new Utility().GetPostedValue("lastName");
                var nationalCode = new Utility().GetPostedValue("nationalCode");
                var fatherName = new Utility().GetPostedValue("fatherName");
                var phoneNumber = new Utility().GetPostedValue("phoneNumber");
                var email = new Utility().GetPostedValue("email");
                var website = new Utility().GetPostedValue("website");
                var address = new Utility().GetPostedValue("address");
                var id = new Utility().GetPostedValue("id");
                if (!int.TryParse(typeStr, out int type)) // تبدیل استرینگ به اینت 
                {
                    //GetAttack();
                    return "خطا در پردازش اطلاعات";
                }
                if (string.IsNullOrEmpty(userName))
                {
                    return "وارد کردن نام کاربری اجباری است";
                }
                if (string.IsNullOrEmpty(password))
                {
                    return "وارد کردن گذرواژه اجباری است";
                }
                if (string.IsNullOrEmpty(confirmPassword))
                {
                    return "وارد کردن  مجدد گذرواژه اجباری است";
                }
                if (string.IsNullOrEmpty(firstName))
                {
                    return "وارد کردن نام  اجباری است";
                }
                if (string.IsNullOrEmpty(lastName))
                {
                    return "وارد کردن نام خانوادگی اجباری است";
                }
                if (string.IsNullOrEmpty(nationalCode))
                {
                    return "وارد کردن  کدملی اجباری است";
                }
                if (string.IsNullOrEmpty(fatherName))
                {
                    return "وارد کردن  نام پدر اجباری است";
                }
                var UserAddress = HttpContext.Current.Server.MapPath("~/Json/variable/User.json");//برای آدرس دادن جیسون 
                var UserList = new Utility().ReadJsonFile<DefineUser>(UserAddress);
                DefineUser item = new DefineUser();

                if (id != "")//edit
                {
                    item = UserList.SingleOrDefault(c => c.Id == id);//linq
                }
                item.UserName = userName;
                item.Password = password;
                item.ConfirmPassword = confirmPassword;
                item.FirstName = firstName;
                item.LastName = lastName;
                item.NationalCode = nationalCode;
                item.FatherName = fatherName;
                item.PhoneNumber = phoneNumber;
                item.Email = email;
                item.SiteUrl = website;
                item.Address = address;
                item.SubmitDateTime = DateTime.Now.ToString();
                if (id == "")
                {
                    item.Id = DateTime.Now.Ticks.ToString();
                    UserList.Add(item);
                }
                new Utility().WriteJsonFile(UserList, UserAddress);
                return item.Id;
            }
            catch
            {
                return "خطا در برقراری ارتباط با سرور";

            }
        }
        public string Send_Msg()
        {
            try
            {
                var typeStr = new Utility().GetPostedValue("type");
                var nameStr = new Utility().GetPostedValue("name");
                var lastnameStr = new Utility().GetPostedValue("lastname");
                var phonenumberStr = new Utility().GetPostedValue("phonenumber");
                var emailStr = new Utility().GetPostedValue("email");
                var messageStr = new Utility().GetPostedValue("message");
                var id = new Utility().GetPostedValue("id");
                if (!int.TryParse(typeStr, out int type)) // تبدیل استرینگ به اینت 
                {
                    //GetAttack();
                    return "خطا در پردازش اطلاعات";
                }
                if (string.IsNullOrEmpty(nameStr))
                {
                    return "وارد کردن نام اجباری است";
                }
                var MessageAddress = HttpContext.Current.Server.MapPath("~/Json/variable/Message.json");//برای آدرس دادن جیسون 
                var MessageList = new Utility().ReadJsonFile<Message>(MessageAddress);
                Message item = new Message();
                if (id != "")//edit
                {
                    item = MessageList.SingleOrDefault(c => c.Id == id);//linq
                }
                item.Name = nameStr;
                item.LastName = lastnameStr;
                item.PhoneNumber = phonenumberStr;
                item.Email = emailStr;
                item.Text = messageStr;
                item.SubmitDateTime = DateTime.Now.ToString();
                if (id == "")
                {
                    item.Id = DateTime.Now.Ticks.ToString();
                    MessageList.Add(item);
                }
                new Utility().WriteJsonFile(MessageList, MessageAddress);

                //if (ok)
                //{
                //    return "1";
                //}
                return item.Id;
            }
            catch
            {
                return "خطا در برقراری ارتباط با سرور";
            }
        }
        //public string Finalize()
        //{
        //    try
        //    {
        //        var typeStr = new Utility().GetPostedValue("type");
        //        var firstName = new Utility().GetPostedValue("firstName");
        //        var lastName = new Utility().GetPostedValue("lastName");
        //        var nationalCode = new Utility().GetPostedValue("nationalCode");
        //        var fatherName = new Utility().GetPostedValue("fatherName");
        //        var phoneNumber = new Utility().GetPostedValue("phoneNumber");
        //        var email = new Utility().GetPostedValue("email");
        //        var website = new Utility().GetPostedValue("website");
        //        var address = new Utility().GetPostedValue("address");
        //        var id = new Utility().GetPostedValue("id");
        //        if (!int.TryParse(typeStr, out int type)) // تبدیل استرینگ به اینت 
        //        {
        //            //GetAttack();
        //            return "خطا در پردازش اطلاعات";
        //        }
        //        if (string.IsNullOrEmpty(firstName))
        //        {
        //            return "وارد کردن نام  اجباری است";
        //        }
        //        if (string.IsNullOrEmpty(lastName))
        //        {
        //            return "وارد کردن نام خانوادگی اجباری است";
        //        }
        //        if (string.IsNullOrEmpty(nationalCode))
        //        {
        //            return "وارد کردن  کدملی اجباری است";
        //        }
        //        if (string.IsNullOrEmpty(fatherName))
        //        {
        //            return "وارد کردن  نام پدر اجباری است";
        //        }
                
        //        var UserAddress = HttpContext.Current.Server.MapPath("~/Json/variable/User.json");//برای آدرس دادن جیسون 
        //        var UserList = new Utility().ReadJsonFile<DefineUser>(UserAddress);
        //        DefineUser item = new DefineUser();

        //        if (id != "")//edit
        //        {
        //            item = UserList.SingleOrDefault(c => c.Id == id);//linq
        //        }
        //        item.FirstName = firstName;
        //        item.LastName = lastName;
        //        item.NationalCode = nationalCode;
        //        item.FatherName = fatherName;
        //        item.PhoneNumber = phoneNumber;
        //        item.Email = email;
        //        item.SiteUrl = website;
        //        item.Address = address;
        //        item.SubmitDateTime = DateTime.Now.ToString();
        //        if (id == "")
        //        {
        //            item.Id = DateTime.Now.Ticks.ToString();
        //            UserList.Add(item);
        //        }
        //        new Utility().WriteJsonFile(UserList, UserAddress);
        //        return item.Id;
        //    }
        //    catch
        //    {
        //        return "خطا در برقراری ارتباط با سرور";

        //    }
        //}
        public string Add_News()
        {
            try
            {
                var typeStr = new Utility().GetPostedValue("type");
                var titleNewsStr = new Utility().GetPostedValue("titlenews");
                var descnewsStr = new Utility().GetPostedValue("descnews");
                var id = new Utility().GetPostedValue("id");
                var image = HttpContext.Current.Request.Files["image"];
                if (!int.TryParse(typeStr, out int type)) // تبدیل استرینگ به اینت 
                {
                    //GetAttack();
                    return "خطا در پردازش اطلاعات";
                }
                if (string.IsNullOrEmpty(titleNewsStr))
                {
                    return "وارد کردن عنوان خبر اجباری است";
                } 
                if (string.IsNullOrEmpty(descnewsStr))
                {
                    return "وارد کردن شرح خبر اجباری است";
                }
                List<string> imageAddressList = new List<string>();
                if (image != null)
                {
                    var imagesAddress = "/Json/variable/images/News/" + image.FileName.Replace(" ", "-");
                    image.SaveAs(HttpContext.Current.Server.MapPath("~/" + imagesAddress));
                    imageAddressList.Add(imagesAddress);
                }
                var NewsAddress = HttpContext.Current.Server.MapPath("~/Json/variable/News.json");//برای آدرس دادن جیسون 
                var NewsList = new Utility().ReadJsonFile<DefineNews>(NewsAddress);
                DefineNews item = new DefineNews();
                if (id != "")//edit
                {
                    item = NewsList.SingleOrDefault(c => c.Id == id);//linq
                }
                item.TitleNews = titleNewsStr;
                item.DesNews = descnewsStr;
                item.SubmitDateTime = DateTime.Now.ToString();
                item.ImageNews = imageAddressList;
                if (id == "")
                {
                    item.Id = DateTime.Now.Ticks.ToString();
                    NewsList.Add(item);
                }
                new Utility().WriteJsonFile(NewsList, NewsAddress);
                return item.Id;
            }
            catch
            {
                return "خطا در برقراری ارتباط با سرور";
            }
        }
        public string DeleteNews()
        {
            try
            {
                var id = new Utility().GetPostedValue("id");
                var NewsAddress = HttpContext.Current.Server.MapPath("~/Json/variable/News.json");
                var NewsList = new Utility().ReadJsonFile<Group>(NewsAddress);
                Group item = new Group();
                item = NewsList.SingleOrDefault(c => c.Id == id);
                NewsList.Remove(item);
                new Utility().WriteJsonFile(NewsList, NewsAddress);
                return "1";
            }
            catch
            {
                return "مشکل داره";
            }
        }
    }
}

