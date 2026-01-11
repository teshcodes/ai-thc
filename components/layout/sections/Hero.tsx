import Image from "next/image";
import CTA from "./CTA";
import Footer from "./Footer";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-40">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-[-30%] left-1/2 h-150 w-150 -translate-x-1/2 rounded-full bg-purple-600/40 blur-[160px]" />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black via-black/80 to-black" />
      </div>

      <div className="mx-auto max-w-5xl px-6 text-center">
        
        <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-black/60 px-4 py-2 text-xs text-purple-200 shadow-[0_0_20px_rgba(140,69,255,0.35)] backdrop-blur">
          <span className="rounded-full bg-purple-600 px-2 py-0.5 text-[10px] font-semibold text-black">
            NEW
          </span>
          <span className="text-[#9855FF]">
            Latest integration just arrived
          </span>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute -bottom-16 left-1/2 h-65 w-[85%] -translate-x-1/2 rounded-full " />

          <div className="absolute left-[-25%] top-1/2 h-70 w-70 -translate-y-1/2 rounded-full bg-purple-600/25 blur-[160px]" />
          <div className="absolute right-[-25%] top-1/2 h-70 w-70 -translate-y-1/2 rounded-full bg-purple-600/25 blur-[160px]" />

          {/* Heading image */}
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

        {/* App image */}
        <div className="relative mx-auto max-w-5xl
         -translate-y-24 sm:-translate-y-16 md:-translate-y-53">
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

        <div className="relative mx-auto -mt-18 sm:-mt-16 md:-mt-44 lg:-mt-40">
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

        <div
          className="
            mx-auto mt-10 max-w-5xl
            px-6 md:px-17
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl
            leading-snug text-center
          "
        >
          Harness the power of AI, making search engine optimization intuitive and effective
          for all skill levels.
        </div>

        {/* Desktop bento */}
        <div className="hidden md:block">
          <div className="mt-5">
            <Image
              src="/bento1.png"
              alt="Bento"
              width={1200}
              height={600}
              priority
              className="
        relative mx-auto w-full h-auto
        mask-[linear-gradient(to_top,black_95%,transparent_100%)]
      "
            />
          </div>

          <div className="mt-5">
            <Image
              src="/bento2.png"
              alt="Bento"
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

        {/* Mobile bento */}
        <div className="mt-10 space-y-6 md:hidden">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/bento1-mobile.png"
              alt="Bento mobile"
              width={800}
              height={800}
              priority
              className="w-full h-auto"
            />
          </div>

          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/bento2-mobile.png"
              alt="Bento mobile"
              width={800}
              height={800}
              priority
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="mt-10">
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

        <section className="relative w-full overflow-hidden">
          {/* Mobile image  */}
          <Image
            src="/pricing-mobile.png"
            alt="Pricing (mobile)"
            width={750}
            height={1200}
            priority
            className="
          block sm:hidden
          w-full h-auto
          mask-[linear-gradient(to_top,black_95%,transparent_100%)]
        "
          />

          {/* Desktop image  */}
          <div className="mx-auto hidden max-w-6xl px-6 sm:block">
            <Image
              src="/pricing.png"
              alt="Pricing (desktop)"
              width={1200}
              height={600}
              priority
              className="
            mx-auto w-full h-auto
            mask-[linear-gradient(to_top,black_95%,transparent_100%)]
          "
            />
          </div>
        </section>

        <div>
          <CTA />
        </div>

        <div>
          <Footer />
        </div>

      </div>
      
    </section>
  );
}
