// resolvers.js

let users = [
	{ id: "1", name: "Ismail", email: "ismail@example.com" },
	{ id: "2", name: "Abdul", email: "abdul@example.com" },
];

export const resolvers = {
	Query: {
		hello: () => "Hello world!",
		users: () => users,
		user: (_, { id }) => users.find((u) => u.id === id),
	},

	Mutation: {
		addUser: (_, { name, email }) => {
			const newUser = {
				id: String(users.length + 1),
				name,
				email,
			};
			users.push(newUser);
			return newUser;
		},
	},
};
