import {FC, useState} from "react";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import {BoxProps} from "@mui/material/Box";
import {HeaderStyle, MainHeaderStyle} from "@view/MuiPagesStyles";
import {UserDetails} from "@containers/UserDetails/UserDetails";
import {SlideMenu} from "@containers/SlideMenu/SlideMenu";
import {useBooleanState} from "@/hooks/useBooleanState";
import {useUserData} from "@/hooks/useUserData";
import {AuthInfoService} from "@/services/AuthInfoService";
import {Container} from "@mui/material";

type MainHeaderProps = BoxProps;

export const MainHeader: FC<MainHeaderProps> = () => {
  const [id] = useState(AuthInfoService.getAuthInfo().id);
  const [isOpen, setTrue, setFalse] = useBooleanState(false);
  const {userData} = useUserData(id);

  const constructUserName = () => {
    const full_name = userData?.profile?.full_name;
    const email = userData?.email;

    if (full_name) return full_name;
    if (email) return email;
    return " ";
  };

  return (
    <Box component={"header"} sx={HeaderStyle}>
      <Container sx={MainHeaderStyle} maxWidth="xl">
        <MenuIcon onClick={setTrue} />
        <UserDetails
          userName={constructUserName()}
          avatar={userData.profile.avatar!}
        />
        <SlideMenu isOpen={isOpen} onCloseVisibility={setFalse} />
      </Container>
    </Box>
  );
};
