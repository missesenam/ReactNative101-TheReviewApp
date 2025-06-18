import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { globalStyles, images } from "../styles/global";
import { useLocalSearchParams } from "expo-router";
import Card from "../shared/components/Card";

const ReviewDetails = () => {
  const { title, rating, body } = useLocalSearchParams();
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>{title}</Text>
        <Text>Rating: {rating}</Text>
        <View style={styles.rat}>
          <Text>{body}</Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
};

export default ReviewDetails;

const styles = StyleSheet.create({
  rat: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginTop: 10,
  },
});
