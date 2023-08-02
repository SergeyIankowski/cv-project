import {FC, MouseEvent, useState} from "react";
import {useTranslation} from "react-i18next";

import TranslateIcon from "@mui/icons-material/Translate";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import {LanguageMenuStyle} from "./LanguageMenuStyle";
import {LANGUAGES} from "@/models/Languages";
import {colors} from "@view/MuiPagesStyles";

export const LanguageMenu: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const {i18n} = useTranslation();

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (language: LANGUAGES) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <Tooltip title="Account details">
        <IconButton
          onClick={handleClick}
          size="medium"
          sx={{ml: 1}}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <TranslateIcon sx={{color: colors.headerItemsColor}} />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {LanguageMenuStyle},
        }}
        transformOrigin={{horizontal: "right", vertical: "top"}}
        anchorOrigin={{horizontal: "right", vertical: "bottom"}}
      >
        <MenuItem
          onClick={() => {
            changeLanguage(LANGUAGES.EN);
          }}
        >
          EN
        </MenuItem>
        <MenuItem
          onClick={() => {
            changeLanguage(LANGUAGES.RU);
          }}
        >
          RU
        </MenuItem>
      </Menu>
    </>
  );
};
