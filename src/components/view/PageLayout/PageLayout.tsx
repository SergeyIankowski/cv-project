import {FC, ReactNode} from "react";
import Container from "@mui/material/Container";
import {MainHeader} from "@/components/view/MainHeader/MainHeader";
import {PageLayoutStyle, PageStyle} from "@view/MuiPagesStyles";
import {BreadCrumbs} from "@/components/view/BreadCrumbs/BreadCrumbs";
import {BreadCrumbsData} from "@/models/BreadCrumbsData.type";

interface PageLayoutProps {
  children: ReactNode;
  linksData: BreadCrumbsData;
}

export const PageLayout: FC<PageLayoutProps> = ({children, linksData}) => {
  return (
    <Container sx={{...PageStyle, backgroundColor: "#cfcfcf"}}>
      <MainHeader />
      <Container sx={PageLayoutStyle} disableGutters={true}>
        <BreadCrumbs breadCrumbsLinks={linksData} />
        {children}
      </Container>
    </Container>
  );
};
