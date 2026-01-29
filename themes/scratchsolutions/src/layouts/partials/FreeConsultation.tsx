import { markdownify } from "@/lib/utils/textConverter";
import Link from "next/link";

type Feature = {
  title: string;
  description: string;
};

type FreeConsultationData = {
  enable: boolean;
  badge: string;
  title: string;
  description: string;
  features: Feature[];
  button: {
    enable: boolean;
    label: string;
    link: string;
  };
};

type PageData = {
  frontmatter: FreeConsultationData;
};

const FreeConsultation = ({ data }: { data: PageData }) => {
  const { enable, badge, title, description, features, button } =
    data.frontmatter;

  if (!enable) return null;

  return (
    <section className="section grid-line bg-transparent">
      <div className="container">
        <div className="rounded-4xl px-6 py-12 md:px-12 md:py-16 xl:px-20 xl:py-20 gradient-border bg-[url(/images/noise-pattern.png)] bg-repeat bg-auto relative overflow-hidden">
          {/* Background glow effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10">
            {/* Badge */}
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-medium">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                {badge}
              </span>
            </div>

            {/* Title */}
            <h2
              dangerouslySetInnerHTML={markdownify(title)}
              className="text-center mb-4 gradient-text text-h2 md:text-h1"
            />

            {/* Description */}
            <p
              dangerouslySetInnerHTML={markdownify(description)}
              className="text-center text-lg md:text-xl text-light/80 max-w-2xl mx-auto mb-10"
            />

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl bg-white/5 border border-white/10"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-light/70 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            {button.enable && (
              <div className="text-center">
                <Link href={button.link} className="btn btn-primary text-lg">
                  {button.label}
                </Link>
                <p className="mt-4 text-light/60 text-sm">
                  Limited spots available each month
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeConsultation;
