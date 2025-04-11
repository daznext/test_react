import { escapeRegExp } from "../SearchInput/helpers";
import { HighlightTextProps } from "./types";

export const HighlightText = ({
  text,
  searchString,
}: HighlightTextProps): React.ReactNode => {
  if (!searchString.trim()) return text;

  const re = new RegExp(`(${escapeRegExp(searchString)})`, "gi"); // в скобках, чтобы в split попали и искомые строки тоже

  return text
    .split(re)
    .map((part, i) =>
      i % 2 === 0 ? part : <mark key={`marked-${i}`}>{part}</mark>
    );
};
