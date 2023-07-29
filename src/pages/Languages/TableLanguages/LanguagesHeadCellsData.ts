import {HeadCell} from "@/models/HeadCell.type";
import {LanguagesTableData} from "@/models/TableDataTypes";

export const LanguagesHeadCellsData: (
  name: string,
  nativeName: string
) => HeadCell<LanguagesTableData>[] = (name, nativeName) => [
  {
    id: "name",
    content: name,
    disablePadding: false,
    isSortable: true,
  },
  {
    id: "nativeName",
    content: nativeName,
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
