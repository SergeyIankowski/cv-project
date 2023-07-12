import {FC} from "react";
import {ModalTemplate} from "@view/ModalTemplate";
import {ModalContextTemplateProvider} from "@view/ModalTemplate/ModalTemplateContext";
import {CvProjectsForm} from "../CvProjectsForm";

export const CvProjectsModal: FC = () => {
  return (
    <ModalContextTemplateProvider>
      <ModalTemplate buttonName="Update">
        <CvProjectsForm />
      </ModalTemplate>
    </ModalContextTemplateProvider>
  );
};
