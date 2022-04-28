import React, {useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
  Dimensions
} from "react-native";
import {
  FontAwesome,
  MaterialCommunityIcons,
  SimpleLineIcons
} from "@expo/vector-icons";

 const { width, height } = Dimensions.get("window");

// Lance Davis: Minnets are posts, for now, they are photo with audio
interface Minnet {
  id: number;
  username: string;
  category: string;
  audio: string;
  image: string;
  gems: number;
}

interface Props {
  play: boolean;
  minnet: Minnet;
}

const Feed = ({ play, minnet }) => {
  const [gemColor, setGemColor] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
          <View style={styles.profileImage} />
          <Text style={styles.infoText}>{minnet.username}</Text>
        </View>
        <MaterialCommunityIcons name="dots-vertical" size={26} color="gray" />
      </View>

      <Image style={styles.image} source={{ uri: minnet.image}} />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 12,
        }}
      >
        <TouchableOpacity onPress={() => setGemColor(!gemColor)}>
          <FontAwesome name="diamond" size={32} color={gemColor ? "green" : "grey"} />
        </TouchableOpacity>
      </View>
      <Text style={styles.infoText}>
        {minnet.gems + (minnet.gems !== 1 ? " gems" : " gem")}
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    opacity: 0.99,
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

export default Feed;