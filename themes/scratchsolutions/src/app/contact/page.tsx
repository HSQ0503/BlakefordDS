
import { getListPage } from "@/lib/contentParser";
import ContactSection from "@/partials/ContactSection";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import OurOfficeSection from "@/partials/OurOfficeSection";
import { RegularPage } from "@/types";

// Extend RegularPage type locally for contact page
interface ContactPage extends RegularPage {
  frontmatter: RegularPage["frontmatter"] & {
    ourOffice?: {
      enable: boolean;
      title: string;
      subtitle: string;
      locationList: Array<{
        title: string;
        address: string;
        phone: string;
        email: string;
      }>;
    };
  };
}

const Contact = () => {
  const data: ContactPage = getListPage("contact/_index.md");
  const { frontmatter } = data;
  const { title, description, meta_title, image, ourOffice } = frontmatter;
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
      <PageHeader data={frontmatter} />
      <ContactSection data={contactSection.frontmatter} />

      {ourOffice && <OurOfficeSection ourOffice={ourOffice} />}
    </>
  );
};

export default Contact;
