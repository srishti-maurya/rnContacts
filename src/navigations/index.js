import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AuthNavigator from "./AuthNavigator";
import DrawerNavigator from "./DrawerNavigator";

const AppNavContainer = () => {
  const isLoggedin = true;
  return (
    <NavigationContainer>
      {isLoggedin ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavContainer;

const styles = StyleSheet.create({
  textHeader: {
    margin: 50,
  },
});
