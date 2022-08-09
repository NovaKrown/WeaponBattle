// WEAPONS

const morningstar = {
  name: "Morning Star",
  type: "weapon",
  minDmg: 6,
  maxDmg: 8,
  crit: 2,
  critChance: 20,
  cost: 8,
  level: 1,
  obj: "morningstar",
};

const spear = {
  name: "Spear",
  type: "weapon",
  minDmg: 6,
  maxDmg: 8,
  crit: 3,
  critChance: 20,
  cost: 2,
  level: 1,
  obj: "spear",
};

const shortsword = {
  name: "Short Sword",
  type: "weapon",
  minDmg: 4,
  maxDmg: 6,
  crit: 2,
  critChance: 19,
  cost: 10,
  level: 1,
  obj: "shortsword",
};

const battleaxe = {
  name: "Battleaxe",
  type: "weapon",
  minDmg: 6,
  maxDmg: 8,
  crit: 3,
  critChance: 20,
  cost: 10,
  level: 1,
  obj: "battleaxe",
};

const scimitar = {
  name: "Scimitar",
  type: "weapon",
  minDmg: 4,
  maxDmg: 6,
  crit: 2,
  critChance: 18,
  cost: 15,
  level: 1,
  obj: "scimitar",
};

const greatsword = {
  name: "Greatsword",
  type: "weapon",
  minDmg: 10,
  maxDmg: 12,
  crit: 2,
  critChance: 19,
  cost: 50,
  level: 1,
  obj: "greatsword",
};

const scythe = {
  name: "Scythe",
  type: "weapon",
  minDmg: 6,
  maxDmg: 8,
  crit: 4,
  critChance: 20,
  cost: 18,
  level: 1,
  obj: "scythe",
};

const crossbow = {
  name: "Crossbow",
  type: "weapon",
  minDmg: 8,
  maxDmg: 10,
  crit: 2,
  critChance: 19,
  cost: 50,
  level: 1,
  obj: "crossbow",
};

const whip = {
  name: "Whip",
  type: "weapon",
  minDmg: 2,
  maxDmg: 3,
  crit: 2,
  critChance: 20,
  cost: 1,
  level: 1,
  obj: "whip",
};

const hppots = {
  name: "Sandwish",
  type: "potion",
  heal: 20,
  quantity: 5,
  cost: 20,
  obj: "hppots",
};

const hppotm = {
  name: "Potion",
  type: "potion",
  heal: 50,
  quantity: 6,
  cost: 50,
  obj: "hppotm",
};

const hppotl = {
  name: "Elixir",
  type: "life",
  heal: 100,
  quantity: 4,
  cost: 100,
  obj: "hppotl",
};

const simpleWeapons = [morningstar, spear];
const martialWeapons = [shortsword, battleaxe, scimitar];
const twoHandWeapons = [greatsword, scythe];
const rangedWeapons = [crossbow, whip];
const potions = [hppots, hppotm, hppotl];
const allWeapons = [
  morningstar,
  spear,
  shortsword,
  battleaxe,
  scimitar,
  greatsword,
  scythe,
  crossbow,
  whip,
];

// MONSTERS

const goblin = {
  name: "Goblin",
  level: 1,
  hp: 50,
  maxDmg: 10,
  crit: 1,
  critChance: 20,
  gold: 15,
  sand: 1,
  pot: 0,
  elix: 0,
  obj: "goblin",
};

const orc = {
  name: "Orc",
  level: 1,
  hp: 100,
  maxDmg: 20,
  crit: 1.5,
  critChance: 20,
  gold: 150,
  sand: 10,
  pot: 1,
  elix: 0,
  obj: "orc",
};

const ogre = {
  name: "Ogre",
  level: 1,
  hp: 200,
  maxDmg: 40,
  crit: 2,
  critChance: 20,
  gold: 1500,
  sand: 25,
  pot: 10,
  elix: 2,
  obj: "ogre",
};

const giant = {
  name: "Giant",
  level: 1,
  hp: 400,
  maxDmg: 80,
  crit: 2.5,
  critChance: 20,
  gold: 15000,
  sand: 50,
  pot: 20,
  elix: 10,
  obj: "giant",
};

const dragon = {
  name: "Dragon",
  level: 1,
  hp: 800,
  maxDmg: 160,
  crit: 3,
  critChance: 20,
  gold: 150000,
  sand: 100,
  pot: 50,
  elix: 15,
  obj: "dragon",
};

// const goblin = {
//   name: "Goblin",
//   hp: 6,
//   str: 11,
//   minDmg: 0,
//   maxDmg: 11,
//   crit: 2,
//   critChance: 20,
//   reward: 55,
//   obj: "goblin",
// };

// const orc = {
//   name: "Orc",
//   hp: 18,
//   str: 17,
//   minDmg: 0,
//   maxDmg: 17,
//   crit: 2,
//   critChance: 20,
//   reward: 170,
//   obj: "orc",
// };

// const ogre = {
//   name: "Ogre",
//   hp: 30,
//   str: 22,
//   minDmg: 0,
//   maxDmg: 22,
//   crit: 2,
//   critChance: 20,
//   reward: 550,
//   obj: "ogre",
// };

// const giant = {
//   name: "Giant",
//   hp: 133,
//   str: 29,
//   minDmg: 0,
//   maxDmg: 29,
//   crit: 2,
//   critChance: 20,
//   reward: 2850,
//   obj: "giant",
// };

// const dragon = {
//   name: "Dragon",
//   hp: 310,
//   str: 35,
//   minDmg: 0,
//   maxDmg: 35,
//   crit: 2,
//   critChance: 20,
//   reward: 22000,
//   obj: "dragon",
// };

const monsterArray = [goblin, orc, ogre, giant, dragon];

const output = document.querySelector(".result");
const progressContainer = document.querySelector(".progress");
const inventoryScreen = document.querySelector(".inventory");
const bar = document.querySelector(".progressBar");
const monsterAttack = document.querySelector(".monsterAttack");
const reward = document.querySelector(".reward");
const numbers = document.querySelector(".numbers");
const fill = document.querySelector(".fill");
const treasure = document.querySelector(".gold");
const monsterBlock = document.querySelector(".monsterContainer");
const monsterName = document.querySelector(".monsterName");
let smallPot = "";
let medPot = "";
let lrgPot = "";
let itemDescriptions = document.querySelectorAll(".weaponDescription");
let itemShops = document.querySelectorAll(".weaponShop");

function calcPlayHP() {
  numbers.innerHTML = `<p>100/100</p>`;
}

calcPlayHP();

let equippedWeapon = "";
let playerMaxHP = 100;
let playerCurrentHP = playerMaxHP;
let playerDamage = 0;
let enemyDamage = 0;
let gold = 0;
let enemy = goblin;
let monsterMaxHP = 0;
let monsterCurrentHP = monsterMaxHP;
let sm = 0;
let md = 0;
let lg = 0;
let enemyGold;

//////////////////////////////////
//////////////Player//////////////

// function minMax(min, max, crit, critChance) {
//   const regular = Math.floor(Math.random() * (max - min + 1)) + min;
//   const d20 = Math.floor(Math.random() * 20 + 1);
//   // console.log(regular);
//   // console.log(d20);
//   if (d20 >= critChance) {
//     return regular * crit;
//   } else return regular;
// }

function minMax(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function roll(w) {
  // console.log(w);
  let playerAttack = minMax(w.minDmg, w.maxDmg);
  let playerCrit = minMax(1, w.critChance);
  if (playerCrit >= w.critChance) {
    playerDamage = playerAttack * w.crit;
  } else playerDamage = playerAttack;
  // damage = minMax(w.minDmg, w.maxDmg, w.crit, w.critChance);
  output.innerHTML =
    playerDamage > w.maxDmg
      ? `<p>Critical Hit!! ${playerDamage} damage!</p>`
      : `<p>You attack! ${playerDamage} damage!</p>`;

  let enemyAttack = minMax(0, enemy.maxDmg);
  let enemyCrit = minMax(1, enemy.critChance);
  if (enemyCrit >= enemy.critChance) {
    enemyDamage = enemyAttack * enemy.crit;
  } else enemyDamage = enemyAttack;
  monsterAttack.innerHTML =
    enemyDamage > 0
      ? `<p>${enemy.name} attacks you <br>
      ${enemyDamage} damage!</p>`
      : `<p>${enemy.name} misses!</p>`;
  playerHP(enemyDamage);
}

function inventory(weapon) {
  const newItemContainer = document.createElement("div");
  newItemContainer.classList.add("weaponCard");
  inventoryScreen.append(newItemContainer);

  newItemContainer.innerHTML = `<div class="weaponDescription"></div> <div class="weaponShop"></div>`;

  const itemDescription = newItemContainer.firstElementChild;
  itemDescription.setAttribute("data-object", weapon.obj);
  const itemShop = newItemContainer.lastElementChild;
  itemShop.setAttribute("data-object", weapon.obj + "shop");

  if (weapon.type === "weapon") {
    itemDescription.innerHTML = `<strong>${weapon.name}</strong><p>Damage: ${weapon.minDmg}-${weapon.maxDmg}</p><p>Critical: x${weapon.crit}</p><br><p>Level: ${weapon.level}</p>`;
    itemShop.innerHTML = `<p>Cost: ${weapon.cost}</p>`;
  } else if (weapon.type === "potion" || weapon.type === "life") {
    itemDescription.innerHTML = `<strong>${weapon.name}</strong><p>Heal: ${weapon.heal}</p><p>Amount: ${weapon.quantity}</p>`;
    itemDescription.classList.add(`${weapon.obj}`);
    itemShop.innerHTML = `<strong>Use All</strong>`;
  }
  smallPot = document.querySelector(".hppots");
  medPot = document.querySelector(".hppotm");
  lrgPot = document.querySelector(".hppotl");
}

simpleWeapons.forEach((w) => inventory(w));
martialWeapons.forEach((w) => inventory(w));
twoHandWeapons.forEach((w) => inventory(w));
rangedWeapons.forEach((w) => inventory(w));
potions.forEach((w) => inventory(w));

// progressContainer.innerHTML = `<progress class="progressBar" value = ${monsterCurrentHP} max= ${monsterMaxHP}></progress>`;

function monsterHP() {
  monsterCurrentHP = monsterCurrentHP - playerDamage;
  progressContainer.innerHTML = `<progress class="progressBar" value = ${monsterCurrentHP} max= ${monsterMaxHP}></progress>`;
  monsterName.classList.add("flash");
  setTimeout(function () {
    monsterName.classList.remove("flash");
  }, 200);
}

function addGold(enemy) {
  gold = gold + enemyGold;
  treasure.innerHTML = `Gold: ${gold}`;
  hppots.quantity = hppots.quantity + sm;
  hppotm.quantity = hppotm.quantity + md;
  hppotl.quantity = hppotl.quantity + lg;
  updatePotions();
  turnGreen();
}

function turnGreen() {
  allWeapons.forEach((w) => {
    const available = document.querySelector(`[data-object="${w.obj}shop"]`);
    if (gold >= w.cost) {
      available.classList.add("buy");
    } else if (gold < w.cost) {
      available.classList.remove("buy");
    }
  });
}

function updatePotions() {
  smallPot.innerHTML = `<strong>${hppots.name}</strong><p>Heal: ${hppots.heal}</p><p>Amount: ${hppots.quantity}</p>`;
  medPot.innerHTML = `<strong>${hppotm.name}</strong><p>Heal: ${hppotm.heal}</p><p>Amount: ${hppotm.quantity}</p>`;
  lrgPot.innerHTML = `<strong>${hppotl.name}</strong><p>Heal: ${hppotl.heal}</p><p>Amount: ${hppotl.quantity}</p>`;
}

const weaponDescription = document.querySelectorAll(".weaponDescription");

inventoryScreen.addEventListener("click", function (e) {
  const useClick = e.target.closest(".weaponDescription");
  if (!useClick) return;
  let weaponObj = useClick.getAttribute("data-object");
  equippedWeapon = eval(weaponObj);

  if (monsterCurrentHP >= 0 && playerCurrentHP > 0) {
    if (equippedWeapon.type === "weapon") {
      roll(equippedWeapon);
      monsterHP();
      // mAttack(enemy);
    } else if (
      equippedWeapon.type === "potion" &&
      equippedWeapon.quantity > 0
    ) {
      usePotion(1);
    } else if (equippedWeapon.type === "life" && equippedWeapon.quantity > 0) {
      useElixer(1);
    }
  }

  if (monsterCurrentHP <= 0) {
    output.innerHTML = `<p>${playerDamage} damage! Victory!!</p>`;
    addGold(enemyGold);
    chooseMonster();
  }
});

function usePotion(quantity) {
  for (let i = 0; i < quantity; i++) {
    playerCurrentHP = playerCurrentHP + equippedWeapon.heal;
    numbers.innerHTML = `<p>${playerCurrentHP}/${playerMaxHP}</p>`;
    fill.style.width = `${(playerCurrentHP / playerMaxHP) * 100}%`;
    equippedWeapon.quantity -= 1;
    updatePotions();
  }
}

function useElixer(quantity) {
  for (let i = 0; i < quantity; i++) {
    playerMaxHP = playerMaxHP + equippedWeapon.heal;
    numbers.innerHTML = `<p>${playerCurrentHP}/${playerMaxHP}</p>`;
    fill.style.width = `${(playerCurrentHP / playerMaxHP) * 100}%`;
    equippedWeapon.quantity -= 1;
    updatePotions();
  }
}

inventoryScreen.addEventListener("click", function (e) {
  const shopClick = e.target.closest(".weaponShop");
  if (!shopClick) return;
  let weaponObj = shopClick.getAttribute("data-object");
  console.log(weaponObj);
  equippedWeapon = eval(weaponObj.slice(0, -4));
  console.log(weaponObj);
  if (equippedWeapon.type === "weapon" && gold >= equippedWeapon.cost) {
    equippedWeapon.level++;
    gold = gold - equippedWeapon.cost;
    treasure.innerHTML = `Gold: ${gold}`;
    equippedWeapon.cost = Math.floor(
      equippedWeapon.cost + equippedWeapon.cost / 2
    );
    equippedWeapon.maxDmg = equippedWeapon.maxDmg + equippedWeapon.minDmg;

    shopClick.innerHTML = `<strong>Upgrade</strong><p>Cost: ${equippedWeapon.cost}`;
    const theDesc = shopClick.previousElementSibling;
    console.log(theDesc);
    theDesc.innerHTML = `<strong>${equippedWeapon.name}</strong><p>Damage: ${equippedWeapon.minDmg}-${equippedWeapon.maxDmg}</p><p>Critical: x${equippedWeapon.crit}</p><p>Level: ${equippedWeapon.level}</p>`;
  }

  if (equippedWeapon.type === "potion") {
    itemShops.innerHTML = "Use All";
    usePotion(equippedWeapon.quantity);
    console.log(equippedWeapon.quantity);
  }
  if (equippedWeapon.type === "life") {
    itemShops.innerHTML = "Use All";
    useElixer(equippedWeapon.quantity);
    console.log(equippedWeapon.quantity);
  }
  turnGreen();
});

////////////////////////////////////////
////////////////Monster/////////////////

const spawn = function (enemy) {
  const monsterName = document.querySelector(".monsterName");

  monsterName.innerHTML = ``;
  monsterName.innerHTML = `<strong>${enemy.name}</strong>`;
  monsterBlock.prepend(monsterName);

  sm = minMax(0, enemy.sand);
  md = minMax(0, enemy.pot);
  lg = minMax(0, enemy.elix);
  enemyGold = enemy.gold;
  reward.innerHTML = `<p>Reward: ${enemyGold} gold <br />  ${sm} Sandwishes <br />
  ${md} Potions <br />  ${lg} Elixirs</p>`;

  monsterCurrentHP = enemy.hp;
  monsterMaxHP = enemy.hp;
  progressContainer.innerHTML = `<progress class="progressBar" value = ${monsterCurrentHP} max= ${monsterMaxHP}></progress>`;
};

function chooseMonster() {
  const random = Math.floor((Math.random() * gold) / 10);
  if (random < 10) {
    enemy = goblin;
  } else if (random > 10 && random < 100) {
    enemy = orc;
  } else if (random > 100 && random < 1000) {
    enemy = ogre;
  } else if (random > 1000 && random < 10000) {
    enemy = giant;
  } else if (random > 10000 && random < 100000) {
    enemy = dragon;
  }
  spawn(enemy);
}

chooseMonster();

function playerHP(attack) {
  playerCurrentHP = playerCurrentHP - attack;
  numbers.innerHTML = `<p>${playerCurrentHP}/${playerMaxHP}</p>`;
  if (playerCurrentHP > 0) {
    fill.style.width = `${(playerCurrentHP / playerMaxHP) * 100}%`;
  } else if (playerCurrentHP <= 0) {
    fill.style.width = `0%`;
    numbers.innerHTML = `<p>GAME OVER</p>`;
    output.innerHTML = `<p>GAME OVER</p>`;
  }
}

function mAttack(enemy) {
  const attack = roll(enemy);
  console.log(attack);
  playerHP(attack);
}
