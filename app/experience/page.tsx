import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';
import TimelineViewer from '@/components/timeline-viewer';
import { experiences } from '@/constants/experience';

const ExperiencePage = () => {
  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading>Experience</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Learning by building, shipping, and improving real products
        </PageHeaderHeading>
        <PageHeaderDescription>
          My experience as a developer comes from working on real-world projects
          in a startup environment and continuously learning through hands-on
          development. I started as a self-taught developer and gradually moved
          into building production applications used by real users.
        </PageHeaderDescription>

        <PageHeaderDescription>
          In my current role, I work on full-stack web applications where I
          handle frontend features, backend logic, database design, and
          deployments. I have experience working in a team, taking ownership of
          tasks, reviewing code, and improving existing systems for better
          performance and scalability.
        </PageHeaderDescription>

        <PageHeaderDescription>
          Over time, I have also taken responsibility for deploying applications
          on VPS servers using Docker and CI/CD pipelines. This has helped me
          understand the complete development lifecycle — from writing code to
          running it reliably in production.
        </PageHeaderDescription>
      </PageHeader>

      <TimelineViewer data={experiences} />

      <Pager
        prevHref="/skills-tools"
        nextHref="/education"
        prevTitle="Skills & Tools"
        nextTitle="Education"
      />
    </>
  );
};
export default ExperiencePage;
