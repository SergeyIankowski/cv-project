import {FC} from "react";
import {useParams} from "react-router-dom";
import Grid from "@mui/material/Grid";
import {AvatarProfileInput} from "@/pages/Profile/AvatarProfileInput";
import {ProfileUserInfo} from "@/pages/Profile/ProfileUserInfo";
import {ProfileForm} from "@/pages/Profile/ProfileForm/ProfileForm";
import {ProgressSpinner} from "@view/ProgressSpinner/ProgressSpinner";
import {useUserData} from "@/hooks/useUserData";

export const ProfileInfo: FC = () => {
  const {id} = useParams();
  const {loadProfileInfo, calledUserData, userData} = useUserData(id!);

  if (!calledUserData || !userData) return <ProgressSpinner />;

  return (
    <Grid container direction="column" alignItems="center" sx={{p: "50px 0"}}>
      <Grid container direction="column" gap="30px" sx={{width: "700px"}}>
        <AvatarProfileInput
          avatarPath={userData.profile.avatar!}
          onLoadUserInfo={loadProfileInfo}
        />
        <ProfileUserInfo />
        <ProfileForm />
      </Grid>
    </Grid>
  );
};
