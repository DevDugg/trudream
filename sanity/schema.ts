import { type SchemaTypeDefinition } from "sanity";
import hero_section from "./schemas/hero";
import about_section from "./schemas/about";
import business_section from "./schemas/business";
import guide_section from "./schemas/guide";
import reviews_section from "./schemas/reviews";
import questions_section from "./schemas/questions";
import help_section from "./schemas/help";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    hero_section,
    about_section,
    business_section,
    guide_section,
    reviews_section,
    questions_section,
    help_section,
  ],
};
