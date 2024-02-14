import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

import { schemaTypes } from "./schemas";
import { myTheme } from "./theme";

import StudioNavbar from "@/components/studio/StudioNavbar";
import Logo from "@/components/studio/Logo";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio", // <-- important that `basePath` matches the route to mount our studio from
  name: "Events_Content_Studio",
  title: "Events Content Studio",

  projectId,
  dataset,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  theme: myTheme,

  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar,
    },
  },
});
