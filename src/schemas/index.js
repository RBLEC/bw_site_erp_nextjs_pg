const { makeExecutableSchema, mergeSchemas } = require('@graphql-tools/schema');
const { userSchema, userResolvers } = require('./userSchema');
const { projectSchema, projectResolvers } = require('./projectSchema');
const { clientSchema, clientResolvers } = require('./clientSchema');

const schema = mergeSchemas({
  schemas: [userSchema, projectSchema, clientSchema],
  resolvers: [userResolvers, projectResolvers, clientResolvers]
});

module.exports = schema;
