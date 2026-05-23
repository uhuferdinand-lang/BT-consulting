export function Footer() {
  return (
    <footer className="border-t border-lux bg-surface px-6 py-24 md:px-12 md:py-32 xl:px-24">
      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-16 font-sans md:grid-cols-4 md:gap-8">
        <div className="col-span-1 md:col-span-2">
          <h4 className="mb-6 text-lg text-foreground">
            Monthly Operating Notes.
          </h4>
          <p className="mb-8 max-w-sm leading-relaxed text-muted">
            Quiet notes on operational clarity, decision frameworks, and
            sustainable scale. Written for founders building with discipline.
          </p>
          <div className="flex max-w-sm border-b border-lux pb-4">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Email address"
              className="flex-grow bg-transparent text-sm text-foreground outline-none placeholder:text-muted"
            />
            <button
              type="button"
              className="micro-caps transition-colors hover:text-muted"
            >
              Subscribe
            </button>
          </div>
        </div>

        <div>
          <h4 className="micro-caps mb-6 text-foreground">Navigation</h4>
          <ul className="space-y-4 text-sm text-muted">
            <li>
              <a href="#approach" className="transition-colors hover:text-foreground">
                The BT Framework
              </a>
            </li>
            <li>
              <a href="#outcomes" className="transition-colors hover:text-foreground">
                Outcomes
              </a>
            </li>
            <li>
              <a href="#firm" className="transition-colors hover:text-foreground">
                The Firm
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="inline-block border-b border-accent pb-1 text-accent"
              >
                Request Consultation
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="micro-caps mb-6 text-foreground">Presence</h4>
          <ul className="space-y-4 text-sm text-muted">
            <li>Lagos Studio</li>
            <li>Victoria Island, Lagos</li>
            <li>Available Globally</li>
          </ul>
        </div>
      </div>

      <div className="micro-caps mx-auto mt-32 flex max-w-screen-2xl flex-col justify-between gap-4 border-t border-lux pt-8 text-muted md:flex-row">
        <p>Copyright 2026. Premium consulting for complex organizations.</p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
}
