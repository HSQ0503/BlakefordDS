"use client";
import { FAQType } from "@/types";
import{ useState } from "react";
import SectionHeaderSecondary from "./SectionHeaderSecondary";
import { motion, AnimatePresence } from "motion/react";

const FAQ = ({ data }: { data: FAQType }) => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    data.enable && (
      <section className="section grid-line">
        <div className="container">
          <SectionHeaderSecondary data={data} />

          {/* FAQ List */}
          <div className="flex flex-col gap-y-6">
            {data?.faqs?.map((faq, index) => (
              <motion.div 
                key={index} 
                className="p-6 rounded-lg gradient-border bg-dark/80 select-none"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div 
                  className="flex justify-between cursor-pointer gap-x-5" 
                  onClick={() => setOpen(open === index ? null : index)}
                >
                  <h3 className="text-2xl font-normal">{faq.question}</h3>
                  <motion.div 
                    className="sm:size-8 sm:rounded-md sm:border sm:border-border flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-white"
                    >
                      {/* Plus/X Icon Animation */}
                      <motion.path
                        d="M8 2V14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        animate={{
                          rotate: open === index ? 0 : 0,
                          scaleY: open === index ? 0 : 1
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{ transformOrigin: "center" }}
                      />
                      <motion.path
                        d="M2 8H14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        animate={{
                          rotate: open === index ? 0 : 0,
                          scaleX: open === index ? 1 : 1
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{ transformOrigin: "center" }}
                      />
                    </svg>
                  </motion.div>
                </motion.div>
                
                <AnimatePresence initial={false}>
                  {open === index && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        ease: "easeInOut",
                        opacity: { duration: 0.3 }
                      }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        exit={{ y: -10 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="pt-4 md:w-4/5"
                      >
                        <p className="text-lg">{faq.answer}</p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
  );
};

export default FAQ;
