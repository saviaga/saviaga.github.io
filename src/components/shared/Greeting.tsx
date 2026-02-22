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
      <HyperLink link={publicationsLink} className="underline underline-offset-2">here</HyperLink>
    </span>
  );

  const blogLinkElement = (
    <span className="inline-block">
      <HyperLink link={blogLink} className="underline underline-offset-2">blog</HyperLink>
    </span>
  );

  return (
    <p className="font-light">
      Hi! I&apos;m Claudia, a researcher specializing in Human Centered AI and Human Computer Interaction. My
      work examines how AI systems interact with human behavior, culture, and how these technologies perform in real world environments.
      I apply methods from human computer interaction and computational social science to study large
      language model behavior through empirical evaluation, behavioral testing, and constraint design. My work
      focuses on how alignment mechanisms operate in practice and how system behavior responds to real
      world interaction conditions.
      I have presented my work at leading conferences including CHI, CSCW, and HCOMP. You can explore my
      research publications {publicationsLinkElement}.
    </p>
  );
};

export default Greeting;
