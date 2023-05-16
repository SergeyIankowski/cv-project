const breakpoints = {
  smallDesktop: "1199px",
};
export const colors = {
  authLinksColor: "#ef9d10",
};

export const PageStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  boxSizing: "border-box",
  background: "#e7e7e7",
  "@media(min-width: 320px)": {
    maxWidth: "none",
    padding: "0px",
  },
};
export const HeaderStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  height: "60px",
  width: "100%",
  backgroundColor: "#3b3b4f",
  color: "#eeeef0",
  gap: "5px",
  padding: "0 50px 0px",
};
export const MainHeaderStyle = {
  ...HeaderStyle,
  alignItems: "center",
  justifyContent: "space-around",
  [`@media(max-width: ${breakpoints.smallDesktop})`]: {
    justifyContent: "space-between",
  },
};
export const PageLayoutStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  [`@media(max-width: ${breakpoints.smallDesktop})`]: {
    padding: "0 50px",
  },
};
export const ElemStyle = {
  width: "140px",
  display: "flex",
  justifyContent: "center",
  cursor: "pointer",
};
export const ContentStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "stretch",
  marginTop: "80px",
  padding: "0px 20px",
  textAlign: "center",
  gap: "10px",
  width: "400px",
};
export const BreadCrumbsStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "10px",
  height: "50px",
};
export const PasswordIconStyle = {
  position: "absolute",
  top: "30%",
  right: "3%",
};
export const MenuStyle = {
  overflow: "visible",
  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
  mt: 1.5,
  "& .MuiAvatar-root": {
    width: 32,
    height: 32,
    ml: -0.5,
    mr: 1,
  },
  "&:before": {
    content: '""',
    display: "block",
    position: "absolute",
    top: 0,
    right: 14,
    width: 10,
    height: 10,
    bgcolor: "background.paper",
    transform: "translateY(-50%) rotate(45deg)",
    zIndex: 0,
  },
};

export const HeaderLinksStyle = {
  "& button": {
    fontSize: "1.3rem",
    color: "white",
  },
  "& button.Mui-selected": {
    color: colors.authLinksColor,
  },
};
