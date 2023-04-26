import {FC} from "react";
import {useNavigate} from "react-router-dom";
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
import {
  TypographyH3,
  TypographyH6,
  TypographySignUpHeader,
} from "@/components/view/Typographics/Typographics";

export const SignIn: FC = () => {
  const [
    passwordVisibility,
    setPasswordVisibilityTrue,
    setPasswordVisibilityFalse,
  ] = useBooleanState(false);
  const navigate = useNavigate();

  return (
    <PageContainer>
      <HeaderAuth>
        <Box sx={ElemStyle}>
          <TypographySignUpHeader text="LOGIN" underline />
        </Box>
        <Box sx={ElemStyle}>
          <TypographySignUpHeader
            text="SiGNUP"
            underline={false}
            onClick={() => navigate(Pages.signup)}
          />
        </Box>
      </HeaderAuth>
      <Box sx={ContentStyle}>
        <TypographyH3 text="Welcome Back" />
        <TypographyH6 text="Hello Again! Sign up to continue!" />
        <Input sx={{width: "300px"}} margin="dense" id="email" label="Email" />
        <Box sx={{position: "relative"}}>
          <Input
            sx={{width: "300px"}}
            margin="normal"
            id="password"
            label="Password"
            type={passwordVisibility ? "text" : "password"}
          />
          {passwordVisibility ? (
            <VisibilityOffIcon
              sx={PasswordIconStyle}
              onClick={setPasswordVisibilityFalse}
            />
          ) : (
            <VisibilityIcon
              sx={PasswordIconStyle}
              onClick={setPasswordVisibilityTrue}
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
