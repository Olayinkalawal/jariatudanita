"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { Particles } from "@/components/ui/particles";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function ParticleBackground() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <Particles
      className="fixed inset-0 -z-10"
      quantity={100}
      ease={80}
      color={color}
      refresh
    />
  );
}

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ParticleBackground />
      {children}
    </ThemeProvider>
  );
} 