import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

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

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

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

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
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
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  Post: ["id", "content", "authorId", "channelId", "createdAt", "updatedAt"],
  Channel: ["id", "title", "description"],
  User: ["id", "email", "name", "role"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

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

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

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

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

