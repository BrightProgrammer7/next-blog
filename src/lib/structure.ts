import {Iframe} from "sanity-plugin-iframe-pane";
// import type { DefaultDocumentNodeResolver } from "sanity/desk";
import { DefaultDocumentNodeResolver } from "sanity/desk";
import {SanityDocument} from 'sanity'

// Customise this function to show the correct URL based on the current document
// function getPreviewUrl(doc: SanityDocument) {
//   return doc?.slug?.current
//     // ? `${window.location.host}/${doc.slug.current}`
//     // : `${window.location.host}`    
//     ? `http://localhost:3000/${doc.slug.current}`
//     : `http://localhost:3000`
// }

export const getDefaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType }
) => {
  if (schemaType === "post") {
    return S.document().views([
      S.view.form(),

      S.view
        .component(Iframe)
        .options({
          url: `${
            process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000"
          }/api/studio/preview`,
          // url: (doc: SanityDocument) => getPreviewUrl(doc),
          defaultSize: `desktop`,
          reload: {
            button: true,
          },
          attributes: {},
        })
        .title("Preview"),
    ]);
  }
};
