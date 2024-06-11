import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import DropDown from "./DropDown";
import { publishers, searchType } from "@/constants/lists";
import { ListItem } from "@/types";

const SearchBar = () => {
  const [publisher, setPublisher] = useState<ListItem | null>(null);
  const [type, setType] = useState<ListItem | null>(null);
  const [text, setText] = useState("");

  const handleSearch = () => {
    console.log({ publisher, type, text });
  };

  return (
    <View style={styles.mainContainer}>
      {!!publisher && !!type && text ? (
        <Text>{publisher?.label + " " + type?.value}</Text>
      ) : (
        <View style={styles.dropdownsContainer}>
          <DropDown label="Publisher" list={publishers} value={publisher} setValue={setPublisher} />
          <DropDown label="Type" list={searchType} value={type} setValue={setType} />
        </View>
      )}
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Search..."
        style={styles.container}
        onSubmitEditing={handleSearch}
        editable={!!publisher && !!type}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  mainContainer: {
    padding: 16,
  },
  container: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 16,
    marginBottom: 8,
    marginHorizontal: 4,
  },
  searchButton: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 16,
    marginBottom: 8,
    alignItems: "center",
  },
  dropdownsContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
