import { StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
  Button,
  Pressable,
  Modal, } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
// import DATA from '../constants/Data';
// import MyRenderItem from '../constants/NFTItem';

const NFTItem = ({ owner, uri, description }) => (
  <View style={styles.item}>
    <View
      style={[
        styles.panellayout2,
        {
          flexDirection: "row",
        },
      ]}
    >
      <View style={[styles.imageLayout]}>
        <Pressable
          onPress={() => {
            this.setModalVisible(true);
            console.log("Pressed!!");
          }}
        >
          <Image style={styles.logo} source={{ uri: uri }} />
        </Pressable>
      </View>
      <View style={[styles.textLayout]}>
        <Text style={styles.title}>{owner}</Text>
        <Text style={styles.descrip}>{description}</Text>
        <Button
          color="#13734e"
          title="Make an Offer"
          onPress={() => {
            console.log("Made an offer!");
          }}
        />
        <Button
          color="#8ab6e1"
          title="View on Block Explorer"
          onPress={() => {
            console.log("Open link to a scan");
          }}
        />
      </View>
    </View>
  </View>
);

// Render item
const MyRenderItem = ({ item }) => {
  return (
    <NFTItem
      owner={item.owner}
      uri={item.uri}
      description={item.description}
    />
  );
};

export default function ViewNFTScreen({ navigation, route }: RootTabScreenProps<'ViewNFTScreen'>) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>This is {route.params.name}'s collection</Text>
        <FlatList
          data={DATA}
          renderItem={MyRenderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>

  );
};

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    owner: "bigguy.eth",
    uri: "https://reactnative.dev/img/tiny_logo.png",
    description: "This is a nifty bigguy.eth bought from doss.eth",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-32d53abb28ba",
    owner: "bigguy.eth",
    uri:
      "https://img.search.brave.com/MSwoa7pJZ-0ySiyW3WHpYbbc5tnVsKGalzg1XzPPNPk/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5I/dENMbnlCVDNmRGVW/UXZrSGhJOW53SGFI/YSZwaWQ9QXBp",
    description: "This is a nifty bigguy.eth bought from GalaXY",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53acb28ba",
    owner: "bigguy.eth",
    uri:
      "https://lh3.googleusercontent.com/YNnAjQrCs8YeRqr4R0_rXYx98ShyPpE9DYR7IkgVIMYuMokfOyjMWMqKWmlSHjuQq8LbFckXebIN67qNW4uGzwh4_5Ux18ruHwQK=w316",
    description: "This is a nifty bigguy.eth bought from lancendavis.eth",
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#231f20',
  },
  descrip: {
    fontSize: 10,
    fontWeight: '300',
  },
  // imageLayout: {
  //   flex: 3,
  // },
  item: {
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 10,
  },
  logo: {
    width: 100,
    height: 100,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  // textLayout: {
  //   flex: 5,
  // },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
