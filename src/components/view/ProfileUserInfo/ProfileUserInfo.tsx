import {FC, useState} from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface ProfileUserInfoProps {
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
}

const DATE_OPTIONS: Intl.DateTimeFormatOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

export const ProfileUserInfo: FC<ProfileUserInfoProps> = ({
  firstName,
  lastName,
  email,
  createdAt,
}) => {
  const [date] = useState(new Date(Number(createdAt)));

  return (
    <Box>
      <Typography variant="h4">
        {firstName} {lastName}
      </Typography>
      <Typography variant="subtitle1">{email}</Typography>
      <Typography variant="subtitle1">
        A member since {date.toLocaleDateString("en-US", DATE_OPTIONS)}
      </Typography>
    </Box>
  );
};
