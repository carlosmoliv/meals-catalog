import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailsScreen";
import Colors from "../constants/Colors";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import FavoritesScreen from "../screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
  },
  headerTintColor: Platform.OS === "android" ? "#fff" : "",
};

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: { headerTitle: "Meal Categories" },
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
  },
  { defaultNavigationOptions: defaultNavigationOptions }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: {
      screen: FavoritesScreen,
      navigationOptions: { headerTitle: "Your favorites" },
    },
    MealDetail: MealDetailScreen,
  },
  { defaultNavigationOptions: defaultNavigationOptions }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
    },
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentColor,
    },
  },
};

const TabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: "#fff",
        shifting: true,
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.accentColor,
        },
      });

export default createAppContainer(TabNavigator);
