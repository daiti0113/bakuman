/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPlan = /* GraphQL */ `
  mutation CreatePlan(
    $input: CreatePlanInput!
    $condition: ModelPlanConditionInput
  ) {
    createPlan(input: $input, condition: $condition) {
      id
      deadline
      startDate
      pageCount
      process
      uptime
      steps {
        id
        order
        label
        timePerPage
      }
      createdAt
      updatedAt
    }
  }
`;
export const updatePlan = /* GraphQL */ `
  mutation UpdatePlan(
    $input: UpdatePlanInput!
    $condition: ModelPlanConditionInput
  ) {
    updatePlan(input: $input, condition: $condition) {
      id
      deadline
      startDate
      pageCount
      process
      uptime
      steps {
        id
        order
        label
        timePerPage
      }
      createdAt
      updatedAt
    }
  }
`;
export const deletePlan = /* GraphQL */ `
  mutation DeletePlan(
    $input: DeletePlanInput!
    $condition: ModelPlanConditionInput
  ) {
    deletePlan(input: $input, condition: $condition) {
      id
      deadline
      startDate
      pageCount
      process
      uptime
      steps {
        id
        order
        label
        timePerPage
      }
      createdAt
      updatedAt
    }
  }
`;
