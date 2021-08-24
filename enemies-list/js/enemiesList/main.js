console.log("My Enemies List!");
console.log("----------------");

const getEnemies = () => {
  const enemies = [
    {
      firstName: "Joshua",
      lastName: "Flowers",
      offenses: [
        { string: "Being a jerk to me in elementry school" },
        { string: "Not being nice to me in elementry school" },
      ],
      isReallyHated: true,
    },
    {
      firstName: "Darth",
      lastName: "Vader",
      offenses: [
        { string: "cut off Lukes hand" },
        { string: "Murdured all those kids" },
        { string: "Unkind management practices" },
      ],
      isReallyHated: false,
    },
    {
      firstName: "Betty",
      lastName: "Rudelady",
      offenses: [
        { string: "Phone calls in the theater" },
        { string: "Phone calls on the bus" },
        { string: "Phone calls in the line at the grocrey store" },
        { string: "Poor conversationalist" },
      ],
      isReallyHated: true,
    },
    {
      firstName: "Leon",
      lastName: "Peck",
      offenses: [{ string: "Keeps giving me a hotplate" }],
      isReallyHated: false,
    },
  ]
  return enemies
}

const enemies = getEnemies();

for (const enemy of enemies) {
    if (enemy.isReallyHated) {
        console.log(`${enemy.firstName} ${enemy.lastName} (Really, really dislike!)`);
    } else {
        console.log(`${enemy.firstName} ${enemy.lastName}`);
    }
};