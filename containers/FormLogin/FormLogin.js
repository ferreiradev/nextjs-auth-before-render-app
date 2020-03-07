import React from 'react';
import Router from 'next/router';

import axios from 'axios';
import { useFormik } from 'formik';

import {
  Box,
  Button,
  Flex,
} from 'rebass';

import {
  Label,
  Input,
} from '@rebass/forms';

const FormLogin = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: async (values) => {
      const response = await axios.post('http://localhost:3000/api/auth', values);

      if (response.status === 200) {
        Router.push('/secret');
      }
    },
  });

  return (
    <Flex alignItems="center" justifyContent="center">
      <Box
        as="form"
        onSubmit={formik.handleSubmit}
        py={3}
      >
        <Box width={1} px={2}>
          <Label htmlFor="name">Usuário</Label>
          <Input
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
          />
        </Box>
        <Box width={1} px={2}>
          <Label htmlFor="password">Senha</Label>
          <Input
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            type="password"
          />
        </Box>
        <Box px={2} ml="auto">
          <Button>
            Entrar
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};

export { FormLogin };
export default FormLogin;
