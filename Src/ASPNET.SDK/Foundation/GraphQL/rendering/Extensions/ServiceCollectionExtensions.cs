using DemoBank.Foundation.GraphQL.Rendering.Consumer;
using GraphQL.Client.Abstractions;
using GraphQL.Client.Http;
using GraphQL.Client.Serializer.Newtonsoft;
using Microsoft.Extensions.DependencyInjection;

namespace DemoBank.Foundation.GraphQL.Rendering.Extensions
{
    public static class ServiceCollectionExtensions
	{
        public static void AddFoundationGraphQL(this IServiceCollection serviceCollection, string graphQLURL)
        {
            serviceCollection.AddScoped<IGraphQLClient>(s => new GraphQLHttpClient(graphQLURL, new NewtonsoftJsonSerializer()));
            serviceCollection.AddScoped<GraphQLConsumer>();
        }
    }
}
