import { ParsedResponse } from "./types";

export const validate = ({ errors }: ParsedResponse): string | undefined => {
  if (errors.length) {
    return `These records are invalid: ${errors.join(", ")}</ul>`;
  }
  return;
};
