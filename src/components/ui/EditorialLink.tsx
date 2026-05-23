export function EditorialLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <a href={href} className="group relative inline-flex items-center font-sans micro-caps text-onyx">
      {children}
      <span className="ml-3 group-hover:translate-x-2 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
        &rarr;
      </span>
      <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-onyx origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
    </a>
  );
}
