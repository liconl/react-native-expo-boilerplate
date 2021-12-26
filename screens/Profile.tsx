import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/core";

const Profile = () => {
  const navigation = useNavigation();
  const storeData = async (value: string) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@AUTH_KEY", jsonValue);
    } catch (e) {
      console.warn(e);
    }
  };

  const didTapOnLogOut = () => {
    storeData("LOGOUT");
    navigation.navigate("Home" as never, {} as never);
  };

  return (
    <>
      <View style={styles.container}>
        <Text>Profile</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          console.log("Logging out...");
          // Dispatches log out to auth key and navigates to home
          didTapOnLogOut();
        }}
        style={styles.logoutContainer}
      >
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    position: "relative",
  },
  logoutContainer: {
    marginBottom: 10,
    position: "absolute",
    bottom: "0%",
    alignSelf: "center",
  },
  logoutText: {
    fontSize: 32,
    textAlign: "center",
    color: "grey",
  },
});

export default Profile;
