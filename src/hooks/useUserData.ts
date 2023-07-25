import {useCallback, useEffect, useState} from "react";
import {useUserQuery} from "@/graphql/hooks/useUserQuery";
import {FetchedUser} from "@/models/FetchedUser.type";
import {useParams} from "react-router-dom";
import {AuthInfoService} from "@/services/AuthInfoService";
import {ROLES} from "@/models/Roles";
import {ID} from "@/graphql/interfaces/ID.type";

const emptyUser: FetchedUser = {
  id: "",
  created_at: "",
  profile: {
    avatar: "",
    first_name: "",
    last_name: "",
    full_name: "",
    skills: [],
    languages: [],
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

export const useUserData = (idValue: ID) => {
  const {id} = useParams();
  const {loadUserInfo, calledUserData, userData, loadingUserData, error} =
    useUserQuery();
  const loadProfileInfo = useCallback(
    (idName?: ID) => {
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
