import React from 'react';
import Link from 'next/link';
import { Box, Heading, Paragraph } from 'grommet';

import { CardGrid, ContentCard, Meta } from '../../components';
import { Layout, PageIntro } from '../../layouts';
import { getCards, getPageDetails, nameToPath, useDarkMode } from '../../utils';

const title = 'Extend';
const pageDetails = getPageDetails(title);
const cards = getCards(title);

const Extend = () => {
  const darkMode = useDarkMode();
  const cardImage = darkMode.value
    ? '/carte-extend-dark.svg'
    : '/carte-extend-light.svg';

  return (
    <Layout title={title} isLanding>
      <Meta
        title={title}
        description={pageDetails.seoDescription}
        canonicalUrl="https://design-system.hpe.design/extend"
      />
      <Box gap="large">
        <PageIntro
          image={{
            src: cardImage,
            alt: 'Card deck of HPE Design System extend cards',
            fit: 'cover',
          }}
        >
          <Box justify="center" fill>
            <Heading margin="none">{title}</Heading>
            <Paragraph fill>{pageDetails.description}</Paragraph>
          </Box>
        </PageIntro>
        <CardGrid>
          {cards.map(topic => (
            // Need to pass href because of: https://github.com/zeit/next.js/#forcing-the-link-to-expose-href-to-its-child
            <Link key={topic.name} href={nameToPath(topic.name)} passHref>
              <ContentCard
                as="a"
                style={{ textDecoration: 'none' }}
                topic={topic}
              />
            </Link>
          ))}
        </CardGrid>
      </Box>
    </Layout>
  );
};

export default Extend;