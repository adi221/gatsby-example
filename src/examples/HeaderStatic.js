import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const ComponentName = () => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
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
    `}
    render={data => <h4>{data.site.siteMetadata.author}</h4>}
  ></StaticQuery>
);

export default ComponentName;
