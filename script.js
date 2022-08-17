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
  quantity: 2,
  cost: 50,
  obj: "hppotm",
};

const hppotl = {
  name: "Elixir",
  type: "life",
  heal: 100,
  quantity: 1,
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
  currentHp: 50,
  hp: 50,
  maxDmg: 10,
  crit: 1,
  critChance: 20,
  gold: 5,
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
  gold: 15,
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
  gold: 150,
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
  gold: 1500,
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
const backpack = document.querySelector(".backpack");
const reward = document.querySelector(".reward");
const playerHPBar = document.querySelector(".playerHPBar");
const fillPlayer = document.querySelector(".fillPlayer");

const playerGold = document.querySelector(".goldBox");
const monsterBlock = document.querySelector(".monsterBlock");
const monsterName = document.querySelector(".monsterName");
const eWeapon = document.querySelector(".eWeapon");
const log = document.querySelector(".log");
const monsterParty = document.querySelector(".monsters");

let smallPot = "";
let medPot = "";
let lrgPot = "";
let itemDescriptions = document.querySelectorAll(".weaponDescription");
let itemShops = document.querySelectorAll(".weaponShop");
let equippedWeapon = greatsword;
let weaponShopItem = "";
let playerMaxHP = 100;
let playerCurrentHP = playerMaxHP;
let playerDamage = 0;
let enemyDamage = 0;
let gold = 5;
let danger = 0;
let enemy = "";
// let enemyMaxHP = 0;
// let enemyCurrentHP = enemyMaxHP;
let enemyMaxHP = [];
let enemyCurrentHP = [];
let sm = 0;
let md = 0;
let lg = 0;

let monsterTarget = "";

updatePotions();

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
  // btnA.addEventListener("click", playerAttack);
};

panelFunction();

// function playerOutput(monsterType) {
//   const playerOutput = document.createElement("p");
//   playerOutput.classList.add(".logItem");
//   playerOutput.innerHTML =
//     playerDamage > w.maxDmg
//       ? `<p>Critical Hit! ${monsterType} takes ${playerDamage} damage.</p><br>`
//       : `<p>${monsterType} takes ${playerDamage} damage.</p><br>`;

//   log.prepend(playerOutput);
// }

function roll(w, monsterType) {
  const enemy = eval(monsterType);
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
      ? `<p>Critical Hit! ${monsterType} takes ${playerDamage} damage.</p><br>`
      : `<p>${monsterType} takes ${playerDamage} damage.</p><br>`;

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
      : `<p>${monsterType} misses!</p>`;

  log.prepend(enemyOutput);

  playerHP(enemyDamage);
}

function inventorySwitchScreen(weapon) {
  const newItemContainer = document.createElement("div");
  newItemContainer.classList.add("weaponCard", "card");
  inventorySwitch.append(newItemContainer);
  newItemContainer.innerHTML = "";
  newItemContainer.innerHTML = `<div class="weaponDescription weapons"></div>`;

  const itemDescription = newItemContainer.firstElementChild;
  itemDescription.setAttribute("data-object", weapon.obj);

  itemDescription.innerHTML = `<strong>${weapon.name} lv:${weapon.level}</strong><p>Damage: ${weapon.minDmg}-${weapon.maxDmg}</p><p>Critical: x${weapon.crit}</p>`;
}

function inventoryShopScreen(weapon) {
  const newItemContainer = document.createElement("div");
  newItemContainer.classList.add("weaponCard", "card");
  inventoryShop.append(newItemContainer);

  newItemContainer.innerHTML = `<div class="weaponDescription items"></div>`;

  const itemDescription = newItemContainer.firstElementChild;
  itemDescription.setAttribute("data-object", weapon.obj);

  itemDescription.innerHTML = `<strong>${weapon.name}</strong><p>Level:${weapon.level}</p><p>cost: ${weapon.cost}</p>`;
}

allWeapons.forEach((w) => inventorySwitchScreen(w));
allWeapons.forEach((w) => inventoryShopScreen(w));

function addGold(amount) {
  gold = gold + amount;
  // playerGold.innerHTML = `<p>Gold: ${gold}</p>`;
  hppots.quantity = hppots.quantity + sm;
  hppotm.quantity = hppotm.quantity + md;
  hppotl.quantity = hppotl.quantity + lg;

  const potionReward = document.createElement("p");
  potionReward.classList.add(".logItem");
  potionReward.innerHTML = `<p>Reward:</p><p>+${gold}g,</p><p>+${sm} Food,</p><p>+${md} Potions,</p><p>+${lg} Elixers</p><br>
  `;
  log.prepend(potionReward);
  updatePotions();
  // turnGreen();
}

const btn = document.querySelectorAll(".btn");

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
  backpack.innerHTML = `<p>Food: ${hppots.quantity}</p>
  <p>Potions: ${hppotm.quantity}</p>
  <p>Elixers: ${hppotl.quantity}</p><p>Gold: ${gold}</p>`;
  // smallPot.innerHTML = `<strong>${hppots.name}</strong><p>Heal: ${hppots.heal}</p><p>Amount: ${hppots.quantity}</p>`;
  // medPot.innerHTML = `<strong>${hppotm.name}</strong><p>Heal: ${hppotm.heal}</p><p>Amount: ${hppotm.quantity}</p>`;
  // lrgPot.innerHTML = `<strong>${hppotl.name}</strong><p>Heal: ${hppotl.heal}</p><p>Amount: ${hppotl.quantity}</p>`;
}

inventorySwitch.addEventListener("click", function (e) {
  const useClick = e.target.closest(".weaponCard");
  if (!useClick) return;
  let weaponObj = useClick.firstElementChild.getAttribute("data-object");
  equippedWeapon = eval(weaponObj);
  eWeapon.innerHTML = `<p>${equippedWeapon.name}</p>`;
});

function reduceHealth(e, i) {
  // console.log(enemyCurrentHP[i]);
  // if (enemyCurrentHP[i] >= 0 && playerCurrentHP > 0) {
  //   roll(equippedWeapon);
  //   console.log("roll");
  //   monsterHP();
  // }
  if (enemyCurrentHP[i] <= 0) {
    // output.innerHTML = `<p>${playerDamage} damage! Victory!!</p>`;
    console.log(`killed the monster ${e.name}`);
    addGold(e.gold);
    // enemyParty.splice(i, 1);
    // enemyCurrentHP.splice(i, 1);
    // enemyMaxHP.splice(i, 1);
    const deadMonster = document.querySelector(`.monster${i}`);
    console.log(deadMonster);
    deadMonster.remove();
    // multiMonster();
  }
}

// function playerAttack() {
//   const target = minMax(0, enemyParty.length - 1);

//   // target needs to be any array value over 0.it is targeting dead monsters

//   console.log(target);
//   console.log(enemyCurrentHP[target]);
//   if (enemyCurrentHP[target] >= 0 && playerCurrentHP > 0) {
//     roll(equippedWeapon);
//     console.log("roll");
//     monsterHP(target);
//     enemyParty.forEach((e, i) => reduceHealth(e, i));
//   }
//   if (monsterParty.childNodes.length === 0) {
//     console.log("all dead");
//     enemyParty = [];
//     enemyCurrentHP = [];
//     enemyMaxHP = [];
//     multiMonster();
//   }
// }

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
    overload();
  }
  // }
}

inventoryShop.addEventListener("click", function (e) {
  const shopClick = e.target.closest(".weaponCard");
  console.log(shopClick);
  if (!shopClick) return;
  let weaponObj = shopClick.firstElementChild.getAttribute("data-object");
  console.log(weaponObj);
  weaponShopItem = eval(weaponObj);
  console.log(weaponShopItem);
  if (gold >= weaponShopItem.cost) {
    weaponShopItem.level++;
    gold = gold - weaponShopItem.cost;
    updatePotions();
    weaponShopItem.cost = Math.floor(
      weaponShopItem.cost + weaponShopItem.cost / 2
    );
    weaponShopItem.maxDmg = weaponShopItem.maxDmg + weaponShopItem.minDmg;

    shopClick.firstElementChild.innerHTML = `<strong>${weaponShopItem.name}</strong><p>Level:${weaponShopItem.level}</p><p>cost: ${weaponShopItem.cost}</p>`;
    inventorySwitch.innerHTML = "";

    allWeapons.forEach((w) => inventorySwitchScreen(w));
    // const theDesc = shopClick.previousElementSibling;
    // console.log(theDesc);
    // theDesc.innerHTML = `<strong>${equippedWeapon.name} Lv: ${equippedWeapon.level}</strong><p>Damage: ${equippedWeapon.minDmg}-${equippedWeapon.maxDmg}</p><p>Critical: x${equippedWeapon.crit}</p>`;
  }
});

monsterParty.addEventListener("click", function (e) {
  const clickedMonster = e.target.closest(".monsterBlock");
  console.log(clickedMonster);
  if (!clickedMonster) return;
  monsterTarget = clickedMonster;
  let monsterData = clickedMonster.getAttribute("data-object");
  console.log(monsterData);
  let monsterNumber = monsterData.slice(-1);
  console.log(monsterNumber);
  let monsterType = monsterData.slice(0, -2).toLowerCase();
  console.log(monsterType);

  if (enemyCurrentHP[monsterNumber] >= 0 && playerCurrentHP > 0) {
    roll(equippedWeapon, monsterType);
    console.log("roll");
    monsterHP(monsterNumber);
  }

  if (enemyCurrentHP[monsterNumber] <= 0) {
    console.log("dead");
    clickedMonster.remove();
    enemyCurrentHP[monsterNumber] = 0;
  }

  let allDead = enemyCurrentHP.every((v) => v === 0);

  if (allDead === true) {
    enemyParty = [];
    enemyCurrentHP = [];
    enemyMaxHP = [];

    addGold(eval(monsterType).gold);

    multiMonster();
  }
});

const spawn = function (rollMonster, i) {
  if (enemy === 0) return;
  // const newItemContainer = document.createElement("div");
  // newItemContainer.classList.add("weaponCard", "btn");
  // inventoryShop.append(newItemContainer);

  // newItemContainer.innerHTML = `<div class="weaponDescription items"></div>`;

  // const itemDescription = newItemContainer.firstElementChild;
  // itemDescription.setAttribute("data-object", weapon.obj);

  // itemDescription.innerHTML = `<strong>${weapon.name}</strong><p>Level:${weapon.level}</p><p>cost: ${weapon.cost}</p>`;

  rollMonster.ID = i;
  const newMonster = document.createElement("div");
  newMonster.classList.add("monsterBlock", `monster${i}`);
  monsterParty.append(newMonster);

  newMonster.innerHTML = `
  <div class="monsterName">
    <h1>Monster</h1>
    <div class="output"></div>
  </div>
  
  <div class="enemyHPBar">
    <div class="number"></div>
    <div class="fillEnemyBackground">
      <div class="fillEnemy"></div>
    </div>
  </div>
  
  `;
  const monsterName = newMonster.firstElementChild;

  monsterName.innerHTML = `<h1><strong>${
    enemy.name
  }</strong></h1><h2><strong>${String.fromCharCode(i + 1 + 64)}</strong></h2>`;

  let monsterData = `${enemy.name} ${i}`;

  newMonster.setAttribute("data-object", monsterData);

  const enemyHPBar = newMonster.lastElementChild;
  const fillEnemyBackground = enemyHPBar.lastElementChild;
  const fillEnemy = fillEnemyBackground.lastElementChild;
  const number = enemyHPBar.firstElementChild;

  newMonster.classList.add("bounce-in");
  console.log(rollMonster);
  if (rollMonster.name === "Goblin") {
    newMonster.style.background =
      "linear-gradient(180deg, rgba(170,170,100,1) 25%, rgba(61,95,55,1) 80%)";
  }

  if (rollMonster.name === "Orc") {
    newMonster.style.background =
      "linear-gradient(180deg,  rgba(200,182,169,1)25%, rgba(116,114,135,1) 80%)";
  }

  if (rollMonster.name === "Ogre") {
    newMonster.style.background =
      "linear-gradient(180deg, rgba(197,169,129,1) 25%, rgba(148,83,61,1) 80%)";
  }

  if (rollMonster.name === "Giant") {
    newMonster.style.background =
      "linear-gradient(180deg, rgba(89,133,161,1) 25%, rgba(54,90,122,1) 80%)";
  }

  if (rollMonster.name === "Dragon") {
    newMonster.style.background =
      "linear-gradient(180deg, rgba(98,36,27,1) 25%, rgba(76,48,46,1) 80%)";
  }

  // newMonster.style.transform = `translateX(0px)`;

  sm = sm + minMax(0, enemy.sand);
  md = md + minMax(0, enemy.pot);
  lg = lg + minMax(0, enemy.elix);

  enemyCurrentHP.push(enemy.hp);
  enemyMaxHP.push(enemy.hp);

  number.innerHTML = `<p>${enemyCurrentHP[i]}/${enemyMaxHP[i]}</p>`;

  fillEnemy.style.width = `${(enemyCurrentHP[i] / enemyMaxHP[i]) * 100}%`;
};

function chooseMonster(range) {
  if (range > 10000) {
    danger = danger - 10000;
    enemy = dragon;
  } else if (range > 1000 && range <= 10000) {
    danger = danger - 1000;
    enemy = giant;
  } else if (range > 100 && range <= 1000) {
    danger = danger - 100;
    enemy = ogre;
  } else if (range > 10 && range <= 100) {
    danger = danger - 10;
    enemy = orc;
  } else if (range > 1 && range <= 10) {
    danger = danger - 10;
    enemy = goblin;
  } else if (range === 0) enemy = 0;

  return enemy;
}

let enemyParty = [];

// chooseMonster();

function playerHP(attack) {
  playerCurrentHP = playerCurrentHP - attack;
  fillPlayer.innerHTML = `<p class="absolute">${playerCurrentHP}/${playerMaxHP}</p>`;
  if (playerCurrentHP > 0) {
    fillPlayer.style.height = `${(playerCurrentHP / playerMaxHP) * 100}%`;
  } else if (playerCurrentHP <= 0) {
    fillPlayer.style.height = `0%`;
    log.prepend(`GAME OVER`);
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

function multiMonster() {
  danger = gold + 2;
  const party = minMax(1, 12);
  for (let i = 0; i < party; i++) {
    console.log(danger);
    if (danger < 0) break;
    // rollMonster.ID = i;
    const rollMonster = { ...chooseMonster(danger) };
    enemyParty.push(rollMonster);
    spawn(rollMonster, i);
  }
  // const random = minMax(1, danger);
  // for (let i = danger; i < 0; i - random) {
  //   console.log(rollMonster);
  // }
  // enemyParty.forEach(function (m, i) {
  //   spawn(m, i);
  // });
}

multiMonster();

function monsterHP(target) {
  enemyCurrentHP[target] = enemyCurrentHP[target] - playerDamage;
  console.log(enemyCurrentHP[target]);

  // const monsterTarget = document.querySelector(`.monster${target}`);

  monsterTarget.lastElementChild.firstElementChild.innerHTML = `<p style="position:absoluteEnemy">${enemyCurrentHP[target]}/${enemyMaxHP[target]}</p>`;
  monsterTarget.lastElementChild.lastElementChild.lastElementChild.style.width = `${
    (enemyCurrentHP[target] / enemyMaxHP[target]) * 100
  }%`;

  // fillEnemy.forEach((e, i) => updateEnemyHealth(e, i));

  // fillEnemy.innerHTML = `<p style="postion:absolute">${enemyCurrentHP[i]}/${enemyMaxHP[i]}</p>`;

  // fillEnemy.style.width = `${(enemyCurrentHP[i] / enemyMaxHP[i]) * 100}%`;

  // querySelectorAll is not working!!

  // monsterName.classList.add("flash");
  // setTimeout(function () {
  //   monsterName.classList.remove("flash");
  // }, 200);
}

// function monsterHP() {
//   enemy.currentHp = enemy.currentHp - playerDamage;
// }

const enemyHPBar = document.querySelectorAll(".enemyHPBar");
const fillEnemy = document.querySelectorAll(".fillEnemy");

const number = document.querySelectorAll(".number");

// querySelector has to happen after the element it is searching for is created. Otherwise it is null.
