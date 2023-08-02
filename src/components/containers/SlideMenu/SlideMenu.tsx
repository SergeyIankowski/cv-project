import {FC} from "react";
import Drawer from "@mui/material/Drawer";
import {SlideMenuItems} from "@view/SlideMenuItems/SlideMenuItems";

interface SlideMenuProps {
  isOpen: boolean;
  onCloseVisibility: (value: boolean) => void;
}

export const SlideMenu: FC<SlideMenuProps> = ({isOpen, onCloseVisibility}) => {
  return (
    <Drawer anchor={"left"} open={isOpen} onClose={onCloseVisibility}>
      <SlideMenuItems />
    </Drawer>
  );
};
