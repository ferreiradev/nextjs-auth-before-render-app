import React from 'react';

import LinkNext from 'next/link';

const Navbar = () => (
  <>
    <h1>NextJS Auth Before Render</h1>
    <div>
      <LinkNext href="/login">
        <a href="#">Login</a>
      </LinkNext>
    </div>
    <div>
      <LinkNext href="/about">
        <a href="#">About</a>
      </LinkNext>
    </div>
  </>
);

export { Navbar };
export default Navbar;
