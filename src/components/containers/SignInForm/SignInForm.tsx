import {useBooleanState} from "@/hooks/useBooleanState";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  TypographyH3,
  TypographyH6,
} from "@/components/view/Typographics/Typographics";
import Box from "@mui/material/Box";
import {Input} from "@containers/Input";
import {
  ContentStyle,
  PasswordIconStyle,
} from "@/components/view/MuiPagesStyles";
import {Button} from "@containers/Button";
import FormControl from "@mui/material/FormControl";

export const SignInForm = () => {
  const [
    passwordVisibility,
    setPasswordVisibilityTrue,
    setPasswordVisibilityFalse,
  ] = useBooleanState(false);

  return (
    <FormControl sx={ContentStyle}>
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
    </FormControl>
  );
};
