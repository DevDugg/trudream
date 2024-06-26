import { type SchemaTypeDefinition } from "sanity";
import hero_section from "./schemas/hero";
import about_section from "./schemas/about";
import business_section from "./schemas/business";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero_section, about_section, business_section],
};
