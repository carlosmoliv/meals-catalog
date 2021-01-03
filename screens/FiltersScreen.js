import React, { useState, useCallback, useEffect } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const CustomSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.title}</Text>
      <Switch onValueChange={props.onValueChange} value={props.value} />
    </View>
  );
};

const FiltersScreen = (props) => {
  const { navigation } = props;

  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isLactose, setIsLactose] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
      lactose: isLactose,
    };

    console.log(appliedFilters);
  }, [isGlutenFree, isVegan, isVegetarian, isLactose]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters/Restriction</Text>

      <CustomSwitch
        onValueChange={(value) => setIsGlutenFree(value)}
        value={isGlutenFree}
        title="Gluten"
      />

      <CustomSwitch
        onValueChange={(value) => setIsVegan(value)}
        value={isVegan}
        title="Vegan"
      />

      <CustomSwitch
        onValueChange={(value) => setIsVegetarian(value)}
        value={isVegetarian}
        title="Vegetarian"
      />

      <CustomSwitch
        onValueChange={(value) => setIsLactose(value)}
        value={isLactose}
        title="Lactose"
      />

      {/* <MealList data={meals} navigation={props.navigation} /> */}
    </View>
  );
};

FiltersScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Filter Meals",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-save"
          onPress={navData.navigation.getParam("save")}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 10,
  },
});

export default FiltersScreen;
