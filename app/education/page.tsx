import type { Metadata } from 'next';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';
import TimelineViewer from '@/components/timeline-viewer';
import { education } from '@/constants/education';

export const metadata: Metadata = {
  title: 'Education – Full Stack Developer Background',
  description:
    'Explore the educational background of Ravish Bisht, including formal education and self-learning journey that shaped his Full Stack Development career.',
  alternates: {
    canonical: 'https://cykoravish.cloud/education',
  },
};

const EducationPage = () => {
  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading>Education</PageHeaderHeading>
        <h2 className="flex flex-col items-start gap-1 py-0 text-2xl font-bold leading-tight tracking-tighter sm:text-3xl md:text-4xl lg:leading-[1.1] mt-2 text-muted-foreground">
          Building a foundation through formal education and self-learning
        </h2>
        <PageHeaderDescription>
          My academic background is non-technical, which helped me build strong
          discipline, communication skills, and the ability to learn
          independently. Alongside my formal education, I actively focused on
          learning programming and computer science fundamentals through
          self-study and practical work.
        </PageHeaderDescription>

        <PageHeaderDescription>
          I completed my Bachelor of Arts from Indira Gandhi National Open
          University and later strengthened my technical foundation through a
          certification in Information Technology, where I learned core concepts
          of computer science and programming. Most of my practical learning
          came from building real projects and working in a startup environment.
        </PageHeaderDescription>
      </PageHeader>

      <TimelineViewer data={education} />

      <Pager
        prevHref="/experience"
        nextHref="/blog"
        prevTitle="Experience"
        nextTitle="Blogs"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfilePage',
            mainEntity: {
              '@type': 'Person',
              name: 'Ravish Bisht',
              alumniOf: [
                {
                  '@type': 'EducationalOrganization',
                  name: 'Indira Gandhi National Open University',
                },
                {
                  '@type': 'EducationalOrganization',
                  name: 'Information Technology Certification',
                },
              ],
            },
          }),
        }}
      />
    </>
  );
};
export default EducationPage;
