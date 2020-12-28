import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";

const MealDetailsScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");

  const mealFounded = MEALS.find((meal) => {
    return meal.id === mealId;
  });

  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Text style={styles.title}>Categories</Text>
        <Text style={styles.tag}>test</Text>
      </View>
    </View>
  );
};

MealDetailsScreen.navigationOptions = (props) => {
  const mealFounded = MEALS.find((meal) => {
    return meal.id === props.navigation.getParam("mealId");
  });

  return {
    headerTitle: mealFounded.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => {
            console.log("Favorite working");
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  card: {
    elevation: 3,
    margin: 15,
    padding: 15,
    height: 250,
    backgroundColor: "#fafafa",
    borderRadius: 15,
  },
  title: {
    fontSize: 16,
    fontFamily: "open-sans-bold",
    borderBottomColor: "#cfd8dc",
    borderBottomWidth: 1,
  },
  tag: {
    width: 60,
    backgroundColor: "#ccc",
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default MealDetailsScreen;
