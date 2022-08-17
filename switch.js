switch (range) {
  case range > 10000:
    console.log("dragon");
    danger = danger - 45000;
    enemy = dragon;
    break;
  case range > 1000:
    console.log("giant");
    danger = danger - 4500;

    enemy = giant;
    break;
  case range > 100:
    console.log("ogre");
    danger = danger - 450;
    enemy = ogre;
    break;
  case range > 10:
    console.log("orc");
    danger = danger - 45;
    enemy = orc;
    break;
  case range > 0:
    console.log("goblin");
    danger = danger - 4;
    enemy = goblin;
    break;
  default:
    return;
}

if (range > 10000) {
  console.log("dragon");
  danger = danger - 10000;
  enemy = dragon;
} else if (range > 1000 && range <= 10000) {
  console.log("giant");
  danger = danger - 1000;
  enemy = giant;
} else if (range > 100 && range <= 1000) {
  console.log("ogre");
  danger = danger - 100;
  enemy = ogre;
} else if (range > 10 && range <= 100) {
  console.log("orc");
  danger = danger - 10;
  enemy = orc;
} else if (range > 0 && range <= 10) {
  console.log("goblin");
  danger = danger - 2;
  enemy = goblin;
} else if (range <= 0) return;
