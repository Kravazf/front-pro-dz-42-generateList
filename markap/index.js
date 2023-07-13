function generateList(array) {
  const listItems = array.map(item =>
    Array.isArray(item) ? `<li>\n${generateList(item)}\n</li>` : `<li>${item}</li>`
  );

  const list = `<ul>\n${listItems.join("\n")}\n</ul>`;
  return list;
}

const numberArray = [1, 2, 3];
const nestedArray = [1, 2, [1.1, 1.2, 1.3], 3];
const [generatedListNumberArray, generatedListNestedArray] = [generateList(numberArray), generateList(nestedArray)];
document.getElementById("main").innerHTML = generatedListNumberArray + generatedListNestedArray;