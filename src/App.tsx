import { For, createSignal } from "solid-js";
import { IdiomRectBorder, SideNotice } from "./components";
import { Status, AnswerList } from "./type";
import { IDIOMS } from "./config";
import { useConfetti, useCompare } from "@/hook";

const initialIdioms: Array<Array<AnswerList>> = [
  [
    { text: "", status: Status.normal },
    { text: "", status: Status.normal },      
    { text: "", status: Status.normal },
    { text: "", status: Status.normal },
  ],
];

let isContinue = true;
let isSuccess = false;

export default () => {
  const value = IDIOMS[Math.floor(Math.random() * IDIOMS.length)];
  const answerIdiom = value.idiom.split("");
  const paraphrase = value.paraphrase;

  const [idioms, setIdioms] = createSignal<Array<Array<AnswerList>>>(initialIdioms);
  const [inputIdiom, setInputIdiom] = createSignal("");
  const [submitCount, setSubmitCount] = createSignal(0);

  const onChange = (event: { currentTarget: HTMLInputElement }) => {
    const value = event.currentTarget.value;
    setInputIdiom(value);
  };

  const useAddIdiom = (value: string) => {
    const length = value.length;

    if (!isContinue) {
      return;
    }

    if (length < 4) {
      // todo 提示字数太少
      return;
    }

    if (length > 4) {
      // todo 提示字数太多
      return;
    }

    setSubmitCount(submitCount() + 1);

    const prevList = value.split("");
    const resultList = useCompare(prevList, answerIdiom);

    for (let i = 0; i < 4; i++) {
      if (prevList[i] !== answerIdiom[i]) {
        isSuccess = false;
        break;
      } else {
        isSuccess = true;
      }
    }

    if (submitCount() === 1) {
      setIdioms([resultList]);
    } else {
      setIdioms([...idioms(), resultList]);
    }

    if (isSuccess) {
      useConfetti();
      isContinue = false;
    }

    if (submitCount() === 5) {
      isContinue = false;
    }
  };

  const onSubmit = () => {
    useAddIdiom(inputIdiom());
    setInputIdiom("");
  };

  return (
    <div>
      <div class="h-15 border-b border~ flex~">Idiom</div>
      <div class="flex flex-col justify-center">
        <div class="flex~ px-3 mt-5 text-green-600">释义：{paraphrase}</div>
        <div class="flex justify-center">
          <div>
            <For each={idioms()}>{(item) => <IdiomRectBorder idiom={item} />}</For>
          </div>
        </div>
        <div class="mt-5">
          <div class="flex justify-center">
            <input
              class="text-xl outline-none w-66 h-15 text-center border~ box-border"
              placeholder="请输入四字成语"
              value={inputIdiom()}
              onChange={(event) => onChange(event)}
            />
          </div>
          <div class="mt-5 flex justify-center">
            <button class="h-10 w-20 border~ bg-light-100" onClick={() => onSubmit()}>
              确定
            </button>
          </div>
          <SideNotice />
        </div>
      </div>
    </div>
  );
};
