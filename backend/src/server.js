
import Koa from 'koa';
import { ApolloServer, gql } from 'apollo-server-koa';

import { Sequelize, DataTypes } from 'sequelize'
const sequelize = new Sequelize('postgres://admin:password@localhost:5432/japanesehub')

const Account = sequelize.define('account', {
  id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
  account: { type: DataTypes.STRING, allowNull: false, unique: 'compositeIndex' },
  msg: { type: DataTypes.STRING, allowNull: true },
  password: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: 'compositeIndex' },
  jlpt: { type: DataTypes.INTEGER, allowNull: false },
  level: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  deleted: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
  created_at: { type: DataTypes.DATE, allowNull: false, defaultValue: Sequelize.NOW },
  updated_at: { type: DataTypes.DATE, allowNull: true },
  deleted_at: { type: DataTypes.DATE, allowNull: true },
}, {
  timestamps: false
});

const typeDefs = gql`
  scalar Date

  type Account {
    id: Int!
    account: String
    msg: String
    password: String
    email: String
    jlpt: Int
    level: Int
    deleted: String
    created_at: Date
    updated_at: Date
    deleted_at: Date
  }

  type Query {
    getAccountList: [Account]
    getAccount(id: Int): Account
  }

  type Mutation {
    createUser(
      account: String,
      msg: String,
      password: String,
      email: String,
      jlpt: Int
    ): Account

    updateUser(
      id: ID
      msg: String,
      jlpt: Int
    ): Account

    deleteUser(
      id: ID
    ): [Int]
  }
`;
 
const resolvers = {
  Query: {
    getAccountList: async () => {
      const result = await Account.findAll({ where: { deleted: false }, raw : true })
      return result
    },
    getAccount: async (root, { id }) => {
      const result = await Account.findOne({ where: { id: id, deleted: false }, raw : true })
      return result
    }
  },
  Mutation: {
    createUser: async (root, param) => {
      const account = await Account.create(param);
      return account
    },
    updateUser: async (root, param) => {
      const account = await Account.update(param, { where: { id: param.id } });
      const result = await Account.findOne({ where: { id: param.id }, raw : true })
      return result
    },
    deleteUser: async (root, { id }) => {
      const account = await Account.update({ deleted: true }, { where: { id: id, deleted: false } });
      return account
    }
  }
};
 
const server = new ApolloServer({ typeDefs, resolvers });
 
const app = new Koa();
server.applyMiddleware({ app });
 
app.listen({ port: 4000 }, () =>
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`),
);