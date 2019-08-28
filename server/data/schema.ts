import { gql } from 'apollo-server'

export const typeDefs = gql`
  type Amount {
    value: String!
    currency: String!
  }

  type User {
    first: String!
    last: String!
    email: String!
  }

  type Receipt {
    id: ID!
    url: String!
  }

  type Expense {
    id: ID!
    amount: Amount!
    date: String!
    merchant: String!
    receipts: [Receipt]!
    comment: String
    category: String
    user: User!
  }

  type AllExpensesResponse {
    data: [Expense]!
    total: Int
  }

  type Query {
    expenses(limit: Int, offset: Int): AllExpensesResponse!
    expense(id: ID!): Expense!
  }

  type Mutation {
    updateComment(id: ID!, comment: String): Expense!
    updateReceipt(id: ID!, receiptUrls: [String!]!): Expense!
  }
`
