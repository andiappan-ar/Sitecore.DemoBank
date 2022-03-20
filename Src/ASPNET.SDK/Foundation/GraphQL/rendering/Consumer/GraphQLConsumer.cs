using GraphQL;
using GraphQL.Client.Abstractions;
using System.Threading.Tasks;

namespace DemoBank.Foundation.GraphQL.Rendering.Consumer
{
    public class GraphQLConsumer
    {
        private readonly IGraphQLClient _client;
        public GraphQLConsumer(IGraphQLClient client)
        {
            _client = client;
        }

        public async Task<T1> GetBranchAndATM<T1,T2>(string graphQuery, T2 variables)
        {
            var query = new GraphQLRequest
            {
                Query = graphQuery,
                Variables = variables
            };

            var response = await _client.SendQueryAsync<T1>(query);          
            return response.Data;
        }
    }
}
