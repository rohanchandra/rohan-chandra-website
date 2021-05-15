import React from "react";
import { Link } from "gatsby";
import ExternalLink from "../ExternalLink";

interface SecureLinkProps {
  href: string;
  children: React.ReactNode;
}

const MdxLink: React.FC<SecureLinkProps> = (props) => {
  const isInternalLink = props.href.startsWith("/");
  if (isInternalLink) {
    <Link to={props.href}>{props.children}</Link>;
  }

  // External link
  // For explanation on why these attributes are used see
  // https://pointjupiter.com/what-noopener-noreferrer-nofollow-explained/
  return <ExternalLink {...props} />;
};

export default MdxLink;
