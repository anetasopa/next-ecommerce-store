export const products = [
  {
    id: 1,
    name: 'beans',
    text: 'Also the leap into electronic typesetting, remaining essentially unchanged.',
  },
  {
    id: 2,
    name: 'capsules',
    text: 'When an unknown printer took a galley of type and scrambled it to.',
  },
  {
    id: 3,
    name: 'ground',
    text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search.',
  },
  {
    id: 4,
    name: 'instant',
    text: 'It was popularised in the 1960s with the release of Letraset sheets containing.',
  },
];

export function getProductByName(name) {
  return products.find((product) => product.name === name);
}
