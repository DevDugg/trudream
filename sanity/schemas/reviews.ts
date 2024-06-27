import { client } from "../lib/client";

// Interface for correct hero section types
export interface IReviewsSection {
  title: string;
  image: any;
  cards: {
    person: string;
    email: string;
    subtitle: string;
    stars: number;
  }[];
}

// Function to get hero section data
export const getReviewsSectionData = async (): Promise<IReviewsSection[]> => {
  const query = `*[_type == 'reviews_section']`; // *[_type == 'reviews_section'] gets all documents of type reviews_section
  const data = await client.fetch(query, {}, { cache: "no-store" });
  return data;
};

const reviews_section = {
  name: "reviews_section", // IMPORTANT, this is query name
  type: "document",
  title: "Reviews Section",
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
              name: "person",
              type: "string",
              title: "Person",
            },
            {
              name: "email",
              type: "string",
              title: "Email",
            },
            {
              name: "stars",
              type: "number",
              title: "Stars",
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

export default reviews_section;
