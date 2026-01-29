import PackageItems from "@/components/PackageItems";
import Table from "@/components/Table";
import { getListPage } from "@/lib/contentParser";
import FAQ from "@/partials/FAQ";
import PricingPlan from "@/partials/PricingPlan";
import SectionHeaderPrimary from "@/partials/SectionHeaderPrimary";
import SectionHeaderSecondary from "@/partials/SectionHeaderSecondary";
import SeoMeta from "@/partials/SeoMeta";

const PricingPage = () => {
  const pricing = getListPage("pricing/_index.md");
  const { frontmatter } = pricing;

  // FAQ Section
  const faqSection = getListPage("sections/faq.md");

  const pricingPlanSection = getListPage("sections/pricing-plan.md");
  return (
    <>
      <SeoMeta
        title={frontmatter.title}
        meta_title={frontmatter.meta_title}
        description={frontmatter.description}
        image={frontmatter.image}
      />
      {/* Pricing Plan Section */}
      <div className="pt-30">
        <PricingPlan data={pricingPlanSection} />
      </div>
      <section className="section grid-line">
        <div className="container">
          <SectionHeaderSecondary data={frontmatter.included_in_package} />
          {/* Included in Package Items */}
         <PackageItems included_in_package={frontmatter.included_in_package}/>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="p-10 md:p-20 gradient-border rounded-xl">
            <SectionHeaderPrimary data={frontmatter.why_choose} />

            {/* Comparison Table */}
           <Table compareFeatures={frontmatter.why_choose.compareFeatures}/>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ data={faqSection.frontmatter} />
    </>
  );
};

export default PricingPage;
