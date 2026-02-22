import type { Metadata } from 'next';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';
import TimelineViewer from '@/components/timeline-viewer';
import { experiences } from '@/constants/experience';

export const metadata: Metadata = {
  title: 'Experience – Full Stack Developer | Next.js & MERN',
  description:
    'Explore the professional experience of Ravish Bisht, a Full Stack Developer working with Next.js, MERN stack, DevOps practices, and production deployments.',
  alternates: {
    canonical: 'https://cykoravish.cloud/experience',
  },
};

const ExperiencePage = () => {
  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading>
          Professional Experience – Full Stack Developer
        </PageHeaderHeading>
        <h2 className="flex flex-col items-start gap-1 py-0 text-2xl font-bold leading-tight tracking-tighter sm:text-3xl md:text-4xl lg:leading-[1.1] mt-2 text-muted-foreground">
          Learning by building, shipping, and improving real products
        </h2>
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Ravish Bisht',
            hasOccupation: {
              '@type': 'Occupation',
              name: 'Full Stack Developer',
              description:
                'Building full-stack web applications using Next.js, MERN stack, and DevOps practices.',
            },
          }),
        }}
      />
    </>
  );
};
export default ExperiencePage;
