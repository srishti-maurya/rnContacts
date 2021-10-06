import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  CONTACT_DETAIL,
  CONTACT_LIST,
  CREATE_CONTACT,
  SETTINGS,
} from "../constants/routeNames";
import Contacts from "../screens/Contacts";
import ContactDetails from "../screens/ContactDetails";
import CreateContact from "../screens/CreateContact";
import Setings from "../screens/Settings/index";

const HomeNavigator = () => {
  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
      <HomeStack.Screen name={CONTACT_LIST} component={Contacts} />
      <HomeStack.Screen name={CONTACT_DETAIL} component={ContactDetails} />
      <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact} />
      <HomeStack.Screen name={SETTINGS} component={Setings} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
