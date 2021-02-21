import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const getData = graphql`
  {
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
const Header = () => {
  const {
    site: {
      info: {
        author: a,
        description,
        person: { age, name },
        title,
        data,
      },
    },
  } = useStaticQuery(getData);
  return (
    <div>
      <h1>This is our heading</h1>
      {/* <h2>Title: {data.site.info.person.name}</h2> */}
      <h2>{title}</h2>
      <h2>
        {age}
        {name}
        {data}
        {description}
      </h2>
      <h2>{a}</h2>
    </div>
  );
};

export default Header;
