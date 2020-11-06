import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Icon from "@expo/vector-icons/Entypo";
import Posts from "./Posts";

const Home = ({ navigation }) => {
  const [popularSelected, setPopularSelected] = useState(true);
  const [recentSelected, setRecentSelected] = useState(false);
  const onPopularityPressed = () => {
    setRecentSelected(false);
    setPopularSelected(true);
  };
  const onRecentPressed = () => {
    setPopularSelected(false);
    setRecentSelected(true);
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.scrollViewContainer}
    >
      <View
        style={{
          height: 260,
          width: "100%",
          paddingHorizontal: 35,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            paddingTop: 40,
            alignItems: "center",
          }}
        >
          <View style={{ width: "50%" }}>
            <Image
              source={require("../images/Untitled.png")}
              style={styles.image}
            />
          </View>
          <View style={{ width: "50%", alignItems: "flex-end" }}>
            <Icon name="dots-two-vertical" size={22} style={styles.icon} />
          </View>
        </View>

        <Text style={styles.text}>Find Awesome Photos</Text>
        <View
          style={{
            flexDirection: "row",
            borderColor: "#9ca1a2",
            borderRadius: 20,
            borderWidth: 0.2,
            paddingVertical: 5,
            alignItems: "center",
          }}
        >
          <TextInput
            placeholder="search inispiration ..."
            placeholderTextColor="#9ca1a2"
            style={{
              paddingHorizontal: 20,
              fontSize: 11,
              width: "90%",
              color: "#9ca1a2",
            }}
          />
          <Icon name="magnifying-glass" size={15} color="#9ca1a2" />
        </View>
      </View>

      <View
        style={{
          backgroundColor: "#FFF",
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          height: 1000,
          paddingHorizontal: 35,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            paddingTop: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => onPopularityPressed()}
            style={{
              borderBottomColor: popularSelected ? "#044244" : "#FFF",
              borderBottomWidth: 4,
              paddingVertical: 6,
            }}
          >
            <Text
              style={{
                color: popularSelected ? "#044244" : "#9ca1a2",
              }}
            >
              MOST POPULAR
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => onRecentPressed()}
            style={{
              borderBottomColor: recentSelected ? "#044244" : "#FFF",
              borderBottomWidth: 4,
              paddingVertical: 6,
              marginLeft: 30,
            }}
          >
            <Text
              style={{
                color: recentSelected ? "#044244" : "#9ca1a2",
              }}
            >
              RECENT
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Posts
            goToDetails={() => navigation.navigate("Detail")}
            name="Max Bator"
            profile={require("../images/p1.jpg")}
            photo={require("../images/5.jpg")}
          />

          <View
            style={{
              height: 160,
              backgroundColor: "#3c636c",
              width: 20,
              marginLeft: 20,
              marginTop: 120,
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
            }}
          ></View>
        </View>

        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View
            style={{
              height: 160,
              backgroundColor: "#3c636c",
              width: 20,
              marginLeft: -40,
              marginRight: 20,
              marginTop: 120,
              borderTopRightRadius: 20,
              borderBottomRightRadius: 20,
            }}
          ></View>

          <Posts
            goToDetails={() => navigation.navigate("Detail")}
            name="Erka Berka"
            profile={require("../images/p2.jpg")}
            photo={require("../images/6.jpg")}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Posts
            goToDetails={() => navigation.navigate("Detail")}
            name="Max Bator"
            profile={require("../images/p1.jpg")}
            photo={require("../images/3.jpg")}
          />

          <View
            style={{
              height: 160,
              backgroundColor: "#3c636c",
              width: 20,
              marginLeft: 20,
              marginTop: 120,
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
            }}
          ></View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  scrollViewContainer: {
    height: "100%",
    backgroundColor: "#044244",
  },
  outerContainer: {},
  innerTopContainer: {},
  innerBottomContainer: {},
  image: {
    width: 20,
    height: 20,
  },
  icon: {
    color: "#d2d2d2",
  },
  text: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#FFF",
    paddingVertical: 25,
  },
});
