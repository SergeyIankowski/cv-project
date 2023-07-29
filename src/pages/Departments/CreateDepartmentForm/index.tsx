import {FC, useContext} from "react";
import {useForm} from "react-hook-form";
import {useTranslation} from "react-i18next";
import Box from "@mui/material/Box";

import {Input} from "@containers/Input";
import {Button} from "@containers/Button";
import {DepartmentInput} from "@/graphql/interfaces/DepartmentInput.type";
import {ModalTemplateContext} from "@view/ModalTemplate/ModalTemplateContext";
import {ModalLayout} from "@view/MuiPagesStyles";
import {useCreateDepartmentMutation} from "@/graphql/hooks/useCreateDepartmentMutation";
import {CreateDepartmentFormFields} from "@/models/FormFieldsTypes";

export const CreateDepartmentForm: FC = () => {
  const {control, handleSubmit} = useForm<CreateDepartmentFormFields>();
  const {closeModal} = useContext(ModalTemplateContext);
  const {createDepartment} = useCreateDepartmentMutation();
  const {t} = useTranslation();

  const onSubmit = async (data: DepartmentInput) => {
    await createDepartment(data);
    closeModal();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={ModalLayout}>
        <Input<CreateDepartmentFormFields>
          control={control}
          id="name"
          label={t("name")}
          name="name"
        />
        <Button variant="contained" color="error" size="small" type="submit">
          {t("create").toUpperCase()}
        </Button>
      </Box>
    </form>
  );
};
