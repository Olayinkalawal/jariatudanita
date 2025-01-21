"use client";

import { TiltedScroll } from "@/components/ui/tilted-scroll";

const shopItems = [
  { 
    id: "1", 
    text: "Amazon Shop",
    href: "https://www.amazon.com/shop/jariatudanita"
  },
  { 
    id: "2", 
    text: "LTK",
    href: "https://www.shopltk.com/explore/jariatudanita"
  },
  { 
    id: "3", 
    text: "Shop My",
    href: "https://shopmy.us/jariatudanita"
  },
  { 
    id: "4", 
    text: "Amazon Shop",
    href: "https://www.amazon.com/shop/jariatudanita"
  },
  { 
    id: "5", 
    text: "LTK",
    href: "https://www.shopltk.com/explore/jariatudanita"
  },
  { 
    id: "6", 
    text: "Shop My",
    href: "https://shopmy.us/jariatudanita"
  },
  { 
    id: "7", 
    text: "Amazon Shop",
    href: "https://www.amazon.com/shop/jariatudanita"
  },
  { 
    id: "8", 
    text: "LTK",
    href: "https://www.shopltk.com/explore/jariatudanita"
  }
];

export function Shop() {
  return (
    <section id="shop" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Shop my store</h2>
        <div className="space-y-8">
          <TiltedScroll items={shopItems} className="mt-8" />
        </div>
      </div>
    </section>
  );
} 