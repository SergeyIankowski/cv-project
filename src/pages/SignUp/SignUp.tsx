import {FC} from "react";
import {useNavigate} from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {Button} from "@containers/Button";
import {Input} from "@containers/Input";
import {HeaderAuth} from "@view/AuthHeader/HeaderAuth";
import {PageContainer} from "@view/PageContainer/PageContainer";
import {ElemStyle, ContentStyle, PasswordIconStyle} from "@view/MuiPagesStyles";
import {Pages} from "@/models/Pages";
import {useBooleanState} from "@/hooks/useBooleanState";

export const SignUp: FC = () => {
  const [pswrdVisibility, setVisibilityTrue, setVisibilityFalse] =
    useBooleanState(false);
  const navigate = useNavigate();

  return (
    <PageContainer>
      <HeaderAuth>
        <Box sx={ElemStyle}>
          <Typography variant="h6" onClick={() => navigate(Pages.login)}>
            LOGIN
          </Typography>
        </Box>
        <Box sx={ElemStyle}>
          <Typography variant="h6" sx={{borderBottom: "2px #eeeef0 solid"}}>
            SIGNUP
          </Typography>
        </Box>
      </HeaderAuth>
      <Box sx={ContentStyle}>
        <Typography variant="h3">Register now</Typography>
        <Typography variant="h6">Welcome! Sign up to continue.</Typography>
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
              sx={PasswordIconStyle}
              onClick={setVisibilityFalse}
            />
          ) : (
            <VisibilityIcon
              sx={PasswordIconStyle}
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
        <Button
          variant="text"
          color="error"
          type="reset"
          sx={{width: "300px"}}
          onClick={() => navigate(Pages.login)}
        >
          {"HAVE YOU ALREADY AN ACCOUNT?"}
        </Button>
      </Box>
    </PageContainer>
  );
};
