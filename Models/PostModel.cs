using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace AngularWebApp.Models.PostModel
{
    public class PostModel
    {
        public string Name {get;set;}
        public string Discription {get;set;}
    }
}