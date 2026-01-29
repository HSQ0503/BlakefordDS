import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import { FaCalendarAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import config from "@/config/config.json";
import Link from "next/link";
interface ContactProps {
  enable?: boolean;
  title: string;
  bullet_points?: string[];
  schedule_with?: {
    name?: string;
    designation?: string;
    image?: string;
    enable?: boolean;
    url?: string;
  };
  checkbox_options: { label: string; value: string }[];
}

const ContactSection = ({ data }: { data: ContactProps }) => {
  return (
    data?.enable && (
      <section className="section grid-line">
        <div className="container">
          <div className="sm:bg-secondary/40 sm:gradient-border sm:p-10 xl:p-20">
            <div className="grid lg:grid-cols-2 items-center gap-y-12">
              <div className="pr-10 xl:pr-30">
                <h2
                  dangerouslySetInnerHTML={markdownify(data?.title)}
                  className="mb-8"
                />
                <ul>
                  {data?.bullet_points?.map((point, index) => (
                    <li key={index} className="mb-2 flex items-start">
                      <FaCheck className="mt-1 mr-3 text-primary flex-shrink-0" />
                      <span className="text-text">{point}</span>
                    </li>
                  ))}
                </ul>

                {data?.schedule_with?.enable && (
                  <Link href={data?.schedule_with?.url!} className="mt-20">
                    <h3 className="text-xl mb-6">Schedule a call with:</h3>
                    <div className="gradient-border p-6 flex items-center justify-between">
                      <div className="flex items-center">
                        {data.schedule_with.image && (
                          <div className="rounded-full bg-secondary size-16 overflow-hidden mr-4 flex-shrink-0">
                            <ImageFallback
                              src={data.schedule_with.image}
                              alt={data.schedule_with.name || "Schedule With"}
                              width={200}
                              height={200}
                              className="size-full object-cover"
                            />
                          </div>
                        )}
                        <div>
                          <h4 className="font-medium text-base mb-1">
                            {data.schedule_with.name}
                          </h4>
                          <p className="text-sm">
                            {data.schedule_with.designation}
                          </p>
                        </div>
                      </div>

                      <div className="gradient-border size-8 rounded-full flex items-center justify-center">
                        <FaCalendarAlt className="size-4" />
                      </div>
                    </div>
                  </Link>
                )}
              </div>
              <div>
                <form
                  action={config.params.contact_form_action}
                  className="row gap-y-5"
                >
                  <div className="sm:col-6">
                    <label htmlFor="name" className="form-label">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="form-input"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="sm:col-6">
                    <label htmlFor="email" className="form-label">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="email"
                      className="form-input"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div className="sm:col-6">
                    <label htmlFor="budget" className="form-label">
                      Your Project Budget{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="budget"
                      className="form-input"
                      placeholder="Enter your project budget"
                      required
                    />
                  </div>
                  <div className="sm:col-6">
                    <label htmlFor="about-us" className="form-label">
                      How did you hear about us?
                    </label>
                    <input
                      type="text"
                      id="about-us"
                      className="form-input"
                      placeholder="Enter how you heard about us"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="form-label">
                      Tell us about your project and goals{" "}
                      <span className="text-red-500">*</span>{" "}
                    </label>
                    <textarea
                      id="message"
                      className="form-input"
                      placeholder="Enter your message"
                      rows={5}
                      required
                    />
                  </div>

                  <div>
                    <label className="form-label mb-6">
                      How can we help you? (Select all that apply)
                    </label>
                    <div className="flex gap-8 flex-wrap">
                      {data?.checkbox_options.map((option) => (
                        <label
                          key={option.value}
                          htmlFor={option.value}
                          className="checkbox-field"
                        >
                          <input
                            type="checkbox"
                            name={option.value}
                            id={option.value}
                          />
                          <span>{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10">
                    <button type="submit" className="btn btn-primary">
                      Request a project
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default ContactSection;
