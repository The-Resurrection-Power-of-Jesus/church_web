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
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== "dailyDevotional",
      ),
    ]);
