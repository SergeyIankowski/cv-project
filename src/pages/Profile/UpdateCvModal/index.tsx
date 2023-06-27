import {FC} from "react";
import {ModalTemplate} from "@view/ModalTemplate";
import {UpdateCvForm} from "@/pages/Profile/UpdateCvForm";
import {Cv} from "@/graphql/interfaces/Cv.interface";
import {useCvQuery} from "@/graphql/hooks/useCvQuery";
import {ModalContextTemplateProvider} from "@/components/view/ModalTemplate/ModalTemplateContext";

interface UpdateCvModalProps {
  cvId: Cv["id"];
}

export const UpdateCvModal: FC<UpdateCvModalProps> = ({cvId}) => {
  const {cv} = useCvQuery(cvId);

  return (
    <ModalContextTemplateProvider>
      <ModalTemplate buttonName="Update Cv">
        <UpdateCvForm cvId={cvId} cv={cv} />
      </ModalTemplate>
    </ModalContextTemplateProvider>
  );
};
