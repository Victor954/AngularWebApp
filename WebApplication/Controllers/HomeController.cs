using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using AngularWebApp.Models.PostModel;
using WebServices.ServicesInterface;
using WebModels;

namespace AngularWebApp.Controllers
{
    [Produces("application/json")]
    public class HomeController  : ControllerBase
    {
        readonly IMainServices mainServices;
        public HomeController(IMainServices mainServices)
        {
            this.mainServices = mainServices;
        }

        [HttpGet]
        public IEnumerable<MainModel> GetDataPost()
        {
            return mainServices.GetTestData();
        }
    }
}
