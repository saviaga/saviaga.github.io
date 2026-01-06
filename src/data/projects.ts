import { Projects } from '../types/Project';

export const projects: Projects = {
  'research-project-1': {
    id: 'research-project-1',
    name: 'Example Research Project 1',
    cover: { srcPath: 'projects/placeholder-cover.jpg' },
    startDate: '2020-01-01',
    endDate: '2023-12-31',
    summary: [
      'Replace with description of your research project',
      'Explain the goals and key contributions',
    ],
    description: [
      'More detailed description of the research project',
      'Methodologies used',
      'Key findings',
    ],
    tags: [
      { name: 'Human-Centered AI' },
      { name: 'Crowdsourcing' },
    ],
    collaborators: [
      'Institution Name',
      'Research Lab Name',
      'Co-researchers Names',
    ],
    funding: 'NSF Grant #XXXXXX or funding source',
    publications: [
      'Reference to related publications',
    ],
    links: [
      { url: 'https://example.com/project', caption: 'Project Website' },
    ],
  },
  'research-project-2': {
    id: 'research-project-2',
    name: 'Example Research Project 2',
    cover: { srcPath: 'projects/placeholder-cover.jpg' },
    startDate: '2021-06-01',
    summary: [
      'Another research project description',
    ],
    tags: [
      { name: 'HCI' },
      { name: 'Social Computing' },
    ],
    collaborators: [
      'Collaborating institutions',
    ],
  },
  'research-project-3': {
    id: 'research-project-3',
    name: 'Ongoing Research Project',
    cover: { srcPath: 'projects/placeholder-cover.jpg' },
    startDate: '2023-01-01',
    // No endDate means ongoing
    summary: [
      'Description of ongoing research',
    ],
    tags: [
      { name: 'Civic Technology' },
    ],
  },
};
