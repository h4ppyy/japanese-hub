
import Koa from 'koa';
import { ApolloServer, gql } from 'apollo-server-koa';

import { Sequelize, DataTypes } from 'sequelize'
const sequelize = new Sequelize('postgres://admin:password@localhost:5432/japanesehub')

const Account = sequelize.define('account', {
  // Model attributes are defined here
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

const tesingDB = async () => {
  try {
    await sequelize.authenticate();

    // const jane = Account.build({ 
    //   account: "user3",
    //   msg: "good!!!",
    //   password: "1234",
    //   email: "user3@naver.com",
    //   jlpt: 1
    // });
    // await jane.save();

    const users = await Account.findAll();
    console.log('users => ', users)
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
tesingDB();

const typeDefs = gql`
  scalar Date

  type Account {
    id: Int!
    account: String
    msg: String
    password: String
    email: String
    jlpt: String
    level: String
    deleted: String
    created_at: Date
    updated_at: Date
    deleted_at: Date
  }

  type Query {
    hello: String!
    getAccountList: [Account]
    getAccount(id: Int): Account
  }
`;
 
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    getAccountList: async () => {
      const result = await Account.findAll({ raw : true })
      console.log('result => ', result)
      return result
    },
    getAccount: async (root, { id }) => {
      const result = await Account.findOne({ where: { id: id }, raw : true })
      console.log('result => ', result)
      return result
    }
  },
};
 
const server = new ApolloServer({ typeDefs, resolvers });
 
const app = new Koa();
server.applyMiddleware({ app });
 
app.listen({ port: 4000 }, () =>
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`),
);