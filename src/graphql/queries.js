/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPlan = /* GraphQL */ `
  query GetPlan($id: ID!) {
    getPlan(id: $id) {
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
export const listPlans = /* GraphQL */ `
  query ListPlans(
    $filter: ModelPlanFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlans(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
