import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "react-native-gesture-handler";

const Tab = createBottomTabNavigator();

const Home = () => {
  const navigation = useNavigation();

  const handleIncomePress = () => {
    navigation.navigate("Income");
  };

  const handleExpensesPress = () => {
    navigation.navigate("Expenses");
  };

  const handleBudgetPress = () => {
    navigation.navigate("Budget");
  };

  const handleSavingsPress = () => {
    navigation.navigate("Savings");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Personal Finance</Text>
      </View>
      <View style={styles.content}>
        <TouchableOpacity style={styles.card} onPress={handleIncomePress}>
          <Image
            source={require("../../Assets/Images/1.png")}
            style={styles.cardIcon}
          />
          <Text style={styles.cardTitle}>Income</Text>
          <Text style={styles.cardSubtitle}>Track your earnings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={handleExpensesPress}>
          <Image
            source={require("../../Assets/Images/2.png")}
            style={styles.cardIcon}
          />
          <Text style={styles.cardTitle}>Expenses</Text>
          <Text style={styles.cardSubtitle}>Monitor your spending</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={handleBudgetPress}>
          <Image
            source={require("../../Assets/Images/3.png")}
            style={styles.cardIcon}
          />
          <Text style={styles.cardTitle}>Budget</Text>
          <Text style={styles.cardSubtitle}>Set financial goals</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={handleSavingsPress}>
          <Image
            source={require("../../Assets/Images/4.png")}
            style={styles.cardIcon}
          />
          <Text style={styles.cardTitle}>Savings</Text>
          <Text style={styles.cardSubtitle}>Manage your savings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 20,
  },
  header: {
    paddingTop: 50,
    paddingBottom: 20,
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    alignItems: "center",
    elevation: 3,
  },
  cardIcon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardSubtitle: {
    fontSize: 14,
    color: "#666",
  },
});

export default Home;
