import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemas";
import { myTheme } from "./theme";

import StudioNavbar from "@/components/studio/StudioNavbar";
import Logo from "@/components/studio/Logo";
import { getDefaultDocumentNode } from "@/lib/structure";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio", // <-- important that `basePath` matches the route to mount our studio from
  name: "Events_Content_Studio",
  title: "Events Content Studio",

  projectId,
  dataset,

  plugins: [ 
    deskTool({ defaultDocumentNode: getDefaultDocumentNode }),
    // structureTool(), 
    visionTool()],

  schema: {
    types: schemaTypes,
  },

  theme: myTheme,

  studio: {
    components: {
      navbar: StudioNavbar,
      logo: Logo,
    },
  },
});
