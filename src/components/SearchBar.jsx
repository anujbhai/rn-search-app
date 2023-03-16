import React from "react";
import {
  StyleSheet,
  TextInput,
  View
} from "react-native";
import {Feather} from "@expo/vector-icons";

const SearchBar= props => {
  const {term, onTermChange, onTermSubmit} = props;

  return (
    <View style={styles.background}>
      <Feather
        name="search"
        style={styles.iconStyles}
      />

      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        style={styles.inputStyles}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#DDDDDD",
    height: 50,
    borderRadius: 5,
    marginTop: 15,
    marginHorizontal: 15,
    flexDirection: "row",
  },
  inputStyles: {
    flex: 1,
    fontSize: 18,
  },
  iconStyles: {
    alignSelf: "center",
    fontSize: 35,
    marginHorizontal: 15,
  },
});

export default SearchBar;

