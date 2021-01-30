import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "../components/MealItem";

const MealList = (props) => {
  const renderMealItem = (data) => {
    return (
      <MealItem
        itemData={data.item}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
            params: { mealId: data.item.id, mealTitle: data.item.title },
          });
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={props.data}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={styles.recipesList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  recipesList: {
    width: "100%",
  },
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
  },
});

export default MealList;
