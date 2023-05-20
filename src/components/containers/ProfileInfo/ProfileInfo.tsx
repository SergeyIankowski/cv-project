import {FC, useCallback, useEffect} from "react";
import {useParams} from "react-router-dom";
import Grid from "@mui/material/Grid";
import {FetchedUser} from "@/models/FetchedUser.type";
import {AvatarProfileInput} from "@containers/AvatarProfileInput/AvatarProfileInput";
import {ProfileUserInfo} from "@view/ProfileUserInfo/ProfileUserInfo";
import {useUserQuery} from "@/graphql/hooks/useUserQuery";
import {ProfileForm} from "@containers/ProfileForm/ProfileForm";

const mock: FetchedUser = {
  id: "1600",
  created_at: "1680070634519",
  profile: {
    avatar:
      "https://res.cloudinary.com/cv-gen-cloud/image/upload/v1681132206/user_avatars/gbypdFYcCZDFY5D_YNJ5g.jpg",
    first_name: "Luke",
    last_name: "Skywalker",
  },
  email: "LukeSkywalker@gmail.com",
  department_name: "Devops",
  position_name: "Business Analyst",
  role: "employee",
};

export const ProfileInfo: FC = () => {
  const {id} = useParams();
  const {loadUserInfo, data} = useUserQuery();

  const loadProfileInfo = useCallback(() => {
    loadUserInfo({
      variables: {
        id,
      },
    });
  }, [id]);

  useEffect(() => {
    if (id) {
      loadProfileInfo();
      console.log("id", id);
      console.log("data", data);
    }
  }, [id, data]);

  return (
    <Grid container direction="column" alignItems="center" sx={{p: "50px 0"}}>
      <Grid container direction="column" gap="30px" sx={{width: "700px"}}>
        <AvatarProfileInput avatarPath={mock.profile.avatar} />
        <ProfileUserInfo
          firstName={data?.user.profile?.first_name}
          lastName={data?.user.profile?.last_name}
          email={data?.user.email}
          createdAt={data?.user.created_at}
        />
        <ProfileForm
          firstName={data?.user.profile?.first_name}
          lastName={data?.user.profile?.last_name}
          department={data?.user.department_name}
          position={data?.user.position_name}
          onLoadUserInfo={loadProfileInfo}
        />
      </Grid>
    </Grid>
  );
};
