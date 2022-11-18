import { Component, For } from "solid-js";
import { RectBorder } from "@/components";
import { AnswerList } from "@/type";

export const IdiomRectBorder: Component<{
  idiom: Array<AnswerList>;
}> = ({ idiom }) => {
  return (
    <div class="mt-5 flex">
      <For each={idiom}>
        {(item) => <RectBorder text={item.text} status={item.status} />}
      </For>
    </div>
  );
};
