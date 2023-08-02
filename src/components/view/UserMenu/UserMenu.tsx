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
import {useAuthToken} from "@/hooks/useAuthToken";
import {useTranslation} from "react-i18next";

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
  const {removeAuthToken} = useAuthToken();
  const navigate = useNavigate();
  const {t} = useTranslation();

  const profileClickHandler = () => {
    const {id} = AuthInfoService.getAuthInfo();
    const pathToProfilePage = `${Pages.main.root}${Pages.main.employees}/${id}/${Pages.main.profile}`;
    navigate(pathToProfilePage);
  };
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
      <MenuItem onClick={profileClickHandler}>
        <ListItemIcon>
          <AccountCircleIcon fontSize="medium" />
        </ListItemIcon>
        {t("profile")}
      </MenuItem>
      <MenuItem onClick={onCloseMenu} disabled>
        <ListItemIcon>
          <Settings fontSize="medium" />
        </ListItemIcon>
        {t("settings")}
      </MenuItem>
      <Divider />
      <MenuItem onClick={removeAuthToken}>
        <ListItemIcon>
          <Logout fontSize="medium" />
        </ListItemIcon>
        {t("logout")}
      </MenuItem>
    </Menu>
  );
};
