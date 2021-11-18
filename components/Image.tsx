import NextImage from 'next/image';
import { CSS, styled, css } from 'stitches.config';
import { Box } from './Layout';

interface ImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  radius?: '$xs' | '$sm' | '$md' | '$lg' | '$full';
  css?: CSS;
}

const ImageWrapper = styled('div', {
  position: 'relative',
});

const rounded = css({});

export const Image = ({ src, priority, radius, alt, css }: ImageProps) => {
  return (
    <Box
      css={{
        ...css,
      }}
    >
      <NextImage
        className={rounded({ css: { borderRadius: radius, ...css } })}
        objectFit="cover"
        alt={alt}
        src={src}
        priority={priority}
        layout="fill"
        objectPosition="center"
      />
    </Box>
  );
};
