// const { projects, clients } = require("../sampleData.js");

const Project = require("../model/Project");
const Client = require("../model/Client");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLSchema,
  GraphQLList,
} = require("graphql");

// Project Type
const ProjectType = new GraphQLObjectType({
    name: "Project",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        status: { type: GraphQLString },
        client: {
            type: ClientType,
            resolve(parent, args) {
                return clients.findById(parent.clientId);
            },
        },
    }),
});


// Client Type
const ClientType = new GraphQLObjectType({
  name: "Client",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    projects: {
      type: new GraphQLList(ProjectType),
      resolve(parent, args) {
        return Project.find(); 
      },
    },
    project: {
        type: ProjectType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
          return Project.findById(args.id);
        },
      },
    clients: {
      type: new GraphQLList(ClientType),
      resolve(parent, args) {
        return Client.find();
      },
    },
    client: {
      type: ClientType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Client.findById(args.id);
      },
    },
  },
});

// mutation 
const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addProject: {
            type: ProjectType,
            args: {
                name: { type: GraphQLString },
                description: { type: GraphQLString },
                status: { type: GraphQLString },
                clientId: { type: GraphQLID },
            },
            resolve(parent, args) {
                let project = new Project({
                    name: args.name,
                    description: args.description,
                    status: args.status,
                    clientId: args.clientId,
                });
                return project.save();
            },
        },
        addClient: {
            type: ClientType,
            args: {
                name: { type: GraphQLString },
                email: { type: GraphQLString },
                phone: { type: GraphQLString },
            },
            resolve(parent, args) {
                let client = new Client({
                    name: args.name,
                    email: args.email,
                    phone: args.phone,
                });
                return client.save();
            },
        },
    },
});


module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
