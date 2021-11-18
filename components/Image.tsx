import NextImage from 'next/image';
import { CSS, styled, css } from 'stitches.config';

interface ImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  width: number;
  height: number;
  radius?: '$xs' | '$sm' | '$md' | '$lg' | '$full';
  css?: CSS;
}

const ImageWrapper = styled('div', {
  position: 'relative',
});

const rounded = css({});

export const Image = ({
  src,
  priority,
  width,
  height,
  radius,
  alt,
  css,
}: ImageProps) => {
  return (
    <NextImage
      className={rounded({ css: { borderRadius: radius } })}
      objectFit="cover"
      width={width}
      height={height}
      alt={alt}
      src={src}
      priority={priority}
    />
  );
};
