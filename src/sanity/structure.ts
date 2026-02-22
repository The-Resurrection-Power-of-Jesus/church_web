import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Daily Devotionals")
        .schemaType("dailyDevotional")
        .child(
          S.documentTypeList("dailyDevotional").title("Daily Devotionals"),
        ),
      S.listItem()
        .title("Events")
        .schemaType("event")
        .child(S.documentTypeList("event").title("Events")),
      S.listItem()
        .title("Homepage Settings")
        .schemaType("homepageSettings")
        .child(
          S.document()
            .schemaType("homepageSettings")
            .documentId("homepageSettings"),
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() !== "dailyDevotional" &&
          item.getId() !== "event" &&
          item.getId() !== "homepageSettings",
      ),
    ]);
