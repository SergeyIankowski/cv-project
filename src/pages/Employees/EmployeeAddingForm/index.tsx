import {FC} from "react";
import {useForm} from "react-hook-form";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import {Input, InputFields} from "@containers/Input";
import {Button} from "@containers/Button";
import {useDepartmentsQuery} from "@/graphql/hooks/useDepartmentsQuery";
import {usePositionsQuery} from "@/graphql/hooks/usePositionsQuery";
import {useCreateUser} from "@/graphql/hooks/useCreateUser";
import {convertCreatedUserDataToRequestData} from "@/utils/convertCreatedUserDataToRequestData";
import {ROLES} from "@/models/Roles";

const validationMessages = {
  incorrectEmail: "email is not correct",
  emptyField: "field is empty",
};

export const EmployeeAddingForm: FC = () => {
  const {departments} = useDepartmentsQuery();
  const {positions} = usePositionsQuery();
  const {createUser} = useCreateUser();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<InputFields>();

  const onSubmit = async (data: InputFields) => {
    const dataToload = convertCreatedUserDataToRequestData(data);
    await createUser(dataToload);
    console.log(dataToload);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container direction="column" gap="10px">
        <Input
          control={control}
          type="text"
          id="email"
          label="Email"
          name="email"
          rules={{required: true, pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i}}
          error={Boolean(errors.email)}
          helperText={errors.email && validationMessages.incorrectEmail}
        />
        <Input
          control={control}
          type="text"
          id="password"
          label="Password"
          name="password"
          error={Boolean(errors.password)}
          helperText={errors.password && validationMessages.emptyField}
          rules={{required: true}}
        />
        <Input
          control={control}
          type="text"
          id="first_name"
          label="First Name"
          name="first_name"
          error={Boolean(errors.first_name)}
          helperText={errors.first_name && validationMessages.emptyField}
          rules={{required: true}}
        />
        <Input
          control={control}
          type="text"
          id="lastName"
          label="Last Name"
          name="last_name"
          error={Boolean(errors.last_name)}
          helperText={errors.last_name && validationMessages.emptyField}
          rules={{required: true}}
        />
        <Input
          control={control}
          select
          id="department"
          label="Departments"
          name="departmentId"
          error={Boolean(errors.departmentId)}
          helperText={errors.departmentId && validationMessages.emptyField}
          rules={{required: true}}
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
          error={Boolean(errors.positionId)}
          helperText={errors.positionId && validationMessages.emptyField}
          rules={{required: true}}
        >
          {positions.map((position: {name: string; id: number}) => (
            <MenuItem key={position.name} value={position.id}>
              {position.name}
            </MenuItem>
          ))}
        </Input>
        <Input
          control={control}
          select
          id="role"
          label="Role"
          name="role"
          error={Boolean(errors.role)}
          helperText={errors.role && validationMessages.emptyField}
          rules={{required: true}}
        >
          <MenuItem key={ROLES.admin} value={ROLES.admin}>
            {ROLES.admin}
          </MenuItem>
          <MenuItem key={ROLES.employee} value={ROLES.employee}>
            {ROLES.employee}
          </MenuItem>
        </Input>
        <Button variant="contained" color="error" size="small" type="submit">
          Create Employee
        </Button>
      </Grid>
    </form>
  );
};