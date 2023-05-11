import {ReactNode} from "react";

export interface HeadCell<Data = void> {
  id: keyof Data;
  content: string | ReactNode;
  disablePadding: boolean;
  isSortable: boolean;
}
