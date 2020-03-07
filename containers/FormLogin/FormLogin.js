import React from 'react';
import Router from 'next/router';

import axios from 'axios';
import { useFormik } from 'formik';

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
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label>Username</label>
        <input
          name="username"
          type="text"
          value={formik.values.username}
          onChange={formik.handleChange}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          name="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
      </div>
      <div>
        <button type="submit">Entrar</button>
      </div>
    </form>
  );
};

export { FormLogin };
export default FormLogin;
