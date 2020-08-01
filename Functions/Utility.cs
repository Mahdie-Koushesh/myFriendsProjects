using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace aspa.functions
{
    public class Utility
    {
        public string CurrentAddress() { return "~/Json/variable"; }
        public string GetPostedValue(string str)
        {
            var item = HttpContext.Current.Request.Form[str];
            if (item == null)
            {
                return "";
            }
            return item;
        }

        public List<T> ReadJsonFile<T>(string jsonFilePath)
        {
            try
            {
                List<T> data;
                if (!File.Exists(jsonFilePath))
                {
                    File.Create(jsonFilePath);
                    File.WriteAllText(jsonFilePath, "[]");
                }
                // deserialize JSON directly from a file
                using (StreamReader file = File.OpenText(jsonFilePath))
                {
                    JsonSerializer serializer = new JsonSerializer();
                    data = (List<T>)serializer.Deserialize(file, typeof(List<T>));
                }

                if (data == null)
                {
                    return new List<T>();
                }

                return data.ToList();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }
        public void WriteJsonFile<T>(List<T> objectList, string jsonFilePath)
        {
            if (!File.Exists(jsonFilePath))
            {
                File.Create(jsonFilePath);
                File.WriteAllText(jsonFilePath, "[]");
            }
            using (StreamWriter file = File.CreateText(jsonFilePath))
            {
                JsonSerializer serializer = new JsonSerializer();
                serializer.Serialize(file, objectList);
            }
        }
    }
}
