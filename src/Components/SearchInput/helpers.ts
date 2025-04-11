import { IItem } from "./types";

export const sortItems = (items: IItem[]) =>
  [...items].sort((a, b) => a.name.localeCompare(b.name));

export const escapeRegExp = (str: string) =>
  str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
