export type Card = {
  name: string;
  count: number;
};

export type ParsedSubsection = {
  errors: string[];
  cards: Card[];
};

export type ParsedResponse = {
  errors: string[];
  main: Card[];
  sideboard: Card[];
};
