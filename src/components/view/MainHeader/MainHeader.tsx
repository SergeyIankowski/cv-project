import {FC, useState} from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MenuIcon from "@mui/icons-material/Menu";
import {BoxProps} from "@mui/material/Box";
import Container from "@mui/material/Container";
import {HeaderStyle, MainHeaderStyle, colors} from "@view/MuiPagesStyles";
import {UserDetails} from "@containers/UserDetails/UserDetails";
import {SlideMenu} from "@containers/SlideMenu/SlideMenu";
import {LanguageMenu} from "@containers/LanguageMenu";
import {useBooleanState} from "@/hooks/useBooleanState";
import {useUserData} from "@/hooks/useUserData";
import {AuthInfoService} from "@/services/AuthInfoService";

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
        <MenuIcon
          onClick={setTrue}
          sx={{"&:hover": {cursor: "pointer"}, color: colors.headerItemsColor}}
        />
        <Grid container gap="10px" sx={{width: "fit-content"}}>
          <LanguageMenu />
          <UserDetails
            userName={constructUserName()}
            avatar={userData.profile.avatar!}
          />
        </Grid>
        <SlideMenu isOpen={isOpen} onCloseVisibility={setFalse} />
      </Container>
    </Box>
  );
};
