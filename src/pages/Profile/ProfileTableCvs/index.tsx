import {FC} from "react";
import TableBody from "@mui/material/TableBody";
import {TableTemplate} from "@view/TableTemplate/TableTemplate";
import {useSort} from "@/hooks/useSort";
import {CvData} from "@/models/CvData";
import {Order} from "@/models/Order.type";
import {TableHeadTemplate} from "@view/TableHeadTemplate/TableHeadTemplate";
import {profileCvsHeadCellsData} from "./profileCvsHeadCellsData";
import {ProfileTableRowCvs} from "../ProfileTableRowCvs";

interface ProfileCvsProps {
  cvsData: CvData[];
}

const DEFAULT_ORDER: Order = "asc";
const DEFAULT_ORDER_BY: keyof CvData = "name";

export const ProfileTableCvs: FC<ProfileCvsProps> = ({cvsData}) => {
  const [order, orderBy, sortedRowsOnPage, handleRequestSort] = useSort<CvData>(
    DEFAULT_ORDER,
    DEFAULT_ORDER_BY,
    cvsData
  );
  return (
    <TableTemplate>
      <TableHeadTemplate<CvData>
        headCells={profileCvsHeadCellsData}
        order={order}
        orderBy={orderBy}
        hasControlsColumn
        onRequestSort={handleRequestSort}
        titleAlign="left"
      />
      <TableBody>
        {sortedRowsOnPage.map(cv => (
          <ProfileTableRowCvs key={cv.name} row={cv} />
        ))}
      </TableBody>
    </TableTemplate>
  );
};
