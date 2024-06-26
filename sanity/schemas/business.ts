import { client } from "../lib/client";

// Interface for correct hero section types
export interface IBusinessSection {
  title: string;
  subtitle: any; // not a string, but an array of blocks
  cards: {
    title: string;
    description: string;
    image: any; // not a string, but an image
  }[];
}

// Function to get hero section data
export const getBusinessSectionData = async (): Promise<IBusinessSection[]> => {
  const query = `*[_type == 'about_section']`; // *[_type == 'about_section'] gets all documents of type about_section
  const data = await client.fetch(query);
  return data;
};

const business_section = {
  name: "business_section", // IMPORTANT, this is query name
  type: "document",
  title: "Business Section",
  fields: [
    {
      name: "title",
      type: "array",
      title: "Title",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              type: "string",
              title: "Title",
            },
          ],
        },
      ],
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

    // use array of objects for icons
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
              name: "Description",
              type: "string",
              title: "Description",
            },
          ],
        },
      ],
    },
  ],
};

export default business_section;
