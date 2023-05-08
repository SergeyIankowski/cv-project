import {FC, useState} from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import {FetchedUser} from "@/models/FetchedUser.type";
import {AvatarProfileInput} from "@containers/AvatarProfileInput/AvatarProfileInput";
import {InputsContainerStyle} from "./ProfileFormStyle";
import {Input} from "@containers/Input";
import {Button} from "@containers/Button";

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
const DATE_OPTIONS: Intl.DateTimeFormatOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

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
        <FormControl sx={InputsContainerStyle} onSubmit={() => {}}>
          <Input type="text" id="firstName" label="First Name" />
          <Input type="text" id="lastName" label="Last Name" />
          <Input select id="department" label="Departments">
            <MenuItem value="some">some</MenuItem>
          </Input>
          <Input select id="position" label="Position" />
          <Button
            variant="contained"
            color="error"
            size="small"
            type="submit"
            disabled
          >
            Update
          </Button>
        </FormControl>
      </Grid>
    </Grid>
  );
};
