import { client } from "../lib/client";

// Interface for correct hero section types
export interface IAboutSection {
  title: string;
  subtitle: any; // not a string, but an array of blocks
  cards: {
    title: string;
    description: string;
    image: any; // not a string, but an image
  }[];
}

// Function to get hero section data
export const getAboutSectionData = async (): Promise<IAboutSection[]> => {
  const query = `*[_type == 'about_section']`; // *[_type == 'about_section'] gets all documents of type about_section
  const data = await client.fetch(query, {}, { cache: "no-store" });
  return data;
};

const about_section = {
  name: "about_section", // IMPORTANT, this is query name
  type: "document",
  title: "About Section",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },

    // use array of blocks for rich text
    {
      name: "subtitle",
      type: "array",
      title: "Subtitle",
      of: [
        {
          type: "block",
        },
      ],
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
              name: "description",
              type: "string",
              title: "Description",
            },
          ],
        },
      ],
    },
  ],
};

export default about_section;
