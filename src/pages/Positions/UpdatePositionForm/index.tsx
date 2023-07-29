import {FC, useContext} from "react";
import {useForm} from "react-hook-form";
import {useTranslation} from "react-i18next";
import Box from "@mui/material/Box";
import {Input} from "@containers/Input";
import {Button} from "@containers/Button";
import {ModalTemplateContext} from "@view/ModalTemplate/ModalTemplateContext";
import {ModalLayout} from "@view/MuiPagesStyles";
import {PositionInput} from "@/graphql/interfaces/PositionInput.type";
import {UpdatePositionFormFileds} from "@/models/FormFieldsTypes/UpdatePostionFormFields.type";
import {useUpdatePositionMutation} from "@/graphql/hooks/useUpdatePositionMutation";
import {Position} from "@/graphql/interfaces/Position.interface";

interface UpdatePositionFormProps {
  id: Position["id"];
  name: Position["name"];
}

export const UpdatePositionForm: FC<UpdatePositionFormProps> = ({id, name}) => {
  const {control, handleSubmit} = useForm<UpdatePositionFormFileds>({
    defaultValues: {
      name,
    },
  });
  const {updatePosition} = useUpdatePositionMutation();
  const {closeModal} = useContext(ModalTemplateContext);
  const {t} = useTranslation();

  const onSubmit = async (data: PositionInput) => {
    await updatePosition(id, data);
    closeModal();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={ModalLayout}>
        <Input<UpdatePositionFormFileds>
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
