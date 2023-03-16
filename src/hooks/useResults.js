import { useEffect, useState } from "react";

import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errMsg, setErrMsg] = useState("");

  const search_api = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose"
        }
      });

      setResults(response.data.businesses);
    } catch(err) {
      setErrMsg("Due to some technical issue, we were not able to fetch the results for your request. Please contact your service provider.");
    }
  };

  useEffect(() => {
    search_api("pasta");
  }, []);

  return [search_api, results, errMsg];
}

