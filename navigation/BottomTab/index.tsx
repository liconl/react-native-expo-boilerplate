import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Profile, Chat, Notifications } from "../../screens";
import AuthNavigator from "../AuthNavigator";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
const Tab = createMaterialBottomTabNavigator();

function BottomTab() {
  return (
    <NavigationContainer>
      <Tab.Navigator activeColor="white">
        <Tab.Screen
          name="Home"
          component={AuthNavigator}
          options={{
            tabBarLabel: "Home",
            tabBarColor: "#020d0e",
            tabBarIcon: ({ color }) => (
              <Icon name="ios-home" color={color} size={26} />
            ),
          }}
        />

        <Tab.Screen
          name="Chat"
          component={Chat}
          options={{
            tabBarLabel: "Chat",
            tabBarColor: "#780116",
            tabBarIcon: ({ color }) => (
              <Icon name="chatbox-outline" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            tabBarLabel: "Notifications",
            tabBarColor: "#31572c",
            tabBarIcon: ({ color }) => (
              <Icon name="notifications-outline" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "Profile",
            tabBarColor: "#001d3d",
            tabBarIcon: ({ color }) => (
              <Icon name="ios-person" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomTab;
