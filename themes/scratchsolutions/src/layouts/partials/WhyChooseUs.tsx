import SectionHeaderSecondary from './SectionHeaderSecondary'
import { whyChooseUsSection } from '@/types';
import BentoCard from '@/components/BentoCard';

interface PageData {
  notFound?: boolean;
  content?: string;
  frontmatter: whyChooseUsSection;
}

const WhyChooseUs = ({whyChooseUsSection}:{whyChooseUsSection: PageData}) => {
const data = whyChooseUsSection.frontmatter;
  return data.enable &&   <section className="section bg-transparent grid-line">
          <div className="container">
            <SectionHeaderSecondary data={data} />

            {/* Bento Grid */}
            <div className="grid lg:grid-cols-12 gap-6">
                {data.features.map((feature, index) => (
                    <div key={index} className={index === 0 || index === data.features.length - 1 ? "lg:col-span-7" : "lg:col-span-5"}>
                        <BentoCard feature={feature} />
                    </div>
                ))}
            </div>
          </div>
        </section>
}

export default WhyChooseUs