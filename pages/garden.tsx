import { Container } from '@/components/Container';
import { Fade } from '@/components/Fade';
import { Heading } from '@/components/Heading';
import { Text } from '@/components/Text';
import type { NextPage } from 'next';

const Projects: NextPage = () => {
  return (
    <Fade>
      <Text css={{ my: '$4' }}>
        A space to empty my thoughts. Regularly tended to.
      </Text>
      <Heading>Coming soon...</Heading>
    </Fade>
  );
};

export default Projects;
