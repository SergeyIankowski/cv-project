import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {FC, MouseEvent, useState} from "react";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import {UserMenu} from "@view/UserMenu/UserMenu";

interface UserDetailsProps {
  userName: string;
}

export const UserDetails: FC<UserDetailsProps> = ({userName}) => {
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
        <Typography sx={{minWidth: userName.length}}>{userName}</Typography>
        <Tooltip title="Account details">
          <IconButton
            onClick={handleClick}
            size="medium"
            sx={{ml: 1}}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{width: 42, height: 42}}>
              {userName[0].toUpperCase()}
            </Avatar>
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
