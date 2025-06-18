// import { StyleSheet, Text, View } from "react-native";
// import React from "react";
// import { Slot, Stack } from "expo-router";

// const RootLayout = () => {
//   return (
//     <Stack
//       screenOptions={{
//         headerStyle: { backgroundColor: "orange" },
//         headerTintColor: "white",
//       }}
//     >
//       <Stack.Screen name="index" options={{ title: "Home" }} />
//       <Stack.Screen name="about" options={{ title: "About" }} />
//     </Stack>
//   );
// };

// export default RootLayout;

// const styles = StyleSheet.create({});

import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: "red" }}>
      <Drawer
      // screenOptions={{
      //   drawerIcon: () => (
      //     <Image
      //       source={require("../assets/heart_logo.png")}
      //       style={{ width: 20, height: 20 }}
      //     />
      //   ),
      // }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Home",
            title: "Review App",
          }}
        />
        <Drawer.Screen
          name="about"
          options={{
            drawerLabel: "About Us",
            title: "About Us",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
