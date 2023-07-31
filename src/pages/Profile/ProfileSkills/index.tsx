import {FC, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Grid from "@mui/material/Grid";
import {SkillMastery} from "@/graphql/interfaces/SkillMastery.interface";
import {AddSkillsModal} from "@/pages/Profile/ProfileSkills/AddSkillsModal";
import {ProgressSpinner} from "@view/ProgressSpinner/ProgressSpinner";
import {useUserData} from "@/hooks/useUserData";
import {SkillCard} from "@/components/view/SkillCard";
import {useUpdateUser} from "@/graphql/hooks/useUpdateUser";
import {prepareUserForUpdatingSkills} from "@/utils/prepareUserForUpdatingSkills";
import {AuthInfoService} from "@/services/AuthInfoService";

export const ProfileSkills: FC = () => {
  const {id} = useParams();
  const {userData, calledUserData, loadingUserData} = useUserData(id!);
  const {updateUser} = useUpdateUser();
  const [skills, setSkills] = useState<SkillMastery[]>([]);

  useEffect(() => {
    if (!userData) return;
    setSkills(
      userData.profile.skills!.map(skill => {
        return {skill_name: skill.skill_name, mastery: skill.mastery};
      })
    );
  }, [userData]);

  const deleteSkillHandler = async (skillName: SkillMastery["skill_name"]) => {
    const skillsWithoutDeleted = skills.filter(
      skill => skill.skill_name !== skillName
    );
    const userForSend = prepareUserForUpdatingSkills(
      userData,
      skillsWithoutDeleted
    );

    await updateUser(id!, userForSend);
    setSkills(skillsWithoutDeleted);
  };

  if (!calledUserData || !userData || loadingUserData)
    return <ProgressSpinner />;
  return (
    <>
      <Grid container justifyContent="flex-end">
        {AuthInfoService.isAdmin() || AuthInfoService.isAuthorizedUser(id!) ? (
          <AddSkillsModal />
        ) : (
          ""
        )}
      </Grid>
      <Grid container gap="10px">
        {skills.map(skill => (
          <SkillCard
            key={skill.skill_name}
            skill={skill}
            onDelete={() => deleteSkillHandler(skill.skill_name)}
          />
        ))}
      </Grid>
    </>
  );
};
