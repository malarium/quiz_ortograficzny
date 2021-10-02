import { StatusBar } from "expo-status-bar";
import React from "react";
import { BackHandler, Dimensions, Text } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import * as Font from "expo-font";
import { getPoints, savePoints } from "./helpers/storage";
import { mainGameContext } from "./contexts/mainGameContext";
import { MainScreen } from "./components/MainScreen";
import { Game } from "./components/Game";
import { Scores } from "./components/Scores";

export enum Screens {
  MainScreen,
  Game,
  Scores,
}

export default function App(): JSX.Element {
  const windowWidth: number = Dimensions.get("screen").width;
  const windowHeight: number = Dimensions.get("screen").height;
  const [fontsLoaded, setFontsLoaded] = React.useState<boolean>(false);
  const [points, setPoints] = React.useState<number>(0);
  const [screen, setScreen] = React.useState<number>(Screens.MainScreen);

  React.useEffect(() => {
    lockLandscapeOrientation();
    loadFonts();
    fetchPoints();
  }, []);

  React.useEffect(() => {
    savePoints(`player1`, points.toString());
  }, [points]);

  async function fetchPoints() {
    await getPoints(`player1`).then((res) => {
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

  const initExit = () => {
    BackHandler.exitApp();
  };

  if (!fontsLoaded) {
    return <Text>Ładowanie...</Text>;
  } else {
    return (
      <mainGameContext.Provider
        value={{
          screen,
          setScreen,
          points,
          setPoints,
          initExit,
          windowHeight,
          windowWidth,
        }}
      >
        {screen === Screens.MainScreen ? (
          <MainScreen />
        ) : screen === Screens.Game ? (
          <Game />
        ) : screen === Screens.Scores ? (
          <Scores />
        ) : null}
      </mainGameContext.Provider>
    );
  }
}
