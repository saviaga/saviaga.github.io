import React from 'react';

import PageLayout from '../layouts/PageLayout';
import PageHeader from '../shared/PageHeader';
import Row from '../shared/Row';
import SEO from '../shared/SEO';
import { Publication } from '../../types/Publication';
import PublicationsList from '../elements/PublicationsList';

type PublicationsScreenProps = {
  publications: Publication[],
};

const PublicationsScreen = (props: PublicationsScreenProps): React.ReactElement => {
  const { publications } = props;

  return (
    <PageLayout>
      <SEO
        title="Selected Publications"
        description="Claudia Flores-Saviaga's academic publications and research"
      />
      <Row>
        <PageHeader>Selected Publications</PageHeader>
      </Row>
      <PublicationsList publications={publications} />
    </PageLayout>
  );
};

export default PublicationsScreen;
