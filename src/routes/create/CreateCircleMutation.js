// @flow
import { graphql, commitMutation, Environment } from 'react-relay';

const mutation = graphql`
  mutation CreateCircleMutation($input: createCircleInput!) {
    createCircle(input: $input) {
      createdCircle {
        __typename
        id
        public
        viewers {
          id
        }
        type
        styles {
          id
        }
        tags {
          edges {
            node {
              id
            }
          }
        }
        order
        title
        subtitle
        description
        media {
          id
        }
        value
        blob
        number
        boolean
        line {
          id
        }
        lines {
          id
        }
        linesMany {
          edges {
            node {
              id
            }
          }
        }
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

function getOptimisticResponse(optomisticCircleObject, viewerId) {
  return {
    createCircle: {
      createdCircle: optomisticCircleObject,
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
