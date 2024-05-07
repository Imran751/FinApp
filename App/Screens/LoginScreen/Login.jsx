import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../../hooks/useWarmUpBrowser";

WebBrowser.maybeCompleteAuthSession();

const Login = () => {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={require("../../Assets/Images/login.jpeg")}
        style={styles.loginImage}
      />
      <View style={styles.subContainer}>
        <Text
          style={{ fontSize: 27, color: Colors.WHITE, textAlign: "center" }}
        >
          Let's
          <Text style={{ fontWeight: "bold" }}>
            {" "}
            find great products to make{" "}
          </Text>
          happy memories.
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: Colors.WHITE,
            textAlign: "center",
            marginTop: 10,
          }}
        >
          Best App to find products that meet your exact requirements and saves
          time.
        </Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text
            style={{ fontSize: 17, color: Colors.PRIMARY, textAlign: "center" }}
          >
            Let's get stated...
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginImage: {
    width: 230,
    height: 450,
    marginTop: 70,
    borderWidth: 4,
    borderColor: Colors.BLACK,
    borderRadius: 15,
  },
  subContainer: {
    width: "100%",
    backgroundColor: Colors.PRIMARY,
    height: "70%",
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.WHITE,
    borderRadius: 99,
    marginTop: 20,
  },
});
