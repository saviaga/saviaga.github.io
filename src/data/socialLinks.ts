// @flow
import { socialLinkTypes } from '../types/SocialLink';
import type { SocialLink } from '../types/SocialLink';

export const socialLinks: SocialLink[] = [
  {
    type: socialLinkTypes.linkedIn,
    url: 'https://www.linkedin.com/in/saviaga/',
    secondary: false,
    caption: 'Claudia Flores-Saviaga on LinkedIn',
  },
  {
    type: socialLinkTypes.googleScholar,
    url: 'https://scholar.google.com/citations?user=UwGbNv8AAAAJ&hl',
    secondary: false,
    caption: 'Claudia Flores-Saviaga on Google Scholar',
  },
  {
    type: socialLinkTypes.twitter,
    url: 'https://x.com/saviaga',
    secondary: false,
    caption: 'Claudia Flores-Saviaga on X',
  },
  {
    type: socialLinkTypes.gitHub,
    url: 'https://github.com/saviaga',
    secondary: false,
    caption: 'Claudia Flores-Saviaga on GitHub',
  },
];
