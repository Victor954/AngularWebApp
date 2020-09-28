using System;
using System.Linq;
using System.Collections.Generic;
using WebModels;

namespace WebServices.ServicesInterface
{
    public interface IMainServices
    {
        List<MainModel> GetTestData();
    }
}
