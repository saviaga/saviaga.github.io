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

  const projectsLinkElement = (
    <span className="inline-block">
      <HyperLink link={projectsLink} className="underline underline-offset-2">projects</HyperLink>
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
      civic technology. I&apos;m a recipient of the Facebook Emerging Scholar Fellowship
      (2019) and have presented my work at top-tier conferences including CHI, CSCW,
      and HCOMP. You can explore my research {projectsLinkElement} and read about my
      latest work on my {blogLinkElement}.
    </p>
  );
};

export default Greeting;
