import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-40">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        {/* Global bottom glow */}
        <div className="absolute bottom-[-30%] left-1/2 h-150 w-150 -translate-x-1/2 rounded-full bg-purple-600/40 blur-[160px]" />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black via-black/80 to-black" />
      </div>

      <div className="mx-auto max-w-5xl px-6 text-center">
        {/* Badge */}
        <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-black/60 px-4 py-2 text-xs text-purple-200 shadow-[0_0_20px_rgba(140,69,255,0.35)] backdrop-blur">
          <span className="rounded-full bg-purple-600 px-2 py-0.5 text-[10px] font-semibold text-black">
            NEW
          </span>
          <span className="text-[#9855FF]">
            Latest integration just arrived
          </span>
        </div>

        {/* Heading image + glows */}
        <div className="relative mx-auto max-w-4xl">
          {/* Center glow */}
          <div className="absolute -bottom-16 left-1/2 h-65 w-[85%] -translate-x-1/2 rounded-full " />

          {/* Side glows */}
          <div className="absolute left-[-25%] top-1/2 h-70 w-70 -translate-y-1/2 rounded-full bg-purple-600/25 blur-[160px]" />
          <div className="absolute right-[-25%] top-1/2 h-70 w-70 -translate-y-1/2 rounded-full bg-purple-600/25 blur-[160px]" />

          {/* Heading image with bottom fade */}
          <Image
            src="/heading.png"
            alt="Boost your rankings with AI"
            width={1200}
            height={400}
            priority
            className="
              relative mx-auto w-full h-auto
              [mask-[linear-gradient(to_bottom,black_70%,transparent_100%)]
            "
          />
        </div>

        {/* App image with top fade */}
        <div className="relative mx-auto -mt-30 max-w-5xl">
          <Image
            src="/app-mark.png"
            alt="App preview"
            width={1200}
            height={600}
            priority
            className="
              relative mx-auto w-full h-auto
              mask-[linear-gradient(to_top,black_70%,transparent_100%)]
            "
          />
        </div>
        <div className="-mt-5">
            <Image
            src="/companies.png"
            alt="company"
            width={1200}
            height={600}
            priority
            className="
              relative mx-auto w-full h-auto
              mask-[linear-gradient(to_top,black_70%,transparent_100%)]
            "
          />
        </div>

        <div className="">
            <Image
            src="/features.png"
            alt="Features"
            width={1200}
            height={600}
            priority
            className="
              relative mx-auto w-full h-auto
              mask-[linear-gradient(to_top,black_95%,transparent_100%)]
            "
          />
        </div>

        <div className="">
            <Image
            src="/clients.png"
            alt="company"
            width={1200}
            height={600}
            priority
            className="
              relative mx-auto w-full h-auto
              mask-[linear-gradient(to_top,black_95%,transparent_100%)]
            "
          />
        </div>
     
      </div>

      
    </section>
  );
}
