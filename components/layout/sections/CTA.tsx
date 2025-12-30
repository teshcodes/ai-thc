export default function CTA() {
  return (
    <section className="relative px-6 py-24">
      <div
        className="
          relative mx-auto max-w-6xl overflow-hidden rounded-2xl
          border border-white/10
          bg-black
          px-6 py-20 text-center
        "
      >
        
        <div className="pointer-events-none absolute inset-x-0 top-[-40%] h-125 rounded-full bg-purple-600/40 blur-[180px]" />

        {/* Grid overlay */}
        <div
          className="
            pointer-events-none absolute inset-0
            bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),
                linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]
            bg-size-[40px_40px]
            opacity-20
          "
        />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-2xl">
          {/* Heading */}
          <h2 className="mb-8 text-3xl font-semibold leading-tight text-white sm:text-4xl">
            AI-driven SEO <br className="hidden sm:block" />
            for everyone.
          </h2>

          {/* Input + button */}
          <form className="mx-auto flex max-w-md flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Your email"
              className="
                flex-1 rounded-lg border border-white/10
                bg-black/60 px-4 py-3 text-sm text-white
                placeholder-white/40
                outline-none
                focus:border-purple-500/60
                focus:ring-2 focus:ring-purple-500/30
              "
            />
            <button
              type="submit"
              className="
                rounded-lg bg-white px-6 py-3
                text-sm font-medium text-black
                transition hover:opacity-90
              "
            >
              Join waitlist
            </button>
          </form>

          {/* Helper text */}
          <p className="mt-4 text-x text-white/50">
            No credit card required · 7-days free trial
          </p>
        </div>
      </div>
    </section>
  );
}
