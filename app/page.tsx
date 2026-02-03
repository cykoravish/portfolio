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

const IntroductionPage = async () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Ravish Bisht</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Full-Stack Web Developer | DevOps | AI Integration
        </PageHeaderHeading>
        <PageHeaderDescription>
          I am a results-driven Full-Stack Web Developer with strong expertise in
          JavaScript and modern web technologies. I specialize in building
          scalable, high-performance web applications using Next.js, React,
          Node.js, Express, MongoDB, and Tailwind CSS.
          <br />
          <br />
          Alongside full-stack development, I apply DevOps practices such as
          Docker-based deployments, CI/CD pipelines, and cloud hosting to ensure
          reliable and efficient delivery. I also actively explore AI
          integrations to enhance application intelligence and user experience.
          I focus on writing clean, maintainable code and delivering
          production-ready solutions.
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
