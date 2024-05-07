import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const Savings = () => {
  const [monthlySalary, setMonthlySalary] = useState(""); // State to store the user's monthly salary
  const [monthlyExpenses, setMonthlyExpenses] = useState(""); // State to store the user's monthly expenses
  const [monthlyInvestment, setMonthlyInvestment] = useState(""); // State to store the user's monthly investment
  const [totalSavings, setTotalSavings] = useState(0); // State to store the user's total savings

  // Function to handle calculating total savings
  const calculateTotalSavings = () => {
    const salary = parseFloat(monthlySalary) || 0;
    const expenses = parseFloat(monthlyExpenses) || 0;
    const investment = parseFloat(monthlyInvestment) || 0;
    const total = salary - expenses - investment;
    setTotalSavings(total);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Savings Calculator</Text>
      <View style={styles.inputGroup}>
        {/* <Text style={styles.label}>Monthly Salary:</Text> */}
        <TextInput
          style={styles.input}
          placeholder="Enter monthly salary"
          keyboardType="numeric"
          value={monthlySalary}
          onChangeText={setMonthlySalary}
        />
      </View>
      <View style={styles.inputGroup}>
        {/* <Text style={styles.label}>Monthly Expenses:</Text> */}
        <TextInput
          style={styles.input}
          placeholder="Enter monthly expenses"
          keyboardType="numeric"
          value={monthlyExpenses}
          onChangeText={setMonthlyExpenses}
        />
      </View>
      <View style={styles.inputGroup}>
        {/* <Text style={styles.label}>Monthly Investment:</Text> */}
        <TextInput
          style={styles.input}
          placeholder="Enter monthly investment"
          keyboardType="numeric"
          value={monthlyInvestment}
          onChangeText={setMonthlyInvestment}
        />
      </View>
      <Button title="Calculate Total Savings" onPress={calculateTotalSavings} />
      {totalSavings !== "" && (
        <Text style={styles.totalSavings}>
          Total Savings: ${totalSavings.toFixed(2)}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  totalSavings: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
});

export default Savings;
