import { motion } from 'framer-motion';
import { CSS, css } from 'stitches.config';

const fadeAnim = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 0.6,
    },
  },
  exit: {
    opacity: 0,
  },
};

const fade = css({});

interface FadeProps {
  children: React.ReactNode;
  css?: CSS;
}

export const Fade = ({ children, css }: FadeProps) => {
  return (
    <motion.div
      className={fade({ css: { ...css } })}
      initial="hidden"
      animate="show"
      exit="exit"
      transition={{ type: 'tween' }}
      variants={fadeAnim}
    >
      {children}
    </motion.div>
  );
};
