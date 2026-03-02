import { Metadata } from 'next';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';

export const metadata: Metadata = {
  title: 'About Ravish Bisht – Full Stack Developer',
  description:
    'Learn about Ravish Bisht, a self-taught Full Stack Developer expert in building scalable and beautiful websites and backend apis with ai integration. Discover his journey, experience, and technical expertise.',
  alternates: {
    canonical: 'https://cykoravish.cloud/about',
  },
};

const AboutMePage = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>About Ravish</PageHeaderHeading>
        <h2 className="flex flex-col items-start gap-1 py-0 text-2xl font-bold leading-tight tracking-tighter sm:text-3xl md:text-4xl lg:leading-[1.1] mt-2 text-muted-foreground">
          Self-taught Full-Stack Web Developer working in a startup environment
        </h2>
        <PageHeaderDescription>
          I am a self-taught Full Stack Developer specializing in Next.js, MERN
          Stack, DevOps practices, and AI-powered web applications. I
          transitioned from a non-technical background into software development
          through consistent self-study, project building, and hands-on
          experimentation.
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
        <section className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Technical Focus Areas</h2>
          <ul className="list-disc pl-6 space-y-1 text-base sm:text-lg text-foreground font-light">
            <li>Full Stack Web Development (Next.js, React, Node.js)</li>
            <li>MERN Stack Application Architecture</li>
            <li>DevOps & Docker-based Deployments</li>
            <li>CI/CD Pipelines and Cloud Hosting</li>
            <li>AI Integration in Web Applications</li>
          </ul>
        </section>
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
