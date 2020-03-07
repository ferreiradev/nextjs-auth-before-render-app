import React from 'react';

import {
  Navbar,
} from '@containers';

import { handleAuthSSR } from '../utils/auth';

const SecretPage = () => (
  <>
    <Navbar />
    <h1>Página Secreta</h1>
  </>
);

SecretPage.getInitialProps = async (ctx) => {
  await handleAuthSSR(ctx);
  return {};
};

export default SecretPage;
