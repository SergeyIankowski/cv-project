import {FC, useEffect, useState} from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {useUserData} from "@/hooks/useUserData";

const DATE_OPTIONS: Intl.DateTimeFormatOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

export const ProfileUserInfo: FC = () => {
  const [date, setDate] = useState<Date>(new Date());
  const {userData} = useUserData();

  useEffect(() => {
    const mountedDate = new Date(Number(userData.created_at));
    setDate(mountedDate);
  }, [userData.created_at]);

  return (
    <Box>
      <Typography variant="h4">
        {userData.profile.first_name} {userData.profile.last_name}
      </Typography>
      <Typography variant="subtitle1">{userData.email}</Typography>
      <Typography variant="subtitle1">
        A member since {date.toLocaleDateString("en-US", DATE_OPTIONS)}
      </Typography>
    </Box>
  );
};
