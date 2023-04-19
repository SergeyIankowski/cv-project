import {FC} from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import {SlideMenuItemsProps} from "./interface";
import {linksData} from "./linksData";

export const SlideMenuItems: FC<SlideMenuItemsProps> = ({toggleCallback}) => {
  const itemsBeforeDivider = linksData.slice(0, 3).map(obj => (
    <ListItem key={obj.linkName} disablePadding>
      <ListItemButton>
        {obj.node && <ListItemIcon>{obj.node}</ListItemIcon>}
        <ListItemText primary={obj.linkName} />
      </ListItemButton>
    </ListItem>
  ));

  const itemsAfterDivider = linksData.slice(3).map(obj => (
    <ListItem key={obj.linkName} disablePadding>
      <ListItemButton>
        {obj.node && <ListItemIcon>{obj.node}</ListItemIcon>}
        <ListItemText primary={obj.linkName} />
      </ListItemButton>
    </ListItem>
  ));

  return (
    <Box
      sx={{width: 250}}
      role="presentation"
      onClick={() => toggleCallback(false)}
      onKeyDown={() => toggleCallback(false)}
    >
      <List>{itemsBeforeDivider}</List>
      <Divider />
      <List>{itemsAfterDivider}</List>
    </Box>
  );
};
