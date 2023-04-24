import {FC, ReactNode} from "react";
import Container from "@mui/material/Container";
import {MainHeader} from "@/components/view/MainHeader/MainHeader";
import {PageStyle} from "@view/MuiPagesStyles";
import {BreadCrumbs} from "@/components/view/BreadCrumbs/BreadCrumbs";

interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout: FC<PageLayoutProps> = ({children}) => {
  return (
    <Container sx={{...PageStyle, backgroundColor: "#cfcfcf"}}>
      <MainHeader />
      <BreadCrumbs breadCrumbsNodes={["one", "two", "three"]} />
      {children}
    </Container>
  );
};
