﻿using System;
using Microsoft.Extensions.DependencyInjection;
using System.Net.Http;

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
		}
	}
}
