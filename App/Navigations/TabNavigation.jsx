import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import About from "../Screens/About/About";
import ProfileScreen from "../Screens/ProfileScreen/ProfileScreen";
import Income from "../Screens/HomeScreen/Income";
import Expenses from "../Screens/HomeScreen/Expenses";
import Budget from "../Screens/HomeScreen/Budget";
import Savings from "../Screens/HomeScreen/Savings";

import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const AboutStack = createStackNavigator();
const ProfileStack = createStackNavigator();

// const HomeStack = createStackNavigator({ headerShown: false });
// const AboutStack = createStackNavigator({ headerShown: false });
// const ProfileStack = createStackNavigator({ headerShown: false });

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <HomeStack.Screen
      name="Income"
      component={Income}
      options={{ headerShown: false }}
    />
    <HomeStack.Screen
      name="Expenses"
      component={Expenses}
      options={{ headerShown: false }}
    />
    <HomeStack.Screen
      name="Budget"
      component={Budget}
      options={{ headerShown: false }}
    />
    <HomeStack.Screen
      name="Savings"
      component={Savings}
      options={{ headerShown: false }}
    />
  </HomeStack.Navigator>
);

const AboutStackScreen = () => (
  <AboutStack.Navigator>
    <AboutStack.Screen
      name="About"
      component={About}
      options={{ headerShown: false }}
    />
  </AboutStack.Navigator>
);

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{ headerShown: false }}
    />
  </ProfileStack.Navigator>
);

export default function TabNavigation() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: { fontSize: 12, marginTop: -5 },
        activeTintColor: "#007bff",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutStackScreen}
        options={{
          tabBarLabel: "About",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bookmark" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user-circle" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
