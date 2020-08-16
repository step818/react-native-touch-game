import React, { PureComponent } from "react";
import { StyleSheet, View } from "react-native";
import { height, width } from "./src/utils/styleSheet";

import Entities from "./src/entities";
import FastImage from "react-native-fast-image";
import { GameEngine } from "react-native-game-engine";
import GameOver from "./src/components/GameOver";
import { StatusBar } from "expo-status-bar";
import Systems from "./src/systems";

const backgroundImage = require("./assets/nature.jpg");

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      running: true,
      score: 0,
    };
    this.gameEngine = null;
    // LogBox.ignoreAllLogs(disable);
    console.disableYellowBox = true;
  }
  onEvent = (e) => {
    if (e.type === "gameOver") {
      this.setState({
        running: false,
      });
    } else if (e.type === "score") {
      this.setState((prevState) => {
        return { score: prevState.score + 1 };
      });
    }
  };

  restart = () => {
    this.setState({ running: true, score: 0 });
    this.gameEngine.UNSAFE_componentWillUpdate(Entities());
  };

  render() {
    return (
      <View style={styles.container}>
        <FastImage style={styles.imageBackground} source={backgroundImage} />
        <GameEngine
          ref={(ref) => {
            this.gameEngine = ref;
          }}
          style={styles.gameContainer}
          running={state.running}
          systems={Systems}
          onEvent={this.onEvent}
          entities={Entities()}
        >
          <StatusBar hidden={true} />
        </GameEngine>
        {state.running ? (
          <Text style={styles.score}>{state.score}</Text>
        ) : (
          <GameOver score={state.score} restart={this.restart} />
        )}
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
  score: {
    color: "#ffffff",
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    top: 100,
    fontFamily: "crackman-regular",
  },
  imageBackground: {
    width: width,
    height: height,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  gameOverContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
