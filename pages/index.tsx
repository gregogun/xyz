import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Image } from '@/components/Image';
import { box, Box, center, flex, Flex } from '@/components/Layout';
import Socials from '@/components/Socials';
import { Text, text } from '@/components/Text';
import { mauve, violet } from '@radix-ui/colors';
import { AnimatePresence, motion } from 'framer-motion';
import type { NextPage } from 'next';
import { css, styled } from 'stitches.config';

const aboutContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.3,
      delayChildren: 0.2,
      staggerChildren: 0.1,
      duration: 0.5,
    },
  },
};

const containerDirectChild = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.3,
      staggerChildren: 0.3,
      duration: 1,
    },
  },
};

const containerChild = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const ProfileImage = () => {
  return (
    <motion.div
      className={center({
        css: {
          p: '$3',
          boxShadow: '0 0 0 1px $colors$violet3',
          borderRadius: '$full',
        },
      })}
      variants={containerChild}
    >
      <Box
        className={center({
          css: {
            p: '$3',
            boxShadow: '0 0 0 1px $colors$violet6',
            borderRadius: '$full',
          },
        })}
      >
        <Box
          className={center({
            css: {
              boxShadow: '0 0 0 1px $colors$violet7',
              borderRadius: '$full',
            },
          })}
        >
          <Image
            radius="$full"
            src="/static/images/me.png"
            alt="Greg Ogun"
            css={{
              '@bp4': {
                width: 200,
                height: 200,
              },
              position: 'relative',
            }}
          />
        </Box>
      </Box>
    </motion.div>
  );
};

const Home: NextPage = () => {
  return (
    <Container>
      <motion.div
        initial="hidden"
        animate="show"
        variants={aboutContainer}
        exit={{ opacity: 0, transition: { delay: 1 } }}
        className={box({
          css: {
            boxShadow:
              'inset 0 0 0 1px var(--colors-elementBorder), 0 0 0 1px var(--colors-elementBorder)',
            borderRadius: '$md',
            py: '$10',
            px: '$16',
            maxWidth: '$5xl',
            margin: 'auto',
          },
        })}
      >
        <motion.div
          variants={containerDirectChild}
          className={flex({
            css: {
              justifyContent: 'space-between',
            },
          })}
        >
          <motion.div
            className={flex({
              css: {
                flexDirection: 'column',
                justifyContent: 'center',
              },
            })}
            variants={containerChild}
          >
            <Flex
              css={{ alignItems: 'center', justifyContent: 'space-between' }}
            >
              <Heading css={{ mb: '$4' }}>Greg Ogun</Heading>
              <Text size="lg" css={{ color: '$loContrast' }}>
                he/him
              </Text>
            </Flex>
            <h2 className={text({ css: { maxWidth: '$md', mb: '$10' } })}>
              developer, designer, content creator, and occasional writer,
              amongst other things.
            </h2>
            <Socials />
          </motion.div>
          <ProfileImage />
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Home;
