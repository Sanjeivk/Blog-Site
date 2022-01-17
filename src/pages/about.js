import * as React from 'react';
import { Link } from 'gatsby';
import Layout from './layout';

const AboutPage = ({ children }) => {
  return (
    <Layout pageTitle="About Me">
      <p>This is the about me page of the Gatsby website!</p>
    </Layout>
  );
};

export default AboutPage;
