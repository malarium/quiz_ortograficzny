import React from "react";
import { Button, ImageBackground, StyleSheet, Text, View } from "react-native";
import { Screens } from "../App";
import { mainGameContext } from "../contexts/mainGameContext";
import { IGameProvider } from "../helpers/interfaces";

export function MainScreen(): JSX.Element {
  const { points, setPoints, initExit, windowWidth, windowHeight, setScreen } =
    React.useContext(mainGameContext) as IGameProvider;
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require(`.././assets/background.jpg`)}
        resizeMode="cover"
        style={[styles.image, { width: windowWidth, height: windowHeight }]}
      >
        <Text style={{ fontFamily: "SpicyRice", fontSize: 50 }}>
          ORTO QUIZ (SpicyRice font)
        </Text>
        <Text style={{ fontFamily: "Cookie", fontSize: 50 }}>
          ORTO QUIZ (Cookie font)
        </Text>
        <Text style={{ fontFamily: "Cookie", fontSize: 50 }}>{points}</Text>
        <View style={[styles.buttons, { width: windowWidth }]}>
          <Button title={`scores`} onPress={() => setScreen(Screens.Scores)} />
          <Button title={`add point`} onPress={() => setPoints(points + 1)} />
          <Button title={`start`} onPress={() => setScreen(Screens.Game)} />
          <Button title={`quit`} onPress={initExit} />
        </View>
        {/* <StatusBar style="auto" /> */}
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    width: 400,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
