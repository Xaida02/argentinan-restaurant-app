import React from "react";
import { socialLinks } from "../variables";

const Footer = () => {
  return (
    <footer className="w-full mt-8 bg-white border-t border-gray-100">
      {/* Top accent line */}
      <div className="h-[3px] w-full bg-gradient-to-r from-argBlue via-argYellow to-argBlue" />

      <div className="max-w-[1200px] xl:max-w-[1640px] mx-auto px-6 pt-14 pb-8">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Brand column */}
          <div className="flex flex-col gap-5">
            <div>
              <h1 className="text-3xl text-argBlue select-none font-light tracking-tight">
                Resto <span className="font-black text-argYellow">Ferro</span>
              </h1>
              <div className="flex items-center gap-2 mt-1.5">
                <div className="w-6 h-px bg-argYellow" />
                <p className="text-argYellow text-[10px] font-bold tracking-[0.3em] uppercase">
                  Albuquerque, NM
                </p>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Experience the rich flavors and vibrant culture of Argentina at
              Resto Ferro. From sizzling asado to sweet dulce de leche — a
              celebration of traditional Argentine cuisine.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  aria-label={link.name}
                  className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:text-argBlue hover:border-argBlue/30 hover:bg-argBlue/5 transition-all duration-200"
                >
                  {link.icon}
                </a>
              ))}
            </div>

            {/* Opening hours */}
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
              <p className="text-[10px] font-black text-gray-400 tracking-[0.25em] uppercase mb-3">
                Hours
              </p>
              <div className="flex flex-col gap-2">
                {[
                  { days: "Mon – Fri", hours: "11:00 AM – 10:00 PM" },
                  { days: "Sat – Sun", hours: "10:00 AM – 11:00 PM" },
                ].map((row) => (
                  <div
                    key={row.days}
                    className="flex justify-between items-center"
                  >
                    <span className="text-gray-400 text-xs">{row.days}</span>
                    <span className="text-gray-700 text-xs font-bold">
                      {row.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Links + Newsletter */}
          <div className="lg:col-span-2 lg:pl-10 lg:border-l lg:border-gray-100">
            {/* Link columns */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-10">
              {[
                {
                  title: "Vision",
                  links: ["Mission", "History", "Team", "Contact"],
                },
                {
                  title: "Topics",
                  links: ["Sustain", "Works", "Maiores", "FAQ"],
                },
                {
                  title: "Support",
                  links: ["Contact", "Center", "Shaco", "Forums"],
                },
                {
                  title: "Legal",
                  links: ["Terms", "Privacy", "Cookies", "Poison"],
                },
              ].map((col) => (
                <div key={col.title}>
                  <h6 className="font-black text-gray-700 text-xs tracking-[0.2em] uppercase mb-4">
                    {col.title}
                  </h6>
                  <ul className="flex flex-col gap-2.5">
                    {col.links.map((link) => (
                      <li
                        key={link}
                        className="text-gray-400 text-sm cursor-pointer hover:text-argBlue transition-colors duration-150 flex items-center gap-1.5 group"
                      >
                        <span className="w-0 group-hover:w-2 h-px bg-argBlue transition-all duration-200 overflow-hidden shrink-0" />
                        {link}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Newsletter */}
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-gray-800 font-black text-sm">
                    Stay in the loop
                  </p>
                  <p className="text-gray-400 text-xs mt-0.5">
                    Get the latest menus, deals and events.
                  </p>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <p className="text-gray-400 text-[10px]">Open now</p>
                </div>
              </div>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:border-argBlue/50 focus:ring-2 focus:ring-argBlue/10 transition-all duration-200"
                />
                <button className="bg-argYellow hover:bg-yellow-300 active:scale-95 transition-all duration-200 text-black font-black text-xs px-5 py-2.5 rounded-xl shrink-0 shadow-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-100 py-4 px-6">
        <div className="max-w-[1200px] xl:max-w-[1640px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-gray-300 text-xs">
            © {new Date().getFullYear()} Resto Ferro. All rights reserved.
          </p>
          <p className="text-gray-300 text-xs">Built with ♥ in Albuquerque</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
