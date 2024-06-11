import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { ListItem } from "@/types";

interface Props {
  label: string;
  list: ListItem[];
  value: ListItem | null;
  setValue: (newVal: ListItem) => void;
}

const DropDown = ({ label, list, value, setValue }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.label, { color: "blue" }]}>{label}</Text>
      <Dropdown
        style={[styles.dropdown, { borderColor: "blue" }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={list}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={"Select..."}
        value={value}
        onChange={(item) => {
          setValue(item);
        }}
      />
    </View>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 5,
    borderRadius: 16,
    marginBottom: 8,
    marginHorizontal: 4,
    flex: 1,
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 9,
    top: 1,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 10,
    borderRadius: 8,
  },
  placeholderStyle: {
    fontSize: 14,
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 14,
  },
});
