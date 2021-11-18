import { css } from 'stitches.config';
import socials from 'data/socials';
import { VisuallyHidden } from './VisuallyHidden';
import { List, ListItem } from './Layout';

const icon = css({
  width: '$6',
  height: '$6',
  transitionDuration: '300ms',
});

const Link = ({ children, href, isExternal = false }: any) => {
  return (
    <a
      href={href}
      rel="noreferrer noopener"
      target={isExternal ? '_blank' : undefined}
    >
      {children}
    </a>
  );
};

interface IconLinkProps {
  Icon: any;
  href: string;
  title: string | null;
  color?: string | null;
}

const IconLink = ({
  Icon,
  href,
  title = null,
  color = null,
  ...props
}: IconLinkProps) => {
  return (
    <Link href={href} isExternal {...props}>
      <Icon
        className={icon({
          css: {
            '&:hover': { fill: color, transform: 'translateY(-2px)' },
          },
        })}
        aria-hidden="true"
        focusable="false"
      />
      <VisuallyHidden>{title}</VisuallyHidden>
    </Link>
  );
};

export default function Socials() {
  return (
    <List css={{ display: 'flex', gap: '$6' }}>
      {socials.map((social) => (
        <ListItem key={social.name}>
          <IconLink
            Icon={social.icon}
            href={social.href}
            color={social.color}
            title={social.name}
          />
        </ListItem>
      ))}
    </List>
  );
}
