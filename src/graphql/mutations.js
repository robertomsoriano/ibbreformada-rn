/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      title
      description
      category
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      title
      description
      category
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      title
      description
      category
    }
  }
`;
export const createPrayer = /* GraphQL */ `
  mutation CreatePrayer(
    $input: CreatePrayerInput!
    $condition: ModelPrayerConditionInput
  ) {
    createPrayer(input: $input, condition: $condition) {
      id
      name
      phone
      email
      content
    }
  }
`;
export const updatePrayer = /* GraphQL */ `
  mutation UpdatePrayer(
    $input: UpdatePrayerInput!
    $condition: ModelPrayerConditionInput
  ) {
    updatePrayer(input: $input, condition: $condition) {
      id
      name
      phone
      email
      content
    }
  }
`;
export const deletePrayer = /* GraphQL */ `
  mutation DeletePrayer(
    $input: DeletePrayerInput!
    $condition: ModelPrayerConditionInput
  ) {
    deletePrayer(input: $input, condition: $condition) {
      id
      name
      phone
      email
      content
    }
  }
`;
