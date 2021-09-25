import User from '../../models/User';

export default {
  User: {
    fullname: (user) => `${user.firstName} ${user.lastName}`,
  },

  Query: {
    users: async () => await User.find(),
    user: async (_, { id }) => await User.findById(id),
  },

  Mutation: {
    createUser: async (_, { data }) => {
      const user = await User.create(data);
      return user;
    },
    updateUser: async (_, { id, data }) =>
      await User.findOneAndUpdate(id, data, { new: true }),

    deleteUser: async (_, { id }) => {
      const deleted = await User.findOneAndDelete(id);
      return !!deleted;
    },
  },
};
