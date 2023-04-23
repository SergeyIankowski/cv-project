import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import {UserDetails} from "@containers/UserDetails/UserDetails";
import {HeaderStyle} from "@/pages/MuiPagesStyles";
import {SlideMenu} from "@containers/SlideMenu/SlideMenu";
import {FC} from "react";

import {BoxProps} from "@mui/material/Box";
import {useBooleanState} from "@/hooks/useBooleanState";

type MainHeaderProps = BoxProps;

export const MainHeader: FC<MainHeaderProps> = () => {
  const [isOpen, setTrue, setFalse] = useBooleanState(false);
  return (
    <Box
      sx={{
        ...HeaderStyle,
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <MenuIcon onClick={setTrue} />
      <UserDetails userName="Sergei" />
      <SlideMenu isOpen={isOpen} onCloseVisibility={setFalse} />
    </Box>
  );
};
