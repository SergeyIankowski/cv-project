import {ChangeEvent, FC} from "react";
import {useParams} from "react-router-dom";
import toast from "react-hot-toast";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Grid from "@mui/material/Grid";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import {AvatarStyle, UploadHead} from "./AvatarProfileStyle";
import Typography from "@mui/material/Typography";
import {convertAvatarToRequestData} from "@/utils/convertAvatarToRequestData";
import {useUploadAvatar} from "@/graphql/hooks/useUploadAvatar";
import {AvatarData} from "@/models/AvatarData.type";
import {useDeleteAvatar} from "@/graphql/hooks/useDeleteAvatar";
import {AuthInfoService} from "@/services/AuthInfoService";

interface AvatarProfileInputProps {
  avatarPath: string;
  onLoadUserInfo: () => void;
}

export const AvatarProfileInput: FC<AvatarProfileInputProps> = ({
  avatarPath,
  onLoadUserInfo,
}) => {
  const {id} = useParams();
  const {uploadAvatar} = useUploadAvatar();
  const {deleteAvatar} = useDeleteAvatar();

  const uploadAvatarData = async (avatarData: AvatarData) => {
    const authorizedId = AuthInfoService.getAuthInfo().id;
    if (id === authorizedId) {
      await uploadAvatar(id!, avatarData);
      onLoadUserInfo();
    }
    if (id !== authorizedId) {
      toast("cannot update photo of other profiles");
    }
  };

  const deleteAvatarHandler = async () => {
    const authorizedId = AuthInfoService.getAuthInfo().id;
    if (id === authorizedId) {
      await deleteAvatar(id!);
      onLoadUserInfo();
    }
    if (id !== authorizedId) {
      toast("cannot delete photo of other profiles");
    }
  };

  const changeHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && id) convertAvatarToRequestData(file, uploadAvatarData);
  };

  return (
    <Grid container justifyContent="center" gap="40px">
      <Box>
        <Box sx={{position: "relative", width: "130px"}}>
          {
            <IconButton
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                transform: "translate(50%, -50%)",
              }}
              onClick={deleteAvatarHandler}
            >
              <CloseIcon />
            </IconButton>
          }
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
            <input
              type="file"
              style={{visibility: "hidden"}}
              onChange={changeHandler}
            />
          </Grid>
        </label>
      </Box>
    </Grid>
  );
};
