const { userList, MovieList } = require("../../FakeData");
const _ = require("lodash");

const resolvers = {
  Query: {
    //USER RESOLVERS
    users: () => {
      return userList;
    },
    user: (parent, args) => {
      const id = args.id;
      const user = _.find(userList, { id: +id });
      return user;
    },

    //MOVIE RESOLVERS
    movies: () => {
      return MovieList;
    },
    movie: (parent, args) => {
      const { name } = args;
      const movie = _.find(MovieList, { name: name });
      return movie;
    },
  },
  User: {
    favoriteMovies: () => {
      return _.filter(MovieList, (movie) => {
        return (
          movie.yearOfPublication >= 2000 && movie.yearOfPublication <= 2010
        );
      });
    },
  },

  Mutation: {
    createUser: (parent, args) => {
      const user = args.input;

      const lastId = userList[userList.length - 1].id;
      user.id = lastId + 1;
      userList.push(user);
      return user;
    },

    updateUsername: (parent, args) => {
      const { id, newUsername } = args.input;
      let userUpdated;
      userList.forEach((user) => {
        if (user.id == id) {
          user.username = newUsername;
          userUpdated = user;
        }
      });
      return userUpdated;
    },

    deleteUser: (parent, args) => {
      const id = args.id;
      _.remove(userList, (user) => user.id === Number(id));
      return null;
    },
  },
};

module.exports = { resolvers };
