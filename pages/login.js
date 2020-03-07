import Head from 'next/head';

import {
  Layout,
  FormLogin,
} from '@containers';

const LoginPage = () => (
  <Layout>
    <div className="container">
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <FormLogin />
      </main>
    </div>
  </Layout>
);

export default LoginPage;
