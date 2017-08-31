// import {
// 	commitMutation,
// 	graphql,
// } from 'react-relay';
// import { ConnectionHandler } from 'relay-runtime';

// const mutation = graphql`
//   mutation CreateCircleMutation($input: CreateCircleInput!) {
//     createCircle(input:$input) {
//       _id
//       path
//       type
//       lastUpdated
//       created
//       blob
//     }
//   }
// `;

// function sharedUpdater(store, user, newEdge) {
// 	const userProxy = store.get(user.id);
// 	const conn = ConnectionHandler.getConnection(
// 		userProxy,
// 		'TodoList_todos',
// 	);
// 	ConnectionHandler.insertEdgeAfter(conn, newEdge);
// }

// let tempID = 0;

// function commit(
// 	environment,
// 	text,
// 	user,
// ) {
// 	return commitMutation(
// 		environment,
// 		{
// 			mutation,
// 			variables: {
// 				input: {
// 					text,
// 					clientMutationId: tempID++,
// 				},
// 			},
// 			updater: (store) => {
// 				const payload = store.getRootField('createCircle');
// 				const newEdge = payload.getLinkedRecord('todoEdge');
// 				sharedUpdater(store, user, newEdge);
// 			},
// 			optimisticUpdater: (store) => {
// 				const id = `client:newTodo:${tempID++}`;
// 				const node = store.create(id, 'Todo');
// 				node.setValue(text, 'text');
// 				node.setValue(id, 'id');
// 				const newEdge = store.create(
// 					`client:newEdge:${tempID++}`,
// 					'TodoEdge',
// 				);
// 				newEdge.setLinkedRecord(node, 'node');
// 				sharedUpdater(store, user, newEdge);
// 				const userProxy = store.get(user.id);
// 				userProxy.setValue(
// 					userProxy.getValue('totalCount') + 1,
// 					'totalCount',
// 				);
// 			},
// 		},
// 	);
// }

// export default { commit };

// // import Relay from 'react-relay';

// // class CreatePageMutation extends Relay.Mutation {

// // 	getMutation() {
// // 		return Relay.QL`
// //       mutation { addPoint }
// //     `;
// // 	}

// // 	getVariables() {
// // 		return {
// // 			path: this.props.path,
// // 			styles: this.props.styles,
// // 			public: this.props.public,
// // 			type: this.props.type,
// // 			title: this.props.title,
// // 			subtitle: this.props.subtitle,
// // 			description: this.props.description,
// // 			hero: this.props.hero,
// // 			displayMedia: this.props.displayMedia,
// // 			creator: this.props.creator,
// // 			headerObject: this.props.headerObject,
// // 			order: this.props.order,
// // 			value: this.props.value,
// // 			object: this.props.object,
// // 			smallString: this.props.smallString,
// // 			mediumString: this.props.mediumString,
// // 			largeString: this.props.largeString,
// // 			arrayLarge: this.props.arrayLarge,
// // 			point: this.props.point,
// // 			points: this.props.points,
// // 		};
// // 	}

// // 	getFatQuery() {
// // 		return Relay.QL`
// //       fragment on addPointPayload {
// //         changedPointEdge,
// //         clientMutationId,
// //         viewer { points }
// //       }
// //     `;
// // 	}

// // 	getConfigs() {
// // 		return [
// // 			{
// // 				type: 'RANGE_ADD',
// // 				parentName: 'viewer',
// // 				parentID: this.props.viewerId,
// // 				connectionName: 'points',
// // 				edgeName: 'changedPointEdge',
// // 				rangeBehaviors: {
// // 					'': 'append',
// // 				},
// // 			},
// // 			{
// // 				type: 'REQUIRED_CHILDREN',
// // 				children: [
// // 					Relay.QL`
// //             fragment on addPointPayload {
// //               changedPointEdge
// //             }
// //           `,
// // 				],
// // 			},
// // 		];
// // 	}
// // }

// // export default CreatePageMutation;
