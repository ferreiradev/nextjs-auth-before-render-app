import React from 'react';

import LinkNext from 'next/link';

import {
  Flex,
  Text,
  Link,
  Box,
} from 'rebass';

const Navbar = () => (
  <Flex
    px={2}
    color="white"
    bg="black"
    alignItems="center"
  >
    <Text p={2} fontWeight="bold">NextJS Auth Before Render</Text>
    <Box mx="auto" />
    <LinkNext href="/login">
      <Link variant="nav" href="">
        Login
      </Link>
    </LinkNext>

    <LinkNext href="/about">
      <Link variant="nav" href="">
        About
      </Link>
    </LinkNext>
  </Flex>
);

export { Navbar };
export default Navbar;
