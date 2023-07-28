import {FC, useEffect} from "react";
import {useTranslation} from "react-i18next";
import {ModalTemplate} from "@view/ModalTemplate";
import {UpdateCvForm} from "@/pages/Profile/UpdateCvForm";
import {Cv} from "@/graphql/interfaces/Cv.interface";
import {useCvQuery} from "@/graphql/hooks/useCvQuery";
import {ModalContextTemplateProvider} from "@view/ModalTemplate/ModalTemplateContext";
import {User} from "@/graphql/interfaces/User.interface";

interface UpdateCvModalProps {
  cvId: Cv["id"];
  userId: User["id"] | undefined;
}

export const UpdateCvModal: FC<UpdateCvModalProps> = ({cvId, userId}) => {
  const {loadCv, cvData} = useCvQuery();
  const {t} = useTranslation();
  useEffect(() => {
    if (cvId) loadCv(cvId);
  }, []);
  return (
    <ModalContextTemplateProvider>
      <ModalTemplate buttonName={t("updateCV")}>
        <UpdateCvForm userId={userId} cvId={cvId} cv={cvData} />
      </ModalTemplate>
    </ModalContextTemplateProvider>
  );
};
