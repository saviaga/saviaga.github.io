import { Profile } from '../types/Profile';
import { socialLinks } from './socialLinks';

export const profile: Profile = {
  firstName: 'Claudia',
  lastName: 'Flores-Saviaga, PhD.',
  position: 'Human-Centered AI & HCI Researcher',
  summary: [
    'Researcher focusing on Human-Centered AI and Human-Computer Interaction',
    'Research presentations at top-tier conferences (CHI, CSCW, HCOMP)',
    'Expertise in Artificial Intelligence, Human-Centered AI, and HCI',
  ],
  avatar: {
    srcPath: 'profile/claudia-profile.jpg',
    caption: 'Claudia Flores-Saviaga',
  },
  tags: [
    { name: 'Artificial Intelligence' },
    { name: 'Human-Centered AI' },
    { name: 'HCI' },
  ],
  socialLinks,
};
