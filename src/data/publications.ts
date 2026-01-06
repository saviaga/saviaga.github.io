import { Publication, Publisher, PublicationType } from '../types/Publication';

export const publications: Publication[] = [
  // ====================
  // 2025 PUBLICATIONS
  // ====================

  {
    title: 'The Impact of Generative AI Coding Assistants on Developers Who Are Visually Impaired',
    authors: ['Claudia Flores-Saviaga', 'Brianna V. Hanrahan', 'Khadija Imteyaz', 'Shannon Clarke', 'Saiph Savage'],
    summary: ['Study examining how generative AI coding assistants impact blind and visually impaired developers.'],
    venue: 'CHI 2025',
    year: 2025,
    date: '2025-04-01',
    publisher: Publisher.CHI,
    type: PublicationType.ConferencePaper,
    link: {
      url: 'https://dl.acm.org/conference/chi',
      caption: 'Read paper',
    },
    tags: [
      { name: 'Human-Centered AI' },
      { name: 'Accessibility' },
      { name: 'AI Tools' },
    ],
  },

  // ====================
  // 2024 PUBLICATIONS
  // ====================

  {
    title: 'Human Computation, Equitable, and Innovative Future of Work AI Tools',
    authors: ['Khadija Imteyaz', 'Claudia Flores-Saviaga', 'Saiph Savage'],
    summary: ['Research on building equitable AI tools for the future of work using human computation.'],
    venue: 'HCOMP 2024',
    year: 2024,
    date: '2024-10-01',
    publisher: Publisher.HCOMP,
    type: PublicationType.ConferencePaper,
    link: {
      url: 'https://ojs.aaai.org/index.php/HCOMP/issue/view/604',
      caption: 'Read paper',
    },
    tags: [
      { name: 'Human Computation' },
      { name: 'Future of Work' },
      { name: 'AI Tools' },
    ],
  },

  {
    title: 'Web Science 2024: Conference Chairs\' Welcome Message',
    authors: ['Steffen Staab', 'Luca Maria Aiello', 'Yelena Mejova', 'Oshani Seneviratne', 'Christian Sindermann', 'Claudia Flores-Saviaga'],
    summary: ['Welcome message from the conference chairs of Web Science 2024.'],
    venue: 'WebSci 2024',
    year: 2024,
    date: '2024-05-01',
    publisher: Publisher.WebSci,
    type: PublicationType.ConferencePaper,
    link: {
      url: 'https://dl.acm.org/doi/proceedings/10.1145/3614419',
      caption: 'Read message',
    },
    tags: [
      { name: 'Web Science' },
    ],
  },

  {
    title: 'GigSense: An LLM-Infused Tool for Workers Collective Intelligence',
    authors: ['Khadija Imteyaz', 'Claudia Flores-Saviaga', 'Saiph Savage'],
    summary: ['Tool leveraging large language models to enable collective intelligence among gig workers.'],
    venue: 'Avances en Interacción Humano-Computadora',
    year: 2024,
    date: '2024-05-01',
    publisher: Publisher.AvancesHCI,
    type: PublicationType.JournalArticle,
    link: {
      url: 'https://arxiv.org/abs/2405.02528',
      caption: 'Read paper',
    },
    doi: '10.48550/arXiv.2405.02528',
    tags: [
      { name: 'Human-Centered AI' },
      { name: 'Crowdsourcing' },
      { name: 'LLMs' },
      { name: 'Future of Work' },
    ],
  },

  // ====================
  // 2022 PUBLICATIONS
  // ====================

  {
    title: 'The global care ecosystems of 3D printed assistive devices',
    authors: ['Saiph Savage', 'Claudia Flores-Saviaga', 'Raina Rodney', 'Lance Savage', 'Jon Schull', 'Jennifer Mankoff'],
    summary: ['Study examining the global ecosystems of care around 3D printed assistive devices.'],
    venue: 'ACM Transactions on Accessible Computing',
    year: 2022,
    date: '2022-12-01',
    publisher: Publisher.TACCESS,
    type: PublicationType.JournalArticle,
    link: {
      url: 'https://dl.acm.org/doi/10.1145/3549557',
      caption: 'Read paper',
    },
    doi: '10.1145/3549557',
    tags: [
      { name: 'Accessibility' },
      { name: 'Crowdsourcing' },
      { name: '3D Printing' },
      { name: 'Social Computing' },
    ],
  },

  // ====================
  // 2020 PUBLICATIONS
  // ====================

  {
    title: 'Understanding the complementary nature of paid and volunteer crowds for content creation',
    authors: ['Claudia Flores-Saviaga', 'Ricardo Granados', 'Lance Savage', 'Luis Escobedo', 'Saiph Savage'],
    summary: ['Research exploring how paid and volunteer crowds complement each other in content creation tasks.'],
    venue: 'Avances en Interacción Humano-Computadora',
    year: 2020,
    date: '2020-11-01',
    publisher: Publisher.AvancesHCI,
    type: PublicationType.JournalArticle,
    link: {
      url: 'https://www.aihci.net/',
      caption: 'Read paper',
    },
    tags: [
      { name: 'Crowdsourcing' },
      { name: 'Content Creation' },
      { name: 'Volunteers' },
    ],
  },

  {
    title: 'Civic technologies: Research, practice and open challenges',
    authors: ['Pablo Aragón', 'Andrés Alvarado Garcia', 'Christopher A. Le Dantec', 'Claudia Flores-Saviaga', 'Jorge Saldivar'],
    summary: ['Workshop paper exploring research, practice, and open challenges in civic technology.'],
    venue: 'CSCW 2020',
    year: 2020,
    date: '2020-10-01',
    publisher: Publisher.CSCW,
    type: PublicationType.WorkshopPaper,
    link: {
      url: 'https://dl.acm.org/doi/10.1145/3406865.3418594',
      caption: 'Read paper',
    },
    doi: '10.1145/3406865.3418594',
    tags: [
      { name: 'Civic Technology' },
      { name: 'Social Computing' },
    ],
  },

  {
    title: 'The challenges of crowd workers in rural and urban America',
    authors: ['Claudia Flores-Saviaga', 'Yuxi Li', 'Brianna Hanrahan', 'Jeffrey Bigham', 'Saiph Savage'],
    summary: ['Research examining the unique challenges faced by crowd workers in rural and urban settings.'],
    venue: 'HCOMP 2020',
    year: 2020,
    date: '2020-10-01',
    publisher: Publisher.HCOMP,
    type: PublicationType.ConferencePaper,
    link: {
      url: 'https://ojs.aaai.org/index.php/HCOMP/article/view/7464',
      caption: 'Read paper',
    },
    tags: [
      { name: 'Crowdsourcing' },
      { name: 'Social Computing' },
      { name: 'Labor' },
      { name: 'Rural Computing' },
    ],
  },

  // ====================
  // 2019 PUBLICATIONS
  // ====================

  {
    title: 'Audience and streamer participation at scale on Twitch',
    authors: ['Claudia Flores-Saviaga', 'Jessica Hammer', 'Juan Pablo Flores', 'Joseph Seering', 'Stuart Reeves', 'Saiph Savage'],
    summary: ['Study examining participation patterns between audiences and streamers on the Twitch platform.'],
    venue: 'ACM Hypertext 2019',
    year: 2019,
    date: '2019-09-01',
    publisher: Publisher.Hypertext,
    type: PublicationType.ConferencePaper,
    link: {
      url: 'https://dl.acm.org/doi/10.1145/3342220.3344931',
      caption: 'Read paper',
    },
    doi: '10.1145/3342220.3344931',
    tags: [
      { name: 'Social Computing' },
      { name: 'Live Streaming' },
      { name: 'Online Communities' },
    ],
  },

  // ====================
  // 2018 PUBLICATIONS
  // ====================

  {
    title: 'Expertwin: An alter ego in cyberspace for knowledge workers',
    authors: ['Carlos Toxtli', 'Claudia Flores-Saviaga', 'Maira Maurier', 'Aurelia Ribot', 'Taiwo Bankole', 'Andrew Entrekin', 'Saiph Savage'],
    summary: ['System creating digital alter egos for knowledge workers to assist with online tasks.'],
    venue: 'IEEE iThings 2018',
    year: 2018,
    date: '2018-07-01',
    publisher: Publisher.IEEE,
    type: PublicationType.ConferencePaper,
    link: {
      url: 'https://ieeexplore.ieee.org/document/8726816',
      caption: 'Read paper',
    },
    tags: [
      { name: 'Human-Centered AI' },
      { name: 'Knowledge Work' },
      { name: 'Crowdsourcing' },
    ],
  },

  // ====================
  // 2017 PUBLICATIONS
  // ====================

  {
    title: 'Understanding interface design and mobile money perceptions in Latin America',
    authors: ['Chi-Wei Chiang', 'Courtney Anderson', 'Claudia Flores-Saviaga', 'Elsy Arenas', 'Felipe Colin', 'Saiph Savage'],
    summary: ['Research examining interface design and perceptions of mobile money systems in Latin America.'],
    venue: 'CLIHC 2017',
    year: 2017,
    date: '2017-11-01',
    publisher: Publisher.CLIHC,
    type: PublicationType.ConferencePaper,
    link: {
      url: 'https://dl.acm.org/doi/10.1145/3151470.3151476',
      caption: 'Read paper',
    },
    doi: '10.1145/3151470.3151476',
    tags: [
      { name: 'HCI' },
      { name: 'Mobile Money' },
      { name: 'Latin America' },
    ],
  },

  // ====================
  // 2016 PUBLICATIONS
  // ====================

  {
    title: 'Bring on board new enthusiasts! A case study of impact of Wikipedia art+ feminism edit-a-thon events on newcomers',
    authors: ['Rosta Farzan', 'Saiph Savage', 'Claudia Flores-Saviaga'],
    summary: ['Case study examining how Wikipedia Art+Feminism edit-a-thon events impact newcomer participation.'],
    venue: 'SocInfo 2016',
    year: 2016,
    date: '2016-11-01',
    publisher: Publisher.CSCW,
    type: PublicationType.ConferencePaper,
    link: {
      url: 'https://link.springer.com/chapter/10.1007/978-3-319-47880-7_2',
      caption: 'Read paper',
    },
    doi: '10.1007/978-3-319-47880-7_2',
    tags: [
      { name: 'Social Computing' },
      { name: 'Crowdsourcing' },
      { name: 'Online Communities' },
      { name: 'Gender Equity' },
    ],
  },

  {
    title: 'Leadwise: using online bots to recruite and guide expert volunteers',
    authors: ['Claudia Flores-Saviaga', 'Saiph Savage', 'Dario Taraborelli'],
    summary: ['System using bots to recruit and coordinate expert volunteers for online tasks.'],
    venue: 'CSCW 2016',
    year: 2016,
    date: '2016-02-01',
    publisher: Publisher.CSCW,
    type: PublicationType.ConferencePaper,
    link: {
      url: 'https://dl.acm.org/doi/10.1145/2818048.2835203',
      caption: 'Read paper',
    },
    doi: '10.1145/2818048.2835203',
    tags: [
      { name: 'Human-Centered AI' },
      { name: 'Bots' },
      { name: 'Crowdsourcing' },
      { name: 'Volunteers' },
    ],
  },

  {
    title: 'Botviz: Data visualizations for collaborations with bots and volunteers',
    authors: ['Carlos Toxtli', 'Claudia Flores-Saviaga', 'Francisco Aguilar', 'Andres Monroy', 'Juan Flores', 'Jorge Herrejon', 'Saiph Savage'],
    summary: ['Visualization tool for understanding bot-volunteer collaborations on crowdsourcing platforms.'],
    venue: 'CSCW 2016',
    year: 2016,
    date: '2016-02-01',
    publisher: Publisher.CSCW,
    type: PublicationType.Demo,
    link: {
      url: 'https://dl.acm.org/doi/10.1145/2818052.2874338',
      caption: 'Read paper',
    },
    doi: '10.1145/2818052.2874338',
    tags: [
      { name: 'Data Visualization' },
      { name: 'Bots' },
      { name: 'Crowdsourcing' },
    ],
  },

  // ====================
  // 2015 PUBLICATIONS
  // ====================

  {
    title: 'Daemo: A self-governed crowdsourcing marketplace',
    authors: ['Snehalkumar Gaikwad', 'Durim Morina', 'Rajan Nistala', 'Megha Agarwal', 'Alison Cossette', 'Radhika Bhanu', 'Saiph Savage', 'Vishwajeet Narwal', 'Karan Rajpal', 'Jeff Regino', 'Akshit Khanna', 'Younjoon Lee', 'Jeffrey Bigham', 'Claudia Flores-Saviaga', 'Michael Bernstein'],
    summary: ['Self-governed crowdsourcing platform where workers participate in governance and policy decisions.'],
    venue: 'UIST 2015',
    year: 2015,
    date: '2015-11-01',
    publisher: Publisher.UIST,
    type: PublicationType.Demo,
    link: {
      url: 'https://dl.acm.org/doi/10.1145/2815585.2815739',
      caption: 'Read paper',
    },
    doi: '10.1145/2815585.2815739',
    tags: [
      { name: 'Crowdsourcing' },
      { name: 'Future of Work' },
      { name: 'Worker Rights' },
    ],
  },
];
