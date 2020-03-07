import Head from 'next/head';

import {
  FormLogin,
} from '@containers';

const LoginPage = () => (
  <div className="container">
    <Head>
      <title>Login</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <FormLogin />
    </main>
  </div>
);

export default LoginPage;
