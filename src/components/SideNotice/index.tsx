import { createSignal, Show, For } from "solid-js";
import { IDIOMS } from "@/config";
import { RectBorder } from "../RectBorder";
import { Status } from "@/type";

const IdiomStore = () => {
  return (
    <div
      class="idioms relative p-5 top-0 h-screen bg-light-100 text-sm"
      onClick={(event) => event.stopPropagation()}
    >
      <div class="flex justify-between flex-wrap">
        <For each={IDIOMS}>
          {(item) => <div class="idiom text-4 text-center mb-2 py-2 px-2 bg-gray-400 text-light-100">{item.idiom}</div>}
        </For>
      </div>
    </div>
  );
};

export const UserHelp = () => {
  return (
    <div
      class="prompt flex-col~ relative p-5 left-0 w-screen py-10 px-2 bg-light-100 text-sm"
      onClick={(event) => event.stopPropagation()}
    >
      <div class="text-green-600">Tips: 该游戏是通过成语释义来猜出成语。同时，你只有五次机会！</div>
      <div class="my-2">1、当方块为白色时，说明成语中不存在该字。</div>
      <RectBorder text="成" status={Status.normal} />
      <div class="my-2">2、当方块为黄色时，说明成语中存在该字，只是位置错误</div>
      <RectBorder text="语" status={Status.error} />
      <div class="my-2">3、当方块为绿色时，说明成语中存在该字，且位置正确</div>
      <RectBorder text="好" status={Status.right} />
    </div>
  );
};

export const SideNotice = () => {
  const [idiomsVisible, setIdiomsVisible] = createSignal(false);
  const [helpVisible, setHelpVisible] = createSignal(false);

  return (
    <div class="mt-5">
      <div class="flex~ text-sm text-gray-500">
        <div class=" flex~ mr-5 cursor-pointer" onClick={() => setIdiomsVisible(true)}>
          <div class="w-5 h-5" i-carbon:grid></div>
          <div class="ml-2">词库</div>
        </div>
        <div class=" flex~ cursor-pointer" onClick={() => setHelpVisible(true)}>
          <div class="w-5 h-5" i-carbon:help></div>
          <div class="ml-2">帮助</div>
        </div>
      </div>
      <Show when={idiomsVisible()}>
        <div class="fixed top-0 left-0 w-screen h-screen z-99 bg-gray-300/30" onClick={() => setIdiomsVisible(false)}>
          <IdiomStore />
        </div>
      </Show>
      <Show when={helpVisible()}>
        <div class="fixed top-0 left-0 w-screen h-screen z-99 bg-gray-300/30" onClick={() => setHelpVisible(false)}>
          <UserHelp />
        </div>
      </Show>
    </div>
  );
};
