import React from 'react';
import PageLayout from '../components/layouts/PageLayout';
import H, { hLevel } from '../components/shared/H';
import SEO from '../components/shared/SEO';

const AboutPage = (): React.ReactElement => {
  return (
    <PageLayout>
      <SEO
        title="About"
        description="About Claudia Flores-Saviaga - Academic background, education, and service"
      />
      <H level={hLevel.h1}>About</H>

      <div className="mt-8">
        <H level={hLevel.h2}>Bio</H>
        <p className="mt-4 font-light leading-relaxed">
        Hi! I'm Claudia, a researcher specializing in Human Centered AI and Human Computer Interaction.
        My work examines how AI systems interact with human behavior, culture, and institutions, and how these technologies perform in real world environments. 
        I apply methods from human computer interaction and computational social science to study large language model behavior through empirical evaluation,
         behavioral testing, and constraint design. My work focuses on how alignment mechanisms operate in practice and how system behavior responds to 
         real world interaction conditions. I have presented my work at leading conferences including CHI, CSCW, and HCOMP. 
        </p>
      </div>

      <div className="mt-12">
        <H level={hLevel.h2}>Academic Service</H>
        <p className="mt-4 mb-6 font-light text-gray-600">
          Editorial and Committee Participations
        </p>

        <div className="space-y-8">
          {/* 2026 */}
          <div>
            <H level={hLevel.h3}>2026</H>
            <ul className="mt-3 space-y-2 font-light">
              <li><span className="font-medium">CHI:</span> Program Committee (PC)</li>
              <li><span className="font-medium">CSCW:</span> Program Committee (PC)</li>
              <li><span className="font-medium">IUI:</span> Program Committee (PC)</li>
              <li><span className="font-medium">AIxVR:</span> Program Committee (PC)</li>
            </ul>
          </div>

          {/* 2025 */}
          <div>
            <H level={hLevel.h3}>2025</H>
            <ul className="mt-3 space-y-2 font-light">
              <li><span className="font-medium">CHI:</span> Associate Chair (AC)</li>
              <li><span className="font-medium">UIST:</span> Program Committee (PC)</li>
              <li><span className="font-medium">AIxVR:</span> Program Committee (PC)</li>
            </ul>
          </div>

          {/* 2024 */}
          <div>
            <H level={hLevel.h3}>2024</H>
            <ul className="mt-3 space-y-2 font-light">
              <li><span className="font-medium">AIxVR:</span> Program Committee (PC)</li>
              <li><span className="font-medium">WebSci:</span> Program Committee (PC)</li>
              <li><span className="font-medium">IUI:</span> Program Committee (PC)</li>
              <li><span className="font-medium">CSCW:</span> Associate Chair (AC)</li>
            </ul>
          </div>

          {/* 2023 */}
          <div>
            <H level={hLevel.h3}>2023</H>
            <ul className="mt-3 space-y-2 font-light">
              <li><span className="font-medium">HCOMP:</span> Industry and Sponsorship Co-Chair</li>
              <li><span className="font-medium">CHI:</span> Program Committee (PC)</li>
              <li><span className="font-medium">WebSci:</span> Program Committee (PC)</li>
              <li><span className="font-medium">IUI:</span> Program Committee (PC)</li>
              <li><span className="font-medium">CSCW:</span> Associate Chair (AC)</li>
            </ul>
          </div>

          {/* 2022 */}
          <div>
            <H level={hLevel.h3}>2022</H>
            <ul className="mt-3 space-y-2 font-light">
              <li><span className="font-medium">WebSci:</span> Program Committee (PC)</li>
              <li><span className="font-medium">IUI:</span> Program Committee (PC)</li>
              <li><span className="font-medium">CSCW:</span> Associate Chair (AC)</li>
              <li><span className="font-medium">AIVR:</span> Program Committee (PC)</li>
            </ul>
          </div>

          {/* 2021 */}
          <div>
            <H level={hLevel.h3}>2021</H>
            <ul className="mt-3 space-y-2 font-light">
              <li><span className="font-medium">CHI:</span> Late Breaking Work, Program Committee (PC)</li>
              <li><span className="font-medium">CSCW:</span> Program Committee (PC)</li>
              <li><span className="font-medium">IUI:</span> Program Committee (PC)</li>
              <li><span className="font-medium">ICWSM:</span> Program Committee (PC)</li>
            </ul>
          </div>

          {/* 2020 */}
          <div>
            <H level={hLevel.h3}>2020</H>
            <ul className="mt-3 space-y-2 font-light">
              <li><span className="font-medium">CHI:</span> Late Breaking Work, Associate Chair (AC)</li>
              <li><span className="font-medium">ICWSM:</span> Program Committee (PC)</li>
              <li><span className="font-medium">IUI:</span> Program Committee (PC)</li>
              <li><span className="font-medium">IEEE AIVR:</span> Program Committee (PC)</li>
            </ul>
          </div>

          {/* 2019 */}
          <div>
            <H level={hLevel.h3}>2019</H>
            <ul className="mt-3 space-y-2 font-light">
              <li><span className="font-medium">CHI:</span> Program Committee (PC)</li>
              <li><span className="font-medium">ICWSM:</span> Program Committee (PC)</li>
              <li><span className="font-medium">IUI:</span> Program Committee (PC)</li>
            </ul>
          </div>

          {/* 2018 */}
          <div>
            <H level={hLevel.h3}>2018</H>
            <ul className="mt-3 space-y-2 font-light">
              <li><span className="font-medium">CSCW:</span> Program Committee (PC)</li>
              <li><span className="font-medium">IUI:</span> Program Committee (PC)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <H level={hLevel.h2}>Honors & Awards</H>
        <div className="mt-6 space-y-4 font-light">
          <div>
            <p className="font-semibold">Facebook Emerging Scholar Fellowship</p>
            <p className="text-gray-600">2019</p>
          </div>
          <div>
            <p className="font-semibold">Sigma Xi: The Scientific Research Honor Society</p>
            <p className="text-gray-600">Member</p>
          </div>
          <div>
            <p className="font-semibold">Upsilon Pi Epsilon</p>
            <p className="text-gray-600">The Computer Science Honorary Society</p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <H level={hLevel.h2}>Education</H>
        <div className="mt-6 space-y-4 font-light">
          <div>
            <p className="font-semibold">Ph.D. in Computer Science</p>
            <p className="text-gray-600">Northeastern University, USA</p>
          </div>
          <div>
            <p className="font-semibold">M.S. in Information Technology</p>
            <p className="text-gray-600">Carnegie Mellon University, USA</p>
          </div>
          <div>
            <p className="font-semibold">M.S. in Information Technology Management</p>
            <p className="text-gray-600">Monterrey Institute of Technology and Higher Education, Mexico</p>
          </div>
          <div>
            <p className="font-semibold">B.S. in Computer Systems Engineering</p>
            <p className="text-gray-600">University of the Americas (UDLAP), Mexico</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutPage;
