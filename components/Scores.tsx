import React from "react";
import { Button, Text, View } from "react-native";
import { Screens } from "../App";
import { mainGameContext } from "../contexts/mainGameContext";
import { IGameProvider } from "../helpers/interfaces";

export function Scores(): JSX.Element {
  const { setScreen, setPoints } = React.useContext(
    mainGameContext
  ) as IGameProvider;
  return (
    <View>
      <Text style={{ fontFamily: "SpicyRice", fontSize: 50 }}>Scores</Text>
      <Button
        title={`Main Screen`}
        onPress={() => setScreen(Screens.MainScreen)}
      />
      <Button title={`reset points`} onPress={() => setPoints(0)} />
    </View>
  );
}
