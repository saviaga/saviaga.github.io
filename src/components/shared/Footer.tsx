import React from 'react';

import Row from './Row';
import { profile } from '../../data/profile';
import FooterMenu from './FooterMenu';
import { FOOTER_NAV } from '../../constants/routes';

type FooterProps = {
  className?: string;
};

const Footer = (props: FooterProps): React.ReactElement => {
  const { className = '' } = props;

  return (
    <footer className={`flex flex-col justify-center items-center ${className}`}>
      {!!FOOTER_NAV.length && (
      <Row className="mb-6">
        <FooterMenu />
      </Row>
      )}

      <div className="mt-4 text-xs text-gray-500">
        © {new Date().getFullYear()} {profile.firstName} {profile.lastName}
      </div>
    </footer>
  );
};

export default Footer;
