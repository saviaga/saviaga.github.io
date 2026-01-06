import React from 'react';
import PageLayout from '../components/layouts/PageLayout';
import HyperLink from '../components/shared/HyperLink';
import H, { hLevel } from '../components/shared/H';

const ContactPage = (): React.ReactElement => {
  return (
    <PageLayout>
      <H level={hLevel.h1}>Contact</H>

      <div className="mt-8">
        <H level={hLevel.h2}>Get in Touch</H>
        <p className="mt-4 font-light">
          I'm always interested in discussing research collaborations, speaking
          opportunities, and new projects in Human-Centered AI and HCI.
        </p>
      </div>

      <div className="mt-8">
        <H level={hLevel.h3}>Email</H>
        <p className="mt-2">
          <HyperLink
            link={{ url: 'mailto:floressaviaga.c@northeastern.edu' }}
            className="text-blue-600 hover:text-blue-800 underline"
          >
            floressaviaga.c@northeastern.edu
          </HyperLink>
        </p>
      </div>
    </PageLayout>
  );
};

export default ContactPage;
