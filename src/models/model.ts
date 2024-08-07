import { Component } from "vue";

export const MODAL_DELAY = 500;
export const INVALID_OPTIONS = "Invalid Options";

export const CONFIRM_OPTION_KEYS = [
  "title",
  "message",
  "icon",
  "center",
  "leftBtnText",
  "rightBtnText",
  "backgroundScrolling",
  "staticBackdrop",
  "displayCloseBtn",
  "id"
];

export const MODAL_OPTION_KEYS = [
  "content",
  "contentProps",
  "contentEmits",
  "size",
  "center",
  "backgroundScrolling",
  "staticBackdrop",
  "id"
];

export interface ConfirmOption {
  title?: string;
  message?: string;
  icon?: string;
  center?: boolean;
  leftBtnText?: string;
  rightBtnText?: string;
  backgroundScrolling?: boolean;
  staticBackdrop?: boolean;
  displayCloseBtn?: boolean;
  id?: string;
}

export interface ModalOption {
  content: Component | string;
  contentProps?: Record<string, unknown>;
  contentEmits?: Record<string, unknown>;
  size?: ModalSize;
  center?: boolean;
  backgroundScrolling?: boolean;
  staticBackdrop?: boolean;
  id?: string;
}

export interface ModalRef {
  config: ModalOption | ConfirmOption;
  host: HTMLElement;
  closed: boolean;
  readonly close: () => void;
  readonly destroy: (el?: HTMLElement) => void;
}

export interface Modal {
  readonly confirm: (
    options?: ConfirmOption,
    el?: HTMLElement
  ) => Promise<boolean>;
  readonly open: (options: ModalOption, el?: HTMLElement) => void;
  readonly close: () => void;
  readonly destroy: (el?: HTMLElement) => void;
}

export enum ModalSize {
  SMALL = "modal-sm",
  LARGE = "modal-lg",
  XLARGE = "modal-xl",
  FULL_SCREEN = "modal-fullscreen",
  FULL_SCREEN_SM = "modal-fullscreen-sm-down",
  FULL_SCREEN_MD = "modal-fullscreen-md-down",
  FULL_SCREEN_LG = "modal-fullscreen-lg-down",
  FULL_SCREEN_XL = "modal-fullscreen-xl-down",
  FULL_SCREEN_XXL = "modal-fullscreen-xxl-down",
}
