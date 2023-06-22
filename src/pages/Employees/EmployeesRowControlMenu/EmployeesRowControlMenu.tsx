import {FC, useCallback} from "react";
import {useNavigate} from "react-router-dom";
import Settings from "@mui/icons-material/Settings";
import DeleteIcon from "@mui/icons-material/Delete";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  RowControlMenuTemplate,
  TableRowControls,
} from "@view/RowControlMenuTemplate/RowControlMenuTemplate";
import {Pages} from "@/models/Pages";
import {AuthInfoService} from "@/services/AuthInfoService";
import {useDeleteUser} from "@/graphql/hooks/useDeleteUser";

interface EmployeesRowControlMenuProps {
  id: string | number;
}

export const EmployeesRowControlMenu: FC<EmployeesRowControlMenuProps> = ({
  id,
}) => {
  const navigate = useNavigate();
  const {deleteUser} = useDeleteUser();
  const data: TableRowControls = [
    {
      text: "Profile",
      icon: <AccountCircleIcon fontSize="medium" />,
      clickCallback: useCallback(() => {
        const pathToUserProfile = `${Pages.main.root}${Pages.main.employees}/${id}/${Pages.main.profile}`;
        navigate(pathToUserProfile);
      }, []),
      disabled: false,
    },
    {
      text: "Settings",
      icon: <Settings fontSize="medium" />,
      clickCallback: useCallback(() => {}, []),
      disabled: true,
    },
    {
      text: "Delete",
      icon: <DeleteIcon fontSize="medium" />,
      clickCallback: useCallback(async () => {
        deleteUser(id);
      }, []),
      disabled: !AuthInfoService.isAdmin(),
    },
  ];

  return <RowControlMenuTemplate controlsData={data} />;
};
