import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../styles/global";
import { useLocalSearchParams } from "expo-router";
import Card from "../shared/components/Card";

const ReviewDetails = () => {
  const { title, rating, body } = useLocalSearchParams();
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>{title}</Text>
        <Text>Rating: {rating}</Text>
        <Text>{body}</Text>
      </Card>
    </View>
  );
};

export default ReviewDetails;

const styles = StyleSheet.create({});
