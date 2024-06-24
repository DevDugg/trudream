import { type SchemaTypeDefinition } from "sanity";
import hero_section from "./schemas/hero";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero_section],
};
