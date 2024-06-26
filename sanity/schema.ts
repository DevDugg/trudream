import { type SchemaTypeDefinition } from "sanity";
import hero_section from "./schemas/hero";
import about_section from "./schemas/about";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero_section, about_section],
};
