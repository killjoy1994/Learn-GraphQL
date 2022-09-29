const userList = [
  {
    id: 1,
    name: "Bagus",
    username: "bagus",
    age: 25,
    nationality: "INDONESIA",
    friends: [
      {
        id: 2,
        name: "Nugroho",
        username: "nugroho",
        age: 21,
        nationality: "MALAYSIA",
      },
      {
        id: 5,
        name: "Lee ji eun",
        username: "IU",
        age: 21,
        nationality: "KOREA",
      },
    ],
  },
  {
    id: 2,
    name: "Nugroho",
    username: "nugroho",
    age: 21,
    nationality: "MALAYSIA",
  },
  {
    id: 3,
    name: "Wisnu",
    username: "wisnu",
    age: 27,
    nationality: "THAILAND",
    friends: [
      {
        id: 2,
        name: "Nugroho",
        username: "nugroho",
        age: 21,
        nationality: "MALAYSIA",
      },
    ],
  },
  {
    id: 4,
    name: "Murti",
    username: "murti",
    age: 25,
    nationality: "GERMANY",
  },
  {
    id: 5,
    name: "Lee ji eun",
    username: "IU",
    age: 21,
    nationality: "KOREA",
  },
];

const MovieList = [
  {
    id: 1,
    name: "Avengers Endgame",
    yearOfPublication: 2019,
    isInTheaters: true,
  },
  {
    id: 2,
    name: "Interstellar",
    yearOfPublication: 2007,
    isInTheaters: true,
  },
  {
    id: 3,
    name: "Superbad",
    yearOfPublication: 2009,
    isInTheaters: true,
  },
  {
    id: 4,
    name: "Hulk",
    yearOfPublication: 2006,
    isInTheaters: false,
  },
];

module.exports = { userList, MovieList };
