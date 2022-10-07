const userList = [
  {
    id: 1,
    name: "Bagus",
    username: "bagus",
    age: 25,
    nationallity: "INDONESIA",
    friends: [
      {
        id: 2,
        name: "Nugroho",
        username: "nugroho",
        age: 21,
        nationallity: "MALAYSIA",
      },
      {
        id: 5,
        name: "Lee ji eun",
        username: "IU",
        age: 21,
        nationallity: "KOREA",
      },
    ],
  },
  {
    id: 2,
    name: "Nugroho",
    username: "nugroho",
    age: 21,
    nationallity: "MALAYSIA",
  },
  {
    id: 3,
    name: "Wisnu",
    username: "wisnu",
    age: 27,
    nationallity: "THAILAND",
    friends: [
      {
        id: 2,
        name: "Nugroho",
        username: "nugroho",
        age: 21,
        nationallity: "MALAYSIA",
      },
    ],
  },
  {
    id: 4,
    name: "Murti",
    username: "murti",
    age: 25,
    nationallity: "GERMANY",
  },
  {
    id: 5,
    name: "Lee ji eun",
    username: "IU",
    age: 21,
    nationallity: "KOREA",
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
