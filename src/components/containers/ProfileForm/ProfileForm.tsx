import {FC, useState} from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import {MenuItem, Typography} from "@mui/material";
import {FetchedUser} from "@/models/FetchedUser.type";
import {AvatarProfileInput} from "@containers/AvatarProfileInput/AvatarProfileInput";
import {InputsContainerStyle} from "./ProfileFormStyle";
import {Input} from "../Input";

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
  position: {
    name: "Business Analyst",
  },
  role: "employee",
};
const DATE_OPTIONS = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
} as Intl.DateTimeFormatOptions;

export const ProfileForm: FC = () => {
  const [date, setDate] = useState(new Date(Number(mock.created_at)));

  return (
    <Grid container direction="column" alignItems="center" sx={{p: "50px 0"}}>
      <Grid container direction="column" gap="30px" sx={{width: "700px"}}>
        <AvatarProfileInput avatarPath={mock.profile.avatar} />
        <Box>
          <Typography variant="h4">
            {mock.profile.first_name} {mock.profile.last_name}
          </Typography>
          <Typography variant="subtitle1">{mock.email}</Typography>
          <Typography variant="subtitle1">
            A member since {date.toLocaleDateString("en-US", DATE_OPTIONS)}
          </Typography>
        </Box>
        <Box sx={InputsContainerStyle}>
          <Input type="text" id="firstName" label="First Name" />
          <Input type="text" id="lastName" label="Last Name" />
          <Input select id="Select Department" label="Departments">
            <MenuItem value="some">some</MenuItem>
          </Input>
          <Input type="text" id="Position" label="Position" />
        </Box>
      </Grid>
    </Grid>
  );
};
