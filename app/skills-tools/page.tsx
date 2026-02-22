import type { Metadata } from 'next';
import { Icons } from '@/components/icons';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';
import { Badge } from '@/components/ui/badge';
import { mySkills } from '@/constants';

export const metadata: Metadata = {
  title: 'Skills & Tools – Next.js, MERN Stack, DevOps & AI',
  description:
    'Explore the technical skills and tools used by Ravish Bisht, including Next.js, React, Node.js, MongoDB, DevOps workflows, Docker, and AI integration.',
  alternates: {
    canonical: 'https://cykoravish.cloud/skills-tools',
  },
};

const SkillsToolsPage = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>
          Technical Skills & Tools – Full Stack Development
        </PageHeaderHeading>
        <h2 className="flex flex-col items-start gap-1 py-0 text-2xl font-bold leading-tight tracking-tighter sm:text-3xl md:text-4xl lg:leading-[1.1] mt-2 text-muted-foreground">
          Tools and technologies I use to build, deploy, and maintain real
          applications
        </h2>
        <PageHeaderDescription>
          I have learned these skills through hands-on practice, real projects,
          and daily work in a startup environment. I focus on using the right
          tools to build reliable, scalable, and maintainable web applications.
          My experience covers frontend development, backend systems, and DevOps
          workflows for deploying applications to production.
        </PageHeaderDescription>
      </PageHeader>

      {/* skills and tools badges */}
      <div
        id="badges"
        className="flex flex-wrap items-center justify-center gap-2 my-4"
      >
        {mySkills.map((item) => (
          <Badge
            key={item.title}
            className="p-4 py-2 border border-secondary bg-secondary-foreground text-secondary"
          >
            {Icons[item.icon as keyof typeof Icons]?.({
              className: 'mr-2 size-4',
            })}
            {item.title}
          </Badge>
        ))}
      </div>

      <Pager
        prevHref="/services"
        nextHref="/experience"
        prevTitle="Services"
        nextTitle="Experience"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Technical Skills',
            itemListElement: mySkills.map((skill, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              name: skill.title,
            })),
          }),
        }}
      />
    </>
  );
};
export default SkillsToolsPage;
