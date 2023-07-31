import {FC, ReactNode} from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import {colors} from "@view/MuiPagesStyles";

interface AccordionTemplateProps {
  title: string;
  children: ReactNode;
}

export const AccordionTemplate: FC<AccordionTemplateProps> = ({
  title,
  children,
}) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon style={{color: colors.headerItemsColor}} />}
        aria-controls="panel1a-content"
        id={String(title)}
        sx={{backgroundColor: colors.headerBgColor}}
      >
        <Typography
          variant="h5"
          sx={{color: colors.headerItemsColor, borderColor: "white"}}
        >
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};
