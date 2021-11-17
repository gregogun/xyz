import { Github } from '@/components/icons';
import { Linkedin } from '@/components/icons';
import { Twitch } from '@/components/icons';
import { Twitter } from '@/components/icons';
import { Youtube } from '@/components/icons';

export const github = {
  icon: Github,
  href: 'https://github.com/gregogun',
  name: 'github',
  color: null,
};

export const linkedin = {
  icon: Linkedin,
  href: 'https://www.linkedin.com/in/greg-ogun/',
  name: 'linkedin',
  color: '#0A66C2',
};

export const twitter = {
  icon: Twitter,
  href: 'https://twitter.com/gregogun',
  name: 'twitter',
  color: '#1DA1F2',
};

export const twitch = {
  icon: Twitch,
  href: 'https://www.twitch.tv/gregogun',
  name: 'twitch',
  color: '#9146FF',
};

export const youtube = {
  icon: Youtube,
  href: 'https://www.youtube.com/channel/UCQDUHOvgodaEqjHm9Ihn87w',
  name: 'youtube',
  color: '#FF0000',
};

export const discord = {
  icon: null,
  href: 'https://discord.gg/NHCkzptb',
  name: 'discord',
  color: '#5865F2',
};

const socials = [github, linkedin, twitter, youtube, twitch];

export default socials;
