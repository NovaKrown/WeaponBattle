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

const monsterKills = {
  goblin: 0,
  orc: 0,
  ogre: 0,
  giant: 0,
  dragon: 0,
};

const monsterArray = [goblin, orc, ogre, giant, dragon];
// const inventory = document.querySelector(".inventory");
const output = document.querySelector(".output");
const inventoryShop = document.querySelector(".shop");
const inventorySwitch = document.querySelector(".switch");
// const monsterAttack = document.querySelector(".monsterAttack");
const reward = document.querySelector(".reward");
const playerHPBar = document.querySelector(".playerHPBar");
const fillPlayer = document.querySelector(".fillPlayer");
const enemyHPBar = document.querySelector(".enemyHPBar");
const fillEnemy = document.querySelector(".fillEnemy");
const playerGold = document.querySelector(".goldBox");
const monsterBlock = document.querySelector(".monsterBlock");
const monsterName = document.querySelector(".monsterName");
const eWeapon = document.querySelector(".eWeapon");
const log = document.querySelector(".log");
let smallPot = "";
let medPot = "";
let lrgPot = "";
let itemDescriptions = document.querySelectorAll(".weaponDescription");
let itemShops = document.querySelectorAll(".weaponShop");
let equippedWeapon = greatsword;
let playerMaxHP = 100;
let playerCurrentHP = playerMaxHP;
let playerDamage = 0;
let enemyDamage = 0;
let gold = 0;
let enemy = goblin;
let enemyMaxHP = 0;
let enemyCurrentHP = enemyMaxHP;
let sm = 0;
let md = 0;
let lg = 0;

function calcPlayHP() {
  fillPlayer.innerHTML = `<p class="absolute">100/100</p>`;
}

calcPlayHP();

function minMax(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//panel code//

const panelFunction = function () {
  const panels = document.querySelectorAll(".panel");
  const btnU = document.querySelector(".btnU");
  const btnW = document.querySelector(".btnW");
  const btnH = document.querySelector(".btnH");
  const btnA = document.querySelector(".btnA");

  const goToPanel = function (panel) {
    panels.forEach((p, i) => {
      p.style.transform = `translateX(${100 * (i - panel)}%)`;
    });
  };

  const nextPanel = function () {
    goToPanel(0);
  };

  const prevPanel = function () {
    goToPanel(2);
  };

  const homePanel = function () {
    goToPanel(1);
  };

  const init = function () {
    goToPanel(1);
  };
  init();

  btnU.addEventListener("click", nextPanel);
  btnW.addEventListener("click", prevPanel);
  btnH.addEventListener("click", homePanel);
  btnA.addEventListener("click", playerAttack);
};

panelFunction();

function roll(w) {
  // console.log(w);
  let playerAttack = minMax(w.minDmg, w.maxDmg);
  let playerCrit = minMax(1, w.critChance);
  if (playerCrit >= w.critChance) {
    playerDamage = playerAttack * w.crit;
  } else playerDamage = playerAttack;
  const playerOutput = document.createElement("p");
  playerOutput.classList.add(".logItem");
  playerOutput.innerHTML =
    playerDamage > w.maxDmg
      ? `<p>Critical Hit! ${enemy.name} takes ${playerDamage} damage.</p><br>`
      : `<p>${enemy.name} takes ${playerDamage} damage.</p><br>`;

  log.prepend(playerOutput);

  let enemyAttack = minMax(0, enemy.maxDmg);
  let enemyCrit = minMax(1, enemy.critChance);
  if (enemyCrit >= enemy.critChance) {
    enemyDamage = enemyAttack * enemy.crit;
  } else enemyDamage = enemyAttack;

  const enemyOutput = document.createElement("p");
  enemyOutput.classList.add(".logItem");
  enemyOutput.innerHTML =
    enemyDamage > 0
      ? `<p>You take
  ${enemyDamage} damage.</p>`
      : `<p>${enemy.name} misses!</p>`;

  log.prepend(enemyOutput);

  playerHP(enemyDamage);
}

function inventorySwitchScreen(weapon) {
  const newItemContainer = document.createElement("div");
  newItemContainer.classList.add("weaponCard", "btn");
  inventorySwitch.append(newItemContainer);

  newItemContainer.innerHTML = `<div class="weaponDescription"></div>`;

  const itemDescription = newItemContainer.firstElementChild;
  itemDescription.setAttribute("data-object", weapon.obj);

  itemDescription.innerHTML = `<strong>${weapon.name} lv:${weapon.level}</strong><p>Damage: ${weapon.minDmg}-${weapon.maxDmg}</p><p>Critical: x${weapon.crit}</p>`;
}

function inventoryShopScreen(weapon) {
  const newItemContainer = document.createElement("div");
  newItemContainer.classList.add("weaponCard", "btn");
  inventoryShop.append(newItemContainer);

  newItemContainer.innerHTML = `<div class="weaponDescription"></div>`;

  const itemDescription = newItemContainer.firstElementChild;
  itemDescription.setAttribute("data-object", weapon.obj);

  itemDescription.innerHTML = `<strong>${weapon.name} lv:${weapon.level}</strong><p>cost: ${weapon.minDmg}-${weapon.maxDmg}</p><p>Cost: x${weapon.cost}</p>`;
}

allWeapons.forEach((w) => inventorySwitchScreen(w));
allWeapons.forEach((w) => inventoryShopScreen(w));

function monsterHP() {
  enemyCurrentHP = enemyCurrentHP - playerDamage;
  // enemyHPBar.innerHTML = `<p absolute>${enemyCurrentHP}/${enemyMaxHP}</p>`;
  // const monsterHPText = document.createElement("p");
  // monsterHPText.classList.add("absolute");
  fillEnemy.innerHTML = `<p style="position:absolute">${enemyCurrentHP}/${enemyMaxHP}</p>`;
  // fillEnemy.append(monsterHPText);
  fillEnemy.style.width = `${(enemyCurrentHP / enemyMaxHP) * 100}%`;
  monsterName.classList.add("flash");
  setTimeout(function () {
    monsterName.classList.remove("flash");
  }, 200);
}

function addGold(enemy) {
  gold = gold + enemy.gold;
  playerGold.innerHTML = `Gold: ${gold}`;
  hppots.quantity = hppots.quantity + sm;
  hppotm.quantity = hppotm.quantity + md;
  hppotl.quantity = hppotl.quantity + lg;
  updatePotions();
  // turnGreen();
}

// function turnGreen() {
//   allWeapons.forEach((w) => {
//     const available = document.querySelector(`[data-object="${w.obj}shop"]`);
//     if (gold >= w.cost) {
//       available.classList.add("buy");
//     } else if (gold < w.cost) {
//       available.classList.remove("buy");
//     }
//   });
// }

function updatePotions() {
  smallPot.innerHTML = `<strong>${hppots.name}</strong><p>Heal: ${hppots.heal}</p><p>Amount: ${hppots.quantity}</p>`;
  medPot.innerHTML = `<strong>${hppotm.name}</strong><p>Heal: ${hppotm.heal}</p><p>Amount: ${hppotm.quantity}</p>`;
  lrgPot.innerHTML = `<strong>${hppotl.name}</strong><p>Heal: ${hppotl.heal}</p><p>Amount: ${hppotl.quantity}</p>`;
}

inventorySwitch.addEventListener("click", function (e) {
  const useClick = e.target.closest(".weaponDescription");
  if (!useClick) return;
  let weaponObj = useClick.getAttribute("data-object");
  equippedWeapon = eval(weaponObj);
  eWeapon.innerHTML = `<p>${equippedWeapon.name}</p>`;
});

function playerAttack() {
  if (enemyCurrentHP >= 0 && playerCurrentHP > 0) {
    roll(equippedWeapon);
    monsterHP();
    underload();
  }
  if (enemyCurrentHP <= 0) {
    output.innerHTML = `<p>${playerDamage} damage! Victory!!</p>`;
    addGold(enemy);
    chooseMonster();
  }
}

const food = document.querySelector(".btnF");
food.addEventListener("click", useFood);

function useFood() {
  if (
    playerCurrentHP < playerMaxHP &&
    hppots.quantity > 0 &&
    playerCurrentHP > 0
  ) {
    // for (let i = 0; i < 1; i++) {
    playerCurrentHP = playerCurrentHP + hppots.heal;
    fillPlayer.innerHTML = `<p class="absolute">${playerCurrentHP}/${playerMaxHP}</p>`;
    fillPlayer.style.height = `${(playerCurrentHP / playerMaxHP) * 100}%`;
    hppots.quantity -= 1;
    updatePotions();
    overload();
  }
  // }
}

const potion = document.querySelector(".btnP");
potion.addEventListener("click", usePotion);

function usePotion() {
  console.log("Potion");
  if (
    playerCurrentHP < playerMaxHP &&
    hppotm.quantity > 0 &&
    playerCurrentHP > 0
  ) {
    // for (let i = 0; i < 1; i++) {
    playerCurrentHP = playerCurrentHP + hppotm.heal;
    fillPlayer.innerHTML = `<p class="absolute">${playerCurrentHP}/${playerMaxHP}</p>`;
    fillPlayer.style.height = `${(playerCurrentHP / playerMaxHP) * 100}%`;
    hppotm.quantity -= 1;
    updatePotions();
    overload();
  }
  // }
}

const elixer = document.querySelector(".btnE");
elixer.addEventListener("click", useElixer);

function useElixer() {
  // for (let i = 0; i < 1; i++) {
  if (hppotl.quantity > 0 && playerCurrentHP > 0) {
    playerMaxHP = playerMaxHP + hppotl.heal;
    fillPlayer.innerHTML = `<p class="absolute">${playerCurrentHP}/${playerMaxHP}</p>`;
    fillPlayer.style.height = `${(playerCurrentHP / playerMaxHP) * 100}%`;
    hppotl.quantity -= 1;
    updatePotions();
  }
  // }
}

// inventoryShop.addEventListener("click", function (e) {
//   const shopClick = e.target.closest(".weaponShop");
//   if (!shopClick) return;
//   let weaponObj = shopClick.getAttribute("data-object");
//   console.log(weaponObj);
//   equippedWeapon = eval(weaponObj.slice(0, -4));
//   console.log(weaponObj);
//   if (equippedWeapon.type === "weapon" && gold >= equippedWeapon.cost) {
//     equippedWeapon.level++;
//     gold = gold - equippedWeapon.cost;
//     playerGold.innerHTML = `Gold: ${gold}`;
//     equippedWeapon.cost = Math.floor(
//       equippedWeapon.cost + equippedWeapon.cost / 2
//     );
//     equippedWeapon.maxDmg = equippedWeapon.maxDmg + equippedWeapon.minDmg;

//     shopClick.innerHTML = `<p>Upgrade: ${equippedWeapon.cost}g</p>`;
//     const theDesc = shopClick.previousElementSibling;
//     console.log(theDesc);
//     theDesc.innerHTML = `<strong>${equippedWeapon.name} Lv: ${equippedWeapon.level}</strong><p>Damage: ${equippedWeapon.minDmg}-${equippedWeapon.maxDmg}</p><p>Critical: x${equippedWeapon.crit}</p>`;
//   }

//   if (equippedWeapon.type === "potion") {
//     // itemShops.innerHTML = "Use All";
//     usePotion(equippedWeapon.quantity);
//     console.log(equippedWeapon.quantity);
//   }
//   if (equippedWeapon.type === "life") {
//     // itemShops.innerHTML = "Use All";
//     useElixer(equippedWeapon.quantity);
//     console.log(equippedWeapon.quantity);
//   }
//   turnGreen();
//   overload();
// });

////////////////////////////////////////
////////////////Monster/////////////////

const spawn = function (enemy) {
  const monsterName = document.querySelector(".monsterName");

  // monsterName.innerHTML = ``;
  monsterName.innerHTML = `<h1><strong>${enemy.name}</strong></h1>`;
  monsterBlock.append(monsterName);
  fillEnemy.style.backgroundColor = "#68e831";

  sm = minMax(0, enemy.sand);
  md = minMax(0, enemy.pot);
  lg = minMax(0, enemy.elix);

  reward.innerHTML = `<p>Reward: ${enemy.gold} gold <br />  ${sm} Sandwishes <br />
  ${md} Potions <br />  ${lg} Elixirs</p>`;

  enemyCurrentHP = enemy.hp;
  enemyMaxHP = enemy.hp;
  // const monsterHPText = document.createElement("p");
  // monsterHPText.classList.add("absolute");
  // fillPlayer.innerHTML = `<p class="absolute">${playerCurrentHP}/${playerMaxHP}</p>`;

  fillEnemy.innerHTML = `<p style="postion:absolute">${enemyCurrentHP}/${enemyMaxHP}</p>`;
  // fillEnemy.append(monsterHPText);
  fillEnemy.style.width = `${(enemyCurrentHP / enemyMaxHP) * 100}%`;
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
  fillPlayer.innerHTML = `<p class="absolute">${playerCurrentHP}/${playerMaxHP}</p>`;
  if (playerCurrentHP > 0) {
    fillPlayer.style.height = `${(playerCurrentHP / playerMaxHP) * 100}%`;
  } else if (playerCurrentHP <= 0) {
    fillPlayer.style.height = `0%`;
    output.innerHTML = `<p>GAME OVER</p>`;
  }
  overload();
}

function mAttack(enemy) {
  const attack = roll(enemy);
  console.log(attack);
  playerHP(attack);
}

function overload() {
  if (playerCurrentHP < playerMaxHP / 4) {
    fillPlayer.style.backgroundColor = "#E83168";
  } else if (
    playerCurrentHP > playerMaxHP / 4 &&
    playerCurrentHP <= playerMaxHP
  ) {
    fillPlayer.style.backgroundColor = "#68e831";
  } else if (playerCurrentHP > playerMaxHP) {
    fillPlayer.style.backgroundColor = "#3168E8";
  }
}

function underload() {
  if (enemyCurrentHP < enemyMaxHP / 4) {
    fillEnemy.style.backgroundColor = "#E83168";
  } else if (enemyCurrentHP > enemyMaxHP / 4 && enemyCurrentHP <= enemyMaxHP) {
    fillEnemy.style.backgroundColor = "#68e831";
  } else if (enemyCurrentHP > enemyMaxHP) {
    fillEnemy.style.backgroundColor = "#3168E8";
  }
}
