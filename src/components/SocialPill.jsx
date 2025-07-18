
export default function SocialPill({ href, children }) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white/5 border border-white/10 rounded-full
                   flex justify-center items-center gap-x-2
                   py-1 px-2 md:py-2 md:px-4
                   text-xs md:text-base
                   transition
                   hover:scale-110 hover:bg-white/10"
      >
        {children}
      </a>
    );
  }