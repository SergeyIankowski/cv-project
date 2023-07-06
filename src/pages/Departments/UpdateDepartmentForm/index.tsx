import {FC, useContext} from "react";
import {useForm} from "react-hook-form";
import Box from "@mui/material/Box";

import {Input} from "@containers/Input";
import {Button} from "@containers/Button";
import {Department} from "@/graphql/interfaces/Department.interface";
import {DepartmentInput} from "@/graphql/interfaces/DepartmentInput.type";
import {ModalTemplateContext} from "@view/ModalTemplate/ModalTemplateContext";
import {ModalLayout} from "@view/MuiPagesStyles";
import {UpdateDepartmentFormFields} from "@/models/FormFieldsTypes";
import {useUpdateDepartmentMutation} from "@/graphql/hooks/useUpdateDepartmentMutation";

interface UpdateDepartmentFormProps {
  id: Department["id"];
  name: Department["name"];
}

export const UpdateDepartmentForm: FC<UpdateDepartmentFormProps> = ({
  id,
  name,
}) => {
  const {control, handleSubmit} = useForm<UpdateDepartmentFormFields>({
    defaultValues: {
      name,
    },
  });
  const {closeModal} = useContext(ModalTemplateContext);
  const {updateDepartment} = useUpdateDepartmentMutation();

  const onSubmit = async (data: DepartmentInput) => {
    await updateDepartment(id, data);
    closeModal();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={ModalLayout}>
        <Input<UpdateDepartmentFormFields>
          control={control}
          id="name"
          label="Name"
          name="name"
        />
        <Button variant="contained" color="error" size="small" type="submit">
          Update
        </Button>
      </Box>
    </form>
  );
};
