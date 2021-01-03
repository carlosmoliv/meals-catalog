import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import DefaultText from "./defaultText";

const MealItem = (props) => {
  // let TouchableComponent = TouchableOpacity;

  // if (Platform.OS === "android" && Platform.Version >= 21) {
  //   TouchableComponent = TouchableNativeFeedback;
  // }

  const { ...data } = props.itemData;

  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground
              source={{
                uri: data.imageUrl,
              }}
              style={styles.bgImage}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {data.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetails }}>
            <DefaultText>{data.duration}m</DefaultText>
            <DefaultText>{data.complexity.toUpperCase()}</DefaultText>
            <DefaultText>{data.affordability.toUpperCase()}</DefaultText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10,
  },
  mealRow: {
    flexDirection: "row",
  },
  mealHeader: {
    height: "85%",
  },
  mealDetails: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 20,
    color: "#fff",
    fontFamily: "open-sans-bold",
    textAlign: "center",
  },
});

export default MealItem;
