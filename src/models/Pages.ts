const employeesPageName = "employees";
export const Pages = {
  main: {
    root: "/",
    employees: employeesPageName,
    projects: "projects",
    cvs: "cvs",
    positions: "positions",
    languages: "languages",
  },
  info: {
    root: `/${employeesPageName}/:id`,
    profile: "profile",
    skills: "skills",
    languages: "languages",
    cvs: "cvs",
  },
  auth: {
    root: "/auth",
    login: "login",
    signup: "signup",
  },
  notFound: "/*",
};
