import { client } from "../lib/client";

// Interface for correct hero section types
export interface IBusinessSection {
  title: string;
  cards: {
    title: string;
    subtitle: string;
    image: any; // not a string, but an image
  }[];
}

export const getBusinessSectionData = async (): Promise<IBusinessSection[]> => {
  const query = `*[_type == 'business_section']`; // *[_type == 'about_section'] gets all documents of type about_section
  const data = await client.fetch(query, {}, { cache: "no-store" });
  return data;
};

const business_section = {
  name: "business_section", // IMPORTANT, this is query name
  type: "document",
  title: "Business Section",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "cards",
      type: "array",
      title: "Cards",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              type: "string",
              title: "Title",
            },
            {
              name: "image",
              type: "image",
              title: "Image",
            },
            {
              name: "subtitle",
              type: "string",
              title: "Subtitle",
            },
          ],
        },
      ],
    },
  ],
};

export default business_section;
