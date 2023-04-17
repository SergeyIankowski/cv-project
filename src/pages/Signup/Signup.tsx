import { useState, FC } from 'react'
import { Typography, TextField, Button, Checkbox, Container, Box } from '@mui/material'
import { ElemStyle, HeaderStyle, PageStyle, ContentStyle } from '../MuiPagesStyles'


const Signup: FC = () => {
  const [pswrdVisibility, setPswrdVisibility] = useState<boolean>(false)

  return (
    <Container className='sign-page' sx={PageStyle}>
      <Box className='sign-header' sx={HeaderStyle}>
        <Box className='sign-header-elem' sx={ElemStyle}>
          <Typography variant='h6' sx={{ borderBottom: '2px #eeeef0 solid' }}>
            LOGIN
          </Typography>
        </Box>
        <Box className='sign-header-elem' sx={ElemStyle}>
          <Typography variant='h6'>SIGNUP</Typography>
        </Box>
      </Box>
      <Box
        className='sign-content'
        sx={ContentStyle}
      >
        <Typography variant='h3'>Welcome Back</Typography>
        <Typography variant='h6'>Hello Again! Sign up to continue!</Typography>
        <TextField
          sx={{ width: '300px' }}
          margin={'dense'}
          size='small'
          id='email'
          label='Email'
          required
        />
        <TextField
          sx={{ width: '300px' }}
          margin='normal'
          size='small'
          id='password'
          label='Password'
          type={pswrdVisibility ? 'text' : 'password'}
          required
        />
        <Box style={{ display: 'flex' }}>
          <Checkbox
            size='small'
            checked={pswrdVisibility}
            onChange={() => setPswrdVisibility(!pswrdVisibility)}
          />
          <Typography variant='subtitle2' sx={{ marginTop: '10px' }}>
            Show Password
          </Typography>
        </Box>
        <Button variant='contained' color='error' sx={{ width: '300px' }} type='submit'>
          SIGN IN
        </Button>
        <Button
          variant='text'
          color='error'
          className='sign-text-reset'
          type='reset'
          sx={{ width: '300px' }}
        >
          RESET PASSWORD
        </Button>
      </Box>
    </Container>
  )
}

export default Signup