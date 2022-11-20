import { Box } from '@/components/Box';
import { Container } from '@/components/Container';
import { Flex } from '@/components/Flex';
import { Typography } from '@/components/Typography';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Container>
      <Flex direction="column" gap="1">
        <Typography
          css={{
            display: 'inline-flex',
            gap: '$1',
          }}
          size="h4"
        >
          Greg Ogun
          <Box css={{ fontSize: 15, color: '$slate11' }} as="span">
            (he/him)
          </Box>
        </Typography>
        <Typography
          css={{ color: '$slate10', fontStyle: 'italic' }}
          size="subheading"
        >
          Design-focused engineer inspired by the art of building quality
          software.
        </Typography>
      </Flex>
      <Box
        css={{
          my: '$3',
          height: 1,
          background:
            'linear-gradient(to right, rgba(49, 53, 56, 100), rgba(49, 53, 56, 0))',
        }}
      />
      <Flex direction="column" gap="5" css={{ mt: '$8' }}>
        <Typography color="loContrast" size="subheading">
          Crafting highly composable, accessible react components with{' '}
          <Box
            href="https://github.com/aura-ui/aura-ui"
            css={{ color: '$slate12' }}
            as="a"
            rel="noreferrer"
            target="_blank"
          >
            Aura UI.
          </Box>
          <br /> Helping to shape the future of storytelling at{' '}
          <Box
            href="https://www.sigle.io/"
            css={{ color: '$slate12' }}
            as="a"
            rel="noreferrer"
            target="_blank"
          >
            Sigle
          </Box>
          .{' '}
        </Typography>
        <Typography css={{ maxW: '60ch' }} color="loContrast" size="subheading">
          Outside the world of software, you’ll likely find me writing music of
          various moods, or tinkering somewhere in the realm of the visual arts.
        </Typography>
        <Typography css={{ mt: '$5' }} color="loContrast" size="subheading">
          More soon.
        </Typography>
      </Flex>
    </Container>
  );
};

export default Home;
