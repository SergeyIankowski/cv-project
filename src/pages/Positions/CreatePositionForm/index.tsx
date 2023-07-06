import {FC, useContext} from "react";
import {useForm} from "react-hook-form";
import Box from "@mui/material/Box";
import {Input} from "@containers/Input";
import {Button} from "@containers/Button";
import {ModalTemplateContext} from "@view/ModalTemplate/ModalTemplateContext";
import {ModalLayout} from "@view/MuiPagesStyles";
import {PositionInput} from "@/graphql/interfaces/PositionInput.type";
import {useCreatePositionMutation} from "@/graphql/hooks/useCreatePositionMutation";
import {CreatePositionFormFields} from "@/models/FormFieldsTypes";

export const CreatePositionForm: FC = () => {
  const {control, handleSubmit} = useForm<CreatePositionFormFields>();
  const {createPosition} = useCreatePositionMutation();
  const {closeModal} = useContext(ModalTemplateContext);

  const onSubmit = async (data: PositionInput) => {
    await createPosition(data);
    closeModal();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={ModalLayout}>
        <Input<CreatePositionFormFields>
          control={control}
          id="name"
          label="Name"
          name="name"
        />
        <Button variant="contained" color="error" size="small" type="submit">
          Create
        </Button>
      </Box>
    </form>
  );
};
