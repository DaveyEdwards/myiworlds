// @flow
import { graphql, commitMutation, Environment } from 'react-relay';
import history from '../../history';

const mutation = graphql`
  mutation CreateCircleMutation($input: createCircleInput!) {
    createCircle(input: $input) {
      createdCircle {
        __typename
        id
        _id
        pathFull
        title
        viewers {
          id
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
    onCompleted: (store) => {
      if (store.createCircle.createdCircle.pathFull != null) {
        history.push(`/MyiWorlds/${store.createCircle.createdCircle.pathFull}`);
      } else {
        return { status: 'Circle was not created' };
      }
    },
    onError: err => console.error('CreateCircleMutation onError: ', err),
    optimisticResponse: getOptimisticResponse(data, viewerId),
    configs: getConfigs(viewerId),
  });
}

export default { commit };
