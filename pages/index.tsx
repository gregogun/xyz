import { Heading } from '@/components/Heading';
import { text } from '@/components/Text';
import type { NextPage } from 'next';
import { styled } from 'stitches.config';

const Text = styled('p', {
  fontFamily: '$body',
  fontSize: '$md',
});

const Home: NextPage = () => {
  return (
    <div>
      <Heading>Greg Ogun</Heading>
      <h3 className={text()}>
        developer, designer, content creator, and occasional writer, amongst
        other things.
      </h3>
      {/* <Text>develop, designer and content creator.</Text> */}
    </div>
  );
};

export default Home;
