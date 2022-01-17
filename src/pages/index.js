import * as React from 'react';
import { Link } from 'gatsby';
import AboutPage from './about';
import Layout from './layout';
import { StaticImage } from 'gatsby-plugin-image';

const HomePage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Home Page for Gatsby Website</p>
      <StaticImage alt="Dubai" src="../images/dub.jpeg" />
    </Layout>
  );
};

export default HomePage;
