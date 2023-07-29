import {FC, useContext} from "react";
import {useForm} from "react-hook-form";
import {useTranslation} from "react-i18next";
import Box from "@mui/material/Box";
import {Input} from "@containers/Input";
import {Button} from "@containers/Button";
import {ModalTemplateContext} from "@view/ModalTemplate/ModalTemplateContext";
import {ModalLayout} from "@view/MuiPagesStyles";
import {useCreateSkillMutation} from "@/graphql/hooks/useCreateSkillMutation";
import {SkillInput} from "@/graphql/interfaces/SkillInput";
import {CreateSkillFields} from "@/models/FormFieldsTypes";

export const CreateSkillForm: FC = () => {
  const {control, handleSubmit} = useForm<CreateSkillFields>();
  const {closeModal} = useContext(ModalTemplateContext);
  const {createSkill} = useCreateSkillMutation();
  const {t} = useTranslation();

  const onSubmit = async (data: SkillInput) => {
    await createSkill(data);
    closeModal();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={ModalLayout}>
        <Input<CreateSkillFields>
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
