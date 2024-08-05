const { makeExecutableSchema, mergeSchemas } = require('@graphql-tools/schema');
const { userSchema, userResolvers } = require('./userSchema');
const { projectSchema, projectResolvers } = require('./projectSchema');
const { clientSchema, clientResolvers } = require('./clientSchema');
const { roleSchema, roleResolvers } = require('./roleSchema');
const { statusClientSchema, statusClientResolvers } = require('./statusClientSchema');
const { userProjectSchema, userProjectResolvers } = require('./userProjectSchema');
const { userGroupSchema, userGroupResolvers } = require('./userGroupSchema');

const schema = mergeSchemas({
  schemas: [userSchema, projectSchema, clientSchema, roleSchema, statusClientSchema, userProjectSchema, userGroupSchema],
  resolvers: [userResolvers, projectResolvers, clientResolvers, roleResolvers, statusClientResolvers, userProjectResolvers, userGroupResolvers]
});

module.exports = schema;
