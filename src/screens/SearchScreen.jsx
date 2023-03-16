import React, { useState } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

import SearchBar from "../components/SearchBar";
import ResultsLists from "../components/ResultsList";
import useResults from "../hooks/useResults";

const SearchScreen = () => {

  const [term, setTerm] = useState("");
  const [search_api, results, errMsg] = useResults();

  const filterResultsByPrice = price => {
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => search_api(term)}
      />

      {errMsg ? <Text>{errMsg}</Text> : null}

      {/* <Text>We found {results.length} results.</Text> */}

      <ScrollView>
        <ResultsLists
          results={filterResultsByPrice("$")}
          title="Cost Effective"
        />
        <ResultsLists
          results={filterResultsByPrice("$$")}
          title="Bit Pricier"
        />
        <ResultsLists
          results={filterResultsByPrice("$$$")}
          title="Big Spender"
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;

