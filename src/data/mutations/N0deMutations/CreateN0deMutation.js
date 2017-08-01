// // Starting template
// const GraphQLCreateN0deMutation = mutationWithClientMutationId({
// 	name: 'CreateN0de',
// 	inputFields: {
// 		text: { type: new GraphQLNonNull(GraphQLString) },
// 	},
// 	outputFields: {
// 		todoEdge: {
// 			type: GraphQLTodoEdge,
// 			resolve: ({ localTodoId }) => {
// 				const todo = getTodo(localTodoId);
// 				return {
// 					cursor: cursorForObjectInConnection(getTodos(), todo),
// 					node: todo,
// 				};
// 			},
// 		},
// 		viewer: {
// 			type: GraphQLUser,
// 			resolve: () => getViewer(),
// 		},
// 	},
// 	mutateAndGetPayload: ({ text }) => {
// 		const localTodoId = addTodo(text);
// 		return { localTodoId };
// 	},
// });
