"use client";
import ImageFallback from "@/helpers/ImageFallback";
import { fadeInUpWithDelay } from "@/lib/utils/animation";
import SectionHeaderSecondary from "@/partials/SectionHeaderSecondary";
import { motion } from "motion/react";
interface ClientsLogoProps {
  clientsLogoSection: {
    notFound?: boolean;
    content?: string;
    frontmatter: {
      enable?: boolean;
      title: string;
      logos?: Array<{
        image: string;
        alt?: string;
      }>;
    };
  };
}
const ClientsLogo = ({ clientsLogoSection }: ClientsLogoProps) => {
  const data = clientsLogoSection.frontmatter;
  return (
    data.enable && (
      <section className="section pt-0 grid-line">
        <div className="container">
          {data.title && <SectionHeaderSecondary data={data} />}
          {/* Logos Grid */}
          <div className="grid grid-cols-2  lg:grid-cols-4 xl:grid-cols-5">
            {data.logos?.map((logo, index) => (
              <motion.div
                {...fadeInUpWithDelay(index * 0.1)}
                key={index}
                className="py-10 px-17 border border-border/10"
              >
                <ImageFallback
                  src={logo.image}
                  alt={logo.alt || `Client Logo ${index + 1}`}
                  className="max-h-12 object-contain"
                  width={150}
                  height={50}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
  );
};

export default ClientsLogo;
