import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LOGIN, REGISTER } from "../constants/routeNames";
import Login from "../screens/Login";
import SignUp from "../screens/Register/index";

const AuthNavigator = () => {
  const AuthStack = createNativeStackNavigator();
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name={LOGIN} component={Login} />
      <AuthStack.Screen name={REGISTER} component={SignUp} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
