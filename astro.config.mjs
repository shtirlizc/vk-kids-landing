// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://shtirlizc.github.io",
  base: "/vk-kids-landing",
  fonts: [
    {
      provider: fontProviders.local(),
      name: "VK Sans Display",
      cssVariable: "--font-vk-display",
      options: {
        variants: [
          {
            src: [
              "./src/assets/fonts/VKSansDisplay/VKSansDisplay-Regular.woff2",
              "./src/assets/fonts/VKSansDisplay/VKSansDisplay-Regular.woff",
            ],
            weight: "400",
            style: "normal",
          },
          {
            src: [
              "./src/assets/fonts/VKSansDisplay/VKSansDisplay-Medium.woff2",
              "./src/assets/fonts/VKSansDisplay/VKSansDisplay-Medium.woff",
            ],
            weight: "500",
            style: "normal",
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "VK Sans Text",
      cssVariable: "--font-vk-text",
      options: {
        variants: [
          {
            src: [
              "./src/assets/fonts/VKSansText/VKSansText-Light.woff2",
              "./src/assets/fonts/VKSansText/VKSansText-Light.woff",
            ],
            weight: "300",
            style: "normal",
          },
          {
            src: [
              "./src/assets/fonts/VKSansText/VKSansText-Regular.woff2",
              "./src/assets/fonts/VKSansText/VKSansText-Regular.woff",
            ],
            weight: "400",
            style: "normal",
          },
          {
            src: [
              "./src/assets/fonts/VKSansText/VKSansText-Medium.woff2",
              "./src/assets/fonts/VKSansText/VKSansText-Medium.woff",
            ],
            weight: "500",
            style: "normal",
          },
          {
            src: [
              "./src/assets/fonts/VKSansText/VKSansText-DemiBold.woff2",
              "./src/assets/fonts/VKSansText/VKSansText-DemiBold.woff",
            ],
            weight: "600",
            style: "normal",
          },
          {
            src: [
              "./src/assets/fonts/VKSansText/VKSansText-Bold.woff2",
              "./src/assets/fonts/VKSansText/VKSansText-Bold.woff",
            ],
            weight: "700",
            style: "normal",
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "VK Sans Display Condensed",
      cssVariable: "--font-vk-condensed",
      options: {
        variants: [
          {
            src: [
              "./src/assets/fonts/VKSansDisplayCondensed/VKSansDisplayCd-Lt.woff2",
              "./src/assets/fonts/VKSansDisplayCondensed/VKSansDisplayCd-Lt.woff",
            ],
            weight: "300",
            style: "normal",
          },
          {
            src: [
              "./src/assets/fonts/VKSansDisplayCondensed/VKSansDisplayCd-LtIt.woff2",
              "./src/assets/fonts/VKSansDisplayCondensed/VKSansDisplayCd-LtIt.woff",
            ],
            weight: "300",
            style: "italic",
          },
          {
            src: [
              "./src/assets/fonts/VKSansDisplayCondensed/VKSansDisplayCd-Rg.woff2",
              "./src/assets/fonts/VKSansDisplayCondensed/VKSansDisplayCd-Rg.woff",
            ],
            weight: "400",
            style: "normal",
          },
          {
            src: [
              "./src/assets/fonts/VKSansDisplayCondensed/VKSansDisplayCd-It.woff2",
              "./src/assets/fonts/VKSansDisplayCondensed/VKSansDisplayCd-It.woff",
            ],
            weight: "400",
            style: "italic",
          },
          {
            src: [
              "./src/assets/fonts/VKSansDisplayCondensed/VKSansDisplayCd-Md.woff2",
              "./src/assets/fonts/VKSansDisplayCondensed/VKSansDisplayCd-Md.woff",
            ],
            weight: "500",
            style: "normal",
          },
          {
            src: [
              "./src/assets/fonts/VKSansDisplayCondensed/VKSansDisplayCd-MdIt.woff2",
              "./src/assets/fonts/VKSansDisplayCondensed/VKSansDisplayCd-MdIt.woff",
            ],
            weight: "500",
            style: "italic",
          },
          {
            src: [
              "./src/assets/fonts/VKSansDisplayCondensed/VKSansDisplayCd-DmBd.woff2",
              "./src/assets/fonts/VKSansDisplayCondensed/VKSansDisplayCd-DmBd.woff",
            ],
            weight: "600",
            style: "normal",
          },
          {
            src: [
              "./src/assets/fonts/VKSansDisplayCondensed/VKSansDisplayCd-DmBdIt.woff2",
              "./src/assets/fonts/VKSansDisplayCondensed/VKSansDisplayCd-DmBdIt.woff",
            ],
            weight: "600",
            style: "italic",
          },
          {
            src: [
              "./src/assets/fonts/VKSansDisplayCondensed/VKSansDisplayCd-Bd.woff2",
              "./src/assets/fonts/VKSansDisplayCondensed/VKSansDisplayCd-Bd.woff",
            ],
            weight: "700",
            style: "normal",
          },
          {
            src: [
              "./src/assets/fonts/VKSansDisplayCondensed/VKSansDisplayCd-BdIt.woff2",
              "./src/assets/fonts/VKSansDisplayCondensed/VKSansDisplayCd-BdIt.woff",
            ],
            weight: "700",
            style: "italic",
          },
          {
            src: [
              "./src/assets/fonts/VKSansDisplayCondensed/VKSansDisplayCd-XBd.woff2",
              "./src/assets/fonts/VKSansDisplayCondensed/VKSansDisplayCd-XBd.woff",
            ],
            weight: "800",
            style: "normal",
          },
          {
            src: [
              "./src/assets/fonts/VKSansDisplayCondensed/VKSansDisplayCd-XBdIt.woff2",
              "./src/assets/fonts/VKSansDisplayCondensed/VKSansDisplayCd-XBdIt.woff",
            ],
            weight: "800",
            style: "italic",
          },
          {
            src: [
              "./src/assets/fonts/VKSansDisplayCondensed/VKSansDisplayCd-Blk.woff2",
              "./src/assets/fonts/VKSansDisplayCondensed/VKSansDisplayCd-Blk.woff",
            ],
            weight: "900",
            style: "normal",
          },
          {
            src: [
              "./src/assets/fonts/VKSansDisplayCondensed/VKSansDisplayCd-BlkIt.woff2",
              "./src/assets/fonts/VKSansDisplayCondensed/VKSansDisplayCd-BlkIt.woff",
            ],
            weight: "900",
            style: "italic",
          },
        ],
      },
    },
  ],
});
