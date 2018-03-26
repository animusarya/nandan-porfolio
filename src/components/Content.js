import React from 'react';

export default ({ children, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: children }} />
);
