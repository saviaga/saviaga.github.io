import React from 'react';
import { Tag } from './Tag';
import { DateString } from './Date';
import { Link } from './Link';
import { Image } from './Image';

export enum Publisher {
  // Academic Conferences
  CSCW = 'ACM Conference on Computer-Supported Cooperative Work and Social Computing',
  CHI = 'ACM Conference on Human Factors in Computing Systems',
  HCOMP = 'AAAI Conference on Human Computation and Crowdsourcing',
  ICTD = 'ACM International Conference on Information and Communication Technologies and Development',
  UIST = 'ACM Symposium on User Interface Software and Technology',
  Hypertext = 'ACM Conference on Hypertext and Social Media',
  WebSci = 'ACM Web Science Conference',
  CLIHC = 'Latin American Conference on Human-Computer Interaction',
  IEEE = 'IEEE Conference',

  // Academic Journals
  TOCHI = 'ACM Transactions on Computer-Human Interaction',
  IJHCS = 'International Journal of Human-Computer Studies',
  TACCESS = 'ACM Transactions on Accessible Computing',
  AvancesHCI = 'Avances en Interacción Humano-Computadora',

  // Preprints and Archives
  ArXiv = 'arXiv',

  // Workshops and Other Venues
  Workshop = 'Workshop',
  Symposium = 'Symposium',

  // Media (keep for news mentions if needed)
  TechCrunch = 'TechCrunch',
  HackerNews = 'Hacker News',
}

export type PublisherData = {
  logo: Image,
  description?: React.ReactNode,
}

export enum PublicationType {
  ConferencePaper = 'Conference Paper',
  JournalArticle = 'Journal Article',
  WorkshopPaper = 'Workshop Paper',
  Poster = 'Poster',
  Talk = 'Talk',
  Demo = 'Demo',
  Media = 'Media Mention',
}

export type Publication = {
  title: string;
  summary: string[];
  link: Link;
  date: DateString;
  publisher: Publisher;
  tags?: Tag[];
  // Academic-specific fields
  authors?: string[];
  venue?: string;
  year?: number;
  type?: PublicationType;
  abstract?: string[];
  pdf?: string;
  doi?: string;
  awards?: string[];
};
