import { Component } from "solid-js";
import { AnswerList, Status } from "../../type";
import { pinyin } from "pinyin-pro";

export const RectBorder: Component<AnswerList> = ({ text, status }) => {
  const initial = pinyin(text, { pattern: "initial" });
  const bgColor =
    status === Status.right
      ? "bg-green-700 text-light-600"
      : status === Status.error
      ? "bg-amber-500 text-light-600"
      : "bg-light-600";
  const color =
    status === Status.right ? "text-green-700" : status === Status.error ? "text-amber-500" : "text-gray-300";
  return (
    <div class="flex-col~ mr-2">
      <div class={["text-center w-18 h-6 text-5 mb-2 bg-gray-100", color].join(" ")}>{initial}</div>
      <div class={["text-6 w-18 h-18 flex~", bgColor].join(" ")}>{text}</div>
    </div>
  );
};
