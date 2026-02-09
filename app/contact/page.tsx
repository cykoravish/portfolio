import { PageHeader, PageHeaderHeading } from '@/components/page-header';
import Pager from '@/components/pager';
import ContactForm from './ContactForm';

const ContactPage = async () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Contact</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Open to opportunities, collaboration, and meaningful conversations
        </PageHeaderHeading>
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
    </>
  );
};
export default ContactPage;
