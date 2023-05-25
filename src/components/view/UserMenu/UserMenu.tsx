import {FC} from "react";
import {useNavigate} from "react-router-dom";
import {userMenuStyle} from "./userMenuStyle";
import Divider from "@mui/material/Divider";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import {Pages} from "@/models/Pages";
import {AuthInfoService} from "@/services/AuthInfoService";

interface UserMenuProps {
  isOpened: boolean;
  anchorElem: HTMLElement | null;
  onCloseMenu: () => void;
}

export const UserMenu: FC<UserMenuProps> = ({
  isOpened,
  anchorElem,
  onCloseMenu,
}) => {
  const navigate = useNavigate();
  return (
    <Menu
      anchorEl={anchorElem}
      id="account-menu"
      open={isOpened}
      onClose={onCloseMenu}
      onClick={onCloseMenu}
      PaperProps={{
        elevation: 0,
        sx: {userMenuStyle},
      }}
      transformOrigin={{horizontal: "right", vertical: "top"}}
      anchorOrigin={{horizontal: "right", vertical: "bottom"}}
    >
      <MenuItem
        onClick={() => {
          const {id} = AuthInfoService.getAuthInfo();
          navigate(`${id}/${Pages.info.profile}`);
        }}
      >
        <ListItemIcon>
          <AccountCircleIcon fontSize="medium" />
        </ListItemIcon>
        Profile
      </MenuItem>
      <MenuItem onClick={onCloseMenu}>
        <ListItemIcon>
          <Settings fontSize="medium" />
        </ListItemIcon>
        Settings
      </MenuItem>
      <Divider />
      <MenuItem onClick={onCloseMenu}>
        <ListItemIcon>
          <Logout fontSize="medium" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );
};
