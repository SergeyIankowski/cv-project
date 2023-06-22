import {useCallback, useEffect, useState} from "react";
import {useUserQuery} from "@/graphql/hooks/useUserQuery";
import {FetchedUser} from "@/models/FetchedUser.type";
import {useLocation, useParams} from "react-router-dom";
import {AuthInfoService} from "@/services/AuthInfoService";
import {ROLES} from "@/models/Roles";
import {splitUrl} from "@/utils/splitUrl";
import {Pages} from "@/models/Pages";

const emptyUser: FetchedUser = {
  id: "",
  created_at: "",
  profile: {
    avatar: "",
    first_name: "",
    last_name: "",
    full_name: "",
  },
  email: "",
  cvs: [],
  department: {
    id: "",
    name: "",
  },
  position: {
    id: "",
    name: "",
  },
  role: ROLES.employee,
};

export const useUserData = (idValue: string | number) => {
  const {id} = useParams();
  const {loadUserInfo, calledUserData, userData, loadingUserData, error} =
    useUserQuery();
  const loadProfileInfo = useCallback(
    (idName?: string | number) => {
      idName ? loadUserInfo(idName) : loadUserInfo(idValue!);
    },
    [idValue, loadingUserData]
  );
  const [userObj, setUserObj] = useState<FetchedUser>(emptyUser);
  useEffect(() => {
    const userDataIsNotCalled = idValue && !calledUserData;
    const userDataReceived = calledUserData && !loadingUserData && !error;

    if (userDataIsNotCalled) loadProfileInfo();
    if (userDataReceived) setUserObj(userData.user);
  }, [calledUserData, loadingUserData, idValue, userData]);
  useEffect(() => {
    if (id && AuthInfoService.isAuthorizedUser(id!)) loadProfileInfo(id);
    if (id && AuthInfoService.isUnAuthorizedUser(id!)) loadProfileInfo(idValue);
  }, [id]);
  return {loadProfileInfo, calledUserData, loadingUserData, userData: userObj};
};
