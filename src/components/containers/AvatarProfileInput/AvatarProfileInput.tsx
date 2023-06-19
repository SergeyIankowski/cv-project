import {ChangeEvent, DragEventHandler, FC} from "react";
import {useParams} from "react-router-dom";
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
import {showToast} from "@/hoc/ToastsProvider";
import {TOAST_TYPES} from "@/models/ToastTypes";
import {useBooleanState} from "@/hooks/useBooleanState";

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
  const [dragActive, setDragActiveTrue, setDragActiveFalse] =
    useBooleanState(false);

  const uploadAvatarData = async (avatarData: AvatarData) => {
    if (AuthInfoService.isAuthorizedUser(id!)) {
      await uploadAvatar(id!, avatarData);
      onLoadUserInfo();
    }
    if (AuthInfoService.isUnAuthorizedUser(id!)) {
      showToast("Cannot update photo of other profiles", TOAST_TYPES.error);
    }
  };

  const validateFileAndUpload = (file: File | undefined) => {
    if (AuthInfoService.isUnAuthorizedUser(id!)) {
      showToast("cannot update photo of other profiles", TOAST_TYPES.error);
      return;
    }
    if (file && id && file.size > 4000000) {
      showToast("File more than 0.5MB", TOAST_TYPES.error);
      return;
    }
    if (file && id && file.size <= 4000000) {
      convertAvatarToRequestData(file, uploadAvatarData);
    }
  };

  const deleteAvatarHandler = async () => {
    if (AuthInfoService.isAuthorizedUser(id!)) {
      await deleteAvatar(id!);
      onLoadUserInfo();
    }
    if (AuthInfoService.isUnAuthorizedUser(id!)) {
      showToast("Сannot delete photo of other profiles", TOAST_TYPES.error);
    }
  };

  const changeHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const file = e.target.files?.[0];
    validateFileAndUpload(file);
  };

  const dragEnterHandler: DragEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    e.stopPropagation();
    setDragActiveTrue();
  };

  const dragOverHandler: DragEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    e.stopPropagation();
    setDragActiveTrue();
  };

  const dragLeaveHandler: DragEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    e.stopPropagation();
    setDragActiveFalse();
  };

  const dropHandler: DragEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    e.stopPropagation();
    setDragActiveFalse();

    const file = e.dataTransfer.files[0];
    validateFileAndUpload(file);
  };

  return (
    <form
      onDrop={dropHandler}
      onDragEnter={dragEnterHandler}
      onDragOver={dragOverHandler}
      onDragLeave={dragLeaveHandler}
    >
      <Grid container justifyContent="space-between" gap="40px">
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
              {dragActive ? (
                <Typography variant="h6" sx={UploadHead}>
                  "PUT THE FILE"
                </Typography>
              ) : (
                <>
                  <Grid container alignItems="flex-end">
                    <UploadFileIcon sx={{width: "50px", height: "50px"}} />
                    <Typography variant="h6" sx={UploadHead}>
                      "UPLOAD AVATAR IMAGE"
                    </Typography>
                  </Grid>
                  <Typography variant="subtitle1" sx={{color: "grey"}}>
                    png, jpg or gif no more than 0.5MB
                  </Typography>
                </>
              )}
              <input
                type="file"
                accept="image/png, image/jpeg, image/gif"
                style={{visibility: "hidden"}}
                onChange={changeHandler}
              />
            </Grid>
          </label>
        </Box>
      </Grid>
    </form>
  );
};
