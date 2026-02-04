import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';
import TimelineViewer from '@/components/timeline-viewer';
import { education } from '@/constants/education';

const EducationPage = () => {
  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading>Education</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Building a foundation through formal education and self-learning
        </PageHeaderHeading>
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
        nextHref="/contact"
        prevTitle="Experience"
        nextTitle="Contact"
      />
    </>
  );
};
export default EducationPage;
