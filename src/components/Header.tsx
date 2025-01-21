"use client";

import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./mode-toggle";
import { useState } from "react";

const navigationItems = [
  { name: 'Home', url: '/#hero' },
  { name: 'Gallery', url: '/#gallery' },
  { name: 'Shop', url: '/#shop' },
  { name: 'Contact', url: '/#footer' }
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    // Wait for sheet close animation
    setTimeout(() => {
      const element = document.querySelector(url.replace('/', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  return (
    <section className="py-4 lg:relative fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm z-50">
      <div className="px-4">
        <nav className="hidden justify-between lg:flex">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-2">
              <Link href="/#hero" className="text-2xl font-bold">Jariatu Danita</Link>
            </div>
            <div className="flex items-center gap-4">
              <NavigationMenu>
                <NavigationMenuList>
                  {navigationItems.map((item) => (
                    <NavigationMenuItem key={item.name}>
                      <Link
                        href={item.url}
                        className={cn(
                          "text-muted-foreground",
                          navigationMenuTriggerStyle,
                          buttonVariants({
                            variant: "ghost",
                          })
                        )}
                      >
                        {item.name}
                      </Link>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
              <ModeToggle />
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <Link href="/#hero" className="text-xl font-bold">Jariatu Danita</Link>
            <div className="flex items-center gap-2">
              <ModeToggle />
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6 flex flex-col gap-4">
                    {navigationItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.url}
                        className="text-lg font-semibold"
                        onClick={(e) => handleMobileNavClick(e, item.url)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header; 