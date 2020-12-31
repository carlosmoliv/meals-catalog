import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import MealList from "../components/MealList";

const CategoryMealScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return <MealList data={displayedMeals} navigation={props.navigation} />;
};

CategoryMealScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find((el) => {
    return el.id === catId;
  });

  return {
    headerTitle: selectedCategory.title,
  };
};

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     margin: 15,
//   },
// });

export default CategoryMealScreen;
