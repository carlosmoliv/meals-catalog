import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import DefaultText from "../components/defaultText";
import Colors from "../constants/Colors";

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const MealDetailsScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");

  const meal = MEALS.find((meal) => {
    return meal.id === mealId;
  });

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
