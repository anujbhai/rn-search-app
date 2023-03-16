import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const ResultsShowScreen = props => {
  const {route} = props;

  const [result, setResult] = useState();

  const {id} = route.params;


  console.log(id);

  return (
    <View>
      <Text>Results show.</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ResultsShowScreen;

