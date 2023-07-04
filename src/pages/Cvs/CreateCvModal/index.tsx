import {FC} from "react";
import {ModalTemplate} from "@view/ModalTemplate";
import {ModalContextTemplateProvider} from "@view/ModalTemplate/ModalTemplateContext";
import {CreateCvForm} from "@/pages/Cvs/CreateCvForm";

export const CreateCvModal: FC = () => {
  return (
    <ModalContextTemplateProvider>
      <ModalTemplate buttonName="Create Cv">
        <CreateCvForm />
      </ModalTemplate>
    </ModalContextTemplateProvider>
  );
};
