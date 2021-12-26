import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface IProps {
  getAuthKey: Function;
}

const Auth = ({ getAuthKey }: IProps) => {
  const storeData = async (value: string) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@AUTH_KEY", jsonValue);
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Auth</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          // Updating the AuthKey to success
          // Moves the screens to app
          storeData("SUCCESS");
        }}
      >
        <Text style={styles.buttonText}>This loads tab</Text>
      </TouchableOpacity>
      <Text>Auth</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          storeData("FAILURE");
          // Failure on authentication
          // Create an error handler
        }}
      >
        <Text style={styles.buttonText}>This loads auth</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    width: "90%",
    backgroundColor: "lightblue",
    color: "white",
  },
  buttonText: {
    textAlign: "center",
  },
});

export default Auth;
