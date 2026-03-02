import type { Metadata } from 'next';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Ravish Bisht | Full Stack website Developer | MERN, Next.js & DevOps',
  description:
    'Get in touch with Ravish Bisht for freelance projects, collaborations, full-stack development opportunities, or technical discussions about MERN, DevOps, and AI integration.',
  alternates: {
    canonical: 'https://cykoravish.cloud/contact',
  },
};

const ContactPage = async () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Contact Ravish Bisht – Full Stack Developer</PageHeaderHeading>
        <PageHeaderDescription>
          If you’re looking for a Full Stack Developer experienced in Next.js,
          MERN stack, DevOps workflows, or AI integration, feel free to reach
          out. I’m open to freelance projects, startup collaborations, and
          technical discussions.
        </PageHeaderDescription>
        <PageHeaderDescription>
          You can use the form below or contact me directly via email. I
          typically respond within 24–48 hours.
        </PageHeaderDescription>
      </PageHeader>

      <div className="mt-4">
        <ContactForm />
      </div>

      <Pager
        prevHref="/blog"
        nextHref="/stats"
        prevTitle="Blogs"
        nextTitle="Stats"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Ravish Bisht',
            url: 'https://cykoravish.cloud',
            jobTitle: 'Full Stack Developer',
            email: 'mailto:cykoravish@gmail.com',
            sameAs: [
              'https://github.com/cykoravish',
              'https://www.linkedin.com/in/ravish-bisht-b607083a7/',
              'https://x.com/ravish_bisht',
            ],
          }),
        }}
      />
    </>
  );
};
export default ContactPage;
