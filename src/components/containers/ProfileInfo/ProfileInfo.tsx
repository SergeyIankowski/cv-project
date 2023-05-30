import {FC, useCallback, useEffect} from "react";
import {useParams} from "react-router-dom";
import Grid from "@mui/material/Grid";
import {AvatarProfileInput} from "@containers/AvatarProfileInput/AvatarProfileInput";
import {ProfileUserInfo} from "@view/ProfileUserInfo/ProfileUserInfo";
import {useUserQuery} from "@/graphql/hooks/useUserQuery";
import {ProfileForm} from "@containers/ProfileForm/ProfileForm";
import {ProgressSpinner} from "@/components/view/ProgressSpinner/ProgressSpinner";

export const ProfileInfo: FC = () => {
  const {id} = useParams();
  const {loadUserInfo, called, userData} = useUserQuery();

  const loadProfileInfo = useCallback(() => loadUserInfo(id!), [id]);

  useEffect(() => {
    if (id && !called) loadProfileInfo();
  }, [id, userData, called]);

  if (!called || !userData) return <ProgressSpinner />;

  return (
    <Grid container direction="column" alignItems="center" sx={{p: "50px 0"}}>
      <Grid container direction="column" gap="30px" sx={{width: "700px"}}>
        <AvatarProfileInput avatarPath={userData?.user.profile.avatar} />
        <ProfileUserInfo
          firstName={userData?.user.profile?.first_name}
          lastName={userData?.user.profile?.last_name}
          email={userData?.user.email}
          createdAt={userData?.user.created_at}
        />
        <ProfileForm
          firstName={userData?.user.profile?.first_name}
          lastName={userData?.user.profile?.last_name}
          department={userData?.user.department_name}
          position={userData?.user.position_name}
          onLoadUserInfo={loadProfileInfo}
        />
      </Grid>
    </Grid>
  );
};
