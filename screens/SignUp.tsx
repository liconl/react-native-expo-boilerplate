import { Text, View, StyleSheet } from "react-native";

// Create your sign up authentication logic here
// Do not store any confidential information on the client (including using async storage)
// After success you can create a new screen on Auth and navigate to that screen

const SignUp = () => {
  return (
    <View style={styles.container}>
      <Text>SignUp</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SignUp;
