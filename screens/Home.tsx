import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";

const Home = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../assets/background.png")}
        />
        <View>
          <Text style={styles.titleText}>Seek Adventure </Text>
          <Text style={styles.subtitleText}>
            - designed by and for explorers
          </Text>
        </View>
      </View>
      <View style={styles.authContainer}>
        <TouchableOpacity
          onPress={() => {
            console.log("clicked on log in ");
            navigation.navigate("SignIn" as never, {} as never);
          }}
        >
          <View style={styles.loginContainer}>
            <Text style={styles.loginbuttonText}> Log In</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            console.log("pressed on signup");
            navigation.navigate("SignUp" as never, {} as never);
          }}
        >
          <View style={styles.signUpContainer}>
            <Text style={styles.signUpbuttonText}>Sign Up</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    position: "absolute",
    resizeMode: "cover",
    height: "100%",
    width: "100%",
  },
  titleText: {
    fontSize: 48,
    color: "white",
    fontWeight: "bold",
    textShadowColor: "black",
    textShadowRadius: 10,
    textAlign: "center",
  },
  subtitleText: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    textShadowColor: "black",
    textShadowRadius: 5,
    textAlign: "center",
  },
  authContainer: {
    alignSelf: "center",
    borderRadius: 20,
    width: "90%",
    height: "20%",
    position: "absolute",
    bottom: "0%",
  },
  buttonContainer: {
    width: "100%",
    height: 50,
    borderRadius: 40,
    justifyContent: "center",
    marginTop: 30,
  },
  loginContainer: {
    width: "98%",
    height: 50,
    borderRadius: 40,
    justifyContent: "center",
    marginTop: 30,
    backgroundColor: "transparent",
    borderColor: "white",
    borderWidth: 2,
  },
  signUpContainer: {
    width: "98%",
    height: 50,
    borderRadius: 40,
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 2,
  },
  loginbuttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
  },
  signUpbuttonText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
  },
});

export default Home;
