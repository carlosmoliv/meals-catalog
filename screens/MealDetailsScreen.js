import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import DefaultText from "../components/defaultText";
import Colors from "../constants/Colors";
import { toggleFavorite } from "../store/actions/meals";

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const MealDetailsScreen = (props) => {
  const availableMeals = useSelector((state) => state.meals.meals);
  const mealId = props.navigation.getParam("mealId");

  const meal = availableMeals.find((meal) => meal.id === mealId);

  const currentMealIsFavorite = useSelector(
    (state) => state.meals.favoriteMeals
  );

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  useEffect(() => {
    props.navigation.setParams({ isFav: currentMealIsFavorite });
  }, [currentMealIsFavorite]);

  return (
    <ScrollView>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <View style={{ ...styles.details }}>
        <DefaultText style={styles.detailText}>{meal.duration}m</DefaultText>
        <DefaultText style={styles.detailText}>
          {meal.complexity.toUpperCase()}
        </DefaultText>
        <DefaultText style={styles.detailText}>
          {meal.affordability.toUpperCase()}
        </DefaultText>
      </View>

      <Text style={styles.title}>Ingredients</Text>
      {meal.ingredients.map((ing) => {
        return <ListItem key={ing}>{ing}</ListItem>;
      })}

      <Text style={styles.title}>Steps</Text>
      {meal.steps.map((step) => {
        return <ListItem key={step}>{step}</ListItem>;
      })}
    </ScrollView>
  );
};

MealDetailsScreen.navigationOptions = (navigationData) => {
  const mealTitle = navigationData.navigation.getParam("mealTitle");
  const toggleFavorite = navigationData.navigation.getParam("toggleFav");
  const isFavorite = navigationData.navigation.getParam("isFav");

  return {
    headerTitle: mealTitle,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorite"
          iconName={isFavorite ? "ios-star" : "ios-star-outline"}
          onPress={toggleFavorite}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: Colors.accentColor,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 22,
    fontFamily: "open-sans-bold",
    textAlign: "center",
    marginVertical: 8,
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
  detailText: { fontFamily: "open-sans-bold" },
});

export default MealDetailsScreen;
