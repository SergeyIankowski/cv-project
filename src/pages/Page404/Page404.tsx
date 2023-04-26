import Typography from "@mui/material/Typography";
import {PageStyle} from "@/components/view/MuiPagesStyles";
import {PageContainer} from "@/components/view/PageContainer/PageContainer";

export const Page404 = () => {
  return (
    <PageContainer sx={PageStyle}>
      <Typography component={"h1"}>Page not found</Typography>
    </PageContainer>
  );
};
