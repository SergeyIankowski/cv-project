import {FC, ReactNode} from "react";
import {useNavigate} from "react-router-dom";
import {HeaderAuth} from "@view/AuthHeader/HeaderAuth";
import {HeaderLinksStyle, colors} from "@view/MuiPagesStyles";
import {PageContainer} from "@view/PageContainer/PageContainer";
import {Pages} from "@/models/Pages";
import Grid from "@mui/material/Grid";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import {useTabsLinksHighlighting} from "@/hooks/useTabsLinksHighlighting";

interface AuthPageLayoutProps {
  children: ReactNode;
}

export const AuthPageLayout: FC<AuthPageLayoutProps> = ({children}) => {
  const [value, handleChange] = useTabsLinksHighlighting(Pages.auth.login);
  const navigate = useNavigate();

  return (
    <PageContainer>
      <HeaderAuth>
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            style: {
              backgroundColor: colors.authLinksColor,
            },
          }}
          sx={HeaderLinksStyle}
        >
          <Tab
            value={Pages.auth.login}
            label="LOGIN"
            onClick={() => navigate(Pages.auth.login)}
          />
          <Tab
            value={Pages.auth.signup}
            label="SIGNUP"
            onClick={() => navigate(Pages.auth.signup)}
          />
        </Tabs>
      </HeaderAuth>
      <Grid container justifyContent="center" alignItems="flex-start">
        {children}
      </Grid>
    </PageContainer>
  );
};
