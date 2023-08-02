import {FC, MouseEvent, useState} from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import {UserMenu} from "@view/UserMenu/UserMenu";
import {avatarStyle} from "./UserDetailsStyle";
import {colors} from "@view/MuiPagesStyles";

interface UserDetailsProps {
  userName: string;
  avatar: string;
}

export const UserDetails: FC<UserDetailsProps> = ({userName, avatar}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{minWidth: userName.length, color: colors.headerItemsColor}}
        >
          {userName}
        </Typography>
        <Tooltip title="Account details">
          <IconButton
            onClick={handleClick}
            size="medium"
            sx={{ml: 1}}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            {avatar ? (
              <Avatar sx={avatarStyle} src={avatar} />
            ) : (
              <Avatar sx={avatarStyle}>{userName[0].toUpperCase()}</Avatar>
            )}
          </IconButton>
        </Tooltip>
      </Box>
      <UserMenu
        isOpened={open}
        anchorElem={anchorEl}
        onCloseMenu={handleClose}
      />
    </>
  );
};
