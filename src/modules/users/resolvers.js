import User from '../../models/User';

export default {
  User: {
    fullname: (user) => `${user.firstName} ${user.lastName}`,
  },

  Query: {
    users: () => User.find(),
    user: (_, { id }) => User.findById(id),
  },

  Mutation: {
    createUser: async (_, { data }) => {
      const user = await User.create(data);
      return user;
    },
    updateUser: (_, { id, data }) =>
      User.findOneAndUpdate(id, data, { new: true }),

    deleteUser: async (_, { id }) => {
      const deleted = await User.findOneAndDelete(id);
      return !!deleted;
    },
  },
};
