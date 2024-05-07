import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const About = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../Assets/Images/1.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>Welcome to FinApp</Text>
      <Text style={styles.description}>
        FinApp is your ultimate financial companion designed to help you manage
        your finances effectively. Whether it's tracking expenses, setting
        budgets, or monitoring investments, FinApp has got you covered.
      </Text>
      <Text style={styles.description}>
        Our mission is to empower individuals to make informed financial
        decisions and achieve their financial goals.
      </Text>
      <Text style={styles.version}>Version 1.0.0</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "#007BFF",
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
    color: "#444",
  },
  version: {
    fontSize: 14,
    marginTop: 20,
    color: "#666",
  },
});

export default About;
