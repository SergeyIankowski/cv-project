import {HeadCell} from "@/models/HeadCell.type";
import {LanguagesData} from "@/models/LanguagesData";

export const LanguagesHeadCellsData: HeadCell<LanguagesData>[] = [
  {
    id: "name",
    content: "Name",
    disablePadding: false,
    isSortable: true,
  },
  {
    id: "nativeName",
    content: "Native Name",
    disablePadding: false,
    isSortable: true,
  },
  {
    id: "iso2",
    content: "ISO2",
    disablePadding: false,
    isSortable: true,
  },
];
