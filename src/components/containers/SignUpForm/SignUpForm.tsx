import {FC} from "react";
import {useForm} from "react-hook-form";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Box from "@mui/material/Box";
import {useBooleanState} from "@/hooks/useBooleanState";
import {TypographyH3, TypographyH6} from "@view/Typographics/Typographics";
import {ContentStyle, PasswordIconStyle} from "@view/MuiPagesStyles";
import {Input} from "@containers/Input";
import {Button} from "@containers/Button";
import {useNavigate} from "react-router-dom";
import {Pages} from "@/models/Pages";
import {AuthFormFields} from "@/models/FormFieldsTypes/AuthFormFields.type";
import {useSignUpMutation} from "@/graphql/hooks/useSignUpMutation";
import {AUTH_FIEDS_KEYS} from "@/models/FormKeysNames/AuthFieldsKeys";

export const SignUpForm: FC = () => {
  const [
    passwordVisibility,
    setPasswordVisibilityTrue,
    setPasswordVisibilityFalse,
  ] = useBooleanState(false);
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm<AuthFormFields>({
    defaultValues: {
      [AUTH_FIEDS_KEYS.email]: "",
      [AUTH_FIEDS_KEYS.password]: "",
    },
  });
  const {signUp} = useSignUpMutation();

  const onSubmit = async (data: AuthFormFields) => {
    try {
      await signUp({variables: {auth: data}});
    } catch (e) {
      console.error(e);
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={ContentStyle}>
        <TypographyH3 text="Register now" />
        <TypographyH6 text="Welcome! Sign up to continue." />
        <Input<AuthFormFields>
          margin="dense"
          id="email"
          label="Email"
          name="email"
          rules={{required: true, pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i}}
          error={errors.email ? true : false}
          helperText={errors.email && "email is not correct"}
          control={control}
        />
        <Box sx={{position: "relative"}}>
          <Input<AuthFormFields>
            sx={{width: "100%"}}
            margin="dense"
            id="password"
            label="Password"
            type={passwordVisibility ? "text" : "password"}
            name="password"
            control={control}
            rules={{
              required: true,
            }}
            error={errors.password ? true : false}
            helperText={errors.password && "password field is empty"}
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
          {"SIGN UP"}
        </Button>
        <Button
          variant="text"
          color="error"
          type="reset"
          onClick={() => navigate(`${Pages.auth.root}/${Pages.auth.login}`)}
        >
          "HAVE YOU ALREADY AN ACCOUNT?"
        </Button>
      </Box>
    </form>
  );
};
