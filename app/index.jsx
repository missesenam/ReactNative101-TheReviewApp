import {
  Button,
  StyleSheet,
  Text,
  View,
  Pressable,
  FlatList,
} from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { Link, useRouter } from "expo-router";
import { globalStyles } from "../styles/global";
import Card from "../shared/components/Card";
import { useState } from "react";

const index = () => {
  const router = useRouter();

  const [fontsLoaded] = Font.useFonts({
    "nunito-regular": require("../assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("../assets/fonts/Nunito-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
    },
    {
      title: "Gotta Catch Them All (again)",
      rating: 4,
      body: "lorem ipsum",
      key: "2",
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: "lorem ipsum",
      key: "3",
    },
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>
              router.push({
                pathname: "/ReviewDetails",
                params: item,
              })
            }
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </Pressable>
        )}
      />
      <Link href="/ReviewDetails" style={globalStyles.btn}>
        Go to the review
      </Link>
    </View>
  );
};

export default index;
