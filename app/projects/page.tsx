import { Metadata } from 'next';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { projects } from '@/constants/projects';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Full Stack Developer Projects – Next.js & MERN Applications',
  description:
    'Explore real-world Full Stack projects built with Next.js, MERN Stack, DevOps practices, and AI integration by Ravish Bisht.',
  alternates: {
    canonical: 'https://cykoravish.cloud/projects',
  },
};

const ProjectsPage = () => {
  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading> Full Stack Developer Projects – Next.js & MERN Applications</PageHeaderHeading>
        <h2 className="flex flex-col items-start gap-1 py-0 text-2xl font-bold leading-tight tracking-tighter sm:text-3xl md:text-4xl lg:leading-[1.1] mt-2 text-muted-foreground">
          Real-world projects focused on solving practical problems
        </h2>
        <PageHeaderDescription>
          Below are some of the real-world applications I have built using
          Next.js, React, Node.js, MongoDB, and DevOps deployment practices.
          These projects demonstrate my expertise in building scalable,
          production-ready web applications.
        </PageHeaderDescription>
      </PageHeader>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 card-container">
        {projects.map((project, index) => (
          <Card
            title={project.overview}
            key={index}
            className="relative w-full transition-all duration-300 cursor-pointer isolate hover:scale-105"
          >
            <CardHeader>
              <CardTitle className="leading-6">{project.title}</CardTitle>
              <CardDescription className="flex flex-col gap-2">
                {project.tagline}
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-muted-foreground "
                >
                  View project →<span className="absolute inset-0"></span>
                </Link>
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <Pager
        prevHref="/about"
        nextHref="/services"
        prevTitle="About"
        nextTitle="Services"
      />
    </>
  );
};
export default ProjectsPage;
