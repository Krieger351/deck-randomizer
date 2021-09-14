import { parseInput } from "./parser";
import { validate } from "./validate";
import { buildList } from "./build-list";

const generateButton = document.getElementById("generate") as HTMLButtonElement;
const inputElement = document.getElementById("input") as HTMLTextAreaElement;
const outputElement = document.getElementById("output") as HTMLTextAreaElement;

const generateDecklist = () => {
  const parsedResponse = parseInput(inputElement.value);
  const validation = validate(parsedResponse);
  if (validation) {
    alert(validation);
  }

  outputElement.value = buildList(parsedResponse)
    .map(({ count, name }) => `${count} ${name}`)
    .join("\n");
};

generateButton.addEventListener("click", generateDecklist);
