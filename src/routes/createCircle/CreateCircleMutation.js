// @flow
import { graphql, commitMutation, Environment } from 'react-relay';

const mutation = graphql`
  mutation CreateCircleMutation($input: createCircleInput!) {
    createCircle(input: $input) {
      createdCircle {
        __typename
        id
      }
    }
  }
`;

function getConfigs(viewerId) {
  return [
    {
      type: 'RANGE_ADD',
      parentID: viewerId,
      connectionName: 'circles',
      edgeName: 'linesMany',
      rangeBehaviors: {
        '': 'append',
      },
    },
  ];
}

function getOptimisticResponse(optimisticCircleObject, viewerId) {
  return {
    createCircle: {
      createdCircle: optimisticCircleObject,
      viewer: {
        id: viewerId,
      },
    },
  };
}

function commit(environment: Environment, data: Object, viewerId: number) {
  commitMutation(environment, {
    mutation,
    variables: { input: data },
    optimisticResponse: getOptimisticResponse(data, viewerId),
    configs: getConfigs(viewerId),
  });
}

export default { commit };

// public
// viewers {
//   _id
//   username
// }
// type
// styles {
//   id
// }
// tags {
//   edges {
//     node {
//       id
//     }
//   }
// }
// order
// title
// subtitle
// description
// media {
//   id
// }
// value
// blob
// number
// boolean
// line {
//   id
// }
// lines {
//   id
// }
// linesMany {
//   edges {
//     node {
//       id
//     }
//   }
// }
