import { Box } from './Layout';
import { Navbar } from './Navbar';
import { Seo } from './Seo';

interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <Box css={{ pt: '$32', backgroundColor: '$AppBg' }}>
      <Seo />
      <Box css={{ maxWidth: '962px', margin: 'auto' }}>
        <Navbar />
        {children}
      </Box>
    </Box>
  );
};
