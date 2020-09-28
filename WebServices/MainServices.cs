using System;
using WebServices.ServicesInterface;
using WebModels;
using System.Collections.Generic;

namespace WebServices
{
    public class MainServices : IMainServices
    {
        public List<MainModel> GetTestData()
        {
            return new List<MainModel>() 
            { 
                new MainModel()
                {
                    Name = "Test1",
                    Discription = "Discription1"
                },
                 new MainModel()
                {
                    Name = "Test2",
                    Discription = "Discription2"
                }
            };

        }
    }
}
