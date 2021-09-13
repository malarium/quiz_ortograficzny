import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Button,
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import * as Font from "expo-font";
import { getPoints, savePoints } from "./helpers/storage";

export default function App(): JSX.Element {
  const windowWidth: number = Dimensions.get("screen").width;
  const windowHeight: number = Dimensions.get("screen").height;
  const [fontsLoaded, setFontsLoaded] = React.useState<boolean>(false);
  const [points, setPoints] = React.useState<number>(0);

  React.useEffect(() => {
    lockLandscapeOrientation();
    loadFonts();
    fetchPoints();
  }, []);

  React.useEffect(() => {
    savePoints(`points`, points.toString());
  }, [points]);

  async function fetchPoints() {
    await getPoints(`points`).then((res) => {
      console.log(`points found: `, res);
      if (res) {
        setPoints(parseInt(res));
      }
    });
  }

  async function lockLandscapeOrientation() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE
    );
  }

  async function loadFonts() {
    await Font.loadAsync({
      SpicyRice: require("./assets/fonts/SpicyRice-Regular.ttf"),
      Cookie: require("./assets/fonts/Cookie-Regular.ttf"),
    });
    setFontsLoaded(true);
  }

  if (!fontsLoaded) {
    return <Text>Ładowanie...</Text>;
  } else {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require(`./assets/background.jpg`)}
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
          <Button title={`press`} onPress={() => setPoints(points + 1)} />
          <StatusBar style="auto" />
        </ImageBackground>
      </View>
    );
  }
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
});
