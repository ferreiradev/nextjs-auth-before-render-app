import axios from 'axios';
import Router from 'next/router';
import dynamic from "next/dynamic";

const LoginPage = dynamic(() => import('../pages/login'));

export async function handleAuthSSR(ctx) {
  if (ctx && ctx.req && ctx.req.signedCookies) {
    const token = ctx.req.signedCookies.token;

    try {
      const responseCheckToken = await axios.get('http://localhost:3001/api/ping', {
        headers: {
          'authorization': token,
        },
      });

      console.log('responseCheckToken', responseCheckToken.status);

      if (!responseCheckToken.status === 200) {
        res.writeHead(301, {
          Location: '/login'
        });
        return res.end();
      }

      return true;
    } catch (error) {
      console.error(error);
      if (ctx.res) {
        ctx.res.writeHead(302, {
          Location: '/login'
        })
        ctx.res.end()
      } else {
        Router.push('/login')
      }
    }
  }
}
