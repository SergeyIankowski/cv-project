import {HeadCell} from "@/models/HeadCell.type";
import {LanguagesTableData} from "@/models/LanguagesTableData.interface";

export const LanguagesHeadCellsData: HeadCell<LanguagesTableData>[] = [
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
