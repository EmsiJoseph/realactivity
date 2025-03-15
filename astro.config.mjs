import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://pauls579.sg-host.com/",
  integrations: [
    tailwind(),
    icon({
      // Add the icon sets you want to use
      include: {
        mdi: ['*'], // Include all MDI icons
        'simple-icons': ['*'] // Include all Simple Icons
      }
    }),
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});
