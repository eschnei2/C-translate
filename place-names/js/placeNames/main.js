const names = [
  "Nashville",
  "Hong Kong",
  "The back yard",
  "Earth",
  "London",
  "The mall",
  "Ryman Auditorium",
  "The Great Wall of China",
];

console.log("All 'The' Place Names");

// filter with if statement at for loop
/* for (const name of names) {
  if (name.startsWith("The"))
  console.log(name);
} */

// filter with filter function before for loop
const theFilter = names.filter((name) => name.startsWith("The"));

for (const name of theFilter) {
  console.log(name);
}
