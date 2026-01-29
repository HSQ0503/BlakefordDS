import ClientsLogo from "@/components/ClientsLogo";
import ProjectCard from "@/components/ProjectCard";
import ServiceCard from "@/components/ServiceCard";
import { getListPage, getSinglePage } from "@/lib/contentParser";
import ContactSection from "@/partials/ContactSection";
import PageHeader from "@/partials/PageHeader";
import SectionHeaderPrimary from "@/partials/SectionHeaderPrimary";
import SectionHeaderSecondary from "@/partials/SectionHeaderSecondary";
import SeoMeta from "@/partials/SeoMeta";
import Statistics from "@/partials/Statistics";
import Testimonials from "@/partials/Testimonials";
import { RegularPage } from "@/types";

interface ServicesListProps extends RegularPage {
  frontmatter: RegularPage["frontmatter"] & {
    project_section: {
      enable: boolean;
      title: string;
      subtitle: string;
    };
    service_section: {
      title: string;
      badge?: string;
    };
  };
}

export interface Service {
  frontmatter: {
    title: string;
    subtitle: string;
    icon: string;
    badge: string;
    meta_title?: string;
    description?: string;
    image?: string;
    draft?: boolean;
    include_services?: string[];
  };
  slug?: string;
  content?: string;
}

const ServicesList = () => {
  const serviceIndex: ServicesListProps = getListPage("services/_index.md");
  const {
    title,
    meta_title,
    description,
    image,
    project_section,
    service_section,
  } = serviceIndex.frontmatter;

  // Services
  const serviceList = getSinglePage("services");

  // Clients Logo
  const clientsLogoSection = getListPage("sections/clients-logo.md");

  // Projects (disabled - folder removed)
  const project_list: any[] = [];

  // Statistics
  const statistics = getListPage("sections/statistics.md");

  // Testimonials
  const testimonialsSection = getListPage("sections/testimonial.md");

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
      <PageHeader data={serviceIndex.frontmatter} />

      {/* Service List */}
      <section className="section grid-line">
        <div className="container">
          <SectionHeaderSecondary data={service_section} />
          <div className="flex flex-col gap-y-10">
            {serviceList.map((service: Service, index) => (
              <div key={index}>
                <ServiceCard service={service} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client */}
      <ClientsLogo clientsLogoSection={clientsLogoSection} />

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
            <Statistics data={statistics.frontmatter} />
          </div>
        </section>
      )}

      {/* Testimonial */}
      <Testimonials data={testimonialsSection} />

      {/* Contact */}
      <ContactSection data={contactSection.frontmatter} />
    </>
  );
};

export default ServicesList;
