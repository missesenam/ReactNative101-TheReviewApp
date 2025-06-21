import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";

const ReviewForm = () => {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", rating: "", body: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Review title"
              onChangeText={props.handleChange("title")}
              value={props.values.title}
            />

            <TextInput
              style={globalStyles.input}
              placeholder="Review body"
              onChangeText={props.handleChange("body")}
              value={props.values.body}
            />

            <TextInput
              style={globalStyles.input}
              placeholder="Rating (1-5)"
              onChangeText={props.handleChange("rating")}
              value={props.values.rating}
              keyboardType="numeric"
            />

            <Button
              title="submit"
              onPress={props.handleSubmit}
              color="maroon"
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default ReviewForm;

const styles = StyleSheet.create({});
