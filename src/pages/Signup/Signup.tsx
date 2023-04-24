import {useState, FC} from "react";
import {Typography, Checkbox, Box} from "@mui/material";
import {ElemStyle, ContentStyle} from "@view/MuiPagesStyles";
import {Button} from "@containers/Button";
import {Input} from "@containers/Input";
import {HeaderAuth} from "@view/AuthHeader/HeaderAuth";
import {PageContainer} from "@view/PageContainer/PageContainer";

export const Signup: FC = () => {
  const [pswrdVisibility, setPswrdVisibility] = useState<boolean>(false);

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
        <Input
          sx={{width: "300px"}}
          margin="normal"
          id="password"
          label="Password"
          type={pswrdVisibility ? "text" : "password"}
        />
        <Box style={{display: "flex"}}>
          <Checkbox
            size="small"
            checked={pswrdVisibility}
            onChange={() => setPswrdVisibility(!pswrdVisibility)}
          />
          <Typography variant="subtitle2" sx={{marginTop: "10px"}}>
            Show Password
          </Typography>
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
