import React from "react";

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ href, children }) => {
  // For explanation on why these attributes are used see
  // https://pointjupiter.com/what-noopener-noreferrer-nofollow-explained/
  return (
    <a href={href} rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default ExternalLink;
