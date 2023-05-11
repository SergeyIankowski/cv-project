export interface FetchedUser {
  id: string;
  created_at: string;
  profile: {
    avatar: string;
    first_name: string;
    last_name: string;
  };
  email: string;
  department_name: string;
  position: {
    name: string;
  };
  role: "employee" | "admin";
}
