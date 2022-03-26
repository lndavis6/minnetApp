import { Text, View, TouchableOpacity, Button } from "react-native";
import { Camera } from "expo-camera";
import * as React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CameraScreen from "./CameraScreen";

export default class PostScreen extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button
          title="Take a picture"
          onPress={() => navigation.navigate("CameraScreen")}
        />
      </View>
    );
  }
}

