import "./styles/style.css";

if (module.hot) module.hot.accept();

const elvenShieldRecipe = {
  leatherStrips: 2,
  ironIngot: 1,
  refinedMoonstone: 4,
};

const elvenGauntletsRecipe = {
  ...elvenShieldRecipe,
  leather: 1,
  refinedMoonstone: 6,
};

console.log(elvenShieldRecipe);
console.log(elvenGauntletsRecipe);
