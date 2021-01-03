import React from "react";
import { StyleSheet, Switch, Text, View } from "react-native";

const CustomSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.title}</Text>
      <Switch onValueChange={props.onValueChange} value={props.value} />
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
  },
});

export default CustomSwitch;
