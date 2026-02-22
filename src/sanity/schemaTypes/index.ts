import type { SchemaTypeDefinition } from "sanity";
import { dailyDevotional } from "./dailyDevotional";
import { event } from "./event";
import { homepageSettings } from "./homepageSettings";
import { i18nBody } from "./i18nBody";
import { i18nTitle } from "./i18nTitle";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [i18nTitle, i18nBody, dailyDevotional, event, homepageSettings],
};
