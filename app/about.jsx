import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../styles/global";

const About = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>About me screen</Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({});
