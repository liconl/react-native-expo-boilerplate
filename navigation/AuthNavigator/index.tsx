import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SignUp, SignIn, Home } from "../../screens";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  const signUp = () => <SignUp />;
  const signIn = () => <SignIn />;

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignUp" component={signUp} />
        <Stack.Screen name="SignIn" component={signIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigator;
