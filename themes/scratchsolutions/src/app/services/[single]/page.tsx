import { getListPage, getSinglePage } from "@/lib/contentParser";
import React from "react";
import { Service } from "../page";
import SeoMeta from "@/partials/SeoMeta";
import Badge from "@/components/Badge";
import { markdownify } from "@/lib/utils/textConverter";
import Link from "next/link";
import ImageFallback from "@/helpers/ImageFallback";
import SectionHeaderSecondary from "@/partials/SectionHeaderSecondary";
import FAQ from "@/partials/FAQ";
import ContactSection from "@/partials/ContactSection";
import Testimonials from "@/partials/Testimonials";
import SectionHeaderPrimary from "@/partials/SectionHeaderPrimary";

interface ServiceParams extends Service {
  frontmatter: Service["frontmatter"] & {
    process_steps: {
      enable: boolean;
      title: string;
      badge?: string;
      steps: Array<{
        title: string;
        content: string;
      }>;
    };
    projects: {
      enable: boolean;
      title: string;
      subtitle: string;
      button: {
        enable: boolean;
        label: string;
        link: string;
      };
      project_list: Array<{
        link: string;
        image: string;
      }>;
    };
    benefits: {
      enable: boolean;
      title: string;
      subtitle: string;
      bullet_points: string[];
      image_list: string[];
    };
  };
  slug: string;
  content: string;
}

export const dynamicParams = false;

export const generateStaticParams: () => { single: string }[] = () => {
  const serviceList: ServiceParams[] = getSinglePage("services");

  const paths = serviceList.map((service) => ({
    single: service.slug!,
  }));

  return paths;
};

const ServiceDetails = async (props: {
  params: Promise<{ single: string }>;
}) => {
  const params = await props.params;
  const { single } = params;
  const serviceList: ServiceParams[] = getSinglePage("services");

  // Find the service by slug
  const service = serviceList.find((item) => item.slug === single);

  const { frontmatter } = service!;
  const {
    title,
    meta_title,
    description,
    image,
    badge,
    subtitle,
    process_steps,
    projects,
    benefits,
  } = frontmatter;

  // Testimonials
  const testimonialsSection = getListPage("sections/testimonial.md");
  // FAQ Section
  const faqSection = getListPage("sections/faq.md");

  // Contact Section
  const contactSection = getListPage("sections/contact.md");
  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      {/* Hero */}
      <section className="section pt-60 relative z-10 bg-dark">
        <ImageFallback
          src="/images/hero-light.svg"
          className="absolute top-0 left-0 -z-1"
          width="1920"
          height="1080"
          alt="background image"
        />
        <div className="container">
          <div className="grid lg:grid-cols-2 items-center gap-x-4 gap-y-12">
            <div className="xl:pr-20">
              <Badge>{badge}</Badge>
              <h1
                className="gradient-text mt-4 mb-6"
                dangerouslySetInnerHTML={markdownify(title)}
              />
              <p
                className="text-lg mb-10"
                dangerouslySetInnerHTML={markdownify(subtitle)}
              />

              <div className="flex gap-x-6">
                <a href="#contact" className="btn btn-primary">
                  Book a free call
                </a>
                <Link
                  href="/services"
                  className="btn btn-outline-primary gradient-border"
                >
                  View services
                </Link>
              </div>
            </div>
            <div>
              <div className="bg-secondary/20 gradient-border p-4 rounded-2xl flex items-center justify-center">
                <ImageFallback
                  src={image}
                  alt={title}
                  width={600}
                  height={400}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section grid-line">
        <div className="container">
          <SectionHeaderSecondary data={process_steps} />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {process_steps.steps.map((step, index) => (
              <div
                key={index}
                className={
                  "gradient-border p-6 " +
                  (index % 2 === 0 &&
                    "bg-[url(/images/noise-pattern.png)] bg-repeat bg-auto bg-light/7")
                }
              >
                <h3 className="mb-8 text-stroke">0{index + 1}</h3>
                <h4
                  className="text-h5 mb-4"
                  dangerouslySetInnerHTML={markdownify(step.title)}
                />
                <p className="text-sm">{step.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      {projects.enable && (
        <section className="section bg-dark">
          <div className="container">
            <SectionHeaderPrimary data={projects} />

            <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
              {projects.project_list.length > 0 &&
                projects.project_list.map((project, index) => (
                  <a
                    href={project.link}
                    key={index}
                    className="block break-inside-avoid mb-6 group"
                  >
                    <ImageFallback
                      src={project.image}
                      alt={`Project ${index + 1}`}
                      width={500}
                      height={0}
                      className="w-full h-[300px] rounded-2xl object-cover  grayscale-250 group-hover:grayscale-0 transition-all"
                    />
                  </a>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits */}
      {benefits.enable && (
        <section className="section grid-line ">
          <div className="container">
            <div className="p-10 lg:p-20 gradient-border grid xl:grid-cols-2 gap-y-12">
              <div className="xl:pr-10">
                <h2
                  className="mb-4"
                  dangerouslySetInnerHTML={markdownify(benefits.title)}
                />
                <p
                  dangerouslySetInnerHTML={markdownify(benefits.subtitle)}
                  className="mb-12 text-text-light"
                />
                <ul>
                  {benefits.bullet_points.map((point, index) => (
                    <li key={index} className="mb-4 flex items-start gap-x-3">
                      <span className="size-5 flex-shrink-0 mt-1 bg-primary/20 text-primary rounded-full flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <p>{point}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {benefits.image_list.map((image, idx) => (
                  <div key={idx} className={`${idx === 1 ? "row-span-2" : ""}`}>
                    <ImageFallback
                      src={image}
                      alt={`image ${idx + 1}`}
                      width={600}
                      height={400}
                      className={
                        "rounded-lg h-full!" +
                        (image.includes("svg")
                          ? " object-contain"
                          : " object-cover")
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      <Testimonials data={testimonialsSection} />

      {/* FAQ Section */}
      <FAQ data={faqSection.frontmatter} />

      {/* Contact Section */}
      <ContactSection data={contactSection.frontmatter} />
    </>
  );
};

export default ServiceDetails;
