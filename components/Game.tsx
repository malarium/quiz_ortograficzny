import React from "react";
import { Button, Text, View } from "react-native";
import { Screens } from "../App";
import { mainGameContext } from "../contexts/mainGameContext";
import { IGameProvider, IQuizWord } from "../helpers/interfaces";
import { shuffleArray } from "../helpers/shuffleArray";
import { quizWords } from "./gameFiles/quizWords";

export function Game(): JSX.Element {
  const { setScreen } = React.useContext(mainGameContext) as IGameProvider;
  const [shuffledQuizWords, setShuffledQuizWords] = React.useState<IQuizWord[]>(
    []
  );
  const numberOfWordsPerOneGame: number = 5;

  React.useEffect(() => {
    getRandomWordsForQuiz();
  }, []);

  React.useEffect(() => {
    shuffledQuizWords.slice(0, numberOfWordsPerOneGame);
  }, [shuffledQuizWords]);

  const getRandomWordsForQuiz = () => {
    setShuffledQuizWords(
      shuffleArray(quizWords).slice(0, numberOfWordsPerOneGame)
    );
  };

  return (
    <View>
      <Text style={{ fontFamily: "Cookie", fontSize: 50 }}>Game</Text>
      <Button
        title={`Main Screen`}
        onPress={() => setScreen(Screens.MainScreen)}
      ></Button>
      {shuffledQuizWords.map((wordObject, i) => (
        <Text key={i}>{wordObject.word}</Text>
      ))}
    </View>
  );
}
