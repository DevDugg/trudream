import { client } from "../lib/client";

export interface IQuestionsSection {
  title: string;
  cards: {
    title: string;
    subtitle: string;
  }[];
}

// Function to get hero section data
export const getQuestionsSectionData = async (): Promise<
  IQuestionsSection[]
> => {
  const query = `*[_type == 'questions_section']`; // *[_type == 'questions_section'] gets all documents of type questions_section
  const data = await client.fetch(query, {}, { cache: "no-store" });
  return data;
};

const questions_section = {
  name: "questions_section", // IMPORTANT, this is query name
  type: "document",
  title: "Questions Section",
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

export default questions_section;
