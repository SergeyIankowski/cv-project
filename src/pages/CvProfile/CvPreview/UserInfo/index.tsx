import {FC} from "react";
import DefaultUser from "@/assets/defaultUser.png";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import {TypographyDetails} from "@view/TypographyDetails";
import {Profile} from "@/graphql/interfaces/Profile.interface";
import {User} from "@/graphql/interfaces/User.interface";
import {EmptyFieldStrings} from "@/models/emptyFieldsStrings";

interface UserInfoProps {
  avatar: Profile["avatar"];
  name: Profile["full_name"];
  email: User["email"];
  position: User["position_name"];
  department: User["department_name"];
}

export const UserInfo: FC<UserInfoProps> = ({
  avatar,
  name,
  email,
  position,
  department,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "10px",
        p: "10px",
        width: "45%",
      }}
    >
      <Avatar
        src={avatar || DefaultUser}
        sx={{height: "200px", width: "200px", alignSelf: "center"}}
      />
      <Divider flexItem />
      <TypographyDetails
        variant="h5"
        fieldName="Name"
        content={name || EmptyFieldStrings.empty}
      />
      <Divider flexItem />
      <TypographyDetails
        variant="h5"
        fieldName="Email"
        content={email || EmptyFieldStrings.empty}
      />
      <Divider flexItem />
      <TypographyDetails
        variant="h5"
        fieldName="Position"
        content={position || EmptyFieldStrings.empty}
      />
      <Divider flexItem />
      <TypographyDetails
        variant="h5"
        fieldName="Department"
        content={department || EmptyFieldStrings.empty}
      />
    </Box>
  );
};
