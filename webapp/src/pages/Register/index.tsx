import React, { useState, ChangeEvent, FormEvent } from 'react';
import { toast, ToastContainer } from 'react-toastify';

import { User } from '../../model/User';
import { Container, Form, InputWrapper, Input, Label, FormRow, ButtonWrapper, Button } from './styles';
import UserService from '../../services/UserService';

const Register: React.FC = () => {
  const [user, setUser] = useState<User>({});

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value
    })
  }

  const handeSubmit = (event: FormEvent) => {
    event.preventDefault();

    if ( user.password !== user.repeatPassword ) {
      toast.error("The password must match!", {
        position: toast.POSITION.TOP_LEFT
      });
      return;
    }

    UserService.createUser(user);
  }

  return (
    <Container>
      <ToastContainer />
      <Form onSubmit={handeSubmit}>

        <FormRow>
          <InputWrapper>
            <Label>Name</Label>
            <Input 
              name="name"
              onChange={handleChange}
            />
          </InputWrapper>

          <InputWrapper>
            <Label>Email</Label>
            <Input 
              name="email"
              onChange={handleChange}
              type="email"
            />
          </InputWrapper>
        </FormRow>

        <FormRow>
          <InputWrapper>
            <Label>Password</Label>
            <Input 
              name="password"
              onChange={handleChange}
              type="password"
            />
          </InputWrapper>

          <InputWrapper>
            <Label>Repeat password</Label>
            <Input 
              name="repeatPassword"
              onChange={handleChange}
              type="password"
            />
          </InputWrapper>
        </FormRow>

        <ButtonWrapper>
          <Button type="submit">Submit</Button>
        </ButtonWrapper>

      </Form>

    </Container>
  );
}

export default Register;