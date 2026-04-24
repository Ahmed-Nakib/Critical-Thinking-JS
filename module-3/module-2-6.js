//* Generate a lookup table

//? Input
const postsArray = [
  { id: "p-101", title: "Intro to SQL", author: "Alex" },
  { id: "p-102", title: "Data Structures in JS", author: "Beth" },
  { id: "p-103", title: "Understanding Reduce", author: "Chris" },
  { id: "p-104", title: "CSS Grid Tricks", author: "Alex" },
];

const lookupTable = postsArray.reduce((table, post) => {
    table[post.id] = post
    return table
}, {})

// console.log(lookupTable);

// const find = postsArray.find((post) => post.id === "p-104")

// console.log(find);


const find = lookupTable["p-102"]
console.log(find);

for (let post in lookupTable){
    console.log(lookupTable[post]);
    
}

