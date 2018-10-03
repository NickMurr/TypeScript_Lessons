// const foo: number[] = [1, 2, 3];
// const bar: number[] = [1, 2, 3];
// const baz: number[] = [1, 2, 3];

// console.log('%c My friends', 'color: orange; font-size: 50px;');
// console.table([foo, bar, baz]);

// // Time
// console.time('looper');
// let i = 0;
// while (i < 1000000) {
//   i++;
// }
// console.timeEnd('looper');

// // Stack trace Logs
// const deleteMe = () => console.trace('%c bye bye database', 'color: red;');
// deleteMe();

// // destructuring
// const turtle = {
//   name: 'Bob',
//   legs: 4,
//   shell: true,
//   type: 'amphibious',
//   meal: 10,
//   diet: 'berries',
// };

// function feed({ name, meal, diet }) {
//   return `Feed ${name} ${meal} kilos of ${diet}`;
// }

// console.log(feed(turtle));

// // template-literals

// const horse = {
//   name: 'Topher 🐢',
//   size: 'large',
//   skills: ['jousting', 'racing'],
//   age: 7,
// };

// function horseAge(str, age) {
//   const ageStr = age > 5 ? 'old' : 'young';
//   return `${str[0]}${ageStr} at ${age} years`;
// }

// const bio2 = horseAge`this horse is ${horse.age}`;
// console.log(bio2);

// // spread syntax
// const pikachu = { name: 'Pikachu' };
// const stats = { hp:40, attack: 60, defence: 45 };

// const lvl0 = { ...pikachu, ...stats };
// const lvl1 = { ...pikachu, hp:45 };

// /* Arrays */
// let pokemon = ['Airbok', 'Raichu', 'Saindrew'];
// pokemon = [...pokemon, 'Bulbasaur', ...pokemon];
// console.log(pokemon);

// // Loops
// const orders = [500, 30, 39, 4234, 34];

// /* Reduce */
// const total = orders.reduce((acc, cur) => acc + cur);

// /* Map */
// const withTask = orders.map(v => v * 1.1);

// /* Filter */
// const highValue = orders.filter(v => v > 100);

// console.log({ total, withTask, highValue });

// // Async / Await
const random  = () => {
  return Promise.resolve(Math.random());
};

const sumRandomAsyncNums = async() => {
  const first  = await random();
  const second  = await random();
  const third  = await random();

  console.log(`Result ${first + second + third}`);

  const randos = Promise.all([
    random(),
    random(),
    random(),
  ]);
};

sumRandomAsyncNums();
