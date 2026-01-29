import { getListPage } from "@/lib/contentParser";
import FAQ from "@/partials/FAQ";

const FAQPage = () => {
  // FAQ Section
  const faqSection = getListPage("sections/faq.md");
  return <div className="mt-30">
    <FAQ data={faqSection.frontmatter} />
  </div>;
};

export default FAQPage;
