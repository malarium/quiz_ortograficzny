import React from "react";
import { Button, Text, View } from "react-native";
import { Screens } from "../App";
import { mainGameContext } from "../contexts/mainGameContext";
import { IGameProvider } from "../helpers/interfaces";

export function Game(): JSX.Element {
  const { setScreen } = React.useContext(mainGameContext) as IGameProvider;
  return (
    <View>
      <Text style={{ fontFamily: "Cookie", fontSize: 50 }}>Game</Text>
      <Button
        title={`Main Screen`}
        onPress={() => setScreen(Screens.MainScreen)}
      ></Button>
    </View>
  );
}
