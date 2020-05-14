import React from "react";

const ExternalLink = ({ href, children, ...attrs }) => (
  <a href={href} {...attrs} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

export default ExternalLink;
