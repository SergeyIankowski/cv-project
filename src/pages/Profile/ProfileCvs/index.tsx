import {FC, useEffect} from "react";
import {useParams} from "react-router-dom";
import Typography from "@mui/material/Typography";
import {ProgressSpinner} from "@view/ProgressSpinner/ProgressSpinner";
import {useUserData} from "@/hooks/useUserData";
import {AuthInfoService} from "@/services/AuthInfoService";
import {ProfileTableCvs} from "../ProfileTableCvs";

export const ProfileCvs: FC = () => {
  const {id} = useParams();
  const {loadProfileInfo, userData, loadingUserData} = useUserData(id!);

  useEffect(() => {
    loadProfileInfo(id);
  }, []);

  if (loadingUserData) return <ProgressSpinner />;
  if (userData.cvs.length === 0) return <Typography>No Data</Typography>;
  if (AuthInfoService.isAdmin() || AuthInfoService.isAuthorizedUser(id!)) {
    return <ProfileTableCvs cvsData={userData.cvs} />;
  }
  return <></>;
};
