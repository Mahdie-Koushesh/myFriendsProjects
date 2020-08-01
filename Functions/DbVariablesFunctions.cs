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
            catch
            {
                return "خطا در برقراری ارتباط با سرور";
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
                if (!int.TryParse(typeStr, out int type)) // تبدیل استرینگ به اینت 
                {
                    //GetAttack();
                    return "خطا در پردازش اطلاعات";
                }
                if (string.IsNullOrEmpty(Title))
                {
                    return "وارد کردن نام کتاب اجباری است";
                }
                if (Category=="0")
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
                var BookAddress = HttpContext.Current.Server.MapPath("~/Json/variable/Book.json");//برای آدرس دادن جیسون 
                var BookList = new Utility().ReadJsonFile<DefineBook>(BookAddress);
                DefineBook item = new DefineBook();
                if (id != "")//edit
                {
                    item = BookList.SingleOrDefault(c => c.Id == id);//linq
                }
                item.Name = Title;
                item.Writer = writer;
                item.Category = Category;
                item.publisher = publisher;
                item.published = published;
                item.erae = erae;
                item.status = status;
                item.Type = type;
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
            catch(Exception err)
            {
                return err.Message;
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
    }
}
     
