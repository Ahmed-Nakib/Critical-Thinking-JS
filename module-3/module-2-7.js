//* Grouping and Aggregating Data

// Scenario: Count every survey and group by response

//? input
const surveyResponses = [
  "A",
  "C",
  "B",
  "A",
  "B",
  "B",
  "C",
  "A",
  "B",
  "D",
  "A",
  "C",
  "B",
  "A",
];

const lookupTable = surveyResponses.reduce((table, item) => {
    if(table[item]){
        table[item] += 1
    }else{
        table[item] =1
    }
    return table
}, {})

console.log(lookupTable);



//? Output
// { A: 5, C: 3, B: 5, D: 1 }
