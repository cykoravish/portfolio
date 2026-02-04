import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';

const AboutMePage = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>About Ravish</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Self-taught Full-Stack Web Developer working in a startup environment
        </PageHeaderHeading>
        <PageHeaderDescription>
          I come from a non-technical background and learned web development
          through self-study. I started by learning the basics using online
          resources, YouTube tutorials, and paid courses, and improved my skills
          by building small projects and practicing regularly.
        </PageHeaderDescription>

        <PageHeaderDescription>
          As my understanding grew, I developed an interest in how complete
          applications work. This led me to learn backend development,
          databases, and deployment processes so I could work on both the
          frontend and backend of an application.
        </PageHeaderDescription>

        <PageHeaderDescription>
          I am currently working at a startup, where I build and maintain real
          features used by users. I enjoy working in team environments, taking
          ownership of tasks, and writing clean, readable code that is easy to
          maintain and scale over time.
        </PageHeaderDescription>
      </PageHeader>

      <Pager
        prevHref="/"
        nextHref="/projects"
        prevTitle="Introduction"
        nextTitle="Projects"
      />
    </>
  );
};
export default AboutMePage;
