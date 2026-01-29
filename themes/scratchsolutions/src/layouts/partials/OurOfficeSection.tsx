"use client";
import { FaLocationDot } from "react-icons/fa6";
import SectionHeaderSecondary from "@/partials/SectionHeaderSecondary";

interface LocationData {
  title: string;
  address: string;
  phone: string;
  email: string;
}

interface OurOfficeProps {
  ourOffice: {
    enable: boolean;
    title: string;
    subtitle: string;
    locationList: LocationData[];
  };
}

const OurOfficeSection = ({ ourOffice }: OurOfficeProps) => {
  if (!ourOffice?.enable) return null;

  return (
    <section className="section">
      <div className="container">
        <SectionHeaderSecondary data={ourOffice} />
        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8">
            <div className="h-96 lg:h-full rounded-xl overflow-hidden shadow-lg">
              {/* <OfficeMap locations={ourOffice.locationList} /> */}
              <iframe className="size-full grayscale" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.3342017843474!2d90.36396431140611!3d23.771110678567155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1705e935263%3A0x864bebd8473f0e66!2sThemefisher!5e0!3m2!1sen!2sbd!4v1765784209544!5m2!1sen!2sbd" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-y-6">
            {ourOffice.locationList.map((location, index) => (
              <div
                className="card text-center gradient-border p-10"
                key={index}
              >
                <h3 className="mb-4 text-h4 font-medium flex items-center justify-center gap-x-2">
                  <FaLocationDot className="size-8 mb-2" />
                  {location.title}
                </h3>
                <div className="flex flex-col lg:w-5/8 mx-auto">
                  <p className="font-medium mb-2">{location.address}</p>
                  <a 
                    className="mb-2" 
                    href={`mailto:${location.email}`}
                    aria-label={`Send email to ${location.title} office`}
                  >
                    {location.email}
                  </a>
                  <a 
                    className="mb-2" 
                    href={`tel:${location.phone}`}
                    aria-label={`Call ${location.title} office`}
                  >
                    {location.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurOfficeSection;