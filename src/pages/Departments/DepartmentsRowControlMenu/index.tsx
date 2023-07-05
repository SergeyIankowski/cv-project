import {FC, useCallback} from "react";
import {
  RowControlMenuTemplate,
  TableRowControls,
} from "@view/RowControlMenuTemplate/RowControlMenuTemplate";
import {Department} from "@/graphql/interfaces/Department.interface";
import {useDeleteDepartment} from "@/graphql/hooks/useDeleteDepartment";
import {AuthInfoService} from "@/services/AuthInfoService";

interface DepartmentsRowControlProps {
  id: Department["id"];
}

export const DepartmentsRowControl: FC<DepartmentsRowControlProps> = ({id}) => {
  const {deleteDepartment} = useDeleteDepartment();
  const data: TableRowControls = [
    {
      text: "Delete",
      icon: "",
      clickCallback: useCallback(() => {
        deleteDepartment(id);
      }, []),
      disabled: AuthInfoService.isNotAdmin(),
    },
  ];

  return <RowControlMenuTemplate controlsData={data} />;
};
