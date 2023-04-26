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
import Grid from "@mui/material/Grid";

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
            text="SIGNUP"
            underline={false}
            onClick={() => navigate(Pages.signup)}
          />
        </Box>
      </HeaderAuth>
      <Grid container justifyContent="center" alignItems="flex-start">
        <Box sx={ContentStyle}>
          <TypographyH3 text="Welcome Back" />
          <TypographyH6 text="Hello Again! Sign up to continue!" />
          <Input margin="dense" id="email" label="Email" />
          <Box sx={{position: "relative"}}>
            <Input
              sx={{width: "100%"}}
              margin="dense"
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
          <Button variant="contained" color="error" size="small" type="submit">
            {"SIGN IN"}
          </Button>
          <Button variant="text" color="error" type="reset">
            {"RESET PASSWORD"}
          </Button>
        </Box>
      </Grid>
    </PageContainer>
  );
};
