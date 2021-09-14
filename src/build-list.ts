import { Card, ParsedResponse } from "./types";
import sampleSize from "lodash.samplesize";

export const buildList = ({ main, sideboard }: ParsedResponse): Card[] => {
  const mainTotal = main.reduce((acc, card) => acc + card.count, 0);
  return [
    ...main,
    ...Object.entries(
      sampleSize<string>(
        sampleSize<string>(sideboard.map((card) => new Array(card.count).fill(card.name)).flat(), 100 - mainTotal),
        100 - mainTotal
      ).reduce<Record<string, number>>((acc, sample) => ({ ...acc, [sample]: (acc[sample] || 0) + 1 }), {})
    ).map(([name, count]) => ({ count, name })),
  ];
};
