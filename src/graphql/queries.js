/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      title
      description
      category
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        category
      }
      nextToken
    }
  }
`;
export const getPrayer = /* GraphQL */ `
  query GetPrayer($id: ID!) {
    getPrayer(id: $id) {
      id
      name
      phone
      email
      content
    }
  }
`;
export const listPrayers = /* GraphQL */ `
  query ListPrayers(
    $filter: ModelPrayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        phone
        email
        content
      }
      nextToken
    }
  }
`;
