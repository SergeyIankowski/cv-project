import {FC, MouseEvent, ReactNode, useState} from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import {MenuStyle} from "@view/MuiPagesStyles";

interface TableRowControlData {
  text: string;
  icon: ReactNode | "";
  clickCallback: () => void;
  disabled: boolean;
}
export type TableRowControls = TableRowControlData[];
interface RowControlMenuTemplateProps {
  controlsData: TableRowControls;
}

export const RowControlMenuTemplate: FC<RowControlMenuTemplateProps> = ({
  controlsData,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isOpened = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={isOpened}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          variant: "outlined",
          sx: {MenuStyle},
        }}
        transformOrigin={{horizontal: "right", vertical: "top"}}
        anchorOrigin={{horizontal: "right", vertical: "bottom"}}
      >
        {controlsData.map(control => {
          const clickHandler = () => {
            control.clickCallback();
            handleClose();
          };
          return (
            <MenuItem
              key={control.text}
              onClick={clickHandler}
              disabled={control.disabled}
            >
              {control.icon ? <ListItemIcon>{control.icon}</ListItemIcon> : ""}
              {control.text}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};
