import { ParsedResponse, ParsedSubsection } from "./types";

export const parseSubSection = (input: string): ParsedSubsection =>
  input
    .trim()
    .split("\n")
    .reduce<ParsedSubsection>(
      (acc, line) => {
        const match = line.match(/(?<count>\d+) (?<name>.+)/)?.groups;
        if (match && match?.count && match?.name) {
          return {
            cards: [...acc.cards, { count: parseInt(match.count), name: match.name }],
            errors: acc.errors,
          };
        }
        return {
          cards: acc.cards,
          errors: [...acc.errors, line],
        };
      },
      { cards: [], errors: [] }
    );

export const parseInput = (input: string): ParsedResponse => {
  const [main, sideboard] = input.split("\nSIDEBOARD:\n").map(parseSubSection);
  const errors = [...main.errors, ...sideboard.errors];
  return {
    errors,
    main: main.cards,
    sideboard: sideboard.cards,
  };
};
