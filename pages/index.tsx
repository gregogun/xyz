import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Image } from '@/components/Image';
import { Box, Flex } from '@/components/Layout';
import Socials from '@/components/Socials';
import { text } from '@/components/Text';
import type { NextPage } from 'next';
import { styled } from 'stitches.config';

const Home: NextPage = () => {
  return (
    <Container>
      <Box
        css={{
          boxShadow:
            'inset 0 0 0 1px var(--colors-elementBorder), 0 0 0 1px var(--colors-elementBorder)',
          borderRadius: '$md',
          py: '$10',
          px: '$16',
          maxWidth: '775px',
          margin: 'auto',
        }}
      >
        <Flex css={{ justifyContent: 'space-between' }}>
          <Image
            priority
            width={180}
            height={180}
            radius="$full"
            src="/static/images/me.png"
            alt="Greg Ogun"
            css={{ boxSize: '$44', bg: '$elementBg', borderRadius: '$full' }}
          />
          <Box>
            <Heading css={{ mb: '$4' }}>Greg Ogun</Heading>
            <h2 className={text({ css: { maxWidth: '396px', mb: '$10' } })}>
              developer, designer, content creator, and occasional writer,
              amongst other things.
            </h2>
            <Socials />
          </Box>
        </Flex>
      </Box>
    </Container>
  );
};

export default Home;
