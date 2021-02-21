import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import styles from '../components/products.module.css';
import Image from 'gatsby-image';
import { Link } from 'gatsby';

const ComponentName = ({ data }) => {
  const {
    allContentfulProduct: { nodes: products },
  } = data;

  console.log(products);

  return (
    <Layout>
      <section className={styles.page}>
        {products.map(product => {
          const { price, title, slug, image, id } = product;
          return (
            <article key={id}>
              <Image fluid={image.fluid} alt={title} />
              <h3>
                {title}
                <span>${price}</span>
              </h3>
              <Link to={`/products/${slug}`}>More details</Link>
            </article>
          );
        })}
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        id
        price
        title
        slug
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`;

export default ComponentName;
