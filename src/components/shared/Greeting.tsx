import React from 'react';
import HyperLink from './HyperLink';
import type { Link } from '../../types/Link';
import { routes } from '../../constants/routes';

const Greeting = (): React.ReactElement => {
  const projectsLink: Link = {
    url: `${routes.projects.path}/`,
  };

  const blogLink: Link = {
    url: `${routes.blog.path}/`,
  };

  const publicationsLink: Link = {
    url: `${routes.publications.path}/`,
  };

  const projectsLinkElement = (
    <span className="inline-block">
      <HyperLink link={projectsLink} className="underline underline-offset-2">projects</HyperLink>
    </span>
  );

  const publicationsLinkElement = (
    <span className="inline-block">
      <HyperLink link={publicationsLink} className="underline underline-offset-2">publications</HyperLink>
    </span>
  );

  const blogLinkElement = (
    <span className="inline-block">
      <HyperLink link={blogLink} className="underline underline-offset-2">blog</HyperLink>
    </span>
  );

  return (
    <p className="font-light">
      Hi there! I&apos;m Claudia, a researcher specializing in Human-Centered AI and
      Human-Computer Interaction. My research focuses on understanding how technology
      can better serve diverse communities through crowdsourcing, social computing, and
      civic technology. I have presented my work at top-tier conferences including CHI, CSCW,
      and HCOMP. You can explore my research {publicationsLinkElement}.
    </p>
  );
};

export default Greeting;
