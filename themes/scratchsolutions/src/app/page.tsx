import BlogCard from "@/components/BlogCard";
import Card from "@/components/Card";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { getListPage, getSinglePage } from "@/lib/contentParser";
import CallToAction from "@/partials/CallToAction";
import FreeConsultation from "@/partials/FreeConsultation";
import HowWeWork from "@/partials/HowWeWork";
import PricingPlan from "@/partials/PricingPlan";
import SectionHeaderPrimary from "@/partials/SectionHeaderPrimary";
import SectionHeaderSecondary from "@/partials/SectionHeaderSecondary";
import SeoMeta from "@/partials/SeoMeta";
import Testimonials from "@/partials/Testimonials";
import WhyChooseUs from "@/partials/WhyChooseUs";
import { HeroBanner, SectionHeader } from "@/types";

const Home = () => {
  // Homepage Data
  const homepage = getListPage("homepage/_index.md");
  const { frontmatter } = homepage;
  const {
    banner,
    brand_logos,
    service_section,
    project_section,
    blog_section,
  }: {
    banner: HeroBanner;
    brand_logos: {
      enable: boolean;
      logos: { image: string; link: string }[];
    };
    service_section: SectionHeader;
    project_section: SectionHeader;
    blog_section: SectionHeader;
  } = frontmatter;

  // Services
  const serviceList = getSinglePage("services");

  // Projects (disabled - folder removed)
  const project_list: any[] = [];

  // whyChooseUs
  const whyChooseUsSection = getListPage("sections/why-choose-us.md");

  // howWeWork
  const howWeWorkSection = getListPage("sections/how-we-work.md");

  // Testimonials
  const testimonialsSection = getListPage("sections/testimonial.md");

  // Blog Section
  const blogList = getSinglePage("blog");

  const pricingPlanSection = getListPage("sections/pricing-plan.md");

  // Call to Action Data
  const callToAction = getListPage("sections/call-to-action.md");

  // Free Consultation Section
  const freeConsultation = getListPage("sections/free-consultation.md");

  return (
    <>
      <SeoMeta />

      {/* Hero Section */}
      <Hero banner={banner} brand_logos={brand_logos} />

      {/* Free Consultation CTA */}
      <FreeConsultation data={freeConsultation} />

      {/* Service Section */}
      {service_section.enable && (
        <section className="section bg-transparent grid-line">
          <div className="container ">
            <SectionHeaderPrimary data={service_section} />

            {/* Services List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {serviceList.map((service, index) => (
                <Card
                  key={index}
                  data={{
                    ...service.frontmatter,
                    slug: `services/${service.slug}`,
                    index,
                  }}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Projects Section */}
      {project_section.enable && (
        <section className="section bg-dark">
          <div className="container">
            <SectionHeaderPrimary data={project_section} />
            {/* Projects List */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-15">
              {project_list.slice(0, 4).map((project, index) => (
                <ProjectCard key={index} data={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us Section */}
      <WhyChooseUs whyChooseUsSection={whyChooseUsSection} />

      {/* How We Work Section */}
      <HowWeWork howWeWorkSection={howWeWorkSection} />

      {/* Testimonials */}
      <Testimonials data={testimonialsSection} />

      {/* Blog Section */}
      {blog_section.enable && (
        <section className="section grid-line bg-transparent">
          <div className="container">
            <SectionHeaderSecondary data={blog_section} />
            {/* Blog List */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-4 gap-y-6">
              {blogList.map((blog, index) => (
                <BlogCard key={index} data={blog} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pricing Plan Section */}
      <PricingPlan data={pricingPlanSection} />
      <CallToAction data={callToAction} />
    </>
  );
};

export default Home;
