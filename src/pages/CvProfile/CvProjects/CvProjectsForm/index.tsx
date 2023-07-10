import {FC, useContext, useEffect} from "react";
import {useForm} from "react-hook-form";
import {useParams} from "react-router-dom";
import Box from "@mui/material/Box";

import {useCvQuery} from "@/graphql/hooks/useCvQuery";
import {useProjectsQuery} from "@/graphql/hooks/useProjectsQuery";
import {ModalLayout} from "@view/MuiPagesStyles";
import {ModalTemplateContext} from "@view/ModalTemplate/ModalTemplateContext";
import {ProgressSpinner} from "@view/ProgressSpinner/ProgressSpinner";
import {Button} from "@containers/Button";
import {SelectWithControl} from "@containers/SelectWithControl";
import {UpdateCvProjectsFormFields} from "@/models/FormFieldsTypes";
import {useUpdateCvMutation} from "@/graphql/hooks/useUpdateCvMutation";
import {CvInput} from "@/graphql/interfaces/CvInput.interface";
import {prepareCvProjectsForSend} from "@/utils/prepareCvProjectsForSend";

export const CvProjectsForm: FC = () => {
  const {id} = useParams();
  const {loadCv, cvData, called, loading} = useCvQuery();
  const {projects} = useProjectsQuery();
  const {updateCv} = useUpdateCvMutation();
  const {closeModal} = useContext(ModalTemplateContext);
  const {control, handleSubmit, reset} = useForm<UpdateCvProjectsFormFields>();

  useEffect(() => {
    if (!called) loadCv(id!);
    if (called) {
      reset({projects: cvData.projects.map(project => project.id)});
    }
  }, [cvData]);

  const onSubmit = async (data: UpdateCvProjectsFormFields) => {
    const cvForSend: CvInput = prepareCvProjectsForSend(cvData, data.projects);
    await updateCv(id!, cvForSend);
    await loadCv(id!);
    closeModal();
  };
  if (loading) return <ProgressSpinner />;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={ModalLayout}>
        <SelectWithControl<UpdateCvProjectsFormFields>
          name="projects"
          label="Projects"
          control={control}
          fields={projects}
          defaultValue={[]}
        />
        <Button variant="contained" color="error" size="small" type="submit">
          Save
        </Button>
      </Box>
    </form>
  );
};
