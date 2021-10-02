import { Screens } from "../App";

export interface IGameProvider {
  points: number;
  setPoints: (points: number) => void;
  initExit: () => void;
  windowWidth: number;
  windowHeight: number;
  setScreen: (screen: Screens) => void;
}
