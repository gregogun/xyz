import { Container } from '@/components/Container';
import { Typography } from '@/components/Typography';
import type { NextPage } from 'next';

const Writing: NextPage = () => {
  return (
    <Container>
      <Typography size="subheading" css={{ color: '$slate9' }}>
        Thought streams soon to populate this space...
      </Typography>
    </Container>
  );
};

export default Writing;
