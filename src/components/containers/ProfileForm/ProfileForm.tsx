import {FC} from "react";
import {useParams} from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import {Box} from "@mui/material";
import {InputsContainerStyle} from "./ProfileFormStyle";
import {Input, InputFields} from "@containers/Input";
import {Button} from "@containers/Button";
import {useForm} from "react-hook-form";
import {UploadedUser} from "@/models/UploadedUser.type";
import {useDepartmentsQuery} from "@/graphql/hooks/useDepartmentsQuery";
import {usePositionsQuery} from "@/graphql/hooks/usePositionsQuery";
import {useUpdateUser} from "@/graphql/hooks/useUpdateUser";
import {convertProfileFormDataToRequestData} from "@/utils/convertProfileFormDataToRequestData";

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
  const {updateUser} = useUpdateUser();
  const {id} = useParams();
  const {
    control,
    handleSubmit,
    formState: {isDirty},
    reset,
  } = useForm<InputFields>({
    defaultValues: {
      first_name: firstName,
      last_name: lastName,
      departmentId: department,
      positionId: position,
    },
    resetOptions: {keepDirtyValues: true},
  });

  const onSubmit = async (data: UploadedUser) => {
    console.log(data);
    try {
      const dataForSend = convertProfileFormDataToRequestData(data);

      await updateUser({
        variables: {
          id: id,
          user: dataForSend,
        },
      });

      onLoadUserInfo();
    } catch (e) {
      console.error(e);
    }
    reset({
      first_name: firstName,
      last_name: lastName,
      departmentId: department,
      positionId: position,
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={InputsContainerStyle}>
        <Input
          control={control}
          type="text"
          id="first_name"
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
          {departments.map((department: {name: string; id: number}) => (
            <MenuItem key={department.name} value={department.id}>
              {department.name}
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
          {positions.map((position: {name: string; id: number}) => (
            <MenuItem key={position.name} value={position.id}>
              {position.name}
            </MenuItem>
          ))}
        </Input>
        <Button
          variant="contained"
          color="error"
          size="small"
          type="submit"
          disabled={!isDirty}
        >
          Update
        </Button>
      </Box>
    </form>
  );
};
