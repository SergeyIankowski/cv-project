import {FC} from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import {linksData} from "./linksData";
import {ListLinks} from "@view/ListLinks/ListLinks";

export const SlideMenuItems: FC = () => {
  return (
    <Box sx={{width: 250}} role="presentation">
      <List>
        <ListLinks linksData={linksData.slice(0, 3)} />
      </List>
      <Divider />
      <List>
        <ListLinks linksData={linksData.slice(3)} />
      </List>
    </Box>
  );
};
