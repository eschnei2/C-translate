console.log("Do you believe in magic?");
console.log("------------------------");

const allSpells = [
  {
    name: "Turn enemy into a newt",
    isEvil: true,
    energyRequired: 5.1,
  },
  {
    name: "Conjure some gold for a local charity",
    isEvil: false,
    energyRequired: 2.99,
  },
  {
    name: "Give a deaf person the ability to heal",
    isEvil: false,
    energyRequired: 12.2,
  },
  {
    name: "Make yourself emperor of the universe",
    isEvil: true,
    energyRequired: 100.0,
  },
  {
    name: "Convince your relatives your political views are correct",
    isEvil: false,
    energyRequired: 2921.5,
  },
];

const evilBook = allSpells.filter((evil) => evil.isEvil == true);

const goodBook = allSpells.filter((good) => good.isEvil == false);

console.log("Good book");
for (good of goodBook) {
  console.log("  " + good.name);
}
console.log("                ");

console.log("Evil book");
for (evil of evilBook) {
  console.log("  " + evil.name);
}
