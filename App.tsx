import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import * as Font from "expo-font";

export default function App(): JSX.Element {
  const windowWidth = Dimensions.get("screen").width;
  const windowHeight = Dimensions.get("screen").height;
  const [fontsLoaded, setFontsLoaded] = React.useState(false);

  React.useEffect(() => {
    lockLandscapeOrientation();
    loadFonts();
  }, []);

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
