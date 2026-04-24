// Sort

const numbers = [40, 100, 1, 5, 25, 10];
const fruits = ["Banana", "apple", "Cherry", "date"];

const sortFruits = fruits.sort((a, b) => a.localeCompare(b))



const arr = [1, 2, 3, [4, 5, [6, 7, [8, 9, [10, 11]]]]];
const flatArr = arr.flat(Infinity)



const tagsFromPosts = [
  ["javascript", "react", "css"],
  ["node", "express"],
  ["css", "html", "react"],
];

const flatArr2 = new Set(tagsFromPosts.flat())

console.log(flatArr2);

const uniqueTags = [...new Set(tagsFromPosts.flat())];








