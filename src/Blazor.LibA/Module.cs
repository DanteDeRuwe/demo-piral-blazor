using System;
using Microsoft.Extensions.DependencyInjection;
using System.Net.Http;
using Blazor.LibA.Interfaces;
using Blazor.LibA.Services;

namespace Blazor.LibA
{
	public class Module
	{
		public static void Main()
		{
			// this entrypoint shold remain empty
		}

		public static void ConfigureServices(IServiceCollection services)
		{
			// configure dependency injection here
			services.AddScoped(sp => new HttpClient { BaseAddress = new Uri("https://v2.jokeapi.dev") });
			services.AddScoped<IMeaningOfLifeService, MeaningOfLifeService>();
		}
	}
}
