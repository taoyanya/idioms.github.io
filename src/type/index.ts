export enum Status {
  "right",
  "normal",
  "error",
}

export interface AnswerList {
  text: string;
  status: Status;
}

export interface Idioms {
  paraphrase: string;
  idiom: string;
  initial?: string;
}
