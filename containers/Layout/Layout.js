import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'emotion-theming';
import theme from '@rebass/preset';

const Layout = ({
  children,
}) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Layout };
export default Layout;
