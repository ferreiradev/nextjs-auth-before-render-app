import React from 'react';

import {
  Layout,
  Navbar,
} from '@containers';

import { handleAuthSSR } from '../utils/auth';

const SecretPage = () => (
  <Layout>
    <Navbar />
    <h1>Página Secreta</h1>
  </Layout>
);

SecretPage.getInitialProps = async (ctx) => {
  await handleAuthSSR(ctx);
  return {};
};

export default SecretPage;
