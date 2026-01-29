"use client";

import Logo from "@/components/Logo";
import Social from "@/components/Social";
import config from "@/config/config.json";
import menu from "@/config/menu.json";
import social from "@/config/social.json";
import { markdownify } from "@/lib/utils/textConverter";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";

const Footer = () => {
  const { site, params } = config;

  return (
    <footer>
      <div className="bg-dark backdrop-blur-2xl pb-10">
        <div className="container">
          <div className="pt-30 pb-20">
            <div className="grid sm:grid-cols-12 gap-8">
              <div className="sm:col-span-6 lg:col-span-3">
                <Logo />
                <p className="text-text-light mt-6 mb-8">
                  {params.footer_content}
                </p>

                <div className="social-icons">
                  <Social source={social.main} className="" />
                </div>
              </div>
              <div className="sm:col-span-6 lg:col-span-3">
                <h2 className="text-xl text-white font-medium mb-6">
                  Quick Links
                </h2>
                <ul>
                  {menu.quick_links.map((item, index) => (
                    <li key={index} className="mb-4">
                      <Link
                        href={item.url}
                        className="text-text-light hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="sm:col-span-6 lg:col-span-3">
                <h2 className="text-xl text-white font-medium mb-6">Support</h2>
                <ul>
                  {menu.support.map((item, index) => (
                    <li key={index} className="mb-4">
                      <Link
                        href={item.url}
                        className="text-text-light hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="sm:col-span-6 lg:col-span-3">
                <h2 className="text-xl text-white font-medium mb-6">Contact</h2>
                <ul>
                  <li className="mb-4 text-text-light">
                    {menu.contact.address}
                  </li>
                  <li className="mb-4 text-text-light">{menu.contact.phone}</li>
                  <li className="mb-4 text-text-light">{menu.contact.email}</li>
                </ul>

                <h2 className="text-xl text-white font-medium mt-8 mb-3">
                  Subscribe Newsletter
                </h2>
                <form
                  action={params.newsletter_action}
                  className="flex items-center border-b border-border/40 justify-between"
                >
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent border-none outline-none pl-0 focus:outline-none focus:ring-0"
                    required
                  />
                  <button
                    className="size-11 bg-primary flex items-center justify-center rounded-full text-text-dark shrink-0 cursor-pointer"
                    aria-label="Subscribe"
                    title="Subscribe"
                  >
                    <FaAngleRight className="size-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="pt-[1px] gradient-border"></div>
          <p
            className="py-5 text-center text-text-light text-sm prose-a:underline"
            dangerouslySetInnerHTML={markdownify(params.copyright)}
          />
        </div>
      </div>
      <div className="flex justify-center  bg-dark lg:h-[160px] overflow-hidden">
        <h1 className="uppercase gradient-text-secondary text-[11vw] font-medium italic text-center tracking-wide leading-none select-none pointer-events-none translate-y-5">
          {site.title}
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
