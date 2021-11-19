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

const ProfileImage = () => {
  return (
    <motion.div
      className={center({
        css: {
          '@bp1': {
            display: 'inline-block',
            margin: '0 auto',
          },
          '@bp2': {
            display: 'block',
            margin: 'auto',
          },
          p: '$2',
          boxShadow: '0 0 0 1px $colors$violet3',
          borderRadius: '$full',
        },
      })}
      variants={containerChild}
    >
      <Box
        className={center({
          css: {
            '@bp1': {
              display: 'inline-block',
            },
            '@bp2': {
              display: 'block',
            },
            p: '$2',
            boxShadow: '0 0 0 1px $colors$violet6',
            borderRadius: '$full',
          },
        })}
      >
        <Box
          className={center({
            css: {
              '@bp1': {
                display: 'inline-block',
              },
              '@bp2': {
                display: 'block',
              },
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
              '@bp1': {
                width: 96,
                height: 96,
              },
              '@bp2': {
                width: 144,
                height: 144,
              },
              '@bp3': {
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

const aboutContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.1,
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
      staggerChildren: 0.1,
      duration: 1,
    },
  },
};

const containerChild = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const InfoCard = () => {
  return (
    <motion.div
      key="infoCard"
      initial="hidden"
      animate="show"
      variants={aboutContainer}
      exit="exit"
      transition={{ type: 'linear' }}
      className={box({
        css: {
          '@bp1': {
            px: '$6',
          },
          '@bp2': {
            py: '$10',
            px: '$16',
            maxWidth: '$2xl',
            boxShadow: '0 0 0 1px var(--colors-elementBorder)',
          },
          '@bp3': {
            maxWidth: '$5xl',
          },
          borderRadius: '$md',

          margin: 'auto',
        },
      })}
    >
      <motion.div
        variants={containerDirectChild}
        className={flex({
          css: {
            '@bp1': {
              flexDirection: 'column-reverse',
              gap: '$8',
            },
            '@bp2': {
              flexDirection: 'row',
            },
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
            css={{
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '95%',
            }}
          >
            <Heading css={{ mb: '$4' }}>Greg Ogun</Heading>
            <Text
              css={{
                color: '$loContrast',
                bg: '$elementBg',
                px: '$1',
                borderRadius: '$sm',
              }}
            >
              he/him
            </Text>
          </Flex>
          <h2
            className={text({
              css: {
                '@bp2': {
                  maxWidth: '$md',
                },
                mb: '$12',
              },
            })}
          >
            developer, designer, content creator, and occasional writer, amongst
            other things.
          </h2>
          <Socials />
        </motion.div>
        <ProfileImage />
      </motion.div>
    </motion.div>
  );
};

const Home: NextPage = () => {
  return <InfoCard />;
};

export default Home;
