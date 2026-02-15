import { Profile } from '../types/Profile';
import { socialLinks } from './socialLinks';

export const profile: Profile = {
  firstName: 'Claudia',
  lastName: 'Flores-Saviaga, PhD.',
  position: 'Human-Centered AI & HCI Researcher',
  summary: [
    'Advancing human centered approaches to artificial intelligence and interactive systems',
    'Contributing research to leading conferences including CHI, CSCW, and HCOMP',
    'Specializing in responsible AI, social impact, and human technology collaboration',
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
