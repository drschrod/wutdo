/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";

import Swiper from "react-native-deck-swiper";

import {
  Button,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from "react-native";
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";

const Deck = () => {
  return (
    <Swiper
      cards={["Outside", "A Night In", "Movies/TV", "Games", "Create", "Learn"]}
      renderCard={(card) => {
        return (
          <View style={styles.card}>
            <Text style={styles.text}>{card}</Text>
          </View>
        );
      }}
      onSwiped={(cardIndex) => {
        console.log(cardIndex);
      }}
      onSwipedAll={() => {
        console.log("onSwipedAll");
      }}
      cardIndex={0}
      backgroundColor={"#4FD0E9"}
      stackSize={3}
    >
      <Button
        onPress={() => {
          console.log("oulala");
        }}
        title="Press me"
      >
        You can press me
      </Button>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    backgroundColor: "white",
  },
  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent",
  },
});

export default Deck;
