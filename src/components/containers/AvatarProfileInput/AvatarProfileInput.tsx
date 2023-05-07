import {FC} from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Grid from "@mui/material/Grid";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import {AvatarStyle, UploadHead} from "./AvatarProfileStyle";
import Typography from "@mui/material/Typography";

interface AvatarProfileInputProps {
  avatarPath: string;
}

export const AvatarProfileInput: FC<AvatarProfileInputProps> = ({
  avatarPath,
}) => {
  return (
    <Grid container justifyContent="center" gap="40px">
      <Box>
        <Box sx={{position: "relative", width: "130px"}}>
          <IconButton
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              transform: "translate(50%, -50%)",
            }}
          >
            <CloseIcon />
          </IconButton>
          <Avatar src={avatarPath} sx={AvatarStyle} />
        </Box>
      </Box>
      <Box>
        <label>
          <Grid container direction="column" alignItems="center">
            <Grid container alignItems="flex-end">
              <UploadFileIcon sx={{width: "50px", height: "50px"}} />
              <Typography variant="h6" sx={UploadHead}>
                UPLOAD AVATAR IMAGE
              </Typography>
            </Grid>
            <Typography variant="subtitle1" sx={{color: "grey"}}>
              png, jpg or gif no more than 0.5MB
            </Typography>
            <input type="file" style={{visibility: "hidden"}} />
          </Grid>
        </label>
      </Box>
    </Grid>
  );
};
