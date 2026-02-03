export const dynamic = 'auto';

export async function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-6 flex flex-col gap-2 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-xs sm:text-sm text-muted-foreground">
          © {year}{' '}
          <span className="font-medium text-foreground">Ravish Bisht</span> ·
          Full-Stack Developer
        </p>

        <a
          href="mailto:cykoravish@gmail.com"
          className="text-xs sm:text-sm font-medium text-primary hover:underline"
        >
          Let’s work together →
        </a>
      </div>
    </footer>
  );
}
