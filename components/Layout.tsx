import { styled } from 'stitches.config';

export const Box = styled('div');

export const Flex = styled('div', {
  display: 'flex',
});

export const Center = styled('div', {
  display: 'grid',
  placeItems: 'center',
});

export const Grid = styled('div', {
  display: 'grid',
});

export const List = styled('ul', {
  listStyleType: 'none',
  padding: 0,
  margin: 0,
});

export const ListItem = styled('li', {
  listStyle: 'none',
  // padding: 0,
  // margin: 0,
});
