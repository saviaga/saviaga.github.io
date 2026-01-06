import React from 'react';
import { Publisher, PublisherData } from '../types/Publication';
import A from '../components/shared/A';

export const publishers: Record<Publisher, PublisherData> = {
  // Academic Conferences
  [Publisher.CSCW]: {
    logo: { srcPath: 'publishers/hacker-news.png' }, // Placeholder - replace with actual logo
    description: (
      <>
        <p>
          <b>ACM Conference on Computer-Supported Cooperative Work and Social Computing</b><br />
          <A href="https://cscw.acm.org/">cscw.acm.org</A>
        </p>
        <p>
          CSCW is a premier venue for research in the design and use of technologies
          that affect groups, organizations, communities, and networks.
        </p>
      </>
    ),
  },
  [Publisher.CHI]: {
    logo: { srcPath: 'publishers/hacker-news.png' }, // Placeholder
    description: (
      <>
        <p>
          <b>ACM Conference on Human Factors in Computing Systems</b><br />
          <A href="https://chi.acm.org/">chi.acm.org</A>
        </p>
        <p>
          CHI is the premier international conference of Human-Computer Interaction.
        </p>
      </>
    ),
  },
  [Publisher.HCOMP]: {
    logo: { srcPath: 'publishers/hacker-news.png' }, // Placeholder
    description: (
      <>
        <p>
          <b>AAAI Conference on Human Computation and Crowdsourcing</b><br />
          <A href="https://www.humancomputation.com/">humancomputation.com</A>
        </p>
        <p>
          HCOMP is the premier venue for research on human computation and crowdsourcing.
        </p>
      </>
    ),
  },
  [Publisher.ICTD]: {
    logo: { srcPath: 'publishers/hacker-news.png' }, // Placeholder
    description: (
      <>
        <p>
          <b>ACM International Conference on Information and Communication Technologies and Development</b><br />
          <A href="https://ictd.org/">ictd.org</A>
        </p>
        <p>
          ICTD is a forum for research, design, and practice related to ICTs and development.
        </p>
      </>
    ),
  },
  [Publisher.UIST]: {
    logo: { srcPath: 'publishers/hacker-news.png' }, // Placeholder
    description: (
      <>
        <p>
          <b>ACM Symposium on User Interface Software and Technology</b><br />
          <A href="https://uist.acm.org/">uist.acm.org</A>
        </p>
        <p>
          UIST is the premier forum for innovations in human-computer interfaces.
        </p>
      </>
    ),
  },
  [Publisher.Hypertext]: {
    logo: { srcPath: 'publishers/hacker-news.png' }, // Placeholder
    description: (
      <>
        <p>
          <b>ACM Conference on Hypertext and Social Media</b><br />
          <A href="https://www.acm.org/conferences/hypertext">acm.org/hypertext</A>
        </p>
        <p>
          Conference on hypertext systems, social media, and the Web.
        </p>
      </>
    ),
  },
  [Publisher.WebSci]: {
    logo: { srcPath: 'publishers/hacker-news.png' }, // Placeholder
    description: (
      <>
        <p>
          <b>ACM Web Science Conference</b><br />
          <A href="https://websci.org/">websci.org</A>
        </p>
        <p>
          Interdisciplinary conference on Web science research.
        </p>
      </>
    ),
  },
  [Publisher.CLIHC]: {
    logo: { srcPath: 'publishers/hacker-news.png' }, // Placeholder
    description: (
      <>
        <p>
          <b>Latin American Conference on Human-Computer Interaction</b><br />
          <A href="https://clihc.org/">clihc.org</A>
        </p>
        <p>
          Premier Latin American venue for HCI research.
        </p>
      </>
    ),
  },
  [Publisher.IEEE]: {
    logo: { srcPath: 'publishers/hacker-news.png' }, // Placeholder
    description: (
      <>
        <p>
          <b>IEEE Conference</b><br />
          <A href="https://www.ieee.org/">ieee.org</A>
        </p>
        <p>
          Institute of Electrical and Electronics Engineers conferences.
        </p>
      </>
    ),
  },

  // Academic Journals
  [Publisher.TOCHI]: {
    logo: { srcPath: 'publishers/hacker-news.png' }, // Placeholder
    description: (
      <>
        <p>
          <b>ACM Transactions on Computer-Human Interaction</b><br />
          <A href="https://dl.acm.org/journal/tochi">ACM Digital Library</A>
        </p>
        <p>
          A premier archival journal for research on human-computer interaction.
        </p>
      </>
    ),
  },
  [Publisher.IJHCS]: {
    logo: { srcPath: 'publishers/hacker-news.png' }, // Placeholder
    description: (
      <>
        <p>
          <b>International Journal of Human-Computer Studies</b><br />
          <A href="https://www.journals.elsevier.com/international-journal-of-human-computer-studies">Elsevier</A>
        </p>
        <p>
          Publishes original research on the design, use, and impact of computing systems.
        </p>
      </>
    ),
  },
  [Publisher.TACCESS]: {
    logo: { srcPath: 'publishers/hacker-news.png' }, // Placeholder
    description: (
      <>
        <p>
          <b>ACM Transactions on Accessible Computing</b><br />
          <A href="https://dl.acm.org/journal/taccess">ACM Digital Library</A>
        </p>
        <p>
          Premier journal for accessibility and assistive technology research.
        </p>
      </>
    ),
  },
  [Publisher.AvancesHCI]: {
    logo: { srcPath: 'publishers/hacker-news.png' }, // Placeholder
    description: (
      <>
        <p>
          <b>Avances en Interacción Humano-Computadora</b><br />
          <A href="https://aihci.org/">aihci.org</A>
        </p>
        <p>
          Latin American journal on human-computer interaction.
        </p>
      </>
    ),
  },

  // Preprints and Archives
  [Publisher.ArXiv]: {
    logo: { srcPath: 'publishers/hacker-news.png' }, // Placeholder
    description: (
      <>
        <p>
          <b>arXiv</b><br />
          <A href="https://arxiv.org/">arxiv.org</A>
        </p>
        <p>
          Open-access preprint repository for research papers.
        </p>
      </>
    ),
  },

  // Workshops and Other Venues
  [Publisher.Workshop]: {
    logo: { srcPath: 'publishers/hacker-news.png' }, // Placeholder
    description: (
      <>
        <p>
          <b>Workshop</b>
        </p>
        <p>
          Academic workshop paper or presentation.
        </p>
      </>
    ),
  },
  [Publisher.Symposium]: {
    logo: { srcPath: 'publishers/hacker-news.png' }, // Placeholder
    description: (
      <>
        <p>
          <b>Symposium</b>
        </p>
        <p>
          Academic symposium presentation.
        </p>
      </>
    ),
  },

  // Media (kept for news mentions)
  [Publisher.TechCrunch]: {
    logo: { srcPath: 'publishers/tech-crunch.png' },
    description: (
      <>
        <p>
          <b>TechCrunch</b><br />
          <A href="https://techcrunch.com/">techcrunch.com</A>
        </p>
        <p>
          An American global online newspaper focusing on topics
          regarding high-tech and startup companies.
        </p>
      </>
    ),
  },
  [Publisher.HackerNews]: {
    logo: { srcPath: 'publishers/hacker-news.png' },
    description: (
      <>
        <p>
          <b>Hacker News</b><br />
          <A href="https://news.ycombinator.com/">news.ycombinator.com</A>
        </p>
        <p>
          A social news website focusing on computer science and entrepreneurship.
        </p>
      </>
    ),
  },
};
