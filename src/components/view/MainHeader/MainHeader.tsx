import {FC} from "react";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import {BoxProps} from "@mui/material/Box";
import {MainHeaderStyle} from "@view/MuiPagesStyles";
import {UserDetails} from "@containers/UserDetails/UserDetails";
import {SlideMenu} from "@containers/SlideMenu/SlideMenu";
import {useBooleanState} from "@/hooks/useBooleanState";
import {useUserData} from "@/hooks/useUserData";

type MainHeaderProps = BoxProps;

export const MainHeader: FC<MainHeaderProps> = () => {
  const [isOpen, setTrue, setFalse] = useBooleanState(false);
  const {userData} = useUserData();
  return (
    <Box component={"header"} sx={MainHeaderStyle}>
      <MenuIcon onClick={setTrue} />
      <UserDetails
        userName={`${userData?.profile?.first_name} ${userData?.profile?.last_name}`}
        avatar={userData?.profile?.avatar}
      />
      <SlideMenu isOpen={isOpen} onCloseVisibility={setFalse} />
    </Box>
  );
};
