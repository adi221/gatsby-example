import React from 'react';
import Layout from '../components/Layout';
import styles from '../components/blog.module.css';
const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>this is our blog page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea natus,
          vel laboriosam aspernatur, facilis repellendus, eius facere asperiores
          neque repudiandae necessitatibus. Quam provident cupiditate
          perspiciatis autem aliquam suscipit illum id nulla, laborum soluta
          voluptates iste delectus ab et commodi distinctio. Eum recusandae
          minima nulla illum et optio, similique totam consectetur officiis ad,
          iste enim, fugiat quibusdam eaque es
        </p>
      </div>
    </Layout>
  );
};

export default blog;
