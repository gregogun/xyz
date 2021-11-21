import { motions } from '@/data/motion';
import { navData } from '@/data/nav';
import { motion } from 'framer-motion';
import { useRouter } from 'next/dist/client/router';
import { useRef, useState } from 'react';
import { CSS, styled } from 'stitches.config';
import { list } from './Layout';
import { Link } from './Link';

interface TabItemProps {
  children: string;
  href: string;
  css?: CSS;
  onMouseOver: any;
  onClick: any;
}

const TabItem = ({ children, href, css, ...props }: TabItemProps) => {
  const router = useRouter();

  const isActive = router.pathname === href;

  return (
    <Link
      {...props}
      onClick={props.onClick}
      variant="ghost"
      css={{
        '@bp1': {
          display: 'none',
        },
        '@bp2': {
          display: 'block',
        },
        padding: '$2',
        color: isActive ? '$hiContrast' : '$muted',
        transitionDuration: '500ms',

        '&::before, &::after': {
          height: isActive ? '0' : '1px',
        },

        '&:hover': {
          color: isActive ? '$hiContrast' : '$loContrast',
        },
        ...css,
      }}
      href={href}
    >
      {children}
    </Link>
  );
};

const TabsNav = styled('li', {
  display: 'flex',
  gap: '$2',
  position: 'relative',
});

const TabsHighlight = styled('div', {
  gap: '$2',
  borderRadius: '$sm',
  background: '$elementBg',
  position: 'absolute',
  top: '8px',
  left: 0,
  height: '32px',
  transition: '0.15s ease',
  transitionProperty: 'width, transform, opacity',
});

interface TabsProps {
  css?: CSS;
  direction?: 'horizontal' | 'vertical';
  onClick?: any;
}

export const Tabs = ({
  css,
  direction = 'horizontal',
  ...props
}: TabsProps) => {
  const [tabBoundingBox, setTabBoundingBox] = useState<any>(null);
  const [wrapperBoundingBox, setWrapperBoundingBox] = useState<any>(null);
  const [highlightedTab, setHighlightedTab] = useState<any>(null);
  const [isHoveredFromNull, setIsHoveredFromNull] = useState(true);

  const highlightRef = useRef(null);
  const wrapperRef = useRef<any>(null);

  // add proper typings
  const repositionHighlight = (e: any, tab: any) => {
    setTabBoundingBox(e.target.getBoundingClientRect());
    setWrapperBoundingBox(wrapperRef.current.getBoundingClientRect());
    setIsHoveredFromNull(!highlightedTab);
    setHighlightedTab(tab);
  };

  const resetHighlight = () => setHighlightedTab(null);

  const highlightStyles: any = {};

  if (tabBoundingBox && wrapperBoundingBox) {
    highlightStyles.transitionDuration = isHoveredFromNull ? '0ms' : '150ms';
    highlightStyles.opacity = highlightedTab ? 1 : 0;
    highlightStyles.width = `${tabBoundingBox.width}px`;
    highlightStyles.transform = `translate${
      direction === 'horizontal' ? 'X' : 'Y'
    }(${
      direction === 'horizontal'
        ? tabBoundingBox.left - wrapperBoundingBox.left
        : tabBoundingBox.top - wrapperBoundingBox.top
    }px)`;
  }

  return (
    <motion.ul
      variants={motions.basic}
      className={list({
        css: {
          '@bp1': {
            display: 'none',
          },
          '@bp2': {
            display: 'block',
          },
          gap: '$2',
          position: 'relative',
          ...css,
        },
      })}
    >
      <TabsNav
        css={{
          flexDirection:
            direction === 'horizontal'
              ? 'row'
              : direction === 'vertical'
              ? 'column'
              : undefined,
        }}
        ref={wrapperRef}
        onMouseLeave={resetHighlight}
      >
        <TabsHighlight
          ref={highlightRef}
          css={{
            transitionDuration: highlightStyles.transitionDuration,
            opacity: highlightStyles.opacity,
            width: highlightStyles.width,
            transform: highlightStyles.transform,
          }}
        />
        {navData.map((tab) => (
          <TabItem
            href={tab.value}
            css={{
              padding: '16px 12px',
              display: 'inline-block',
              position: 'relative',
              cursor: 'pointer',
              transition: 'color 250ms',
            }}
            key={tab.value}
            onClick={props.onClick}
            onMouseOver={(ev: MouseEvent) => repositionHighlight(ev, tab)}
          >
            {tab.title}
          </TabItem>
        ))}
      </TabsNav>
    </motion.ul>
  );
};
