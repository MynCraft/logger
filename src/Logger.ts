import { colorize } from "./utils";
export interface LoggerOptions {
  time?: boolean;
  date?: boolean;
  locale?: string;
  header?: string;
}
export default class Logger {
  private time: boolean;
  private date: boolean;
  private locale: string;
  private header: string;
  constructor(options?: LoggerOptions) {
    this.time = options?.time ?? true;
    this.date = options?.date ?? true;
    this.header = options?.header
      ? colorize(`[${options?.header}]`, "fff")
      : "";
    this.locale =
      options?.locale ?? Intl.DateTimeFormat().resolvedOptions().locale;
  }
  log(...texts: any[]) {
    console.log(
      this.getHeaderText() +
        colorize("[Log]:", "54fc21") +
        " " +
        colorize(texts.join(" "), "79fc51")
    );
  }
  error(...texts: any[]) {
    console.log(
      this.getHeaderText() +
        colorize("[Error]:", "fa2a2a") +
        " " +
        colorize(texts.join(" "), "#fc4242")
    );
  }
  warn(...texts: any[]) {
    console.log(
      this.getHeaderText() +
        colorize("[Warn]:", "faf62a") +
        " " +
        colorize(texts.join(" "), "#fcf953")
    );
  }
  private getTimeText() {
    return this.time
      ? colorize(
          `[${new Date(Date.now()).toLocaleTimeString(this.locale)}]`,
          "faae2a"
        )
      : "";
  }
  private getDateText() {
    return this.date
      ? colorize(
          `[${new Date(Date.now()).toLocaleDateString(this.locale)}]`,
          "fa812a"
        )
      : "";
  }
  private getHeaderText() {
    return this.header + this.getDateText() + this.getTimeText();
  }
}
