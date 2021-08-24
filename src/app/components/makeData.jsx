import namor from "namor";

const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};
function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  ).toDateString();
}
const newPerson = () => {
  const statusChance = Math.random();
  return {
    id: namor.generate({ words: 0, saltLength: 8 }),
    username: namor.generate({ words: 1, saltLength: 0 }),
    name: namor.generate({ words: 1, saltLength: 0, separator: " " }),
    email: namor.generate({ words: 1, saltLength: 3, separator: "@" }) + ".com",
    creation_date: randomDate(new Date(1990, 12, 1), new Date(2002, 1, 1)),
    expiration_date: randomDate(new Date(2002, 2, 1), new Date()),
    authentication_approach:
      statusChance > 0.66
        ? "simple"
        : statusChance > 0.33
        ? "standard"
        : "advance",
    role:
      statusChance > 0.66 ? "admin" : statusChance > 0.33 ? "user" : "reporter",
    working_group:
      statusChance > 0.66
        ? "relationship"
        : statusChance > 0.33
        ? "complicated"
        : "single",
  };
};

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map((d) => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}
