import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { PureComponent } from "react";
import { heightRatio, widthRatio } from "../utils/styleGuide";

import styleGuide from "../utils/styleGuide";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.animatedValue = new Animated.Value(0);
    this.animatedValue2 = new Animated.Value(0);
  }

  componentDidMount() {
    this.animate();
  }

  animate() {
    this.animatedValue.setValue(0);
    this.animatedValue2.setValue(0);
    Animated.paralletl([
      Animated.timing(this.animatedValue, {
        toValue: 1,
        duration: 1000,
      }),
    ]).start();
  }

  render() {
    const opacity = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 0.5, 1],
    });
    const marginTop = this.animatedValue2.interpolate({
      inputRange: [0, 1],
      outputRange: [heightRatio * 0, heightRatio * 240],
    });

    const { props } = this;

    return (
      <View style={StyleSheet.gameOverContainer}>
        <Animated.View
          style={[
            styles.animatedCard,
            { opacity: opacity, marginTop: marginTop },
          ]}
        >
          <Text style={styles.gameOverText}>Game Over</Text>
          <Text style={styles.gameOverText}>{props.score}</Text>
          <TouchableOpacity onPress={props.restart}>
            <View style={[styles.container, styles.shadow]}>
              <Text style={[styles.textStyle]}>Restart</Text>
            </View>
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  gameOverContainer: {
    flex: 1,
    alignItems: "center",
  },
  animatedCard: {
    width: widthRatio * 260,
    height: heightRatio * 200,
  },
});
