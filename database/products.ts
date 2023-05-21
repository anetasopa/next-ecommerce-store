type Products = {
  id: number;
  name: string;
  text: string;
  type: string;
  price: number;
};

export const products: Products[] = [
  {
    id: 1,
    name: 'Fantasia Blend',
    text: 'Immerse yourself in a fantastical journey with this whimsical blend. Discover a harmonious combination of smooth flavors, dancing with hints of chocolate and caramel, creating a truly magical coffee experience.',
    type: 'bean',
    price: 45,
  },
  {
    id: 2,
    name: 'Dream Bean Delight',
    text: 'Awaken your senses with this delightful blend that transcends reality. Experience a heavenly fusion of velvety textures, nutty undertones, and a hint of vanilla, transforming your coffee dreams into a blissful reality.',
    type: 'bean',
    price: 78,
  },
  {
    id: 3,
    name: 'Enchanted Roast',
    text: "Indulge in the enchantment of this captivating roast. With every sip, you'll be spellbound by its deep, robust flavors, accented by dark chocolate and a touch of smokiness, leaving you under its bewitching charm.",
    type: 'bean',
    price: 37,
  },
  {
    id: 4,
    name: 'Mythic Mornings',
    text: 'Begin your day with a mythical awakening. This invigorating blend combines vibrant notes of citrus and berries, harmonizing with a subtle sweetness and a smooth finish, ensuring every morning feels like an epic adventure.',
    type: 'bean',
    price: 98,
  },
  {
    id: 5,
    name: 'SwiftCup Supreme',
    text: 'Experience instant coffee perfection with SwiftCup Supreme. This premium blend offers a smooth and robust flavor profile, ensuring a quick and satisfying coffee experience without compromising on quality.',
    type: 'instant',
    price: 27,
  },
  {
    id: 6,
    name: 'QuickMorn Magic',
    text: 'Start your mornings with QuickMorn Magic, the ultimate instant coffee companion. This enchanting blend combines the perfect balance of boldness and smoothness, providing a magical awakening to kickstart your day.',
    type: 'instant',
    price: 56,
  },
  {
    id: 7,
    name: 'FlashBrew Elixir',
    text: 'Experience the power of instant coffee with FlashBrew Elixir. This unique blend captivates with its lightning-fast preparation and extraordinary taste. Enjoy a bold and invigorating coffee experience that energizes you in an instant.',
    type: 'instant',
    price: 56,
  },
  {
    id: 8,
    name: 'InstaRoast Delight',
    text: 'Indulge in the convenience of InstaRoast Delight. This instant coffee delights your taste buds with a rich and aromatic brew, delivering a balanced blend of flavors that will make every sip a moment of pure pleasure.',
    type: 'instant',
    price: 56,
  },
  {
    id: 9,
    name: 'JavaPod Bliss',
    text: 'Indulge in a moment of pure bliss with JavaPod. Each capsule contains a harmonious blend of meticulously selected coffee beans, delivering a velvety smooth and rich espresso that will transport your taste buds to a state of pure delight.',
    type: 'capsules',
    price: 41,
  },
  {
    id: 10,
    name: 'CapsuBrew Delight',
    text: 'Unlock a world of delightful flavors with CapsuBrew. These innovative coffee capsules offer a symphony of tastes, ranging from subtle notes of caramel to hints of exotic spices, creating an extraordinary coffee experience that will leave you craving more.',
    type: 'capsules',
    price: 18,
  },
  {
    id: 11,
    name: 'AromaCaps Encore',
    text: 'Immerse yourself in a captivating coffee symphony with AromaCaps. These carefully crafted capsules release an irresistible aroma that fills the air as they brew, leading to a captivating cup of coffee that combines depth, richness, and an exquisite aftertaste.',
    type: 'capsules',
    price: 36,
  },
  {
    id: 12,
    name: 'BrewClique Euphoria',
    text: 'Join the exclusive BrewClique and discover a euphoric coffee experience. Each capsule is a work of art, blending premium coffee beans from around the world to create a sublime espresso with a velvety texture, complex flavors, and an enchanting aroma that will leave you in a state of pure bliss.',
    type: 'capsules',
    price: 24,
  },
];

export function getProductById(id: number) {
  return products.find((product) => product.id === id);
}
