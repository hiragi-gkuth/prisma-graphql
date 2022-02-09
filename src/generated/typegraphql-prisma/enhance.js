"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyRelationResolversEnhanceMap = exports.applyArgsTypesEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const tslib = require("tslib");
const crudResolvers = require("./resolvers/crud/resolvers-crud.index");
const argsTypes = require("./resolvers/crud/args.index");
const actionResolvers = require("./resolvers/crud/resolvers-actions.index");
const relationResolvers = require("./resolvers/relations/resolvers.index");
const models = require("./models");
const outputTypes = require("./resolvers/outputs");
const inputTypes = require("./resolvers/inputs");
const crudResolversMap = {
    Post: crudResolvers.PostCrudResolver,
    Channel: crudResolvers.ChannelCrudResolver,
    User: crudResolvers.UserCrudResolver
};
const actionResolversMap = {
    Post: {
        post: actionResolvers.FindUniquePostResolver,
        findFirstPost: actionResolvers.FindFirstPostResolver,
        posts: actionResolvers.FindManyPostResolver,
        createPost: actionResolvers.CreatePostResolver,
        createManyPost: actionResolvers.CreateManyPostResolver,
        deletePost: actionResolvers.DeletePostResolver,
        updatePost: actionResolvers.UpdatePostResolver,
        deleteManyPost: actionResolvers.DeleteManyPostResolver,
        updateManyPost: actionResolvers.UpdateManyPostResolver,
        upsertPost: actionResolvers.UpsertPostResolver,
        aggregatePost: actionResolvers.AggregatePostResolver,
        groupByPost: actionResolvers.GroupByPostResolver
    },
    Channel: {
        channel: actionResolvers.FindUniqueChannelResolver,
        findFirstChannel: actionResolvers.FindFirstChannelResolver,
        channels: actionResolvers.FindManyChannelResolver,
        createChannel: actionResolvers.CreateChannelResolver,
        createManyChannel: actionResolvers.CreateManyChannelResolver,
        deleteChannel: actionResolvers.DeleteChannelResolver,
        updateChannel: actionResolvers.UpdateChannelResolver,
        deleteManyChannel: actionResolvers.DeleteManyChannelResolver,
        updateManyChannel: actionResolvers.UpdateManyChannelResolver,
        upsertChannel: actionResolvers.UpsertChannelResolver,
        aggregateChannel: actionResolvers.AggregateChannelResolver,
        groupByChannel: actionResolvers.GroupByChannelResolver
    },
    User: {
        user: actionResolvers.FindUniqueUserResolver,
        findFirstUser: actionResolvers.FindFirstUserResolver,
        users: actionResolvers.FindManyUserResolver,
        createUser: actionResolvers.CreateUserResolver,
        createManyUser: actionResolvers.CreateManyUserResolver,
        deleteUser: actionResolvers.DeleteUserResolver,
        updateUser: actionResolvers.UpdateUserResolver,
        deleteManyUser: actionResolvers.DeleteManyUserResolver,
        updateManyUser: actionResolvers.UpdateManyUserResolver,
        upsertUser: actionResolvers.UpsertUserResolver,
        aggregateUser: actionResolvers.AggregateUserResolver,
        groupByUser: actionResolvers.GroupByUserResolver
    }
};
const crudResolversInfo = {
    Post: ["post", "findFirstPost", "posts", "createPost", "createManyPost", "deletePost", "updatePost", "deleteManyPost", "updateManyPost", "upsertPost", "aggregatePost", "groupByPost"],
    Channel: ["channel", "findFirstChannel", "channels", "createChannel", "createManyChannel", "deleteChannel", "updateChannel", "deleteManyChannel", "updateManyChannel", "upsertChannel", "aggregateChannel", "groupByChannel"],
    User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"]
};
const argsInfo = {
    FindUniquePostArgs: ["where"],
    FindFirstPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreatePostArgs: ["data"],
    CreateManyPostArgs: ["data", "skipDuplicates"],
    DeletePostArgs: ["where"],
    UpdatePostArgs: ["data", "where"],
    DeleteManyPostArgs: ["where"],
    UpdateManyPostArgs: ["data", "where"],
    UpsertPostArgs: ["where", "create", "update"],
    AggregatePostArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByPostArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueChannelArgs: ["where"],
    FindFirstChannelArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyChannelArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateChannelArgs: ["data"],
    CreateManyChannelArgs: ["data", "skipDuplicates"],
    DeleteChannelArgs: ["where"],
    UpdateChannelArgs: ["data", "where"],
    DeleteManyChannelArgs: ["where"],
    UpdateManyChannelArgs: ["data", "where"],
    UpsertChannelArgs: ["where", "create", "update"],
    AggregateChannelArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByChannelArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueUserArgs: ["where"],
    FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateUserArgs: ["data"],
    CreateManyUserArgs: ["data", "skipDuplicates"],
    DeleteUserArgs: ["where"],
    UpdateUserArgs: ["data", "where"],
    DeleteManyUserArgs: ["where"],
    UpdateManyUserArgs: ["data", "where"],
    UpsertUserArgs: ["where", "create", "update"],
    AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        if (resolverActionsConfig._all) {
            const allActionsDecorators = resolverActionsConfig._all;
            const resolverActionNames = crudResolversInfo[modelName];
            for (const resolverActionName of resolverActionNames) {
                const actionTarget = actionResolversConfig[resolverActionName].prototype;
                tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
                tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
            }
        }
        const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(it => it !== "_all");
        for (const resolverActionName of resolverActionsToApply) {
            const decorators = resolverActionsConfig[resolverActionName];
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            tslib.__decorate(decorators, crudTarget, resolverActionName, null);
            tslib.__decorate(decorators, actionTarget, resolverActionName, null);
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
const relationResolversMap = {
    Post: relationResolvers.PostRelationsResolver,
    Channel: relationResolvers.ChannelRelationsResolver,
    User: relationResolvers.UserRelationsResolver
};
const relationResolversInfo = {
    Post: ["author", "channel"],
    Channel: ["posts", "members"],
    User: ["channels", "posts"]
};
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverTarget = relationResolversMap[modelName].prototype;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        if (relationResolverActionsConfig._all) {
            const allActionsDecorators = relationResolverActionsConfig._all;
            const relationResolverActionNames = relationResolversInfo[modelName];
            for (const relationResolverActionName of relationResolverActionNames) {
                tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
            }
        }
        const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(it => it !== "_all");
        for (const relationResolverActionName of relationResolverActionsToApply) {
            const decorators = relationResolverActionsConfig[relationResolverActionName];
            tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
        }
    }
}
exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    if (enhanceConfig.class) {
        tslib.__decorate(enhanceConfig.class, typeClass);
    }
    if (enhanceConfig.fields) {
        if (enhanceConfig.fields._all) {
            const allFieldsDecorators = enhanceConfig.fields._all;
            for (const typeFieldName of typeFieldNames) {
                tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
            }
        }
        const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(it => it !== "_all");
        for (const typeFieldName of configFieldsToApply) {
            const fieldDecorators = enhanceConfig.fields[typeFieldName];
            tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
        }
    }
}
const modelsInfo = {
    Post: ["id", "content", "authorId", "channelId", "createdAt", "updatedAt"],
    Channel: ["id", "title", "description"],
    User: ["id", "email", "name", "role"]
};
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
const outputsInfo = {
    AggregatePost: ["_count", "_avg", "_sum", "_min", "_max"],
    PostGroupBy: ["id", "content", "authorId", "channelId", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateChannel: ["_count", "_avg", "_sum", "_min", "_max"],
    ChannelGroupBy: ["id", "title", "description", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
    UserGroupBy: ["id", "email", "name", "role", "_count", "_avg", "_sum", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    PostCountAggregate: ["id", "content", "authorId", "channelId", "createdAt", "updatedAt", "_all"],
    PostAvgAggregate: ["id", "authorId", "channelId"],
    PostSumAggregate: ["id", "authorId", "channelId"],
    PostMinAggregate: ["id", "content", "authorId", "channelId", "createdAt", "updatedAt"],
    PostMaxAggregate: ["id", "content", "authorId", "channelId", "createdAt", "updatedAt"],
    ChannelCount: ["posts", "members"],
    ChannelCountAggregate: ["id", "title", "description", "_all"],
    ChannelAvgAggregate: ["id"],
    ChannelSumAggregate: ["id"],
    ChannelMinAggregate: ["id", "title", "description"],
    ChannelMaxAggregate: ["id", "title", "description"],
    UserCount: ["channels", "posts"],
    UserCountAggregate: ["id", "email", "name", "role", "_all"],
    UserAvgAggregate: ["id"],
    UserSumAggregate: ["id"],
    UserMinAggregate: ["id", "email", "name", "role"],
    UserMaxAggregate: ["id", "email", "name", "role"]
};
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
const inputsInfo = {
    PostWhereInput: ["AND", "OR", "NOT", "id", "content", "author", "authorId", "channel", "channelId", "createdAt", "updatedAt"],
    PostOrderByWithRelationInput: ["id", "content", "author", "authorId", "channel", "channelId", "createdAt", "updatedAt"],
    PostWhereUniqueInput: ["id"],
    PostOrderByWithAggregationInput: ["id", "content", "authorId", "channelId", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
    PostScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "content", "authorId", "channelId", "createdAt", "updatedAt"],
    ChannelWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "posts", "members"],
    ChannelOrderByWithRelationInput: ["id", "title", "description", "posts", "members"],
    ChannelWhereUniqueInput: ["id"],
    ChannelOrderByWithAggregationInput: ["id", "title", "description", "_count", "_avg", "_max", "_min", "_sum"],
    ChannelScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "description"],
    UserWhereInput: ["AND", "OR", "NOT", "id", "email", "name", "channels", "posts", "role"],
    UserOrderByWithRelationInput: ["id", "email", "name", "channels", "posts", "role"],
    UserWhereUniqueInput: ["id", "email"],
    UserOrderByWithAggregationInput: ["id", "email", "name", "role", "_count", "_avg", "_max", "_min", "_sum"],
    UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "email", "name", "role"],
    PostCreateInput: ["content", "createdAt", "updatedAt", "author", "channel"],
    PostUpdateInput: ["content", "createdAt", "updatedAt", "author", "channel"],
    PostCreateManyInput: ["id", "content", "authorId", "channelId", "createdAt", "updatedAt"],
    PostUpdateManyMutationInput: ["content", "createdAt", "updatedAt"],
    ChannelCreateInput: ["title", "description", "posts", "members"],
    ChannelUpdateInput: ["title", "description", "posts", "members"],
    ChannelCreateManyInput: ["id", "title", "description"],
    ChannelUpdateManyMutationInput: ["title", "description"],
    UserCreateInput: ["email", "name", "role", "channels", "posts"],
    UserUpdateInput: ["email", "name", "role", "channels", "posts"],
    UserCreateManyInput: ["id", "email", "name", "role"],
    UserUpdateManyMutationInput: ["email", "name", "role"],
    IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    UserRelationFilter: ["is", "isNot"],
    ChannelRelationFilter: ["is", "isNot"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    PostCountOrderByAggregateInput: ["id", "content", "authorId", "channelId", "createdAt", "updatedAt"],
    PostAvgOrderByAggregateInput: ["id", "authorId", "channelId"],
    PostMaxOrderByAggregateInput: ["id", "content", "authorId", "channelId", "createdAt", "updatedAt"],
    PostMinOrderByAggregateInput: ["id", "content", "authorId", "channelId", "createdAt", "updatedAt"],
    PostSumOrderByAggregateInput: ["id", "authorId", "channelId"],
    IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    PostListRelationFilter: ["every", "some", "none"],
    UserListRelationFilter: ["every", "some", "none"],
    PostOrderByRelationAggregateInput: ["_count"],
    UserOrderByRelationAggregateInput: ["_count"],
    ChannelCountOrderByAggregateInput: ["id", "title", "description"],
    ChannelAvgOrderByAggregateInput: ["id"],
    ChannelMaxOrderByAggregateInput: ["id", "title", "description"],
    ChannelMinOrderByAggregateInput: ["id", "title", "description"],
    ChannelSumOrderByAggregateInput: ["id"],
    StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    ChannelListRelationFilter: ["every", "some", "none"],
    EnumRoleFilter: ["equals", "in", "notIn", "not"],
    ChannelOrderByRelationAggregateInput: ["_count"],
    UserCountOrderByAggregateInput: ["id", "email", "name", "role"],
    UserAvgOrderByAggregateInput: ["id"],
    UserMaxOrderByAggregateInput: ["id", "email", "name", "role"],
    UserMinOrderByAggregateInput: ["id", "email", "name", "role"],
    UserSumOrderByAggregateInput: ["id"],
    EnumRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    UserCreateNestedOneWithoutPostsInput: ["create", "connectOrCreate", "connect"],
    ChannelCreateNestedOneWithoutPostsInput: ["create", "connectOrCreate", "connect"],
    StringFieldUpdateOperationsInput: ["set"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    UserUpdateOneRequiredWithoutPostsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    ChannelUpdateOneRequiredWithoutPostsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    PostCreateNestedManyWithoutChannelInput: ["create", "connectOrCreate", "createMany", "connect"],
    UserCreateNestedManyWithoutChannelsInput: ["create", "connectOrCreate", "connect"],
    NullableStringFieldUpdateOperationsInput: ["set"],
    PostUpdateManyWithoutChannelInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    UserUpdateManyWithoutChannelsInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    ChannelCreateNestedManyWithoutMembersInput: ["create", "connectOrCreate", "connect"],
    PostCreateNestedManyWithoutAuthorInput: ["create", "connectOrCreate", "createMany", "connect"],
    EnumRoleFieldUpdateOperationsInput: ["set"],
    ChannelUpdateManyWithoutMembersInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    PostUpdateManyWithoutAuthorInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedEnumRoleFilter: ["equals", "in", "notIn", "not"],
    NestedEnumRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    UserCreateWithoutPostsInput: ["email", "name", "role", "channels"],
    UserCreateOrConnectWithoutPostsInput: ["where", "create"],
    ChannelCreateWithoutPostsInput: ["title", "description", "members"],
    ChannelCreateOrConnectWithoutPostsInput: ["where", "create"],
    UserUpsertWithoutPostsInput: ["update", "create"],
    UserUpdateWithoutPostsInput: ["email", "name", "role", "channels"],
    ChannelUpsertWithoutPostsInput: ["update", "create"],
    ChannelUpdateWithoutPostsInput: ["title", "description", "members"],
    PostCreateWithoutChannelInput: ["content", "createdAt", "updatedAt", "author"],
    PostCreateOrConnectWithoutChannelInput: ["where", "create"],
    PostCreateManyChannelInputEnvelope: ["data", "skipDuplicates"],
    UserCreateWithoutChannelsInput: ["email", "name", "role", "posts"],
    UserCreateOrConnectWithoutChannelsInput: ["where", "create"],
    PostUpsertWithWhereUniqueWithoutChannelInput: ["where", "update", "create"],
    PostUpdateWithWhereUniqueWithoutChannelInput: ["where", "data"],
    PostUpdateManyWithWhereWithoutChannelInput: ["where", "data"],
    PostScalarWhereInput: ["AND", "OR", "NOT", "id", "content", "authorId", "channelId", "createdAt", "updatedAt"],
    UserUpsertWithWhereUniqueWithoutChannelsInput: ["where", "update", "create"],
    UserUpdateWithWhereUniqueWithoutChannelsInput: ["where", "data"],
    UserUpdateManyWithWhereWithoutChannelsInput: ["where", "data"],
    UserScalarWhereInput: ["AND", "OR", "NOT", "id", "email", "name", "role"],
    ChannelCreateWithoutMembersInput: ["title", "description", "posts"],
    ChannelCreateOrConnectWithoutMembersInput: ["where", "create"],
    PostCreateWithoutAuthorInput: ["content", "createdAt", "updatedAt", "channel"],
    PostCreateOrConnectWithoutAuthorInput: ["where", "create"],
    PostCreateManyAuthorInputEnvelope: ["data", "skipDuplicates"],
    ChannelUpsertWithWhereUniqueWithoutMembersInput: ["where", "update", "create"],
    ChannelUpdateWithWhereUniqueWithoutMembersInput: ["where", "data"],
    ChannelUpdateManyWithWhereWithoutMembersInput: ["where", "data"],
    ChannelScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "description"],
    PostUpsertWithWhereUniqueWithoutAuthorInput: ["where", "update", "create"],
    PostUpdateWithWhereUniqueWithoutAuthorInput: ["where", "data"],
    PostUpdateManyWithWhereWithoutAuthorInput: ["where", "data"],
    PostCreateManyChannelInput: ["id", "content", "authorId", "createdAt", "updatedAt"],
    PostUpdateWithoutChannelInput: ["content", "createdAt", "updatedAt", "author"],
    UserUpdateWithoutChannelsInput: ["email", "name", "role", "posts"],
    PostCreateManyAuthorInput: ["id", "content", "channelId", "createdAt", "updatedAt"],
    ChannelUpdateWithoutMembersInput: ["title", "description", "posts"],
    PostUpdateWithoutAuthorInput: ["content", "createdAt", "updatedAt", "channel"]
};
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
