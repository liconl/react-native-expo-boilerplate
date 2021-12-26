import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const ChatMessage = () => {
  const didPressChat = () => {
    console.log("Clicked on chat message!");
  };

  return (
    <TouchableOpacity
      onPress={() => {
        didPressChat();
      }}
      style={styles.container}
    >
      <View style={styles.icon}>
        <Icon name="alert-circle-outline" size={36} color={"red"} />
      </View>

      <Text style={styles.textTitle}> You have a new chat request!</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    height: 100,
    width: "90%",
    marginHorizontal: "2%",
    borderColor: "rgba(128,128,128,0.5)",
    borderWidth: 1,
    borderRadius: 20,
    marginVertical: 10,
  },
  textTitle: {
    textAlign: "center",
  },
  icon: {
    position: "absolute",
    top: -10,
    right: -10,
    color: "red",
    backgroundColor: "#efefef",
    borderRadius: 50,
  },
});

export default ChatMessage;
