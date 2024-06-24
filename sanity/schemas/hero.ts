import { client } from "../lib/client";

// Interface for correct hero section types
export interface IHeroSection {
  title: string;
  subtitle: any; // not a string, but an array of blocks
  icons: {
    name: string;
    image: any; // not a string, but an image
  }[];
}

// Function to get hero section data
export const getHeroSectionData = async (): Promise<IHeroSection[]> => {
  const query = `*[_type == 'hero_section']`; // *[_type == 'hero_section'] gets all documents of type hero_section
  const data = await client.fetch(query);
  return data;
};

const hero_section = {
  name: "hero_section", // IMPORTANT, this is query name
  type: "document",
  title: "Hero Section",
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

    // use array of objects for icons
    {
      name: "icons",
      type: "array",
      title: "Icons",
      of: [
        {
          type: "object",
          fields: [
            {
              // name field for alt text
              name: "name",
              type: "string",
              title: "Name",
            },
            {
              name: "image",
              type: "image",
              title: "Image",
            },
          ],
        },
      ],
    },
  ],
};

export default hero_section;
