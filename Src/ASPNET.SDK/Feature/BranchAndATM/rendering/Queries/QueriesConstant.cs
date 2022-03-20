using System;
using System.Collections.Generic;
using System.Text;

namespace DemoBank.Feature.BranchAndATM.Rendering.Queries
{
    public static class QueriesConstant
    {
        public static string BranchAndATMTypeQuery = @"query DemobankBranchSearch($language: String!, $rootItem: String!, $pageSize: Int, $cursorValueToGetItemsAfter: String!, $facetOn: [String!], $fieldsEqual: [ItemSearchFieldQuery], $query: String) {
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
                ";
    }
}
