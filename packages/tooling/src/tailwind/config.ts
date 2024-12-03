import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export const config: Config = {
  darkMode: ["selector", "class"],
  content: [
    "./node_modules/@iflab/design-system/src/**/*.{js,ts,jsx,tsx,mdx,stories.tsx,stories.ts}",
    "./src/**/*.{js,ts,jsx,tsx,mdx,stories.tsx,stories.ts}",
    "./inertia/**/*.{js,ts,jsx,tsx,mdx,stories.tsx,stories.ts}",
    "./resources/**/*.edge",
  ],
  theme: {
    extend: {
      colors: {
        layout: {
          background: "var(--layout-background)",
          elevation: "var(--layout-elevation)",
          foreground: "var(--layout-foreground)",
          border: "var(--layout-border)",
        },
        neutral: {
          lowest: "var(--neutral-lowest)",
          lower: "var(--neutral-lower)",
          low: "var(--neutral-low)",
          medium: "var(--neutral-medium)",
          high: "var(--neutral-high)",
          higher: "var(--neutral-higher)",
          highest: "var(--neutral-highest)",
        },
        brand: {
          lowest: "var(--brand-lowest)",
          lower: "var(--brand-lower)",
          low: "var(--brand-low)",
          medium: "var(--brand-medium)",
          high: "var(--brand-high)",
          higher: "var(--brand-higher)",
          highest: "var(--brand-highest)",
        },
        success: {
          lowest: "var(--success-lowest)",
          lower: "var(--success-lower)",
          low: "var(--success-low)",
          medium: "var(--success-medium)",
          high: "var(--success-high)",
          higher: "var(--success-higher)",
          highest: "var(--success-highest)",
        },
        warning: {
          lowest: "var(--warning-lowest)",
          lower: "var(--warning-lower)",
          low: "var(--warning-low)",
          medium: "var(--warning-medium)",
          high: "var(--warning-high)",
          higher: "var(--warning-higher)",
          highest: "var(--warning-highest)",
        },
        danger: {
          lowest: "var(--danger-lowest)",
          lower: "var(--danger-lower)",
          low: "var(--danger-low)",
          medium: "var(--danger-medium)",
          high: "var(--danger-high)",
          higher: "var(--danger-higher)",
          highest: "var(--danger-highest)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [animate],
};
