import {FC, ReactNode} from "react";
import Container from "@mui/material/Container";
import {MainHeader} from "@view/MainHeader/MainHeader";
import {PageLayoutStyle, PageStyle} from "@view/MuiPagesStyles";
import {BreadCrumbs} from "@view/BreadCrumbs/BreadCrumbs";

interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout: FC<PageLayoutProps> = ({children}) => {
  return (
    <Container sx={PageStyle}>
      <MainHeader />
      <Container
        component={"main"}
        sx={PageLayoutStyle}
        disableGutters={true}
        maxWidth="xl"
      >
        <BreadCrumbs />
        {children}
      </Container>
    </Container>
  );
};
