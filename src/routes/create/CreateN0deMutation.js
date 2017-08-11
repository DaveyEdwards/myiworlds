// @flow
import { graphql, commitMutation, Environment } from 'react-relay';

const mutation = graphql`
  mutation CreateN0deMutation($input: createN0deInput!) {
    createN0de(input: $input) {
      createdN0de {
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
        n0de {
          id
        }
        n0deList {
          id
        }
        n0deEdge {
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
      connectionName: 'n0des',
      edgeName: 'n0deEdge',
      rangeBehaviors: {
        '': 'append',
      },
    },
  ];
}

function getOptimisticResponse(optomisticN0deObject, viewerId) {
  return {
    createN0de: {
      createdN0de: optomisticN0deObject,
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
