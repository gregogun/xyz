import { Fade } from '@/components/Fade';
import { Heading } from '@/components/Heading';
import { Text } from '@/components/Text';
import type { NextPage } from 'next';
import { MobileMenu } from '@/components/MobileNav';

const Projects: NextPage = ({ clicked, toggleClicked }: any) => {
  return (
    <>
      <MobileMenu clicked={clicked} toggleClicked={toggleClicked} />
      <Fade>
        <Text css={{ my: '$4' }}>
          {`Some things I'm currently building with React, Next.js and Typescript`}
        </Text>
        <Heading>Coming soon...</Heading>
      </Fade>
    </>
  );
};

export default Projects;
