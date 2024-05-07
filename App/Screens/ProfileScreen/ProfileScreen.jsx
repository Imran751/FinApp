import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useClerk } from "@clerk/clerk-expo";

const ProfileScreen = () => {
  const { user } = useClerk();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      {user ? (
        <>
          <Image source={{ uri: user?.imageUrl }} style={styles.image} />
          <Text style={styles.name}>{user?.fullName}</Text>
          <Text style={styles.email}>{user?.email}</Text>
          <Text style={styles.joinDate}>
            Joined on:{" "}
            {user.createdAt ? new Date(user.createdAt).toDateString() : "N/A"}
          </Text>
          <Text style={styles.username}>Username: {user?.username}</Text>
          <Text style={styles.phone}>Phone: {user?.phoneNumber || "N/A"}</Text>
          <Text style={styles.address}>
            Address: {user?.address?.line1}, {user?.address?.city},{" "}
            {user?.address?.state} {user?.address?.postalCode}
          </Text>
        </>
      ) : (
        <Text style={styles.errorText}>User data not available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    marginBottom: 10,
  },
  joinDate: {
    fontSize: 16,
    marginBottom: 10,
  },
  username: {
    fontSize: 16,
    marginBottom: 10,
  },
  phone: {
    fontSize: 16,
    marginBottom: 10,
  },
  address: {
    fontSize: 16,
    marginBottom: 10,
  },
  errorText: {
    fontSize: 16,
    color: "red",
  },
});

export default ProfileScreen;
