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
import ViewPager from '@react-native-community/viewpager';
import server from '../../server.json';
import Feed from "./Feed";

const { width, height } = Dimensions.get("window");

export default class HomeScreen extends React.Component {

  // TODO: set to inactiveactive when tapped
  state = {active:true};

  render() {
    return (
      <View style={styles.container}>
        <ViewPager
        orientation="vertical"
        style={{ flex: 1 }}
        initialPage={0}
      >
        {server.feed.map(item => (
          <View key={item.id}>
            <Feed play={Number(item.id) === this.state.active} minnet={item}/>
          </View>
        ))}
      </ViewPager>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    opacity: .5
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