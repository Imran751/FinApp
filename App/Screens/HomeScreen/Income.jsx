import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

const Income = () => {
  const [incomeEntries, setIncomeEntries] = useState([]); // State to store income entries
  const [newEntry, setNewEntry] = useState({ source: "", amount: "" }); // State to store the new income entry
  const [editingIndex, setEditingIndex] = useState(null); // State to store the index of the entry being edited
  const [note, setNote] = useState(""); // State to store the user's note

  // Function to handle input change for new income entry
  const handleNewEntryChange = (value, field) => {
    setNewEntry({ ...newEntry, [field]: value });
  };

  // Function to handle adding a new income entry
  const handleAddEntry = () => {
    if (newEntry.source.trim() !== "" && newEntry.amount.trim() !== "") {
      setIncomeEntries([...incomeEntries, newEntry]);
      setNewEntry({ source: "", amount: "" });
    }
  };

  // Function to handle editing an income entry
  const handleEditEntry = (index) => {
    setEditingIndex(index);
    setNewEntry(incomeEntries[index]);
  };

  // Function to handle saving edited entry
  const handleSaveEdit = () => {
    const updatedEntries = [...incomeEntries];
    updatedEntries[editingIndex] = newEntry;
    setIncomeEntries(updatedEntries);
    setNewEntry({ source: "", amount: "" });
    setEditingIndex(null);
  };

  // Function to handle deleting an income entry
  const handleDeleteEntry = (index) => {
    const updatedEntries = [...incomeEntries];
    updatedEntries.splice(index, 1);
    setIncomeEntries(updatedEntries);
  };

  // Function to calculate the total income
  const getTotalIncome = () => {
    return incomeEntries.reduce(
      (total, entry) => total + parseFloat(entry.amount.replace("$", "")),
      0
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Income</Text>
      <TextInput
        style={styles.noteInput}
        placeholder="Write something..."
        value={note}
        onChangeText={setNote}
        multiline
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Source"
          value={newEntry.source}
          onChangeText={(value) => handleNewEntryChange(value, "source")}
        />
        <TextInput
          style={styles.input}
          placeholder="Amount"
          keyboardType="numeric"
          value={newEntry.amount}
          onChangeText={(value) => handleNewEntryChange(value, "amount")}
        />
        {editingIndex !== null ? (
          <Button title="Save Edit" onPress={handleSaveEdit} color="#007BFF" />
        ) : (
          <Button title="Add Entry" onPress={handleAddEntry} color="#28A745" />
        )}
      </View>
      <View style={styles.tableContainer}>
        <View style={styles.tableHeader}>
          <Text style={styles.columnHeader}>Source</Text>
          <Text style={styles.columnHeader}>Amount</Text>
          <Text style={styles.columnHeader}></Text>
        </View>
        <FlatList
          data={incomeEntries}
          renderItem={({ item, index }) => (
            <View style={styles.tableRow}>
              <Text style={styles.columnData}>{item.source}</Text>
              <Text style={styles.columnData}>{item.amount}</Text>
              <TouchableOpacity
                onPress={() => handleEditEntry(index)}
                style={styles.editButton}
              >
                <Text>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleDeleteEntry(index)}
                style={styles.deleteButton}
              >
                <Text>Delete</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <Text style={styles.total}>
        Total Income: ${getTotalIncome().toFixed(2)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFF",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#007BFF",
  },
  noteInput: {
    height: 30,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    textAlignVertical: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "#007BFF",
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  tableContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 20,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  columnHeader: {
    flex: 1,
    fontWeight: "bold",
    color: "#007BFF",
  },
  tableRow: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  columnData: {
    flex: 1,
  },
  editButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    marginRight: 10,
  },
  deleteButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  total: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    color: "#28A745",
  },
});

export default Income;
