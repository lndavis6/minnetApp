import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions
} from "react-native";
import {
  FontAwesome,
  MaterialCommunityIcons,
  SimpleLineIcons
} from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

export default class HomeScreen extends React.Component {

  createPost = (postInfo, index) => {
    const imageUri = "https://reactnative.dev/img/tiny_logo.png";
    const username = "herobrine";
    const numlikes = "38";

    return (
      <View>
        <View style={styles.infoContainer}>
          <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
            <View style={styles.profileImage} />
            <Text style={styles.infoText}>{username}</Text>
          </View>
          <MaterialCommunityIcons name="dots-vertical" size={26} color="gray" />
        </View>

        <Image style={styles.image} source={{ uri: imageUri }} />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 12
          }}
        >
          <TouchableOpacity>
            <FontAwesome name="heart-o" size={32} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={{ paddingHorizontal: 15 }}>
            <SimpleLineIcons name="bubble" size={28} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <SimpleLineIcons name="paper-plane" size={28} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={styles.infoText}>
          {numlikes + (numlikes !== 1 ? " likes" : " like")}
        </Text>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({ item, index }) => this.createPost(item, index)}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const DATA = [
  {
    id: "1",
    uri: "https://reactnative.dev/img/tiny_logo.png",
  },
  {
    id: "2",
    uri: "https://reactnative.dev/img/tiny_logo.png",
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center"
  },
  headerText: {
    textAlign: "center",
    flex: 1,
    fontFamily: "lobster_regular",
    fontSize: 22
  },
  inputWrapper: {
    marginTop: 20
  },
  profileImage: {
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: width * 0.4,
    borderWidth: 1
  },
  image: {
    width,
    height: width * 1.4
  },
  infoContainer: {
    flexDirection: "row",
    paddingHorizontal: 8,
    paddingVertical: 10,
    flex: 1,
    alignItems: "center"
  },
  infoText: {
    fontSize: 16,
    paddingLeft: 10,
    fontWeight: "bold"
  }
});