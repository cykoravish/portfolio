import { Metadata } from 'next';
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { ExternalLink, Mail } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Full Stack Developer | Next.js, MERN, DevOps & AI',
  description:
    'Ravish Bisht is a Full-Stack Developer specializing in Next.js, MERN Stack, DevOps, and AI integration. Explore portfolio, projects, and blog.',
};

const IntroductionPage = async () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Ravish Bisht</PageHeaderHeading>
        <h2 className="flex flex-col items-start gap-1 py-0 text-2xl font-bold leading-tight tracking-tighter sm:text-3xl md:text-4xl lg:leading-[1.1] mt-2 text-muted-foreground">
          Full-Stack Web Developer | DevOps | AI Integration
        </h2>
        <PageHeaderDescription>
          I am a Full-Stack Web Developer with a strong focus on JavaScript and
          modern web development. I work on building complete web applications
          that are scalable, reliable, and easy to use.
          <br />
          <br />
          I primarily work with React, Next.js, Node.js, Express, MongoDB, and
          Tailwind CSS. Along with development, I follow DevOps practices such
          as Docker-based deployments, CI/CD pipelines, and cloud hosting to
          ensure smooth and stable releases.
          <br />
          <br />I also explore AI integrations to improve application features
          and user experience. My focus is on writing clean code, solving real
          problems, and delivering production-ready solutions.
        </PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm" className="rounded-md">
            <Link href={siteConfig.links.resume} target="_blank">
              Get Resume
              <ExternalLink className="size-3" strokeWidth={2} />
            </Link>
          </Button>
          <Button asChild size="sm" variant="ghost" className="rounded-md">
            <Link href={siteConfig.links.email}>
              <Mail className="size-4" />
              Send Mail
            </Link>
          </Button>
          <Button asChild size="sm" variant="outline" className="rounded-md">
            <Link href="/services">View Services</Link>
          </Button>
        </PageActions>
      </PageHeader>

      <Pager
        prevHref="/"
        nextHref="/about"
        prevTitle="Previous"
        nextTitle="About Me"
      />
    </>
  );
};
export default IntroductionPage;
