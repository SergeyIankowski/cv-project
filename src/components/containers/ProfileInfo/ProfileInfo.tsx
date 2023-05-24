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
  const {loadUserInfo, called, data} = useUserQuery();

  const loadProfileInfo = useCallback(() => {
    loadUserInfo({
      variables: {
        id,
      },
    });
  }, [id]);

  useEffect(() => {
    if (id) loadProfileInfo();
  }, [id]);

  if (!called || !data) return <ProgressSpinner />;

  return (
    <Grid container direction="column" alignItems="center" sx={{p: "50px 0"}}>
      <Grid container direction="column" gap="30px" sx={{width: "700px"}}>
        <AvatarProfileInput avatarPath={data?.user.profile.avatar} />
        <ProfileUserInfo
          firstName={data?.user.profile?.first_name}
          lastName={data?.user.profile?.last_name}
          email={data?.user.email}
          createdAt={data?.user.created_at}
        />
        <ProfileForm
          firstName={data?.user.profile?.first_name}
          lastName={data?.user.profile?.last_name}
          department={data?.user.department.id}
          position={data?.user.position.id}
          onLoadUserInfo={loadProfileInfo}
        />
      </Grid>
    </Grid>
  );
};
