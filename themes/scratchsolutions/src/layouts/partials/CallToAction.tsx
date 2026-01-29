import { markdownify } from "@/lib/utils/textConverter";
import { Call_to_action } from "@/types";
import Link from "next/link";

interface PageData {
  notFound?: boolean;
  content?: string;
  frontmatter: Call_to_action;
}

const CallToAction = ({ data }: { data: PageData }) => {
  return (
    <>
      {data.frontmatter.enable && (
        <section className="section grid-line bg-transparent">
          <div className="container">
            <div className="rounded-4xl px-4 py-16  xl:p-20 gradient-border bg-[url(/images/noise-pattern.png)] bg-repeat bg-auto relative overflow-hidden">
              <svg
                className="absolute top-0 w-full h-full left-0"
                width="1194"
                height="538"
                viewBox="0 0 1194 538"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_f_416_6191)">
                  <path
                    className="animate-svg-path"
                    d="M907.425 459.868C849.836 552.027 762.872 622.626 661.291 659.683C559.711 696.74 449.773 697.972 350.136 663.171C250.498 628.369 167.3 559.677 114.661 468.754C62.022 377.83 43.1852 270.276 61.3476 164.346"
                    stroke="url(#paint0_linear_416_6191)"
                    strokeWidth="200"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_416_6191"
                    x="-231.786"
                    y="-122.07"
                    width="1425.62"
                    height="1096.87"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="93.2"
                      result="effect1_foregroundBlur_416_6191"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_416_6191"
                    x1="851.008"
                    y1="-107.992"
                    x2="-1471.91"
                    y2="704.267"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#505050" />
                    <stop offset="1" stopColor="#101010" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="flex flex-col items-center justify-between text-center relative z-10">
                <h1
                  dangerouslySetInnerHTML={markdownify(data.frontmatter.title)}
                  className="mb-6 gradient-text text-h2 md:text-h1"
                />
                <p
                  dangerouslySetInnerHTML={markdownify(
                    data.frontmatter.description,
                  )}
                  className="mb-12 text-xl"
                />
                {data.frontmatter.button.enable && (
                  <Link
                    className="btn btn-primary"
                    href={data.frontmatter.button.link}
                  >
                    {data.frontmatter.button.label}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CallToAction;
