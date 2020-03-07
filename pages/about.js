import Head from 'next/head';

import {
  Layout,
} from '@containers';

const AboutPage = () => (
  <Layout>
    <div className="container">
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>About</h1>
      </main>
    </div>
  </Layout>
);

export default AboutPage;
