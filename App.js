import { LogBox, StyleSheet, Text, View } from "react-native";
import React, { PureComponent } from "react";

import Entities from "./src/entities";
import { GameEngine } from "react-native-game-engine";
import { StatusBar } from "expo-status-bar";
import Systems from "./src/systems";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      running: true,
    };
    this.gameEngine = null;
    // LogBox.ignoreAllLogs(disable);
    console.disableYellowBox = true;
  }
  render() {
    return (
      <View style={styles.container}>
        <GameEngine
          ref={(ref) => {
            this.gameEngine = ref;
          }}
          style={styles.gameContainer}
          running={this.state.running}
          systems={Systems}
          entities={this.entities}
        >
          <StatusBar style="auto" />
        </GameEngine>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  gameContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
