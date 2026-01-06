import React from 'react';
import { FaBook } from '@react-icons/all-files/fa/FaBook';

import type { Publisher as PublisherT } from '../../types/Publication';
import { Image } from '../../types/Image';

type PublisherProps = {
  publisher: PublisherT,
  publisherLogo: Image,
};

const Publisher = (props: PublisherProps): React.ReactElement => {
  const { publisher } = props;

  return (
    <div
      key={publisher}
      className="inline-block rounded-sm text-xs font-normal  flex flex-row justify-center items-center gap-1"
    >
      <FaBook className="w-4 h-4 text-black" />
      <div>{publisher}</div>
    </div>
  );
};

export default Publisher;
