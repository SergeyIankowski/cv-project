import {FC} from "react";
import {UserMenuProps} from "./interface";
import {userMenuStyle} from "./userMenuStyle";
import Divider from "@mui/material/Divider";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

export const UserMenu: FC<UserMenuProps> = ({
  isOpened,
  anchorElem,
  closeMenuCallback,
}) => {
  return (
    <Menu
      anchorEl={anchorElem}
      id="account-menu"
      open={isOpened}
      onClose={closeMenuCallback}
      onClick={closeMenuCallback}
      PaperProps={{
        elevation: 0,
        sx: {userMenuStyle},
      }}
      transformOrigin={{horizontal: "right", vertical: "top"}}
      anchorOrigin={{horizontal: "right", vertical: "bottom"}}
    >
      <MenuItem onClick={closeMenuCallback}>
        <ListItemIcon>
          <AccountCircleIcon fontSize="medium" />
        </ListItemIcon>
        Profile
      </MenuItem>
      <MenuItem onClick={closeMenuCallback}>
        <ListItemIcon>
          <Settings fontSize="medium" />
        </ListItemIcon>
        Settings
      </MenuItem>
      <Divider />
      <MenuItem onClick={closeMenuCallback}>
        <ListItemIcon>
          <Logout fontSize="medium" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );
};
