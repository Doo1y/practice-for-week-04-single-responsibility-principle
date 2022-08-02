/******************************** CONSTANTS *********************************/ 
const applePieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "apples", cost: 6.00, quantity: 7 },
  { name: "cinnamon", cost: 5.50, quantity: 1 },
  { name: "eggs", cost: 2.00, quantity: 1 },
];

const pumpkinPieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "pumpkin", cost: 3.75, quantity: 2 },
  { name: "cinnamon", cost: 5.50, quantity: 1 },
  { name: "eggs", cost: 2.00, quantity: 1 },
];

const cherryPieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "cherries", cost: 12.00, quantity: 10 },
  { name: "eggs", cost: 2.00, quantity: 1 },
];

const recipes = {
  applePie: applePieRecipe,
  pumpkinPie: pumpkinPieRecipe,
  cherryPie: cherryPieRecipe
};
/* DO NOT CHANGE THE CODE ABOVE */

/*************************** FUNCTION TO REFACTOR ****************************/
function bakeAndSellPies(pieType, pieQuantity, profitMargin) {
  const recipe = pieBaker(pieType, pieQuantity);
  const costOfPie = pieCost(recipe);
  const revenue = revenueCalc(costOfPie, pieQuantity, profitMargin);

  console.log(`Cost per pie: ${costOfPie}`);
  
  console.log(`Sold ${pieQuantity} pies for $${revenue.toFixed(2)}!`);
}

function pieBaker(pieType, pieQuantity) {
  const recipe = recipes[pieType];

  for (let i = 0; i < pieQuantity; i++) {
    let combiningMsg = `Combining ingredients for ${pieType}: `;
    combiningMsg += recipe.map(ingredient => ingredient.name).join(', ');
    console.log(combiningMsg); 

    console.log(`Baked pie ${i + 1}!`);
  }

  return recipe;
}

function pieCost(recipe) {
  return recipe.reduce((prev, current) => prev + current.cost, recipe[0].cost);
}

function revenueCalc(costOfPie, pieQuantity, profitMargin) {
  const totalCost = costOfPie * pieQuantity;
  const revenue = totalCost * (profitMargin || 1.2);

  return revenue;
}

/******************************* LOCAL TESTS *******************************/
//  bakeAndSellPies("applePie", 5, 2.5);
//  bakeAndSellPies("pumpkinPie", 2);
//  bakeAndSellPies("cherryPie", 7, 1.7);

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  bakeAndSellPies
};