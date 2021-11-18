import { css, styled } from 'stitches.config';

export const box = css({});

export const Box = styled('div', { ...box });

export const flex = css({
  display: 'flex',
});

export const Flex = styled('div', {
  ...flex,
});

export const center = css({
  display: 'grid',
  placeItems: 'center',
});

export const Center = styled('div', {
  ...center,
});

export const grid = css({
  display: 'grid',
});

export const Grid = styled('div', {
  ...grid,
});

export const list = css({
  listStyleType: 'none',
  padding: 0,
  margin: 0,
});

export const List = styled('ul', {
  ...list,
});

export const listItem = css({
  listStyle: 'none',
});

export const ListItem = styled('li', {
  ...listItem,
});
