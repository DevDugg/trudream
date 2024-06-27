import { client } from "../lib/client";

// Interface for correct hero section types
export interface IGuideSection {
  title: string;
  image: any;
  cards: {
    title: string;
    subtitle: string;
  }[];
}

// Function to get hero section data
export const getGuideSectionData = async (): Promise<IGuideSection[]> => {
  const query = `*[_type == 'guide_section']`; // *[_type == 'guide_section'] gets all documents of type guide_section
  const data = await client.fetch(query, {}, { cache: "no-store" });
  return data;
};

const guide_section = {
  name: "guide_section", // IMPORTANT, this is query name
  type: "document",
  title: "Guide Section",
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

export default guide_section;
