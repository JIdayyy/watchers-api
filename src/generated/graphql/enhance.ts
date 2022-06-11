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
  User: crudResolvers.UserCrudResolver,
  Post: crudResolvers.PostCrudResolver,
  Tag: crudResolvers.TagCrudResolver,
  Category: crudResolvers.CategoryCrudResolver,
  ResetPassword: crudResolvers.ResetPasswordCrudResolver
};
const actionResolversMap = {
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
  },
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
  Tag: {
    tag: actionResolvers.FindUniqueTagResolver,
    findFirstTag: actionResolvers.FindFirstTagResolver,
    tags: actionResolvers.FindManyTagResolver,
    createTag: actionResolvers.CreateTagResolver,
    createManyTag: actionResolvers.CreateManyTagResolver,
    deleteTag: actionResolvers.DeleteTagResolver,
    updateTag: actionResolvers.UpdateTagResolver,
    deleteManyTag: actionResolvers.DeleteManyTagResolver,
    updateManyTag: actionResolvers.UpdateManyTagResolver,
    upsertTag: actionResolvers.UpsertTagResolver,
    aggregateTag: actionResolvers.AggregateTagResolver,
    groupByTag: actionResolvers.GroupByTagResolver
  },
  Category: {
    category: actionResolvers.FindUniqueCategoryResolver,
    findFirstCategory: actionResolvers.FindFirstCategoryResolver,
    categories: actionResolvers.FindManyCategoryResolver,
    createCategory: actionResolvers.CreateCategoryResolver,
    createManyCategory: actionResolvers.CreateManyCategoryResolver,
    deleteCategory: actionResolvers.DeleteCategoryResolver,
    updateCategory: actionResolvers.UpdateCategoryResolver,
    deleteManyCategory: actionResolvers.DeleteManyCategoryResolver,
    updateManyCategory: actionResolvers.UpdateManyCategoryResolver,
    upsertCategory: actionResolvers.UpsertCategoryResolver,
    aggregateCategory: actionResolvers.AggregateCategoryResolver,
    groupByCategory: actionResolvers.GroupByCategoryResolver
  },
  ResetPassword: {
    resetPassword: actionResolvers.FindUniqueResetPasswordResolver,
    findFirstResetPassword: actionResolvers.FindFirstResetPasswordResolver,
    resetPasswords: actionResolvers.FindManyResetPasswordResolver,
    createResetPassword: actionResolvers.CreateResetPasswordResolver,
    createManyResetPassword: actionResolvers.CreateManyResetPasswordResolver,
    deleteResetPassword: actionResolvers.DeleteResetPasswordResolver,
    updateResetPassword: actionResolvers.UpdateResetPasswordResolver,
    deleteManyResetPassword: actionResolvers.DeleteManyResetPasswordResolver,
    updateManyResetPassword: actionResolvers.UpdateManyResetPasswordResolver,
    upsertResetPassword: actionResolvers.UpsertResetPasswordResolver,
    aggregateResetPassword: actionResolvers.AggregateResetPasswordResolver,
    groupByResetPassword: actionResolvers.GroupByResetPasswordResolver
  }
};
const crudResolversInfo = {
  User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"],
  Post: ["post", "findFirstPost", "posts", "createPost", "createManyPost", "deletePost", "updatePost", "deleteManyPost", "updateManyPost", "upsertPost", "aggregatePost", "groupByPost"],
  Tag: ["tag", "findFirstTag", "tags", "createTag", "createManyTag", "deleteTag", "updateTag", "deleteManyTag", "updateManyTag", "upsertTag", "aggregateTag", "groupByTag"],
  Category: ["category", "findFirstCategory", "categories", "createCategory", "createManyCategory", "deleteCategory", "updateCategory", "deleteManyCategory", "updateManyCategory", "upsertCategory", "aggregateCategory", "groupByCategory"],
  ResetPassword: ["resetPassword", "findFirstResetPassword", "resetPasswords", "createResetPassword", "createManyResetPassword", "deleteResetPassword", "updateResetPassword", "deleteManyResetPassword", "updateManyResetPassword", "upsertResetPassword", "aggregateResetPassword", "groupByResetPassword"]
};
const argsInfo = {
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
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
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
  FindUniqueTagArgs: ["where"],
  FindFirstTagArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTagArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateTagArgs: ["data"],
  CreateManyTagArgs: ["data", "skipDuplicates"],
  DeleteTagArgs: ["where"],
  UpdateTagArgs: ["data", "where"],
  DeleteManyTagArgs: ["where"],
  UpdateManyTagArgs: ["data", "where"],
  UpsertTagArgs: ["where", "create", "update"],
  AggregateTagArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByTagArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueCategoryArgs: ["where"],
  FindFirstCategoryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCategoryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateCategoryArgs: ["data"],
  CreateManyCategoryArgs: ["data", "skipDuplicates"],
  DeleteCategoryArgs: ["where"],
  UpdateCategoryArgs: ["data", "where"],
  DeleteManyCategoryArgs: ["where"],
  UpdateManyCategoryArgs: ["data", "where"],
  UpsertCategoryArgs: ["where", "create", "update"],
  AggregateCategoryArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByCategoryArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueResetPasswordArgs: ["where"],
  FindFirstResetPasswordArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyResetPasswordArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateResetPasswordArgs: ["data"],
  CreateManyResetPasswordArgs: ["data", "skipDuplicates"],
  DeleteResetPasswordArgs: ["where"],
  UpdateResetPasswordArgs: ["data", "where"],
  DeleteManyResetPasswordArgs: ["where"],
  UpdateManyResetPasswordArgs: ["data", "where"],
  UpsertResetPasswordArgs: ["where", "create", "update"],
  AggregateResetPasswordArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByResetPasswordArgs: ["where", "orderBy", "by", "having", "take", "skip"]
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
  User: relationResolvers.UserRelationsResolver,
  Post: relationResolvers.PostRelationsResolver,
  Tag: relationResolvers.TagRelationsResolver,
  Category: relationResolvers.CategoryRelationsResolver
};
const relationResolversInfo = {
  User: ["ResetPassword", "Post"],
  Post: ["author", "Category", "Tags"],
  Tag: ["Post"],
  Category: ["Post"]
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
  User: ["id", "first_name", "last_name", "email", "is_disabled", "avatar", "role", "created_at", "updated_at"],
  Post: ["id", "slug", "title", "cover_picture", "content", "isDraft", "created_at", "updated_at", "userId", "categoryId"],
  Tag: ["id", "name", "created_at", "updated_at"],
  Category: ["id", "name", "created_at", "updated_at"],
  ResetPassword: ["id"]
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
  AggregateUser: ["_count", "_min", "_max"],
  UserGroupBy: ["id", "first_name", "last_name", "email", "password", "is_disabled", "avatar", "role", "created_at", "updated_at", "_count", "_min", "_max"],
  AggregatePost: ["_count", "_min", "_max"],
  PostGroupBy: ["id", "slug", "title", "cover_picture", "content", "isDraft", "created_at", "updated_at", "userId", "categoryId", "_count", "_min", "_max"],
  AggregateTag: ["_count", "_min", "_max"],
  TagGroupBy: ["id", "name", "created_at", "updated_at", "_count", "_min", "_max"],
  AggregateCategory: ["_count", "_min", "_max"],
  CategoryGroupBy: ["id", "name", "created_at", "updated_at", "_count", "_min", "_max"],
  AggregateResetPassword: ["_count", "_min", "_max"],
  ResetPasswordGroupBy: ["id", "user_id", "token", "created_at", "updated_at", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCount: ["ResetPassword", "Post"],
  UserCountAggregate: ["id", "first_name", "last_name", "email", "password", "is_disabled", "avatar", "role", "created_at", "updated_at", "_all"],
  UserMinAggregate: ["id", "first_name", "last_name", "email", "password", "is_disabled", "avatar", "created_at", "updated_at"],
  UserMaxAggregate: ["id", "first_name", "last_name", "email", "password", "is_disabled", "avatar", "created_at", "updated_at"],
  PostCount: ["Tags"],
  PostCountAggregate: ["id", "slug", "title", "cover_picture", "content", "isDraft", "created_at", "updated_at", "userId", "categoryId", "_all"],
  PostMinAggregate: ["id", "slug", "title", "cover_picture", "content", "isDraft", "created_at", "updated_at", "userId", "categoryId"],
  PostMaxAggregate: ["id", "slug", "title", "cover_picture", "content", "isDraft", "created_at", "updated_at", "userId", "categoryId"],
  TagCount: ["Post"],
  TagCountAggregate: ["id", "name", "created_at", "updated_at", "_all"],
  TagMinAggregate: ["id", "name", "created_at", "updated_at"],
  TagMaxAggregate: ["id", "name", "created_at", "updated_at"],
  CategoryCount: ["Post"],
  CategoryCountAggregate: ["id", "name", "created_at", "updated_at", "_all"],
  CategoryMinAggregate: ["id", "name", "created_at", "updated_at"],
  CategoryMaxAggregate: ["id", "name", "created_at", "updated_at"],
  ResetPasswordCountAggregate: ["id", "user_id", "token", "created_at", "updated_at", "_all"],
  ResetPasswordMinAggregate: ["id", "user_id", "token", "created_at", "updated_at"],
  ResetPasswordMaxAggregate: ["id", "user_id", "token", "created_at", "updated_at"]
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
  UserWhereInput: ["AND", "OR", "NOT", "id", "first_name", "last_name", "email", "password", "is_disabled", "avatar", "role", "created_at", "updated_at", "ResetPassword", "Post"],
  UserOrderByWithRelationInput: ["id", "first_name", "last_name", "email", "password", "is_disabled", "avatar", "role", "created_at", "updated_at", "ResetPassword", "Post"],
  UserWhereUniqueInput: ["id", "email"],
  UserOrderByWithAggregationInput: ["id", "first_name", "last_name", "email", "password", "is_disabled", "avatar", "role", "created_at", "updated_at", "_count", "_max", "_min"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "first_name", "last_name", "email", "password", "is_disabled", "avatar", "role", "created_at", "updated_at"],
  PostWhereInput: ["AND", "OR", "NOT", "id", "slug", "title", "cover_picture", "content", "isDraft", "author", "created_at", "updated_at", "userId", "Category", "categoryId", "Tags"],
  PostOrderByWithRelationInput: ["id", "slug", "title", "cover_picture", "content", "isDraft", "author", "created_at", "updated_at", "userId", "Category", "categoryId", "Tags"],
  PostWhereUniqueInput: ["id", "slug"],
  PostOrderByWithAggregationInput: ["id", "slug", "title", "cover_picture", "content", "isDraft", "created_at", "updated_at", "userId", "categoryId", "_count", "_max", "_min"],
  PostScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "slug", "title", "cover_picture", "content", "isDraft", "created_at", "updated_at", "userId", "categoryId"],
  TagWhereInput: ["AND", "OR", "NOT", "id", "name", "created_at", "updated_at", "Post"],
  TagOrderByWithRelationInput: ["id", "name", "created_at", "updated_at", "Post"],
  TagWhereUniqueInput: ["id", "name"],
  TagOrderByWithAggregationInput: ["id", "name", "created_at", "updated_at", "_count", "_max", "_min"],
  TagScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "created_at", "updated_at"],
  CategoryWhereInput: ["AND", "OR", "NOT", "id", "name", "created_at", "updated_at", "Post"],
  CategoryOrderByWithRelationInput: ["id", "name", "created_at", "updated_at", "Post"],
  CategoryWhereUniqueInput: ["id"],
  CategoryOrderByWithAggregationInput: ["id", "name", "created_at", "updated_at", "_count", "_max", "_min"],
  CategoryScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "created_at", "updated_at"],
  ResetPasswordWhereInput: ["AND", "OR", "NOT", "id", "user", "user_id", "token", "created_at", "updated_at"],
  ResetPasswordOrderByWithRelationInput: ["id", "user", "user_id", "token", "created_at", "updated_at"],
  ResetPasswordWhereUniqueInput: ["id", "token"],
  ResetPasswordOrderByWithAggregationInput: ["id", "user_id", "token", "created_at", "updated_at", "_count", "_max", "_min"],
  ResetPasswordScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "user_id", "token", "created_at", "updated_at"],
  UserCreateInput: ["id", "first_name", "last_name", "email", "password", "is_disabled", "avatar", "role", "created_at", "updated_at", "ResetPassword", "Post"],
  UserUpdateInput: ["id", "first_name", "last_name", "email", "password", "is_disabled", "avatar", "role", "created_at", "updated_at", "ResetPassword", "Post"],
  UserCreateManyInput: ["id", "first_name", "last_name", "email", "password", "is_disabled", "avatar", "role", "created_at", "updated_at"],
  UserUpdateManyMutationInput: ["id", "first_name", "last_name", "email", "password", "is_disabled", "avatar", "role", "created_at", "updated_at"],
  PostCreateInput: ["id", "slug", "title", "cover_picture", "content", "isDraft", "author", "created_at", "updated_at", "Category", "Tags"],
  PostUpdateInput: ["id", "slug", "title", "cover_picture", "content", "isDraft", "author", "created_at", "updated_at", "Category", "Tags"],
  PostCreateManyInput: ["id", "slug", "title", "cover_picture", "content", "isDraft", "created_at", "updated_at", "userId", "categoryId"],
  PostUpdateManyMutationInput: ["id", "slug", "title", "cover_picture", "content", "isDraft", "created_at", "updated_at"],
  TagCreateInput: ["id", "name", "created_at", "updated_at", "Post"],
  TagUpdateInput: ["id", "name", "created_at", "updated_at", "Post"],
  TagCreateManyInput: ["id", "name", "created_at", "updated_at"],
  TagUpdateManyMutationInput: ["id", "name", "created_at", "updated_at"],
  CategoryCreateInput: ["id", "name", "created_at", "updated_at", "Post"],
  CategoryUpdateInput: ["id", "name", "created_at", "updated_at", "Post"],
  CategoryCreateManyInput: ["id", "name", "created_at", "updated_at"],
  CategoryUpdateManyMutationInput: ["id", "name", "created_at", "updated_at"],
  ResetPasswordCreateInput: ["id", "user", "token", "created_at", "updated_at"],
  ResetPasswordUpdateInput: ["id", "user", "token", "created_at", "updated_at"],
  ResetPasswordCreateManyInput: ["id", "user_id", "token", "created_at", "updated_at"],
  ResetPasswordUpdateManyMutationInput: ["id", "token", "created_at", "updated_at"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  BoolFilter: ["equals", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  EnumRoleNullableListFilter: ["equals", "has", "hasEvery", "hasSome", "isEmpty"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  ResetPasswordListRelationFilter: ["every", "some", "none"],
  PostListRelationFilter: ["every", "some", "none"],
  ResetPasswordOrderByRelationAggregateInput: ["_count"],
  PostOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["id", "first_name", "last_name", "email", "password", "is_disabled", "avatar", "role", "created_at", "updated_at"],
  UserMaxOrderByAggregateInput: ["id", "first_name", "last_name", "email", "password", "is_disabled", "avatar", "created_at", "updated_at"],
  UserMinOrderByAggregateInput: ["id", "first_name", "last_name", "email", "password", "is_disabled", "avatar", "created_at", "updated_at"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  UserRelationFilter: ["is", "isNot"],
  CategoryRelationFilter: ["is", "isNot"],
  TagListRelationFilter: ["every", "some", "none"],
  TagOrderByRelationAggregateInput: ["_count"],
  PostCountOrderByAggregateInput: ["id", "slug", "title", "cover_picture", "content", "isDraft", "created_at", "updated_at", "userId", "categoryId"],
  PostMaxOrderByAggregateInput: ["id", "slug", "title", "cover_picture", "content", "isDraft", "created_at", "updated_at", "userId", "categoryId"],
  PostMinOrderByAggregateInput: ["id", "slug", "title", "cover_picture", "content", "isDraft", "created_at", "updated_at", "userId", "categoryId"],
  TagCountOrderByAggregateInput: ["id", "name", "created_at", "updated_at"],
  TagMaxOrderByAggregateInput: ["id", "name", "created_at", "updated_at"],
  TagMinOrderByAggregateInput: ["id", "name", "created_at", "updated_at"],
  CategoryCountOrderByAggregateInput: ["id", "name", "created_at", "updated_at"],
  CategoryMaxOrderByAggregateInput: ["id", "name", "created_at", "updated_at"],
  CategoryMinOrderByAggregateInput: ["id", "name", "created_at", "updated_at"],
  ResetPasswordCountOrderByAggregateInput: ["id", "user_id", "token", "created_at", "updated_at"],
  ResetPasswordMaxOrderByAggregateInput: ["id", "user_id", "token", "created_at", "updated_at"],
  ResetPasswordMinOrderByAggregateInput: ["id", "user_id", "token", "created_at", "updated_at"],
  UserCreateroleInput: ["set"],
  ResetPasswordCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  PostCreateNestedManyWithoutAuthorInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  BoolFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  UserUpdateroleInput: ["set", "push"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  ResetPasswordUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  PostUpdateManyWithoutAuthorInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutPostInput: ["create", "connectOrCreate", "connect"],
  CategoryCreateNestedOneWithoutPostInput: ["create", "connectOrCreate", "connect"],
  TagCreateNestedManyWithoutPostInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutPostInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  CategoryUpdateOneWithoutPostInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  TagUpdateManyWithoutPostInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  PostCreateNestedManyWithoutTagsInput: ["create", "connectOrCreate", "connect"],
  PostUpdateManyWithoutTagsInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  PostCreateNestedManyWithoutCategoryInput: ["create", "connectOrCreate", "createMany", "connect"],
  PostUpdateManyWithoutCategoryInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutResetPasswordInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutResetPasswordInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedBoolFilter: ["equals", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  ResetPasswordCreateWithoutUserInput: ["id", "token", "created_at", "updated_at"],
  ResetPasswordCreateOrConnectWithoutUserInput: ["where", "create"],
  ResetPasswordCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  PostCreateWithoutAuthorInput: ["id", "slug", "title", "cover_picture", "content", "isDraft", "created_at", "updated_at", "Category", "Tags"],
  PostCreateOrConnectWithoutAuthorInput: ["where", "create"],
  PostCreateManyAuthorInputEnvelope: ["data", "skipDuplicates"],
  ResetPasswordUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  ResetPasswordUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  ResetPasswordUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  ResetPasswordScalarWhereInput: ["AND", "OR", "NOT", "id", "user_id", "token", "created_at", "updated_at"],
  PostUpsertWithWhereUniqueWithoutAuthorInput: ["where", "update", "create"],
  PostUpdateWithWhereUniqueWithoutAuthorInput: ["where", "data"],
  PostUpdateManyWithWhereWithoutAuthorInput: ["where", "data"],
  PostScalarWhereInput: ["AND", "OR", "NOT", "id", "slug", "title", "cover_picture", "content", "isDraft", "created_at", "updated_at", "userId", "categoryId"],
  UserCreateWithoutPostInput: ["id", "first_name", "last_name", "email", "password", "is_disabled", "avatar", "role", "created_at", "updated_at", "ResetPassword"],
  UserCreateOrConnectWithoutPostInput: ["where", "create"],
  CategoryCreateWithoutPostInput: ["id", "name", "created_at", "updated_at"],
  CategoryCreateOrConnectWithoutPostInput: ["where", "create"],
  TagCreateWithoutPostInput: ["id", "name", "created_at", "updated_at"],
  TagCreateOrConnectWithoutPostInput: ["where", "create"],
  UserUpsertWithoutPostInput: ["update", "create"],
  UserUpdateWithoutPostInput: ["id", "first_name", "last_name", "email", "password", "is_disabled", "avatar", "role", "created_at", "updated_at", "ResetPassword"],
  CategoryUpsertWithoutPostInput: ["update", "create"],
  CategoryUpdateWithoutPostInput: ["id", "name", "created_at", "updated_at"],
  TagUpsertWithWhereUniqueWithoutPostInput: ["where", "update", "create"],
  TagUpdateWithWhereUniqueWithoutPostInput: ["where", "data"],
  TagUpdateManyWithWhereWithoutPostInput: ["where", "data"],
  TagScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "created_at", "updated_at"],
  PostCreateWithoutTagsInput: ["id", "slug", "title", "cover_picture", "content", "isDraft", "author", "created_at", "updated_at", "Category"],
  PostCreateOrConnectWithoutTagsInput: ["where", "create"],
  PostUpsertWithWhereUniqueWithoutTagsInput: ["where", "update", "create"],
  PostUpdateWithWhereUniqueWithoutTagsInput: ["where", "data"],
  PostUpdateManyWithWhereWithoutTagsInput: ["where", "data"],
  PostCreateWithoutCategoryInput: ["id", "slug", "title", "cover_picture", "content", "isDraft", "author", "created_at", "updated_at", "Tags"],
  PostCreateOrConnectWithoutCategoryInput: ["where", "create"],
  PostCreateManyCategoryInputEnvelope: ["data", "skipDuplicates"],
  PostUpsertWithWhereUniqueWithoutCategoryInput: ["where", "update", "create"],
  PostUpdateWithWhereUniqueWithoutCategoryInput: ["where", "data"],
  PostUpdateManyWithWhereWithoutCategoryInput: ["where", "data"],
  UserCreateWithoutResetPasswordInput: ["id", "first_name", "last_name", "email", "password", "is_disabled", "avatar", "role", "created_at", "updated_at", "Post"],
  UserCreateOrConnectWithoutResetPasswordInput: ["where", "create"],
  UserUpsertWithoutResetPasswordInput: ["update", "create"],
  UserUpdateWithoutResetPasswordInput: ["id", "first_name", "last_name", "email", "password", "is_disabled", "avatar", "role", "created_at", "updated_at", "Post"],
  ResetPasswordCreateManyUserInput: ["id", "token", "created_at", "updated_at"],
  PostCreateManyAuthorInput: ["id", "slug", "title", "cover_picture", "content", "isDraft", "created_at", "updated_at", "categoryId"],
  ResetPasswordUpdateWithoutUserInput: ["id", "token", "created_at", "updated_at"],
  PostUpdateWithoutAuthorInput: ["id", "slug", "title", "cover_picture", "content", "isDraft", "created_at", "updated_at", "Category", "Tags"],
  TagUpdateWithoutPostInput: ["id", "name", "created_at", "updated_at"],
  PostUpdateWithoutTagsInput: ["id", "slug", "title", "cover_picture", "content", "isDraft", "author", "created_at", "updated_at", "Category"],
  PostCreateManyCategoryInput: ["id", "slug", "title", "cover_picture", "content", "isDraft", "created_at", "updated_at", "userId"],
  PostUpdateWithoutCategoryInput: ["id", "slug", "title", "cover_picture", "content", "isDraft", "author", "created_at", "updated_at", "Tags"]
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

