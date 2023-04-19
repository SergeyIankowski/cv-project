import {FC} from "react";
import Drawer from "@mui/material/Drawer";
import {SlideMenuProps} from "./interface";
import {SlideMenuItems} from "../../view/SlideMenuItems/SlideMenuItems";

export const SlideMenu: FC<SlideMenuProps> = ({opened, openCallback}) => {
  const toggleDrawer =
    (open: boolean) => (event: KeyboardEvent | MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as KeyboardEvent).key === "Tab" ||
          (event as KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      openCallback(open);
    };

  return (
    <>
      <Drawer anchor={"left"} open={opened} onClose={toggleDrawer(false)}>
        <SlideMenuItems toggleCallback={toggleDrawer} />
      </Drawer>
    </>
  );
};
