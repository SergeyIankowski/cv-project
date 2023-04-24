import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import {FC} from "react";
import {LinksData} from "@/models/LinksData.type";

interface ListLinksProps {
  linksData: LinksData[];
}

export const ListLinks: FC<ListLinksProps> = ({linksData}) => {
  return (
    <>
      {linksData.map(obj => (
        <ListItem key={obj.linkName} disablePadding>
          <ListItemButton>
            {obj.iconNode && <ListItemIcon>{obj.iconNode}</ListItemIcon>}
            <ListItemText primary={obj.linkName} />
          </ListItemButton>
        </ListItem>
      ))}
    </>
  );
};
