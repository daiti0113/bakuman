/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePlan = /* GraphQL */ `
  subscription OnCreatePlan($owner: String!) {
    onCreatePlan(owner: $owner) {
      id
      owner
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
export const onUpdatePlan = /* GraphQL */ `
  subscription OnUpdatePlan($owner: String!) {
    onUpdatePlan(owner: $owner) {
      id
      owner
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
export const onDeletePlan = /* GraphQL */ `
  subscription OnDeletePlan($owner: String!) {
    onDeletePlan(owner: $owner) {
      id
      owner
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
