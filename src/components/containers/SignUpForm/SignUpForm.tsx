import {FC} from "react";
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
import {useNavigate} from "react-router-dom";
import {Pages} from "@/models/Pages";

export const SignUpForm: FC = () => {
  const [
    passwordVisibility,
    setPasswordVisibilityTrue,
    setPasswordVisibilityFalse,
  ] = useBooleanState(false);
  const navigate = useNavigate();

  return (
    <FormControl sx={ContentStyle}>
      <TypographyH3 text="Register now" />
      <TypographyH6 text="Welcome! Sign up to continue." />
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
      <Button
        variant="text"
        color="error"
        type="reset"
        onClick={() => navigate(`${Pages.auth.root}/${Pages.auth.login}`)}
      >
        "HAVE YOU ALREADY AN ACCOUNT?"
      </Button>
    </FormControl>
  );
};
