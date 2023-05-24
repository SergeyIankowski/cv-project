import {FC} from "react";
import MenuItem from "@mui/material/MenuItem";
import {Box} from "@mui/material";
import {InputsContainerStyle} from "./ProfileFormStyle";
import {Input, InputFields} from "@containers/Input";
import {Button} from "@containers/Button";
import {useForm} from "react-hook-form";
import {UploadedUser} from "@/models/UploadedUser.type";
import {useDepartmentsQuery} from "@/graphql/hooks/useDepartmentsQuery";
import {usePositionsQuery} from "@/graphql/hooks/usePositionsQuery";

interface ProfileFormProps {
  firstName: string;
  lastName: string;
  department: string;
  position: string;
  onLoadUserInfo: () => void;
}

export const ProfileForm: FC<ProfileFormProps> = ({
  firstName,
  lastName,
  department,
  position,
  onLoadUserInfo,
}) => {
  const {departments} = useDepartmentsQuery();
  const {positions} = usePositionsQuery();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<InputFields>({
    defaultValues: {
      first_name: firstName,
      last_name: lastName,
      departmentId: department,
      positionId: position,
    },
  });

  const onSubmit = (data: UploadedUser) => {
    onLoadUserInfo();
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={InputsContainerStyle}>
        <Input
          control={control}
          type="text"
          id="firstName"
          label="First Name"
          name="first_name"
        />
        <Input
          control={control}
          type="text"
          id="lastName"
          label="Last Name"
          name="last_name"
        />
        <Input
          control={control}
          select
          id="department"
          label="Departments"
          name="departmentId"
        >
          {departments.map((department: string) => (
            <MenuItem key={department} value={department}>
              {department}
            </MenuItem>
          ))}
        </Input>
        <Input
          control={control}
          select
          id="position"
          label="Position"
          name="positionId"
        >
          {positions.map((position: string) => (
            <MenuItem key={position} value={position}>
              {position}
            </MenuItem>
          ))}
        </Input>
        <Button variant="contained" color="error" size="small" type="submit">
          Update
        </Button>
      </Box>
    </form>
  );
};
