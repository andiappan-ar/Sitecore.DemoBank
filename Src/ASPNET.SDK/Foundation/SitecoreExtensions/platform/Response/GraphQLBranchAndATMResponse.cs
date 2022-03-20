using System;
using System.Collections.Generic;
using System.Text;

namespace DemoBank.Foundation.GraphQL.Rendering.Response
{


    public class GraphQLBranchAndATMVariables
    {
        public string language { get; set; }
        public string pageSize { get; set; }
        public string cursorValueToGetItemsAfter { get; set; }
        public string rootItem { get; set; }
        public Dictionary<string,string>[] fieldsEqual { get; set; }
    }

    // Root myDeserializedClass = JsonConvert.DeserializeObject<Root>(myJsonResponse);
    public class BAName
    {
        public string value { get; set; }
    }

    public class BALocation
    {
        public string value { get; set; }
    }

    public class BAStartTime
    {
        public string value { get; set; }
    }

    public class BAEndTime
    {
        public string value { get; set; }
    }

    public class BAFacilityType
    {
        public string value { get; set; }
    }

    public class Item2
    {
        public BAName bA_Name { get; set; }
        public BALocation bA_Location { get; set; }
        public BAStartTime bA_StartTime { get; set; }
        public BAEndTime bA_EndTime { get; set; }
        public string url { get; set; }
        public BAFacilityType bA_FacilityType { get; set; }
    }

    public class Item
    {
        public Item2 item { get; set; }
    }

    public class PageInfo
    {
        public string startCursor { get; set; }
        public string endCursor { get; set; }
        public bool hasNextPage { get; set; }
        public bool hasPreviousPage { get; set; }
    }

    public class Results
    {
        public List<Item> items { get; set; }
        public int totalCount { get; set; }
        public PageInfo pageInfo { get; set; }
    }

    public class Search
    {
        public Results results { get; set; }
    }

    public class GraphQLBranchAndATMResponse
    {
        public Search search { get; set; }
    }

    

}
