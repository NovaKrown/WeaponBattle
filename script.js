// WEAPONS

const morningstar = {
  name: "Morning Star",
  type: "weapon",
  minDmg: 6,
  maxDmg: 8,
  crit: 2,
  critChance: 20,
  cost: 8,
  purchased: false,
  level: 1,
  obj: "morningstar",
};

const spear = {
  name: "Spear",
  type: "weapon",
  minDmg: 4,
  maxDmg: 8,
  crit: 3,
  critChance: 20,
  cost: 2,
  purchased: true,
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
  purchased: true,
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
  purchased: false,
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
  purchased: false,
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
  purchased: false,
  level: 1,
  obj: "greatsword",
};

const scythe = {
  name: "Scythe",
  type: "weapon",
  minDmg: 6,
  maxDmg: 8,
  crit: 4,
  critChance: 18,
  cost: 18,
  purchased: false,
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
  cost: 40,
  purchased: false,
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
  purchased: false,
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
  dead: 0,
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
  dead: 0,
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
  dead: 0,
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
  dead: 0,
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
  dead: 0,
  obj: "dragon",
};

const rats = {
  name: "Rats",
  level: 1,
  hp: 2,
  maxDmg: 0,
  crit: 1,
  critChance: 20,
  gold: 0,
  sand: 0,
  pot: 0,
  elix: 0,
  dead: 0,
  obj: "rats",
};

const panther = {
  name: "Panther",
  level: 1,
  hp: 800,
  maxDmg: 160,
  crit: 3,
  critChance: 20,
  gold: 150000,
  sand: 100,
  pot: 50,
  elix: 15,
  dead: 0,
  obj: "panther",
};

const monsterKills = {
  goblin: 0,
  orc: 0,
  ogre: 0,
  giant: 0,
  dragon: 0,
};

const monsterArray = [goblin, orc, ogre, giant, dragon, rats, panther];
// const inventory = document.querySelector(".inventory");
const inventoryShop = document.querySelector(".shop");
const inventorySwitch = document.querySelector(".switch");
// const monsterAttack = document.querySelector(".monsterAttack");
const backpack = document.querySelector(".backpack");
const reward = document.querySelector(".reward");
const playerHPBar = document.querySelector(".playerHPBar");
const fillPlayer = document.querySelector(".fillPlayer");
const playerGold = document.querySelector(".goldBox");

const monsterName = document.querySelector(".monsterName");
const eWeapon = document.querySelector(".eWeapon");
const log = document.querySelector(".log");
const monsterParty = document.querySelector(".monsters");
const quest = document.querySelector(".quest");
const questItems = document.querySelector(".questItems");

let smallPot = "";
let medPot = "";
let lrgPot = "";
let itemDescriptions = document.querySelectorAll(".weaponDescription");
let itemShops = document.querySelectorAll(".weaponShop");
let equippedWeapon = shortsword;
let weaponShopItem = "";
let playerMaxHP = 100;
let playerCurrentHP = playerMaxHP;
let playerDamage = 0;
let enemyDamage = 0;
let gold = 150;
let goldAcc = 0;
let danger = 0;
let enemy = "";
// let enemyMaxHP = 0;
// let enemyCurrentHP = enemyMaxHP;
let enemyMaxHP = [];
let enemyCurrentHP = [];
let sm = 0;
let md = 0;
let lg = 0;
let cat = false;

let monsterTarget = "";
let go = true;
let doorKey = false;
let sideways = false;

updatePotions();

// function calcPlayHP() {
//   fillPlayer.innerHTML = `<p class="absolute">100/100</p>`;
// }

// calcPlayHP();

function minMax(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//panel code//

const panelFunction = function () {
  const panels = document.querySelectorAll(".panel");
  const btnU = document.querySelector(".btnU");
  const btnW = document.querySelector(".btnW");
  const btnH = document.querySelector(".btnH");
  const btnS = document.querySelector(".btnS");

  const goToPanel = function (panel) {
    panels.forEach((p, i) => {
      p.style.transform = `translateX(${100 * (i - panel)}%)`;
    });
  };

  const sPanel = function () {
    goToPanel(0);
    inventoryShop.innerHTML = "";
    allWeapons.forEach((w) => inventoryShopScreen(w));
  };

  this.wPanel = function () {
    goToPanel(2);
    inventorySwitch.innerHTML = "";
    allWeapons.forEach((w) => inventorySwitchScreen(w));
  };

  this.battlePanel = function () {
    goToPanel(1);
  };

  this.questPanel = function () {
    goToPanel(3);
  };

  const init = function () {
    goToPanel(1);
  };
  init();

  btnU.addEventListener("click", sPanel);
  btnW.addEventListener("click", wPanel);
  btnH.addEventListener("click", battlePanel);
  // btnS.addEventListener("click", questPanel);
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
      ? `<p>Critical Hit! ${monsterType} takes ${playerDamage} ${equippedWeapon.name} damage.</p><br>`
      : `<p>The ${monsterType} takes ${playerDamage} ${equippedWeapon.name} damage.</p><br>`;

  log.prepend(playerOutput);

  let enemyAttack = minMax(0, enemy.maxDmg);
  let enemyCrit = minMax(1, enemy.critChance);
  if (enemyCrit >= enemy.critChance) {
    enemyDamage = enemyAttack * enemy.crit;
  } else enemyDamage = enemyAttack;

  const enemyOutput = document.createElement("p");
  enemyOutput.classList.add(".logItem");
  if (enemy != rats) {
    enemyOutput.innerHTML =
      enemyDamage > 0
        ? `<p>You take
  ${enemyDamage} damage.</p>`
        : `<p>The ${monsterType} misses!</p>`;
  } else if (enemy === rats) {
    enemyOutput.innerHTML = `<p>The ${monsterType} devour your rations!</p>`;
    hppots.quantity = Math.abs(Math.floor(hppots.quantity / 12));
    console.log(`ration quantity ${hppots.quantity}`);
    updatePotions();
  }

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

  if (weapon.purchased) {
    itemDescription.innerHTML = `<strong style="text-decoration: underline">${weapon.name}</strong><p>Level:${weapon.level}</p><p>Damage: ${weapon.minDmg}-${weapon.maxDmg}</p><p>Critical: x${weapon.crit}</p>`;
  }

  if (weapon === equippedWeapon) {
    newItemContainer.classList.add("highlight");
  }
}

function inventoryShopScreen(weapon) {
  const newItemContainer = document.createElement("div");
  newItemContainer.classList.add("weaponCard", "card");
  inventoryShop.append(newItemContainer);

  newItemContainer.innerHTML = `<div class="weaponDescription items"></div>`;

  const itemDescription = newItemContainer.firstElementChild;
  itemDescription.setAttribute("data-object", weapon.obj);

  if (weapon.purchased) {
    itemDescription.innerHTML = `<strong style="text-decoration: underline">${weapon.name}</strong><p>Level:${weapon.level}</p><p>Upgrade: ${weapon.cost}g</p>`;
  } else if (!weapon.purchased) {
    itemDescription.innerHTML = `<strong style="text-decoration: underline">${weapon.name}</strong><p>Unlock: ${weapon.cost}g</p>`;
  }
}

allWeapons.forEach((w) => inventorySwitchScreen(w));
allWeapons.forEach((w) => inventoryShopScreen(w));

function addGold(amount) {
  gold = gold + goldAcc;
  // playerGold.innerHTML = `<p>Gold: ${gold}</p>`;

  goldAcc = 0;
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
  backpack.innerHTML = `<p>Rations: ${hppots.quantity}</p>
  <p>Potions: ${hppotm.quantity}</p>
  <p>Elixers: ${hppotl.quantity}</p><p>Gold: ${gold}</p>`;
}

function addPotions() {
  hppots.quantity = hppots.quantity + sm;
  hppotm.quantity = hppotm.quantity + md;
  hppotl.quantity = hppotl.quantity + lg;

  const potionReward = document.createElement("p");
  potionReward.classList.add(".logItem");
  potionReward.innerHTML = `<p>Reward:</p><p>+${goldAcc}g,</p><p>+${sm} Rations,</p><p>+${md} Potions,</p><p>+${lg} Elixers</p><br>
  `;
  log.prepend(potionReward);
  sm = 0;
  md = 0;
  lg = 0;
  updatePotions();
}

inventorySwitch.addEventListener("click", function (e) {
  const useClick = e.target.closest(".weaponCard");
  if (!useClick) return;
  let weaponObj = useClick.firstElementChild.getAttribute("data-object");

  const purchaseTest = eval(weaponObj);

  if (purchaseTest.purchased) {
    equippedWeapon = eval(weaponObj);
    eWeapon.innerHTML = `<p>${equippedWeapon.name}</p>`;
    const allWeapons = document.querySelectorAll(".weaponCard");
    allWeapons.forEach((w) => w.classList.remove("highlight"));
    useClick.classList.add("highlight");
  }
});

inventorySwitch.children[2].classList.add("highlight");

// function reduceHealth(e, i) {
//   // console.log(enemyCurrentHP[i]);
//   // if (enemyCurrentHP[i] >= 0 && playerCurrentHP > 0) {
//   //   roll(equippedWeapon);
//   //   console.log("roll");
//   //   monsterHP();
//   // }
//   if (enemyCurrentHP[i] <= 0) {
//     // output.innerHTML = `<p>${playerDamage} damage! Victory!!</p>`;
//     addGold(e.gold);
//     // enemyParty.splice(i, 1);
//     // enemyCurrentHP.splice(i, 1);
//     // enemyMaxHP.splice(i, 1);
//     const deadMonster = document.querySelector(`.monster${i}`);
//     deadMonster.remove();
//     // multiMonster();
//   }
// }

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

const rations = document.querySelector(".btnF");
rations.addEventListener("click", useRations);

function useRations() {
  console.log("rations");
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
  if (!shopClick) return;
  let weaponObj = shopClick.firstElementChild.getAttribute("data-object");
  weaponShopItem = eval(weaponObj);

  if (gold >= weaponShopItem.cost && weaponShopItem.purchased === false) {
    weaponShopItem.purchased = true;
    gold = gold - weaponShopItem.cost;
    updatePotions();
    inventoryShop.innerHTML = "";
    allWeapons.forEach((w) => inventoryShopScreen(w));
  } else if (gold >= weaponShopItem.cost && weaponShopItem.purchased === true) {
    weaponShopItem.level++;
    gold = gold - weaponShopItem.cost;
    updatePotions();
    weaponShopItem.cost = Math.floor(
      weaponShopItem.cost + weaponShopItem.cost / 2
    );
    weaponShopItem.maxDmg = weaponShopItem.maxDmg + weaponShopItem.minDmg;

    // shopClick.firstElementChild.innerHTML = `<strong>${weaponShopItem.name}</strong><p>Level:${weaponShopItem.level}</p><p>Upgrade: ${weaponShopItem.cost}g</p>`;

    inventoryShop.innerHTML = "";
    allWeapons.forEach((w) => inventoryShopScreen(w));

    // inventorySwitch.innerHTML = "";
    // allWeapons.forEach((w) => inventorySwitchScreen(w));
    // const theDesc = shopClick.previousElementSibling;
    // console.log(theDesc);
    // theDesc.innerHTML = `<strong>${equippedWeapon.name} Lv: ${equippedWeapon.level}</strong><p>Damage: ${equippedWeapon.minDmg}-${equippedWeapon.maxDmg}</p><p>Critical: x${equippedWeapon.crit}</p>`;
  }
});

function initMonsterClick() {
  monsterParty.addEventListener("click", function (e) {
    const clickedMonster = e.target.closest(".monsterBlock");
    if (!clickedMonster) return;
    if (go === true) {
      monsterTarget = clickedMonster;
      let monsterData = clickedMonster.getAttribute("data-object");
      let monsterNumber = monsterData.slice(-2).replace(" ", "");
      let monsterType = monsterData.slice(0, -2).toLowerCase();

      if (enemyCurrentHP[monsterNumber] >= 0 && playerCurrentHP > 0) {
        roll(equippedWeapon, monsterType);
        monsterHP(monsterNumber);
        const splash = clickedMonster.children[0];
        splash.classList.remove("hidden");
        splash.classList.remove("slide-up");
        void splash.offsetWidth;
        splash.classList.add("slide-up");
        splash.innerHTML = `<h1>${playerDamage}</h1>`;
      }

      if (enemyCurrentHP[monsterNumber] <= 0) {
        if (monsterType === "orc") {
          orc.dead = orc.dead + 1;
        }

        const random4 = minMax(1, 4);
        let deathMessages = ["OoF!!", "Ouch!", "Bonk!", "RIP", "Waaaaaaa!"];
        let splash = clickedMonster.children[0];

        if (orc.dead >= 5 && doorKey === false) {
          doorKey = true;
          splash.classList.remove("hidden");
          splash.classList.remove("slide-up");
          void splash.offsetWidth;
          splash.classList.add("slide-up");
          splash.innerHTML = `<h1>Key!</h1>`;
          const keyImg = document.createElement("p");
          keyImg.innerHTML = `<img src="key.png" width="8%">`;
          questItems.append(keyImg);
        } else {
          splash.classList.remove("hidden");
          splash.classList.remove("slide-up");
          void splash.offsetWidth;
          splash.classList.add("slide-up");
          splash.innerHTML = `<h1>${deathMessages[random4]}</h1>`;
        }

        go = false;

        setTimeout(remove, 500);

        function remove() {
          clickedMonster.remove();
          console.log(`monsterNumber ${monsterNumber}`);
          enemyCurrentHP[monsterNumber] = 0;

          go = true;

          let allDead = enemyCurrentHP.every((v) => v === 0);

          if (allDead === true) {
            enemyParty = [];
            enemyCurrentHP = [];
            enemyMaxHP = [];

            addPotions();
            multiMonster();
            addGold();
          }
        }
      }
    }
  });
}

initMonsterClick();

const spawn = function (rollMonster, i) {
  if (enemy === 0) return;
  // const newItemContainer = document.createElement("div");
  // newItemContainer.classList.add("weaponCard", "btn");
  // inventoryShop.append(newItemContainer);

  // newItemContainer.innerHTML = `<div class="weaponDescription items"></div>`;

  // const itemDescription = newItemContainer.firstElementChild;
  // itemDescription.setAttribute("data-object", weapon.obj);

  // itemDescription.innerHTML = `<strong>${weapon.name}</strong><p>Level:${weapon.level}</p><p>cost: ${weapon.cost}</p>`;

  // BUG: Monster A-G when not the same type
  rollMonster.ID = i;

  const newMonster = document.createElement("div");
  newMonster.classList.add("monsterBlock", `monster${i}`);
  monsterParty.append(newMonster);

  newMonster.innerHTML = `
  <div class='output hidden'></div>
  <div class="monsterName">
    <h1>Monster</h1>
    
  </div>
  
  <div class="enemyHPBar">
    <div class="number"></div>
    <div class="fillEnemyBackground">
      <div class="fillEnemy"></div>
    </div>
  </div>
  
  `;

  if (sideways === true) {
    newMonster.classList.add("rotate");
  }

  const monsterName = newMonster.children[1];

  monsterName.innerHTML = `<h1><strong>${
    enemy.name
  }</strong></h1><h2><strong>${String.fromCharCode(i + 1 + 64)}</strong></h2>`;

  let monsterData = `${enemy.name} ${i}`;

  newMonster.setAttribute("data-object", monsterData);

  const enemyHPBar = newMonster.children[2];
  const fillEnemyBackground = enemyHPBar.children[1];
  const fillEnemy = fillEnemyBackground.lastElementChild;
  const number = enemyHPBar.children[0];

  newMonster.classList.add("bounce-in");
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

  if (rollMonster.name === "Rats") {
    newMonster.style.background =
      "linear-gradient(180deg, rgba(221, 215, 214, 1) 25%, rgba(97, 95, 94, 1) 80%)";
  }

  if (rollMonster.name === "Panther") {
    newMonster.style.background =
      "linear-gradient(180deg, rgba(46, 50, 71, 1) 25%, rgba(15, 22, 25, 1) 80%)";
  }

  // newMonster.style.transform = `translateX(0px)`;

  sm = sm + minMax(0, enemy.sand);
  md = md + minMax(0, enemy.pot);
  lg = lg + minMax(0, enemy.elix);
  goldAcc = goldAcc + enemy.gold;

  console.log(`sm ${sm}`);

  enemyCurrentHP.push(enemy.hp);
  enemyMaxHP.push(enemy.hp);

  number.innerHTML = `<p>${enemyCurrentHP[i]}/${enemyMaxHP[i]}</p>`;

  fillEnemy.style.width = `${(enemyCurrentHP[i] / enemyMaxHP[i]) * 100}%`;
};

function chooseMonster(range) {
  if (range > 10000) {
    danger = danger - 50000;
    enemy = dragon;
  } else if (range > 5000 && range <= 50000) {
    danger = danger - 5000;
    enemy = giant;
  } else if (range > 500 && range <= 5000) {
    danger = danger - 500;
    enemy = ogre;
  } else if (range > 50 && range <= 500) {
    danger = danger - 50;
    enemy = orc;
  } else if (range > 1 && range <= 50) {
    danger = danger - 10;
    enemy = goblin;
  } else if (range === 0) enemy = null;

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
    gameOverScreen();
  }
  overload();
}

function mAttack(enemy) {
  const attack = roll(enemy);
  playerHP(attack);
}

function overload() {
  if (playerCurrentHP < playerMaxHP / 4) {
    monsterParty.classList.add("injured");
  } else if (playerCurrentHP > playerMaxHP / 4) {
    monsterParty.classList.remove("injured");
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
  console.log(`danger before ${danger}`);
  danger = Math.abs(gold + 2);
  console.log(`danger after ${danger}`);

  const party = minMax(1, 14);

  if (party <= 12) {
    for (let i = 0; i < party; i++) {
      console.log(`danger ${danger} at iteration ${i}`);
      if (danger <= 0) break;
      // rollMonster.ID = i;
      const rollMonster = { ...chooseMonster(danger) };
      enemyParty.push(rollMonster);
      spawn(rollMonster, i);
    }
  } else if (party === 13 && cat === false) {
    for (let i = 0; i < party - 1; i++) {
      enemyParty.push(rats);
      enemy = rats;
      console.log(i);
      spawn(rats, i);
    }
  } else if (party === 14 && sideways === false) {
    for (let i = 0; i < party - 1; i++) {
      questPanel();
      initiateDoor();
    }
  }

  const goblinTest = (m) => m.name === "Goblin";

  if (enemyParty.some(goblinTest)) {
    console.log("goblin");
    const catOdds = minMax(1, 12);
    console.log(`catOdds ${catOdds}`);
    if (catOdds === 1 && cat == false) {
      initiateCatQuest();
    }
  } else console.log("false");
}

multiMonster();

function monsterHP(target) {
  enemyCurrentHP[target] = enemyCurrentHP[target] - playerDamage;

  // const monsterTarget = document.querySelector(`.monster${target}`);

  monsterTarget.children[2].children[0].innerHTML = `<p style="position:absoluteEnemy">${enemyCurrentHP[target]}/${enemyMaxHP[target]}</p>`;
  monsterTarget.children[2].children[1].children[0].style.width = `${
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
const splash = document.querySelectorAll(".output");

// querySelector has to happen after the element it is searching for is created. Otherwise it is null.

function initiateCatQuest() {
  console.log("cat quest");
  const catQuest = document.createElement("div");

  catQuest.classList.add("quest", "catOffer");
  quest.append(catQuest);

  catQuest.innerHTML = `
  <h2>The goblin offers you his cat.</h2><h2> Do you accept?</h2>
  <div class="questionBox">
    <div class="answer btnY">Yes</div>
    <div class="answer btnN">No</div>
  </div>`;
  console.log("cat");

  questPanel();

  const btnY = document.querySelector(".btnY");
  btnY.addEventListener("click", takeCat);

  function takeCat() {
    console.log("cat");
    cat = true;
    catQuestUpdate();
    battlePanel();
    multiMonster();
    quest.innerHTML = "";
  }

  const btnN = document.querySelector(".btnN");
  btnN.addEventListener("click", rejectCat);

  function rejectCat() {
    battlePanel();
    console.log("cat");
    setTimeout(summonPanther, 1000);

    function summonPanther() {
      enemy = panther;
      enemyParty.push(panther);
      spawn(panther, enemyParty.length - 1);
    }
    quest.innerHTML = "";
  }
}

function catQuestUpdate() {
  if (cat === true) {
    const catEmoji = document.createElement("p");
    catEmoji.innerHTML = `<img src="panther.png" width="10%">`;
    questItems.append(catEmoji);
  }
}

function initiateDoor() {
  console.log("door quest");
  const doorQuest = document.createElement("div");
  doorQuest.classList.add("quest", "mysteryDoor");
  quest.append(doorQuest);

  const doorKnob = document.createElement("div");
  doorKnob.classList.add("doorKnob");
  quest.append(doorKnob);

  doorQuest.innerHTML = `
    <h3>A mysterious door appears before you. Standing in an open field with nothing surrounding it, you hear faint noises beyond. The door is locked.</h3><br><h3> Do you unlock the door?</h3>
    <div class="questionBox">
      <div class="answer btnY">Yes</div>
      <div class="answer btnN">No</div>
    </div>`;
  console.log("door");

  questPanel();

  const btnY = document.querySelector(".btnY");
  btnY.addEventListener("click", openDoor);

  function openDoor() {
    const questionBox = document.querySelector(".questionBox");
    const mysteryDoor = document.querySelector(".mysteryDoor");
    if (doorKey === true) {
      console.log("door");
      // monsterParty.style.rotate = "90deg";
      // monsterParty.innerHTML = "";
      // monsterBlock.forEach((m) => rotate(m));
      questionBox.innerHTML = "";
      mysteryDoor.innerHTML =
        "<h3>You unlock the door and enter...</h3><br><h2><strong>THE SIDEWAYS</strong></h2>";

      setTimeout(flip, 3000);

      function flip() {
        sideways = true;
        enemyParty = [];
        enemyCurrentHP = [];
        enemyMaxHP = [];
        monsterParty.innerHTML = "";
        multiMonster();
        // multiMonster();
        // initMonsterClick();
        monsterParty.classList.add("fieldRotated");
        battlePanel();
        quest.innerHTML = "";
      }
    } else {
      questionBox.innerHTML = "";
      mysteryDoor.innerHTML = "<h3>You do not have the key.</h3>";

      setTimeout(noKey, 3000);

      function noKey() {
        enemyParty = [];
        enemyCurrentHP = [];
        enemyMaxHP = [];
        monsterParty.innerHTML = "";
        multiMonster();
        battlePanel();
        quest.innerHTML = "";
      }
    }
  }

  const btnN = document.querySelector(".btnN");
  btnN.addEventListener("click", rejectDoor);

  function rejectDoor() {
    questionBox.innerHTML = "";
    mysteryDoor.innerHTML = "<h3>You turn away from the mysterious door.</h3>";

    setTimeout(turnAway, 2000);

    function turnAway() {
      battlePanel();
      quest.innerHTML = "";
    }
  }
}

// initiateDoor();

function gameOverScreen() {
  console.log("game over man");
  const gameOver = document.createElement("div");

  gameOver.classList.add("quest", "gameOver");
  quest.append(gameOver);

  gameOver.innerHTML = `<h1>GAME OVER</h1><h3>Refresh page to play again.</h3>`;

  questPanel();
}

const monsterBlock = document.querySelectorAll(".monsterBlock");

function rotate(m) {
  m.classList.add("rotate");
}

const questionBox = document.querySelector(".questionBox");

const mysteryDoor = document.querySelector(".mysteryDoor");
