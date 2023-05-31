import {FC} from "react";
import Grid from "@mui/material/Grid";
import {AvatarProfileInput} from "@containers/AvatarProfileInput/AvatarProfileInput";
import {ProfileUserInfo} from "@view/ProfileUserInfo/ProfileUserInfo";
import {ProfileForm} from "@containers/ProfileForm/ProfileForm";
import {ProgressSpinner} from "@/components/view/ProgressSpinner/ProgressSpinner";
import {useUserData} from "@/hooks/useUserData";

export const ProfileInfo: FC = () => {
  const {loadProfileInfo, called, userData} = useUserData();

  if (!called || !userData) return <ProgressSpinner />;

  return (
    <Grid container direction="column" alignItems="center" sx={{p: "50px 0"}}>
      <Grid container direction="column" gap="30px" sx={{width: "700px"}}>
        <AvatarProfileInput
          avatarPath={userData?.profile.avatar}
          onLoadUserInfo={loadProfileInfo}
        />
        <ProfileUserInfo />
        <ProfileForm />
      </Grid>
    </Grid>
  );
};
