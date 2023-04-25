import {FC} from "react";
import {Typography, Box} from "@mui/material";
import {ElemStyle, ContentStyle} from "@view/MuiPagesStyles";
import {Button} from "@containers/Button";
import {Input} from "@containers/Input";
import {HeaderAuth} from "@view/AuthHeader/HeaderAuth";
import {PageContainer} from "@view/PageContainer/PageContainer";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {useBooleanState} from "@/hooks/useBooleanState";

export const SignIn: FC = () => {
  const [pswrdVisibility, setVisibilityTrue, setVisibilityFalse] =
    useBooleanState(false);

  return (
    <PageContainer>
      <HeaderAuth>
        <Box sx={ElemStyle}>
          <Typography variant="h6" sx={{borderBottom: "2px #eeeef0 solid"}}>
            LOGIN
          </Typography>
        </Box>
        <Box sx={ElemStyle}>
          <Typography variant="h6">SIGNUP</Typography>
        </Box>
      </HeaderAuth>
      <Box sx={ContentStyle}>
        <Typography variant="h3">Welcome Back</Typography>
        <Typography variant="h6">Hello Again! Sign up to continue!</Typography>
        <Input sx={{width: "300px"}} margin="dense" id="email" label="Email" />
        <Box sx={{position: "relative"}}>
          <Input
            sx={{width: "300px"}}
            margin="normal"
            id="password"
            label="Password"
            type={pswrdVisibility ? "text" : "password"}
          />
          {pswrdVisibility ? (
            <VisibilityOffIcon
              sx={{position: "absolute", top: "37%", right: "3%"}}
              onClick={setVisibilityFalse}
            />
          ) : (
            <VisibilityIcon
              sx={{position: "absolute", top: "37%", right: "3%"}}
              onClick={setVisibilityTrue}
            />
          )}
        </Box>
        <Button
          variant="contained"
          color="error"
          sx={{width: "300px"}}
          type="submit"
        >
          {"SIGN IN"}
        </Button>
        <Button variant="text" color="error" type="reset" sx={{width: "300px"}}>
          {"RESET PASSWORD"}
        </Button>
      </Box>
    </PageContainer>
  );
};
