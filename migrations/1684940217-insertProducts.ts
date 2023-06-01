import { Sql } from 'postgres';

export const products = [
  {
    id: 1,
    name: 'Fantasia Blend',
    text1:
      'Immerse yourself in a fantastical journey with this whimsical blend.',
    text2:
      'Discover a harmonious combination of smooth flavors, dancing with hints of chocolate and caramel.',
    text3: 'Creating a truly magical coffee experience.',

    type: 'bean',
    price: 45,
  },
  {
    id: 2,
    name: 'Dream Bean Delight',
    text1:
      'Awaken your senses with this delightful blend that transcends reality.',
    text2:
      'Experience a heavenly fusion of velvety textures, nutty undertones, and a hint of vanilla.',
    text3: 'Transforming your coffee dreams into a blissful reality.',
    type: 'bean',
    price: 78,
  },
  {
    id: 3,
    name: 'Enchanted Roast',
    text1: 'Indulge in the enchantment of this captivating roast.',
    text2:
      "With every sip, you'll be spellbound by its deep, robust flavors, accented by dark chocolate and a touch of smokiness.",
    text3: 'Leaving you under its bewitching charm.',
    type: 'bean',
    price: 37,
  },
  {
    id: 4,
    name: 'Mythic Mornings',
    text1: 'Begin your day with a mythical awakening.',
    text2:
      'This invigorating blend combines vibrant notes of citrus and berries, harmonizing with a subtle sweetness and a smooth finish.',
    text3: 'Ensuring every morning feels like an epic adventure.',
    type: 'bean',
    price: 68,
  },
  {
    id: 5,
    name: 'SwiftCup Supreme',
    text1: 'Experience instant coffee perfection with SwiftCup Supreme.',
    text2: 'This premium blend offers a smooth and robust flavor profile.',
    text3:
      'Ensuring a quick and satisfying coffee experience without compromising on quality.',
    type: 'instant',
    price: 27,
  },
  {
    id: 6,
    name: 'QuickMorn Magic',
    text1:
      'Start your mornings with QuickMorn Magic, the ultimate instant coffee companion.',
    text2:
      'This enchanting blend combines the perfect balance of boldness and smoothness.',
    text3: 'Providing a magical awakening to kickstart your day.',
    type: 'instant',
    price: 56,
  },
  {
    id: 7,
    name: 'FlashBrew Elixir',
    text1: 'Experience the power of instant coffee with FlashBrew Elixir.',
    text2:
      'This unique blend captivates with its lightning-fast preparation and extraordinary taste.',
    text3:
      'Enjoy a bold and invigorating coffee experience that energizes you in an instant.',
    type: 'instant',
    price: 56,
  },
  {
    id: 8,
    name: 'InstaRoast Delight',
    text1: 'Indulge in the convenience of InstaRoast Delight.',
    text2:
      'This instant coffee delights your taste buds with a rich and aromatic brew.',
    text3:
      'Delivering a balanced blend of flavors that will make every sip a moment of pure pleasure.',
    type: 'instant',
    price: 56,
  },
  {
    id: 9,
    name: 'JavaPod Bliss',
    text1: 'Indulge in a moment of pure bliss with JavaPod.',
    text2:
      'Each capsule contains a harmonious blend of meticulously selected coffee beans.',
    text3:
      'Delivering a velvety smooth and rich espresso that will transport your taste buds to a state of pure delight.',
    type: 'capsules',
    price: 41,
  },
  {
    id: 10,
    name: 'CapsuBrew Delight',
    text1: 'Unlock a world of delightful flavors with CapsuBrew.',
    text2: 'These innovative coffee capsules offer a symphony of tastes.',
    text3:
      'Ranging from subtle notes of caramel to hints of exotic spices, creating an extraordinary coffee experience that will leave you craving more.',
    type: 'capsules',
    price: 18,
  },
  {
    id: 11,
    name: 'AromaCaps Encore',
    text1: 'Immerse yourself in a captivating coffee symphony with AromaCaps.',
    text2:
      'These carefully crafted capsules release an irresistible aroma that fills the air as they brew.',
    text3:
      'leading to a captivating cup of coffee that combines depth, richness, and an exquisite aftertaste.',
    type: 'capsules',
    price: 36,
  },
  {
    id: 12,
    name: 'BrewClique Euphoria',
    text1:git 
      'Join the exclusive BrewClique and discover a euphoric coffee experience.',
    text2:
      'Each capsule is a work of art, blending premium coffee beans from around the world to create a sublime espresso with a velvety texture.',
    text3:
      'Complex flavors, and an enchanting aroma that will leave you in a state of pure bliss.',

    type: 'capsules',
    price: 24,
  },
];

export async function up(sql: Sql) {
  for (const product of products) {
    await sql`
    INSERT INTO products
      (name, text1, text2, text3, type, price)
    VALUES
      (${product.name}, ${product.text1}, ${product.text2}, ${product.text3}, ${product.type}, ${product.price})
  `;
  }
}

export async function down(sql: Sql) {
  for (const product of products) {
    await sql`
      DELETE FROM products WHERE id = ${product.id}
  `;
  }
}
