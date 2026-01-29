import FadeUpWrapper from "@/components/Animated/FadeUpWrapper";
import Card from "@/components/Card";
import ClientsLogo from "@/components/ClientsLogo";
import { getListPage } from "@/lib/contentParser";
import HowWeWork from "@/partials/HowWeWork";
import PageHeader from "@/partials/PageHeader";
import SectionHeaderPrimary from "@/partials/SectionHeaderPrimary";
import SectionHeaderSecondary from "@/partials/SectionHeaderSecondary";
import SeoMeta from "@/partials/SeoMeta";
import TeamSwiper from "@/partials/TeamSwiper";
import WhyChooseUs from "@/partials/WhyChooseUs";
import { AboutPage } from "@/types";
import { TeamPageType } from "../teams/page";
import FAQ from "@/partials/FAQ";
import ContactSection from "@/partials/ContactSection";
import VideoPlayer from "@/components/VideoPlayer";
import Statistics from "@/partials/Statistics";


const About = () => {
  const data: AboutPage = getListPage("about/_index.md");

  const { frontmatter } = data;
  const {
    title,
    meta_title,
    description,
    image,
    who_we_are,
    our_core_values,
    our_team,
  } = frontmatter;

  // whyChooseUs
  const whyChooseUsSection = getListPage("sections/why-choose-us.md");

  // How We Work
  const howWeWorkSection = getListPage("sections/how-we-work.md");

  // Statistics
  const statistics = getListPage("sections/statistics.md");

  // Clients Logo
  const clientsLogoSection = getListPage("sections/clients-logo.md");

  // Member list
  const memberList: TeamPageType = getListPage("teams/_index.md");

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
      <PageHeader data={frontmatter} />
      {who_we_are?.enable && (
        <section className="section grid-line">
          <div className="container">
            <SectionHeaderPrimary data={who_we_are} />
            <FadeUpWrapper>
              {/* video player */}
             <VideoPlayer data={who_we_are} />
            </FadeUpWrapper>
            <Statistics data={statistics.frontmatter} />
          </div>
        </section>
      )}

      {our_core_values?.enable && (
        <section className="section bg-dark">
          <div className="container">
            <SectionHeaderPrimary data={our_core_values} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {our_core_values.values?.map((value, index) => (
                <Card
                  key={index}
                  data={{
                    ...value,
                    index,
                  }}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us Section */}
      <WhyChooseUs whyChooseUsSection={whyChooseUsSection} />
      <HowWeWork howWeWorkSection={howWeWorkSection} />
      <ClientsLogo clientsLogoSection={clientsLogoSection} />
      {our_team?.enable && (
        <section className="section bg-dark">
          <div className="container">
            <SectionHeaderSecondary data={our_team} />
            <TeamSwiper memberList={memberList.frontmatter.team_list} />
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <FAQ data={faqSection.frontmatter} />

      {/* Contact Section */}
      <ContactSection data={contactSection.frontmatter} />
    </>
  );
};

export default About;
