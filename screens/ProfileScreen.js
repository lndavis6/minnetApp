import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  Button,
  Image,
  SafeAreaView,
} from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class ProfileScreen extends React.Component {
  constructor() {
    super();
  }

  renderItem = ({ item }) => {
    const imageUrl = "https://reactnative.dev/img/tiny_logo.png";

    return (
      <View style={styles.gridImgContainer}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{ uri: imageUrl }}
        />
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ padding: 20, flexDirection: "row" }}>
          <View style={styles.profileImage}>
            <Image
              resizeMode="cover"
              style={styles.profileImage}
              source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
            />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              padding: 5,
            }}
          >
            <View style={{ flexDirection: "row", flex: 1 }}>
              <View style={{ flex: 1, alignItems: "center" }}>
                <Text>38</Text>
                <Text>Posts</Text>
              </View>
              <View style={{ flex: 1, alignItems: "center" }}>
                <Text>338</Text>
                <Text>followers</Text>
              </View>
              <View style={{ flex: 1, alignItems: "center" }}>
                <Text>383</Text>
                <Text>following</Text>
              </View>
            </View>
            <View
              style={{
                borderWidth: 1,
                width: "100%",
                marginLeft: 1,
                alignItems: "center",
              }}
            >
              <Text>Edit Profile</Text>
            </View>
          </View>
        </View>
        <FlatList
          numColumns={3}
          data={DATA}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
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
    backgroundColor: '#fff',
  },
  gridImgContainer: {
    padding: 1,
    backgroundColor: "#fff",
  },
  image: {
    height: windowWidth * 0.33,
    width: windowWidth * 0.33,
  },
  profileImage: {
    width: windowWidth * 0.2,
    height: windowWidth * 0.2,
    borderRadius: windowWidth * 0.5,
    borderWidth: 1,
    marginRight: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  smallview: {
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
