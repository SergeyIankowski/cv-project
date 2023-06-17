import {FC} from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {CvData} from "@/models/CvData";
import {ProfileCvsRowControlMenu} from "../ProfileCvsRowControlMenu";

interface ProfileTableRowCvsProps {
  row: CvData;
}

export const ProfileTableRowCvs: FC<ProfileTableRowCvsProps> = ({row}) => {
  return (
    <TableRow>
      <TableCell align="left">{row.name}</TableCell>
      <TableCell align="right">
        <ProfileCvsRowControlMenu id={row.id} />
      </TableCell>
    </TableRow>
  );
};
