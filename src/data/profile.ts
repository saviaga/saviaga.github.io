import { Profile } from '../types/Profile';
import { socialLinks } from './socialLinks';

export const profile: Profile = {
  firstName: 'Claudia',
  lastName: 'Flores-Saviaga, PhD.',
  position: 'Human-Centered AI |  LLM Alignment and Evaluation',
  summary: [
    'Researching LLM behavior through empirical methods in real world interaction contexts',
    'Conducting human centered AI research on interactive systems, accessibility, and real world technology use across diverse communities',
    'Contributing sociotechnical and human AI interaction research to leading conferences including CHI, CSCW, and HCOMP',
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
