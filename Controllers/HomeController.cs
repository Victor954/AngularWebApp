using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using AngularWebApp.Models.PostModel;

namespace AngularWebApp.Controllers
{
    [Produces("application/json")]
    public class HomeController  : ControllerBase
    {
        private static readonly PostModel[] PostDataColletion = new[]
        {
            new PostModel
            {
                Name = "Name1",
                Discription = "Discription1"
            },
            new PostModel
            {
                Name = "Name2",
                Discription = "Discription2"
            },
        };

        [HttpGet]
        public IEnumerable<PostModel> GetDataPost()
        {
            return PostDataColletion;
        }
    }
}
