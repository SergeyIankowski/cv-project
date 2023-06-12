const employeesPageName = "employees";
export const Pages = {
  main: {
    root: "/",
    employees: employeesPageName,
    projects: "projects",
    cvs: "cvs",
    skills: "skills",
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
