using DemoBank.Foundation.GraphQL.Rendering.Response;
using GraphQL;
using GraphQL.Client.Abstractions;
using System.Collections.Generic;
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

        public async Task<GraphQLBranchAndATMResponse> GetBranchAndATM(GraphQLBranchAndATMVariables variables)
        {
            var query = new GraphQLRequest
            {
                Query = @"query DemobankBranchSearch($language: String!, $rootItem: String!, $pageSize: Int, $cursorValueToGetItemsAfter: String!, $facetOn: [String!], $fieldsEqual: [ItemSearchFieldQuery], $query: String) {
                  search(rootItem: $rootItem, language: $language, latestVersion: true, first: $pageSize, after: $cursorValueToGetItemsAfter, fieldsEqual: $fieldsEqual, facetOn: $facetOn, keyword: $query) {
                    results {
                      items {
                        item {
                          ... on BranchAndATM {
                            bA_Name {
                              value
                            }
                            bA_Location {
                              value
                            }
                            bA_StartTime {
                              value
                            }
                            bA_EndTime {
                              value
                            }
                            url
                            bA_FacilityType {
                              value
                            }
                          }
                        }
                      }
                      totalCount
                      pageInfo {
                        startCursor
                        endCursor
                        hasNextPage
                        hasPreviousPage
                      }
                    }
                  }
                }
                ",
                Variables = variables
                
                //new GraphQLBranchAndATMVariables
                //{
                //    language = "en",
                //    rootItem = "/sitecore/content/DBank/Home/Settings/SourceList/BranchAndATM",
                //    pageSize = "1",
                //    cursorValueToGetItemsAfter = "0",
                //    fieldsEqual = new Dictionary<string, string>[]
                //    {
                //        new Dictionary<string, string>
                //        {
                //            { "name", "bA_FacilityType" } ,                          
                //            { "value", BA_FacilityType }                           
                //        }

                //    }
                //}

            };

            var response = await _client.SendQueryAsync<GraphQLBranchAndATMResponse>(query);          
            return response.Data;
        }
    }
}
