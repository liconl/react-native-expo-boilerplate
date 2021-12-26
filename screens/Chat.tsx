import { View, StyleSheet, FlatList } from "react-native";
import { ChatMessage } from "../components";

const Chat = () => {
  const tempData = [...Array(10).keys()];
  return (
    <View style={styles.container}>
      <FlatList
        renderItem={ChatMessage}
        keyExtractor={(item, index) => "key" + item}
        data={tempData}
        style={styles.flatlistContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  flatlistContainer: {
    width: "100%",
    marginLeft: "5%",
    marginTop: "10%",
  },
});

export default Chat;
