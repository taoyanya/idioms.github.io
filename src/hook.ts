import confetti from "canvas-confetti";
import { Status, AnswerList } from "@/type";

export function useConfetti() {
  confetti({
    particleCount: 80,
    angle: 60,
    spread: 70,
    origin: { x: 0 },
  });
  confetti({
    particleCount: 80,
    angle: 120,
    spread: 70,
    origin: { x: 1 },
  });
}

export function useCompare(list: Array<string>, targetList: Array<string>) {
  return list.map<AnswerList>((item, index) => {
    if (item === targetList[index]) {
      return {
        text: item,
        status: Status.right,
      };
    } else if (targetList.includes(item)) {
      return {
        text: item,
        status: Status.error,
      };
    } else {
      return {
        text: item,
        status: Status.normal,
      };
    }
  });
}
