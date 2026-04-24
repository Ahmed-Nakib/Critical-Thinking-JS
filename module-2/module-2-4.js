// Some

const numbers = [1, 5, 3, 7, 5, 8];
const hasEvenNumber = numbers.some((item) => item % 2 ===0)


const currentUserRoles = ["user", "editor", "admin"];
const featureAccessRoles = ["admin", "manager"];

const canAccess = currentUserRoles.some((role) => featureAccessRoles.includes(role))

const arr = Array.from([1, 3, 5], (value, i) => value * value);



const range = (start, stop, step) => {
  return Array.from(
    { length: Math.ceil((stop - start) / step) },
    (_, i) => start + i * step
  );
};

console.log(range(0, 11, 2));

const range = (start, stop, step) =>
  Array.from(
    { length: Math.ceil((stop - start) / step) },
    (_, i) => start + i * step
  );