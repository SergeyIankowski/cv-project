import {FC, useEffect} from "react";
import {useParams} from "react-router-dom";
import {useUserData} from "@/hooks/useUserData";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {AccordionTemplate} from "@view/AccordionTemplate";
import {ProgressSpinner} from "@view/ProgressSpinner/ProgressSpinner";
import {UpdateCvModal} from "../UpdateCvModal";
import {UnbindCvButton} from "../UnbindCvButton";

export const CvsAccordion: FC = () => {
  const {id} = useParams();
  const {loadProfileInfo, userData, loadingUserData} = useUserData(id!);

  useEffect(() => {
    loadProfileInfo(id);
  }, []);

  if (loadingUserData) return <ProgressSpinner />;
  return (
    <Grid container direction="column" gap="2px">
      {userData.cvs.map(cv => (
        <AccordionTemplate key={cv.name} title={cv.name}>
          <Grid container direction="column" gap="5px">
            <Typography fontSize="20px">
              Description: {cv.description}
            </Typography>
            <Grid container direction="row" gap="2px" alignItems="center">
              <Typography fontSize="18px">Has Template: </Typography>
              {cv.isTemplate ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
            </Grid>
            <Grid container direction="row" gap="5px" alignItems="center">
              <UnbindCvButton id={cv.id} />
              <UpdateCvModal />
            </Grid>
          </Grid>
        </AccordionTemplate>
      ))}
    </Grid>
  );
};
