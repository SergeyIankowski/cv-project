import {FC, useContext, useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {useParams} from "react-router-dom";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";

import {ModalLayout} from "@view/MuiPagesStyles";
import {ModalTemplateContext} from "@view/ModalTemplate/ModalTemplateContext";
import {Button} from "@containers/Button";
import {Input} from "@containers/Input";
import {UpdateProfileSkillsFormFields} from "@/models/FormFieldsTypes";
import {SkillsMastery, skillMasteryValues} from "@/models/SkillsMastery";
import {useUserData} from "@/hooks/useUserData";
import {useSkillsQuery} from "@/graphql/hooks/useSkillsQuery";
import {Skill} from "@/graphql/interfaces/Skill.interface";
import {useUpdateUser} from "@/graphql/hooks/useUpdateUser";
import {prepareUserForUpdatingSkills} from "@/utils/prepareUserForUpdatingSkills";
import {getSkillsNamesWithoutChoosed} from "@/utils/getSkillsNamesWithoutChoosed";

export const UpdateSkillsForm: FC = () => {
  const {id} = useParams();
  const {userData} = useUserData(id!);
  const {skills} = useSkillsQuery();
  const {updateUser} = useUpdateUser();
  const {closeModal} = useContext(ModalTemplateContext);

  const [skillsForChoose, setSkillsForChoose] = useState<Skill[]>([]);
  const {control, handleSubmit} = useForm<UpdateProfileSkillsFormFields>({
    defaultValues: {
      skill_name: "",
      mastery: SkillsMastery.novice,
    },
  });

  useEffect(() => {
    if (!userData && !skills) return;
    const skillsNames = getSkillsNamesWithoutChoosed(
      skills,
      userData.profile.skills!
    );
    setSkillsForChoose(skillsNames);
  }, [userData, skills]);

  const onSubmit = async (data: UpdateProfileSkillsFormFields) => {
    if (userData.profile.skills) {
      const skillsWithAddedSkill = [...userData.profile.skills, data];
      const userForSend = prepareUserForUpdatingSkills(
        userData,
        skillsWithAddedSkill
      );
      await updateUser(id!, userForSend);
    }
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={ModalLayout}>
        <Input<UpdateProfileSkillsFormFields>
          control={control}
          select
          id="skill_name"
          label="Skill Name"
          name="skill_name"
        >
          <MenuItem value={undefined}></MenuItem>
          {skillsForChoose.map((skill: Skill) => (
            <MenuItem key={skill.name} value={skill.name}>
              {skill.name}
            </MenuItem>
          ))}
        </Input>
        <Input<UpdateProfileSkillsFormFields>
          control={control}
          select
          id="mastery"
          label="Mastery"
          name="mastery"
        >
          <MenuItem value={undefined}></MenuItem>
          {skillMasteryValues.map(mastery => (
            <MenuItem key={mastery} value={mastery}>
              {mastery}
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
