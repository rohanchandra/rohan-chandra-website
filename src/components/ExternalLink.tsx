import React from "react";

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
}

type AnchorElementProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

const ExternalLink: React.FC<ExternalLinkProps & AnchorElementProps> = ({
  href,
  children,
  ...rest
}) => {
  // For explanation on why these attributes are used see
  // https://pointjupiter.com/what-noopener-noreferrer-nofollow-explained/
  return (
    <a href={href} rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
};

export default ExternalLink;
