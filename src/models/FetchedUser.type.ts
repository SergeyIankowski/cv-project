import {ROLES} from "@/models/Roles";

export interface FetchedUser {
  id: string;
  created_at: string;
  profile: {
    avatar: string;
    first_name: string;
    last_name: string;
  };
  email: string;
  department: {
    id: string;
    name: string;
  };
  position: {
    id: string;
    name: string;
  };
  role: ROLES.employee | ROLES.admin;
}
