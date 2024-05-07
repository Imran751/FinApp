import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const Budget = () => {
  const [income, setIncome] = useState(""); // State to store the user's income
  const [expenses, setExpenses] = useState(""); // State to store the user's expenses
  const [savings, setSavings] = useState(""); // State to store the user's savings
  const [investments, setInvestments] = useState(""); // State to store the user's investments
  const [remainingBudget, setRemainingBudget] = useState(null); // State to store the remaining budget

  // Function to handle calculating the remaining budget
  const calculateRemainingBudget = () => {
    const totalExpenses = parseFloat(expenses) || 0;
    const totalSavings = parseFloat(savings) || 0;
    const totalInvestments = parseFloat(investments) || 0;
    const totalBudget = totalExpenses + totalSavings + totalInvestments;
    const remaining = parseFloat(income) - totalBudget;
    setRemainingBudget(remaining.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Budget Calculator</Text>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Income:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your income"
          keyboardType="numeric"
          value={income}
          onChangeText={setIncome}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Expenses:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your expenses"
          keyboardType="numeric"
          value={expenses}
          onChangeText={setExpenses}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Savings:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your savings"
          keyboardType="numeric"
          value={savings}
          onChangeText={setSavings}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Investments:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your investments"
          keyboardType="numeric"
          value={investments}
          onChangeText={setInvestments}
        />
      </View>
      <Button
        title="Calculate Remaining Budget"
        onPress={calculateRemainingBudget}
        color="#007BFF"
      />
      {remainingBudget !== null && (
        <Text style={styles.remainingBudget}>
          Remaining Budget: ${remainingBudget}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#007BFF",
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    color: "#007BFF",
  },
  input: {
    height: 40,
    borderColor: "#007BFF",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  remainingBudget: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
    color: "#28A745",
  },
});

export default Budget;
