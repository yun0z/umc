import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useForm } from 'react-hook-form';
import { useRef } from 'react';
const Membership_section = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = useRef();
  const onSubmit = (data) => {
    console.log('data', data);
  };
  return (
    <Container className="Membership_section" component="main" maxWidth="md">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h5" color="white" sx={{ m: 2, bgcolor: 'secondary.main' }}>
            회원가입
          </Typography>
          <div>
            <TextField
              label="Email Address"
              name="email"
              autoComplete="email"
              {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
              required
              autoFocus
              fullWidth
            ></TextField>
            {errors.email && <span>올바른 이메일을 입력하세요</span>}
          </div>

          <div>
            <TextField
              margin="normal"
              label="Password"
              type="password"
              name="password"
              autoComplete="current-password"
              {...register('password', { required: true, minLength: 10 })}
              fullWidth
              required
            ></TextField>
            {errors.password && errors.password.type === 'required' && <span>비밀번호를 입력하세요</span>}
            {errors.password && errors.password.type === 'minLength' && <span>최소 10자리</span>}
          </div>
          <div>
            <TextField
              margin="normal"
              label="Password Confirm"
              type="password"
              name="re_password"
              autoComplete="current-password"
              {...register('password', { required: true, validate: (value) => value === password.current })}
              fullWidth
              required
            ></TextField>
            {errors.re_password && errors.re_password.type === 'required' && <span>비밀번호를 입력하세요</span>}
            {errors.re_password && errors.re_password.type === 'minLength' && <span>최소 10자리</span>}
          </div>
          <div>
            <Button type="submit" variant="contained" sx={{ mt: 5 }} fullWidth>
              Sign Up
            </Button>
          </div>
        </Box>
      </form>
    </Container>
  );
};
export default Membership_section;
