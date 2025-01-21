"use client";

import { Instagram, Mail, Send } from "lucide-react";

const sections = [
  {
    title: "Quick Links",
    links: [
      { name: "Home", href: "#hero" },
      { name: "Gallery", href: "#gallery" },
      { name: "Shop", href: "#shop" },
      { name: "Contact", href: "mailto:jariatudanita@yahoo.com" },
    ],
  },
  {
    title: "Shop",
    links: [
      { name: "Amazon Shop", href: "https://www.amazon.com/shop/jariatudanita" },
      { name: "LTK", href: "https://www.shopltk.com/explore/jariatudanita" },
      { name: "Urban Revivo", href: "https://urbanrevivo.com/collections/best-sellers-nv030000?utm_content=jariatudanita" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Disclaimer", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer id="footer" className="py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-10 text-center lg:flex-row lg:text-left">
          <div className="flex w-full max-w-96 shrink flex-col items-center justify-between gap-6 lg:items-start">
            <div className="w-full">
              <span className="flex items-center justify-center gap-4 lg:justify-start">
                <h2 className="text-3xl font-semibold">Jariatu Danita</h2>
              </span>
              <p className="mt-6 text-sm text-muted-foreground">
                Join my newsletter for the latest fashion updates and exclusive style tips.
              </p>
              <form className="relative mt-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-md border border-border/40 bg-background/80 px-4 py-2 pr-12 text-sm backdrop-blur-sm"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 h-8 w-8 rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105 flex items-center justify-center"
                >
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Subscribe</span>
                </button>
              </form>
            </div>
            <ul className="flex items-center space-x-6 text-muted-foreground">
              <li className="font-medium hover:text-primary">
                <a
                  href="https://instagram.com/jariatudanita"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="size-6" />
                </a>
              </li>
              <li className="font-medium hover:text-primary">
                <a
                  href="mailto:jariatudanita@yahoo.com"
                >
                  <Mail className="size-6" />
                </a>
              </li>
            </ul>
          </div>
          <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-3 lg:gap-20">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx} className="text-center lg:text-left">
                <h3 className="mb-6 font-bold">{section.title}</h3>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20 flex flex-col justify-between gap-4 border-t pt-8 text-center text-sm font-medium text-muted-foreground lg:flex-row lg:items-center">
          <p>© 2025 Jariatu Danita. All rights reserved.</p>
          <ul className="flex justify-center gap-4">
            <li className="hover:text-primary">
              <a href="#"> Terms and Conditions</a>
            </li>
            <li className="hover:text-primary">
              <a href="#"> Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
} 