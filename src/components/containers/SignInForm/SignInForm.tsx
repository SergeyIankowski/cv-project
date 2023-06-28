import {useBooleanState} from "@/hooks/useBooleanState";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {TypographyH3, TypographyH6} from "@view/Typographics/Typographics";
import Box from "@mui/material/Box";
import {Input} from "@containers/Input";
import {ContentStyle, PasswordIconStyle} from "@view/MuiPagesStyles";
import {Button} from "@containers/Button";
import {useForm} from "react-hook-form";
import {AuthFormFields} from "@/models/FormFieldsTypes/";
import {useLoginQuery} from "@/graphql/hooks/useLoginQuery";
import {AUTH_FIEDS_KEYS} from "@/models/FormKeysNames";

export const SignInForm = () => {
  const [
    passwordVisibility,
    setPasswordVisibilityTrue,
    setPasswordVisibilityFalse,
  ] = useBooleanState(false);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<AuthFormFields>({
    defaultValues: {
      [AUTH_FIEDS_KEYS.email]: "",
      [AUTH_FIEDS_KEYS.password]: "",
    },
  });
  const {loadLoginData} = useLoginQuery();

  const onSubmit = (data: AuthFormFields) => {
    loadLoginData({variables: {auth: data}});
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={ContentStyle}>
        <TypographyH3 text="Welcome Back" />
        <TypographyH6 text="Hello Again! Sign up to continue!" />
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
          {"SIGN IN"}
        </Button>
        <Button variant="text" color="error" type="reset">
          {"RESET PASSWORD"}
        </Button>
      </Box>
    </form>
  );
};
