import {FC, ReactNode} from "react";
import {useNavigate} from "react-router-dom";
import {HeaderAuth} from "@/components/view/AuthHeader/HeaderAuth";
import {HeaderLinkStyle} from "@/components/view/MuiPagesStyles";
import {PageContainer} from "@/components/view/PageContainer/PageContainer";
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
              backgroundColor: "#ef9d10",
            },
          }}
          sx={{
            "& button": {
              fontSize: "1.3rem",
              color: "white",
            },
            "& button.Mui-selected": {
              color: "#ef9d10",
            },
          }}
        >
          <Tab
            value={Pages.auth.login}
            label="LOGIN"
            sx={HeaderLinkStyle}
            onClick={() => navigate(Pages.auth.login)}
          />
          <Tab
            value={Pages.auth.signup}
            label="SIGNUP"
            sx={HeaderLinkStyle}
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
