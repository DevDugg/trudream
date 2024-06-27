import { client } from "../lib/client";

// Interface for correct hero section types
export interface IHelpSection {
  title: string;
  subtitle: string;
}

// Function to get hero section data
export const getHelpSectionData = async (): Promise<IHelpSection[]> => {
  const query = `*[_type == 'help_section']`; // *[_type == 'help_section'] gets all documents of type help_section
  const data = await client.fetch(query, {}, { cache: "no-store" });
  return data;
};

const help_section = {
  name: "help_section", // IMPORTANT, this is query name
  type: "document",
  title: "Help Section",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
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
  ],
};

export default help_section;
