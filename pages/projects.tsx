import { Container } from '@/components/Container';
import { Typography } from '@/components/Typography';
import type { NextPage } from 'next';

const Projects: NextPage = () => {
  return (
    <Container>
      <Typography size="subheading" css={{ color: '$slate9' }}>
        Proud works and explorations soon to fill this space...
      </Typography>
    </Container>
  );
};

export default Projects;
