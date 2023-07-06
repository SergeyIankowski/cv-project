import {FC, ReactNode} from "react";
import {ModalTemplate} from "@view/ModalTemplate";
import {ModalContextTemplateProvider} from "@view/ModalTemplate/ModalTemplateContext";
import {Department} from "@/graphql/interfaces/Department.interface";
import {UpdateDepartmentForm} from "../UpdateDepartmentForm";

interface UpdateDepartmentModal {
  id: Department["id"];
  name: Department["name"];
  children: ReactNode;
}

export const UpdateDepartmentModal: FC<UpdateDepartmentModal> = ({
  id,
  name,
  children,
}) => {
  return (
    <ModalContextTemplateProvider>
      {children}
      <ModalTemplate>
        <UpdateDepartmentForm id={id} name={name} />
      </ModalTemplate>
    </ModalContextTemplateProvider>
  );
};
