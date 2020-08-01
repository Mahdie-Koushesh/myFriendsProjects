using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace aspa.Functions
{
    public partial class AjRequests : System.Web.UI.Page
    {
        internal static readonly object QueryString;

        protected void Page_Load(object sender, EventArgs e)
        {
           
            var type = Request.Form["type"];
            if (type == null)
            {
                GetAttack();
                return;
            }
            string res = "";
            switch (type)
            {
                case "1":
                    res = new DbVariablesFunctions().Add_Group();
                    break;
                case "2":
                    res = new DbVariablesFunctions().Add_Book();
                    break;
                case "3":
                    res = new DbVariablesFunctions().Sign_Up();
                    break;
                default:
                    break;
            }
            ReturnData(res);

        }
        public void ReturnData(string data)
        {
            
            Response.Clear();
            Response.Write(data);
            Response.End();
        }
        public void GetAttack()
        {
            //Do ....
            ReturnData("");
        }
    }
}