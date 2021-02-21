import React from 'react';
import Header from '../examples/Header';
import HeaderStatic from '../examples/HeaderStatic';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';

const examples = ({ data }) => {
  const {
    site: {
      info: { author },
    },
  } = data;

  return (
    <Layout>
      <h1>Examples</h1>
      <Header />
      <HeaderStatic />
      <h5>Author : {author}</h5>
    </Layout>
  );
};

export const data = graphql`
  query MyQuery {
    site {
      info: siteMetadata {
        author
        description
        person {
          age
          name
        }
        title
        data
      }
    }
  }
`;

export default examples;
